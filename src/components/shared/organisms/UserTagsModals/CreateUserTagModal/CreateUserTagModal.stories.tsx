import React from 'react';
import { storiesOf } from '@storybook/react';
import { CreateUserTagModal } from './CreateUserTagModal';

storiesOf('Ailalia/Organisms/UserTagsModals/CreateTag', module).add(
  'CreateTag',
  () => {
    return (
      <CreateUserTagModal
        text=""
        setTagModal={() => null}
        setOpenNewTag={() => null}
      />
    );
  },
);
