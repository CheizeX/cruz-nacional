import { storiesOf } from '@storybook/react';
import { ChangePasswordRequest } from './ChangePaswordRequest';

storiesOf('Ailalia/Pages/Login/ChangePaswordRequest', module).add(
  'Default',
  () => {
    return <ChangePasswordRequest />;
  },
);
