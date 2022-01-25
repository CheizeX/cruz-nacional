import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Radio } from './RadioButton';

export default {
  title: 'Ailalia/Atoms/RadioButton',
  component: Radio,
  argTypes: {
    disabled: { control: 'boolean' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
} as Meta;

const Template: Story = ({ disabled }) => {
  const [radioChecked, setRadioChecked] = useState('');
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.target;
    setRadioChecked(targetValue);
  };

  return (
    <>
      <Radio
        disabled={disabled ?? false}
        value="Supervisor"
        onChange={(event) => handleRadioChange(event)}
        checked={radioChecked}
        name="radio"
        id="radio"
      />
      <Radio
        disabled={disabled ?? false}
        value="Agente"
        onChange={(event) => handleRadioChange(event)}
        checked={radioChecked}
        name="radio"
        id="radio"
      />
    </>
  );
};

export const Default = Template.bind({});
