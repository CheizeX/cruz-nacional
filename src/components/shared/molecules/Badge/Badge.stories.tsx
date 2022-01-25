/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { BadgeMolecule, BadgeMoleculeProps } from './Badge';
import { Text } from '../../atoms/Text/Text';

export default {
  title: 'Ailalia/Molecules/Badge',
  component: BadgeMolecule,
  argTypes: {
    bgColor: { control: 'text' },
    innerText: { control: 'text' },
  },
} as Meta;

const Template: Story<BadgeMoleculeProps & { innerText?: string }> = ({
  bgColor,
  innerText,
}) => (
  <BadgeMolecule
    bgColor={bgColor as string}
    rightIcon={() => <SVGIcon iconFile="/icons/times.svg" />}
    leftIcon={() => <SVGIcon iconFile="/icons/etiqueta.svg" />}>
    <Text>{innerText && innerText !== '' ? innerText : 'example'}</Text>
  </BadgeMolecule>
);

export const Default = Template.bind({});
