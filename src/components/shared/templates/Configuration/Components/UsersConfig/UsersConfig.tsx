import { FC } from 'react';
import { MaxConversations } from './MaxConversations/MaxConversations';
import { StyledUsersConfigSection } from './UsersConfig.styled';

export const UsersConfig: FC = () => {
  return (
    <StyledUsersConfigSection>
      <MaxConversations />
    </StyledUsersConfigSection>
  );
};
