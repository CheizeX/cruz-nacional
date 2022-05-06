import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { PlanName } from '../../components/shared/templates/SubscriptionPlans/SubscriptionSection/SubscriptionSection.interface';
import { TrialForm } from '../../components/shared/templates/TrialPeriod/shared/TrialForm/TrialForm';

const TrialStartPage: NextPage = () => {
  const router = useRouter();
  const plan = router.query.plan as PlanName;
  return (
    <>
      <TrialForm plan={plan} />
    </>
  );
};

export default TrialStartPage;
