import { FC, useState } from 'react';
import { ChatsAlertsByTime } from './AgentChatsConfig/ChatsRestrictions/ChatsAlertsByTime/ChatsAlertsByTime';
import { CloseChatsByInactivity } from './AgentChatsConfig/ChatsRestrictions/CloseChatsByInactivity/CloseChatsByInactivity';
import {
  StyledChatsConfigSection,
  HeaderChatConfig,
} from './ChatsConfig.styled';
import { Tabs } from '../../../../organisms/Tabs/Tabs';
import { MaxConversations } from './AgentChatsConfig/MaxConversations/MaxConversations';
import { PredefinedAgentMessages } from './AgentChatsConfig/PredefinedAgentMessages/PredefinedAgentMessages';
import { PredefinedSounds } from './AgentChatsConfig/PredefinedSounds/PredefinedSounds';
// import { PredefinedInteractionsMesssages } from './AgentChatsConfig/PredefinedInteractionsMessages/PredefinedInteractionsMessages';
import { IListSounds } from './AgentChatsConfig/PredefinedSounds/PredefinedSounds.interface';
// import { TimeOutClientWithoutAsignation } from './ClientChatsConfig/TimeOutClientWithoutAsignation/TimeOutClientWithoutAsignation';

export const ChatsConfig: FC = () => {
  const [soundList] = useState<IListSounds>({
    notification_sound_1: new Audio(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/notificationSounds?sound=1`,
    ),
    notification_sound_2: new Audio(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/notificationSounds?sound=2`,
    ),
    notification_sound_3: new Audio(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/notificationSounds?sound=3`,
    ),
    notification_sound_4: new Audio(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/notificationSounds?sound=4`,
    ),
    notification_sound_5: new Audio(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/notificationSounds?sound=5`,
    ),
    notification_sound_6: new Audio(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/notificationSounds?sound=6`,
    ),
    notification_sound_7: new Audio(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/notificationSounds?sound=7`,
    ),
    notification_sound_8: new Audio(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/notificationSounds?sound=8`,
    ),
    notification_sound_9: new Audio(
      `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/notificationSounds?sound=9`,
    ),
  });

  return (
    <HeaderChatConfig>
      <Tabs activeByDefault={0}>
        <div title="Agente">
          <StyledChatsConfigSection>
            <MaxConversations />
            <CloseChatsByInactivity />
            <ChatsAlertsByTime />
            <PredefinedAgentMessages />
            <PredefinedSounds soundList={soundList} />
            {/* <PredefinedInteractionsMesssages /> */}
          </StyledChatsConfigSection>
        </div>
        {/* <div title="Cliente">
          <TimeOutClientWithoutAsignation />
        </div> */}
      </Tabs>
    </HeaderChatConfig>
  );
};
