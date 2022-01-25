import { storiesOf } from '@storybook/react';
import { adminSection } from '../../../../config/backoffice';
import { SideBarOrganism } from './SideBar';

storiesOf('Ailalia/Organisms/SideBar', module).add('Default', () => {
  return (
    <SideBarOrganism
      setSelectedSection={() => {}}
      backofficeSections={adminSection}
      setCollapseArrow={() => {}}
    />
  );
});
