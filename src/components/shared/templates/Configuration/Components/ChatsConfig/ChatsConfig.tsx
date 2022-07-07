import { FC, useState } from 'react';
import { MaxConversations } from './MaxConversations/MaxConversations';
import { ChatsAlertsByTime } from './ChatsRestrictions/ChatsAlertsByTime/ChatsAlertsByTime';
import { CloseChatsByInactivity } from './ChatsRestrictions/ChatsAlertsByTime copy/CloseChatsByInactivity';
import { PredefinedAgentMessages } from './PredefinedAgentMessages/PredefinedAgentMessages';
import { PredefinedSounds } from './PredefinedSounds/PredefinedSounds';
import { IListSounds } from './PredefinedSounds/PredefinedSounds.interface';
import { StyledChatsConfigSection } from './ChatsConfig.styled';

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
    <StyledChatsConfigSection>
      <MaxConversations />
      <CloseChatsByInactivity />
      <ChatsAlertsByTime />
      <PredefinedAgentMessages />
      <PredefinedSounds soundList={soundList} />
    </StyledChatsConfigSection>
  );
};
