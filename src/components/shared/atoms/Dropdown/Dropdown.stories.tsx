/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { Dropdown } from './Dropdown';
import { Text } from '../Text/Text';

export default {
  title: 'Ailalia/Atoms/Dropdown',
  component: Dropdown,
} as Meta;

const TriggerElement = styled.div`
  border-radius: 24px;
  background-color: #aaa;
  padding: 4px 12px;
  width: max-content;
  cursor: pointer;
  margin: 30px 0 0 200px;
`;

const DropdownContainer = styled.div`
  border: 1px solid black;
  border-radius: 16px;
  background-color: #fff;
  padding: 12px 8px;
`;

const Template: Story = (args) => {
  const [second, setSecond] = useState(false);

  return (
    <>
      <Dropdown
        {...args}
        triggerElement={() => (
          <TriggerElement>
            <Text color="black">Trigger</Text>
          </TriggerElement>
        )}>
        <DropdownContainer>
          {!second && (
            <>
              <div>
                <Text color="black">Primera opcion</Text>
              </div>
              <div>
                <Text color="black" onClick={() => setSecond(true)}>
                  Segunda opcion
                </Text>
              </div>
              <div>
                <Text color="black">Tercera opcion</Text>
              </div>
            </>
          )}
          {second && (
            <div style={{ height: '360px', width: '460px' }}>
              <button type="button" onClick={() => setSecond(false)}>
                x
              </button>
            </div>
          )}
        </DropdownContainer>
      </Dropdown>
    </>
  );
};

export const Default = Template.bind({});
