/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BackOffice } from './NavBarBackOffice';
import { IBackOfficeProps } from './NavBarBackOffice.interface';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';

export default {
  title: 'Ailalia/Organisms/BackOffice',
  component: BackOffice,
  argTypes: {},
} as Meta;

const Template: Story<IBackOfficeProps> = ({ text }) => (
  <BackOffice
    setMyAccount={() => {}}
    text={text || 'Chat en Proceso'}
    onClick={() => {}}
    messageIcon={() => <SVGIcon iconFile="/icons/message_icons.svg" />}
    bellIcon={() => <SVGIcon iconFile="/icons/bell.svg" />}
  />
);

export const Default = Template.bind({});
