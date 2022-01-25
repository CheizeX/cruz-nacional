import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChatsViewSelectedToConfirm } from './ChatsViewSelectedToConfirm';
import { UploadableFile } from '../UploadFiles/UploadFiles.interface';

export default {
  title: 'Ailalia/Templates/Chats/Components',
  argTypes: {},
} as Meta;

const Template: Story<UploadableFile> = ({ id, errors, file }) => (
  <ChatsViewSelectedToConfirm
    findDialogueInChat="asd"
    setFindDialogueInChat={() => null}
    showPredefinedTexts={false}
    emojisDisplayed={false}
    setEmojisDisplayed={() => {}}
    setShowPredefinedTexts={() => {}}
    setUserSelected={() => null}
    setActiveByDefaultTab={() => null}
    setChatInputDialogue={() => null}
    setLiveChatModal={() => null}
    setLiveChatPage={() => null}
    setDropZoneDisplayed={() => null}
    file={file}
    errors={errors}
    id={id}
  />
);

export const Default = Template.bind({});
