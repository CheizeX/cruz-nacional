import { storiesOf } from '@storybook/react';
import { ExpiredChangePasswordLink } from './ExpiredChangePaswordLink';

storiesOf('Ailalia/Pages/Login/ExpiredChangePaswordLink', module).add(
  'Default',
  () => {
    return <ExpiredChangePasswordLink />;
  },
);
