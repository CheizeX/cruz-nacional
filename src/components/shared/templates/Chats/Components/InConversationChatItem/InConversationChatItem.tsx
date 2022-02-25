import React, { FC, useCallback, useEffect } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Channels, Chat } from '../../../../../../models/chat/chat';
import {
  // StyledLabel,
  StyledClientAndAgentAvatars,
  StyledNameAndDialog,
  // StyledLabelsContainer,
} from '../PendingsChatItem/PendingsChatItem.styles';
import {
  TabProps,
  StyledLabelProps,
  SelectedUserProps,
  SortingProps,
  DropZoneDisplayedProps,
  ChatInputDialogueProps,
  ShowOnlyPaused,
  MessagesViewedOrNot,
  IPropsStringName,
} from '../../ChatsSection/ChatsSection.interface';
import {
  StyledInConversationChatItem,
  StyledInConversationContainer,
  StyledInConversationWrapper,
  StyledNotViewedMessages,
  StyledTimeAndState,
} from './InConversationChatItem.styles';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import {
  setSortedByLastDate,
  setSortedByFirstDate,
} from '../../../../../../redux/slices/live-chat/on-conversation-chats';
// import { Tag } from '../../../../../../models/tags/tag';
import {
  setChatsIdChannel,
  setChatsIdClient,
} from '../../../../../../redux/slices/live-chat/chat-history';
import { baseRestApi } from '../../../../../../api/base';
import { getTimeAgo } from '../../ChatsSection/ChatsSection.shared';

export const InConversationChatItem: FC<
  StyledLabelProps &
    SelectedUserProps &
    SortingProps &
    TabProps &
    DropZoneDisplayedProps &
    ChatInputDialogueProps &
    IPropsStringName &
    ShowOnlyPaused &
    MessagesViewedOrNot
> = ({
  setUserSelected,
  userSelected,
  // setActiveByDefaultTab,
  sortedChats,
  showOnlyPausedChats,
  searchByName,
}) => {
  // const { tagsToFilter, channelsToFilter } = useAppSelector(
  //   (state) => state.optionsToFilterChats,
  // );
  const dispatch = useAppDispatch();

  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );

  const handleResetNoViewedChats = useCallback(async (id: string) => {
    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/chats/resetUnreadMessages/${id}`,
        {},
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSendMessageToUser = useCallback(
    async (clientId: string, channel: string, chatId: string) => {
      setUserSelected(clientId);
      handleResetNoViewedChats(chatId);

      dispatch(setChatsIdChannel(channel));
      dispatch(setChatsIdClient(clientId));
    },
    [dispatch, setUserSelected, handleResetNoViewedChats],
  );

  useEffect(() => {
    if (sortedChats) {
      dispatch(setSortedByLastDate());
    } else {
      dispatch(setSortedByFirstDate());
    }
  }, [dispatch, sortedChats]);

  return (
    <StyledInConversationContainer>
      {chatsOnConversation &&
        chatsOnConversation
          .filter(
            (user) =>
              // (tagsToFilter.length > 0 &&
              //   channelsToFilter.length > 0 &&
              //   channelsToFilter?.includes(user.channel) &&
              //   user.tags.filter((tag: Tag) => tagsToFilter?.includes(tag.name))
              //     .length > 0) ||
              // (tagsToFilter.length === 0 &&
              //   channelsToFilter.length > 0 &&
              //   channelsToFilter?.includes(user.channel)) ||
              // (tagsToFilter.length > 0 &&
              //   channelsToFilter.length === 0 &&
              //   user.tags?.some((tag: Tag) =>
              //     tagsToFilter.includes(tag.name),
              //   )) ||
              // (tagsToFilter.length === 0 &&
              //   channelsToFilter.length === 0 &&
              //   chatsOnConversation),
              //-------------------------------------------------------------------
              // validacion si existe el name o clientId en los chats en Conversación
              user.client.name
                .toLowerCase()
                .includes(searchByName.toLowerCase()) ||
              user.client.clientId.replace(/[,-]/g, '').includes(searchByName),
          )
          .filter((user) => (showOnlyPausedChats ? user.isPaused : user))
          .map((chat: Chat) => (
            <StyledInConversationWrapper
              focusedItem={chat.client.clientId === userSelected}
              pausedItem={chat.isPaused}
              key={chat.createdAt.toString()}
              onClick={() =>
                handleSendMessageToUser(
                  chat.client.clientId,
                  chat.channel,
                  chat._id,
                )
              }>
              <StyledInConversationChatItem>
                <StyledClientAndAgentAvatars>
                  {chat.isPaused && <SVGIcon iconFile="/icons/pause.svg" />}
                  {chat.isPaused === false && chat.client.profilePic && (
                    <img src={chat.client.profilePic} alt={chat.client.name} />
                  )}
                  {chat.isPaused === false && !chat.client.profilePic && (
                    <SVGIcon iconFile="/icons/user.svg" />
                  )}
                  {chat.channel === Channels.WHATSAPP && (
                    <SVGIcon iconFile="/icons/whatsapp.svg" />
                  )}
                  {chat.channel === Channels.MESSENGER && (
                    <SVGIcon iconFile="/icons/messenger.svg" />
                  )}
                  {chat.channel === Channels.INSTAGRAM && (
                    <SVGIcon iconFile="/icons/Instagram.svg" />
                  )}
                  {chat.channel === Channels.WEBCHAT && (
                    <SVGIcon iconFile="/icons/webchat.svg" />
                  )}
                  {chat.unreadMessages > 0 && (
                    <StyledNotViewedMessages>
                      {chat.unreadMessages > 99 ? '99+' : chat.unreadMessages}
                    </StyledNotViewedMessages>
                  )}
                </StyledClientAndAgentAvatars>
                <StyledNameAndDialog>
                  <Text>
                    {chat.client.name.substring(0, 16) ||
                      chat.client.clientId.substring(0, 16)}
                  </Text>
                  <Text>
                    {chat.messages &&
                      chat.messages[chat.messages.length - 1].content.substring(
                        0,
                        14,
                      )}
                    ...
                  </Text>
                </StyledNameAndDialog>
                <StyledTimeAndState>
                  <div>
                    <SVGIcon iconFile="/icons/watch.svg" />
                    <Text>{getTimeAgo(Number(new Date(chat.createdAt)))}</Text>
                  </div>
                  <div>
                    {chat.isTransfer === true && (
                      <div>
                        <SVGIcon iconFile="/icons/exchange_alt.svg" />
                      </div>
                    )}
                  </div>
                </StyledTimeAndState>
              </StyledInConversationChatItem>
              {/* {chat.tags && (
                <StyledLabelsContainer>
                  {chat.tags.map((tag: Tag, index: number) => (
                    <StyledLabel color={tag.color} key={index.toString()}>
                      <Text>{tag.name}</Text>
                    </StyledLabel>
                  ))}
                </StyledLabelsContainer>
              )} */}
            </StyledInConversationWrapper>
          ))}
    </StyledInConversationContainer>
  );
};
