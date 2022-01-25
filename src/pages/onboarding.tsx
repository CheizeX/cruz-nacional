import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { Loader } from '../components/shared/atoms/Loader/Loader';
// import { CreateAccount } from '../components/shared/pages/Onboarding/CreateAccount/CreateAccount';
// import { OnboardingAcceptedInvitation } from '../components/shared/pages/Onboarding/OnboardingAcceptedInvitation.tsx/OnboardingAcceptedInvitation';
// import { OnboardingErrorInvitation } from '../components/shared/pages/Onboarding/OnboardingErrorInvitation/OnboardingErrorInvitation';
// import { OnboardingExpiredInvitation } from '../components/shared/pages/Onboarding/OnboardingExpiredInvitation/OnboardingExpiredInvitation';
// import { OnboardingStep } from '../config/onboarding';
// import { useOnboarding } from '../hooks/onboarding';

const FullPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const OnboardingPage: NextPage = () => {
  // const { onboardingStep, handleOnboarding } = useOnboarding();

  // if (onboardingStep === OnboardingStep.CORRECT)
  //   return <CreateAccount onSubmit={handleOnboarding} />;

  // if (onboardingStep === OnboardingStep.EXPIRED)
  //   return <OnboardingExpiredInvitation />;

  // if (onboardingStep === OnboardingStep.INVALID)
  //   return <OnboardingErrorInvitation />;

  // if (onboardingStep === OnboardingStep.USED)
  //   return <OnboardingAcceptedInvitation />;

  return (
    <FullPageContainer>
      <Loader />
    </FullPageContainer>
  );
};

export default OnboardingPage;
