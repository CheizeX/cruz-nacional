import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LiveChatsPage } from './LiveChatsPage';
import { UploadableFile } from '../../templates/Chats/Components/UploadFiles/UploadFiles.interface';

export default {
  title: 'Ailalia/Pages/LiveChatsPage',
  argTypes: {},
} as Meta;

const Template: Story<UploadableFile> = ({ id, errors, file }) => (
  <LiveChatsPage
    setMyAccount={() => {}}
    checkedTags={[1, 2]}
    setCheckedTags={() => {}}
    file={file}
    errors={errors}
    id={id as number}
    channel={[1, 2]}
  />
);

export const Default = Template.bind({});
