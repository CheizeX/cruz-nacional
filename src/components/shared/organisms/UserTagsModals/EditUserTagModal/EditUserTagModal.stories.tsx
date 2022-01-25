import React from 'react';
import { storiesOf } from '@storybook/react';
import { EditUserTagModal } from './EditUserTagModal';

storiesOf('Ailalia/Organisms/UserTagsModals/EditTag', module).add(
  'EditTag',
  () => {
    return (
      <EditUserTagModal setTagModal={() => null} setOpenNewTag={() => null} />
    );
  },
);
