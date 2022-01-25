import React from 'react';
import { storiesOf } from '@storybook/react';
import { ModifyUserTagModal } from './ModifyUserTagModal';

storiesOf('Ailalia/Organisms/UserTagsModals/ModifyTag', module).add(
  'ModifyTag',
  () => {
    return (
      <ModifyUserTagModal
        setContainerTags={() => {}}
        containerTags={[]}
        setTags={() => null}
        setTagModal={() => null}
        setOpenNewTag={() => null}
      />
    );
  },
);
