import { storiesOf } from '@storybook/react';
import { EmailVerification } from './EmailVerification';

storiesOf('Ailalia/Pages/Login/EmailVerification', module).add(
  'Default',
  () => {
    return <EmailVerification />;
  },
);
