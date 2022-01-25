/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SVGIcon, SVGIconProps } from './SVGIcon';

export default {
  title: 'Ailalia/Atoms/SVG Icon',
  component: SVGIcon,
  argTypes: {
    iconFile: { control: 'text' },
    color: { control: 'text' },
    heightInREM: { control: 'number' },
  },
} as Meta;

const Template: Story<SVGIconProps & { heightInREM?: string }> = ({
  iconFile = '/icons/button-loading.svg',
  color,
  heightInREM = 1,
}) => {
  const args = { color } as unknown;

  return (
    <div style={{ height: `${heightInREM}rem` }}>
      <SVGIcon {...args} iconFile={iconFile ?? 'icons/emojis.svg'} />
    </div>
  );
};

export const Default = Template.bind({});
