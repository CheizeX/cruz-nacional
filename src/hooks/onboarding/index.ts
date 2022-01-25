import { useRouter } from 'next/dist/client/router';
import { useCallback, useEffect, useRef } from 'react';
import { useMutation } from 'react-query';
import {
  doOnboardingRequest,
  validateOnboardingTokenRequest,
} from '../../api/accounts';
import { appLogger } from '../../helpers/logger';

export const useOnboarding = () => {
  const tokenRef = useRef<string | null>(null);

  const { asPath, push } = useRouter();

  const validateOnboardingToken = useMutation(
    (token: string) => validateOnboardingTokenRequest(token),
    {
      // onSuccess: () => setOnboardingStep(OnboardingStep.CORRECT),
      // onError: (error) => {
      //   appLogger.error(error);
      //   setOnboardingStep(OnboardingStep.INVALID);
      // },
    },
  );

  const doOnboarding = useMutation(
    (password: string) => doOnboardingRequest(password),
    {
      onSuccess: () => appLogger.info('success'),
      onError: () => appLogger.info('error'),
      onSettled: () => push('/'),
    },
  );

  const handleToken = useCallback((token: string | null) => {
    if (token) validateOnboardingToken.mutate(token);
  }, []);

  useEffect(() => {
    const url = new URL(`https://ailalia.com${asPath}`);

    tokenRef.current = url.searchParams.get('t');
    handleToken(tokenRef.current);
  }, []);

  return {
    handleOnboarding: doOnboarding.mutate,
  };
};
