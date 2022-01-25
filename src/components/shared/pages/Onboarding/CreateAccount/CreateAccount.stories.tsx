import { storiesOf } from '@storybook/react';
import { CreateAccount } from './CreateAccount';

storiesOf('Ailalia/Pages/Onboarding/CreateAccount', module).add(
  'Default',
  () => {
    return <CreateAccount />;
  },
);
