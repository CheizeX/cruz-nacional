/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LinkToMolecule, LinkToMoleculeProps } from './LinkTo';

export default {
  title: 'Ailalia/Molecules/LinkTo Molecule',
  component: LinkToMolecule,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'text' },
    colorHover: { control: 'text' },
    href: { control: 'text' },
  },
} as Meta;

const Template: Story<LinkToMoleculeProps> = ({ color, text }) => (
  <LinkToMolecule color={color} text={text || 'Insertar Texto'} />
);

export const Default = Template.bind({});
