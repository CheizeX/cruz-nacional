import { storiesOf } from '@storybook/react';
import { MyAccountSidebarOrganism } from './MyAccountSidebar';

storiesOf('Ailalia/Organisms/MyAccountSidebar', module).add('Default', () => {
  return <MyAccountSidebarOrganism setMyAccount={() => {}} />;
});
