import { FC } from 'react';
import { StyledUsersConfigSection } from './UsersConfig.styled';
import { MaxConversations } from './MaxConversations/MaxConversations';
import { ChatsAlertsByTime } from './ChatsRestrictions/ChatsAlertsByTime/ChatsAlertsByTime';
import { CloseChatsByInactivity } from './ChatsRestrictions/ChatsAlertsByTime copy/CloseChatsByInactivity';
import { PredefinedAgentMessages } from './PredefinedAgentMessages/PredefinedAgentMessages';

export const UsersConfig: FC = () => {
  return (
    <StyledUsersConfigSection>
      <MaxConversations />
      <CloseChatsByInactivity />
      <ChatsAlertsByTime />
      <PredefinedAgentMessages />
    </StyledUsersConfigSection>
  );
};
