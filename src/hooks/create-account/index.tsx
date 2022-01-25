import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { readUser } from '../../api/users';
import { CreateAccountStep } from '../../config/create-account';
import { appLogger } from '../../helpers/logger';
import { requestSignUp } from '../../api/accounts';
import { Accounts } from '../../models/users/user';
import { useAppDispatch } from '../../redux/hook/hooks';
import { setOnboardingStatus } from '../../redux/slices/onboarding/onboarding';
import { RootState } from '../../redux';
import { setByUserIdOnboarding } from '../../redux/slices/onboarding/onboarding-create-account';

export type IPropsId = {
  id: string;
};

export const useCreateAccount = () => {
  const { query, push } = useRouter();
  const dispatch = useAppDispatch();
  const { onboardingStep } = useSelector(
    (state: RootState) => state.onboarding.onboardingState,
  );
  const { currentIdUserAccount } = useSelector(
    (state: RootState) => state.onboarding.createAccountState,
  );
  const { id } = query as IPropsId;

  const doSignUp = useMutation(
    (datosSignUp: Accounts) => requestSignUp(datosSignUp),
    {
      onSuccess: () => {
        appLogger.info('Exitoso');
      },
      onError: () => {
        appLogger.info('Faile');
      },
      onSettled: () => push('/'),
    },
  );

  const doCreateAccount = useMutation(() => readUser(id), {
    onSuccess: (response) => {
      if (!response.email) {
        dispatch(setOnboardingStatus(CreateAccountStep.EXPIRED));
      } else if (response.invitationAccepted !== true && response.email) {
        dispatch(setOnboardingStatus(CreateAccountStep.CORRECT));
        dispatch(setByUserIdOnboarding(response.email));
      } else {
        dispatch(setOnboardingStatus(CreateAccountStep.USED));
      }
    },
    onError: (error) => {
      appLogger.info(error);
      dispatch(setOnboardingStatus(CreateAccountStep.ERROR));
    },
  });

  return {
    currentIdUserAccount,
    onboardingStep,
    handleCreateAccount: doCreateAccount.mutate,
    handleSignUp: doSignUp.mutate,
  };
};
