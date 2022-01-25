/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable no-nested-ternary */
import React, { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Channels, Chat } from '../../../../../../models/chat/chat';
import {
  StyledLabel,
  StyledClientAndAgentAvatars,
  StyledNameAndDialog,
  StyledLabelsContainer,
} from '../PendingsChatItem/PendingsChatItem.styles';
import {
  TabProps,
  StyledLabelProps,
  SelectedUserProps,
  SortingProps,
  DropZoneDisplayedProps,
  ChatInputDialogueProps,
  ShowOnlyPaused,
} from '../../ChatsSection/ChatsSection.interface';
import {
  StyledInConversationChatItem,
  StyledInConversationContainer,
  StyledInConversationWrapper,
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
import { Tag } from '../../../../../../models/tags/tag';
import { readHistoryChat } from '../../../../../../api/chat';
import {
  setChatsHasHistory,
  setChatsIdChannel,
  setChatsIdClient,
} from '../../../../../../redux/slices/live-chat/chat-history';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

export const InConversationChatItem: FC<
  StyledLabelProps &
    SelectedUserProps &
    SortingProps &
    TabProps &
    DropZoneDisplayedProps &
    ChatInputDialogueProps &
    ShowOnlyPaused
> = ({
  setUserSelected,
  userSelected,
  setActiveByDefaultTab,
  sortedChats,
  showOnlyPausedChats,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { tagsToFilter, channelsToFilter } = useAppSelector(
    (state) => state.optionsToFilterChats,
  );

  const [timeLapse, setTimeLapse] = React.useState(Date.now());

  const handleSendMessageToUser = async (arg: string, channel: string) => {
    setUserSelected(arg);
    setActiveByDefaultTab(1);
    try {
      const hasHistory = await readHistoryChat(channel, arg, 'hasHistory');
      dispatch(setChatsHasHistory(hasHistory));
      dispatch(setChatsIdChannel(channel));
      dispatch(setChatsIdClient(arg));
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `No se puede establecer la conexión con el servidor`,
      });
    }
  };

  React.useEffect(() => {
    const intervalToGetActualTime = setInterval(() => {
      setTimeLapse(Date.now());
    }, 10000);
    return () => clearInterval(intervalToGetActualTime);
  }, []);

  if (sortedChats) {
    dispatch(setSortedByLastDate());
  } else {
    dispatch(setSortedByFirstDate());
  }

  return (
    <StyledInConversationContainer>
      {chatsOnConversation &&
        chatsOnConversation
          .filter(
            (user) =>
              (tagsToFilter.length > 0 &&
                channelsToFilter.length > 0 &&
                channelsToFilter?.includes(user.channel) &&
                user.tags.filter((tag: Tag) => tagsToFilter?.includes(tag.name))
                  .length > 0) ||
              (tagsToFilter.length === 0 &&
                channelsToFilter.length > 0 &&
                channelsToFilter?.includes(user.channel)) ||
              (tagsToFilter.length > 0 &&
                channelsToFilter.length === 0 &&
                user.tags?.some((tag: Tag) =>
                  tagsToFilter.includes(tag.name),
                )) ||
              (tagsToFilter.length === 0 &&
                channelsToFilter.length === 0 &&
                chatsOnConversation),
          )
          .filter((user) => (showOnlyPausedChats ? user.isPaused : user))
          // filtro de busqueda por nombre y rut
          //     user.client.name
          //       .toLowerCase()
          //       .includes(searchByName.toLowerCase()) ||
          //     user.client.clientId.replace(/[.,-]/g, '').includes(searchByName),
          // )
          .map((chat: Chat) => (
            <StyledInConversationWrapper
              focusedItem={chat.client.clientId === userSelected}
              pausedItem={chat.isPaused}
              key={chat.createdAt.toString()}
              onClick={() =>
                handleSendMessageToUser(chat.client.clientId, chat.channel)
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
                    {Math.floor(
                      (timeLapse - new Date(chat.createdAt).getTime()) /
                        (1000 * 60),
                    ) > 59 &&
                      (Math.floor(
                        (timeLapse - new Date(chat.createdAt).getTime()) /
                          (1000 * 60),
                      ) > 119 ? (
                        <Text>
                          Hace +
                          {Math.floor(
                            (timeLapse - new Date(chat.createdAt).getTime()) /
                              (1000 * 60) /
                              60,
                          )}{' '}
                          hs.
                        </Text>
                      ) : (
                        <Text>
                          Hace +
                          {Math.floor(
                            (timeLapse - new Date(chat.createdAt).getTime()) /
                              (1000 * 60) /
                              60,
                          )}{' '}
                          h.
                        </Text>
                      ))}
                    {Math.floor(
                      (Date.now() - new Date(chat.createdAt).getTime()) /
                        (1000 * 60),
                    ) <= 59 && (
                      <Text>
                        Hace{' '}
                        {Math.floor(
                          (timeLapse - new Date(chat.createdAt).getTime()) /
                            (1000 * 60),
                        )}{' '}
                        min.
                      </Text>
                    )}
                  </div>
                  <div>
                    {chat.isTransfer === true && (
                      <SVGIcon iconFile="/icons/exchange_alt.svg" />
                    )}
                    {/* <div>{user.number}</div> */}
                  </div>
                </StyledTimeAndState>
              </StyledInConversationChatItem>
              {chat.tags && (
                <StyledLabelsContainer>
                  {chat.tags.map((tag: Tag, index: number) => (
                    <StyledLabel color={tag.color} key={index.toString()}>
                      <Text>{tag.name}</Text>
                    </StyledLabel>
                  ))}
                </StyledLabelsContainer>
              )}
            </StyledInConversationWrapper>
          ))}
    </StyledInConversationContainer>
  );
};
