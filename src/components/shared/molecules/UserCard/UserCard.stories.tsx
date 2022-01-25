import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../../atoms/Text/Text';
import { UserCardMolecule } from './UserCard';
import { StyledUsernameEmail } from './UserCard.styled';

storiesOf('Ailalia/Molecules/UserCard', module)
  .add('Default', () => {
    return (
      <UserCardMolecule
        userID=""
        byNameUser=""
        setSectionModal={() => null}
        infoUserEmail=""
        infoUserRole=""
        setOpenNewSection={() => null}>
        <StyledUsernameEmail>
          <Text>Ezequiel Rivas</Text>
          <Text>ezequiel@elipse.ai</Text>
        </StyledUsernameEmail>
      </UserCardMolecule>
    );
  })
  .add('Admin', () => {
    return (
      <UserCardMolecule
        userID=""
        byNameUser=""
        setSectionModal={() => null}
        setOpenNewSection={() => null}
        infoUserEmail=""
        infoUserRole=""
        isAdmin>
        <StyledUsernameEmail>
          <Text>Ezequiel Rivas</Text>
          <Text>ezequiel@elipse.ai</Text>
        </StyledUsernameEmail>
      </UserCardMolecule>
    );
  });
