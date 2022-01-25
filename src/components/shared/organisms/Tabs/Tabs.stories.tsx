import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Tabs } from './Tabs';

interface ContainerProps {
  largeTabs?: boolean;
}

const myOwnIf = (condition: boolean, then: string, otherwise: string | null) =>
  condition ? then : otherwise;

export const StyledExampleObject = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${({ title }) =>
    myOwnIf(title === 'Estado', 'paleturquoise', null) ||
    myOwnIf(title === 'Agente', 'gold', null) ||
    myOwnIf(title === 'Canal', 'blueviolet', null)};
  border: 10px solid rgb(254, 120, 165);
  border-radius: 50%;
  box-shadow: 0px 5px 10px rgb(0, 0, 0);
  color: #efefef;
  display: flex;
  font-size: 100px;
  font-weight: 900;
  height: 300px;
  justify-content: center;
  text-shadow: 0px 5px 5px black;
  width: 300px;
`;

storiesOf('Ailalia/Molecules/Tabs', module)
  .add('Small Tabs', () => {
    return (
      <Tabs>
        <StyledExampleObject title="Estado">A</StyledExampleObject>
        <StyledExampleObject title="Agente">B</StyledExampleObject>
        <StyledExampleObject title="Canal">C</StyledExampleObject>
      </Tabs>
    );
  })
  .add('Large Tabs', () => {
    return (
      <Tabs largeTabs activeByDefault={0}>
        <StyledExampleObject title="Estado">A</StyledExampleObject>
        <StyledExampleObject title="Agente">B</StyledExampleObject>
      </Tabs>
    );
  });
