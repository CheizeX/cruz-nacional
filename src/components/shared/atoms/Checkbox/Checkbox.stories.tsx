import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf, Meta } from '@storybook/react';
import styled, { css } from 'styled-components';
import { Checkbox } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta;

export interface ContainerProps {
  isWhite?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 280px;
  height: 42px;
  background-color: #2ab631;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 10px;
  margin-bottom: 10px;

  ${({ isWhite }) =>
    isWhite &&
    css`
      background-color: white;
    `}
`;

storiesOf('Ailalia/Atoms/Checkbox/Default', module)
  .add('checked', () => {
    const value = true;
    return <Checkbox checked={value} onClick={action('checked')} />;
  })
  .add('unchecked', () => {
    const value = false;
    return <Checkbox checked={value} onClick={action('checked')} />;
  })
  .add('switcher & background', () => {
    const [value, setValue] = useState(false);
    return (
      <Container isWhite>
        <Checkbox checked={value} onClick={() => setValue(!value)} />
      </Container>
    );
  });

storiesOf('Ailalia/Atoms/Checkbox/Transparents', module)
  .add('checked', () => {
    const value = true;

    return (
      <Checkbox isTransparent checked={value} onClick={action('checked')} />
    );
  })
  .add('unchecked', () => {
    const value = false;

    return (
      <Checkbox isTransparent checked={value} onClick={action('checked')} />
    );
  })
  .add('switcher & background ', () => {
    const [value, setValue] = useState(false);

    return (
      <Container>
        <Checkbox
          isTransparent
          checked={value}
          onClick={() => setValue(!value)}
        />
      </Container>
    );
  });
