import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CreateAccount } from '../../components/shared/pages/Onboarding/CreateAccount/CreateAccount';
import { OnboardingAcceptedInvitation } from '../../components/shared/pages/Onboarding/OnboardingAcceptedInvitation.tsx/OnboardingAcceptedInvitation';
import { OnboardingErrorInvitation } from '../../components/shared/pages/Onboarding/OnboardingErrorInvitation/OnboardingErrorInvitation';
import { OnboardingExpiredInvitation } from '../../components/shared/pages/Onboarding/OnboardingExpiredInvitation/OnboardingExpiredInvitation';
import { CreateAccountStep } from '../../config/create-account';
import { useCreateAccount } from '../../hooks/create-account';

const CreateAccountPage: NextPage = () => {
  const { onboardingStep, handleCreateAccount } = useCreateAccount();
  const router = useRouter();
  useEffect(() => {
    if (router.asPath !== router.route) {
      handleCreateAccount();
    }
  }, [router]);

  if (onboardingStep === CreateAccountStep.CORRECT) return <CreateAccount />;

  if (onboardingStep === CreateAccountStep.EXPIRED)
    return <OnboardingExpiredInvitation />;

  if (onboardingStep === CreateAccountStep.ERROR)
    return <OnboardingErrorInvitation />;

  if (onboardingStep === CreateAccountStep.USED)
    return <OnboardingAcceptedInvitation />;

  return <CreateAccount />;
};

export default CreateAccountPage;
