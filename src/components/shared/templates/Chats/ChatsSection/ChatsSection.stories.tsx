import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChatsSection } from './ChatsSection';
import { UploadableFile } from '../Components/UploadFiles/UploadFiles.interface';

export default {
  title: 'Ailalia/Templates/Chats/ChatsSection',
  argTypes: {},
} as Meta;

const Template: Story<UploadableFile> = ({ id, errors, file }) => (
  <ChatsSection
    checkedTags={[1, 2]}
    setCheckedTags={() => {}}
    channel={[1, 2]}
    emojisDisplayed={false}
    setEmojisDisplayed={() => {}}
    file={file}
    errors={errors}
    id={id}
    setChatInputDialogue={() => {}}
  />
);

export const Default = Template.bind({});
