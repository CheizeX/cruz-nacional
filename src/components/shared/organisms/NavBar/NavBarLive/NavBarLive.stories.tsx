import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NavBarLive } from './NavBarLive';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';

export default {
  title: 'Ailalia/Organisms/Live',
  component: NavBarLive,
  argTypes: {},
} as Meta;

const Template: Story = () => (
  <NavBarLive
    setMyAccount={() => {}}
    onClick={() => {}}
    elipsis={() => <SVGIcon iconFile="/icons/elipse_roja_notificacion.svg" />}
    // messageIcon={() => <SVGIcon iconFile="/icons/message_icons.svg" />}
    bellIcon={() => <SVGIcon iconFile="/icons/bell.svg" />}
  />
);

export const Default = Template.bind({});
