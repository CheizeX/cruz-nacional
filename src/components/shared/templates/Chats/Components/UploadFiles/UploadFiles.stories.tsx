import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UploadableFile } from './UploadFiles.interface';
import { UploadFiles } from './UploadFiles';

export default {
  title: 'Ailalia/Templates/Chats/Components/UploadFiles',
  argTypes: {},
} as Meta;

const Template: Story<UploadableFile> = ({ id, errors, file }) => (
  <UploadFiles
    setDropZoneDisplayed={() => null}
    setUserSelected={() => null}
    file={file}
    errors={errors}
    id={id}
  />
);

export const Default = Template.bind({});
