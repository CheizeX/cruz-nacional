import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChatsStateCard } from './ChatsStateCard';

const mapedArray = [
  {
    position: 'one',
    number: '5',
    name: 'Por asignar',
    icon: '/icons/user_question.svg',
  },
  {
    position: 'two',
    number: '3',
    name: 'Por contestar',
    icon: '/icons/por-contestar.svg',
  },
  {
    position: 'three',
    number: '3',
    name: 'En conversación',
    icon: '/icons/en-conversacion.svg',
  },
  {
    position: 'four',
    number: '3',
    name: 'Finalizadas',
    icon: '/icons/like.svg',
  },
];

storiesOf('Ailalia/Organisms/Dashboard/Components/ChatsStateCard', module)
  .add('Default', () => {
    return <ChatsStateCard />;
  })
  .add('ChatsStateAllCards', () => {
    return (
      <>
        {mapedArray.map(({ name, number, position, icon }) => (
          <ChatsStateCard
            name={name}
            number={number}
            position={position}
            icon={icon}
          />
        ))}
      </>
    );
  });
