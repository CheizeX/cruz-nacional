import React from 'react';
import { storiesOf } from '@storybook/react';
import { DeleteUserTagModal } from './DeleteUserTagModal';

storiesOf('Ailalia/Organisms/UserTagsModals/DeleteTag', module).add(
  'DeleteTag',
  () => {
    return (
      <DeleteUserTagModal setTagModal={() => null} setOpenNewTag={() => null} />
    );
  },
);
