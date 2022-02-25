/* eslint-disable no-nested-ternary */
/* eslint-disable sonarjs/cognitive-complexity */
import { FC } from 'react';
import { Tabs } from '../../../../organisms/Tabs/Tabs';
import { PendingsChatItem } from '../PendingsChatItem/PendingsChatItem';
import { ChatsListHeader } from '../ChatsListHeader/ChatsListHeader';
import { InConversationChatItem } from '../InConversationChatItem/InConversationChatItem';
import {
  StyledChatsList,
  StyledPendingsRender,
  StyledPendings,
  StyledInConversation,
  StyledInConversationRender,
  StyledIndicatorOnConversation,
  StyledIndicatorPendings,
  StyledIndicatorPaused,
  StyledIndicatorPendingsWarning,
  StyledIndicatorPendingsAlarm,
  StyledIndicatorOnConversationWarning,
  StyledIndicatorOnConversationAlarm,
} from './ChatsList.styles';
import {
  TabProps,
  SelectedUserProps,
  SortUsers,
  DropZoneDisplayedProps,
  ChatInputDialogueProps,
  ShowOnlyPaused,
  MessagesViewedOrNot,
  IPropsSearchByName,
  IPropsStringName,
} from '../../ChatsSection/ChatsSection.interface';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import {
  FilterChannelsProps,
  FilterChannel,
} from '../ChatsFilter/ChatFilter/ChatFilter.interface';

export const ChatsList: FC<
  SelectedUserProps &
    SortUsers &
    TabProps &
    DropZoneDisplayedProps &
    ChatInputDialogueProps &
    FilterChannelsProps &
    FilterChannel &
    ShowOnlyPaused &
    MessagesViewedOrNot &
    IPropsSearchByName &
    IPropsStringName
> = ({
  setUserSelected,
  userSelected,
  sortedChats,
  setSortedChats,
  activeByDefaultTab,
  setActiveByDefaultTab,
  setDropZoneDisplayed,
  setChatInputDialogue,
  channel,
  handleCleanChannels,
  checkedTags,
  setCheckedTags,
  setShowOnlyPausedChats,
  showOnlyPausedChats,
  setNewMessagesInChat,
  newMessagesInChat,
  onChangeSearchName,
  searchByName,
}) => {
  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { chatsPendings } = useAppSelector(
    (state) => state.liveChat.chatsPendings,
  );

  return (
    <StyledChatsList>
      {chatsOnConversation?.length > 0 && chatsOnConversation?.length < 10 ? (
        <StyledIndicatorOnConversation>
          {chatsOnConversation.length}
        </StyledIndicatorOnConversation>
      ) : chatsOnConversation?.length >= 10 &&
        chatsOnConversation?.length < 100 ? (
        <StyledIndicatorOnConversationWarning>
          {chatsOnConversation?.length}
        </StyledIndicatorOnConversationWarning>
      ) : chatsOnConversation?.length >= 100 ? (
        <StyledIndicatorOnConversationAlarm>
          {chatsOnConversation?.length > 999
            ? '999+'
            : chatsOnConversation?.length}
        </StyledIndicatorOnConversationAlarm>
      ) : null}
      {chatsPendings?.length > 0 && chatsPendings?.length < 10 ? (
        <StyledIndicatorPendings>
          {chatsPendings.length}
        </StyledIndicatorPendings>
      ) : chatsPendings?.length >= 10 && chatsPendings?.length < 100 ? (
        <StyledIndicatorPendingsWarning>
          {chatsPendings?.length}
        </StyledIndicatorPendingsWarning>
      ) : chatsPendings?.length >= 100 ? (
        <StyledIndicatorPendingsAlarm>
          {chatsPendings?.length > 999 ? '999+' : chatsPendings?.length}
        </StyledIndicatorPendingsAlarm>
      ) : null}

      {chatsOnConversation?.length > 0 &&
        chatsOnConversation.some((chat) => chat.isPaused) && (
          <StyledIndicatorPaused>| |</StyledIndicatorPaused>
        )}
      {activeByDefaultTab === 1 && (
        <Tabs largeTabs activeByDefault={1}>
          <StyledPendings title="Pendientes">
            <StyledPendingsRender>
              <ChatsListHeader
                showOnlyPausedChats={showOnlyPausedChats}
                setShowOnlyPausedChats={setShowOnlyPausedChats}
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                handleCleanChannels={handleCleanChannels}
                channel={channel}
                isPendings
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                onChangeSearchName={onChangeSearchName}
              />
              <PendingsChatItem
                chatsPendings={chatsPendings}
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
                // string del input de busqueda.
                searchByName={searchByName}
              />
            </StyledPendingsRender>
          </StyledPendings>
          <StyledInConversation title="En conversación">
            <StyledInConversationRender>
              <ChatsListHeader
                showOnlyPausedChats={showOnlyPausedChats}
                setShowOnlyPausedChats={setShowOnlyPausedChats}
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                handleCleanChannels={handleCleanChannels}
                channel={channel}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                // funcion para setear el string que realiza la busqueda por (telefono, email y name).
                onChangeSearchName={onChangeSearchName}
              />
              <InConversationChatItem
                showOnlyPausedChats={showOnlyPausedChats}
                setShowOnlyPausedChats={setShowOnlyPausedChats}
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
                setDropZoneDisplayed={setDropZoneDisplayed}
                setChatInputDialogue={setChatInputDialogue}
                newMessagesInChat={newMessagesInChat}
                setNewMessagesInChat={setNewMessagesInChat}
                searchByName={searchByName}
              />
            </StyledInConversationRender>
          </StyledInConversation>
        </Tabs>
      )}
      {activeByDefaultTab === 0 && (
        <Tabs largeTabs activeByDefault={0}>
          <StyledPendings title="Pendientes">
            <StyledPendingsRender>
              <ChatsListHeader
                showOnlyPausedChats={showOnlyPausedChats}
                setShowOnlyPausedChats={setShowOnlyPausedChats}
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                handleCleanChannels={handleCleanChannels}
                channel={channel}
                isPendings
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                onChangeSearchName={onChangeSearchName}
              />
              <PendingsChatItem
                chatsPendings={chatsPendings}
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
                searchByName={searchByName}
              />
            </StyledPendingsRender>
          </StyledPendings>
          <StyledInConversation title="En conversación">
            <StyledInConversationRender>
              <ChatsListHeader
                showOnlyPausedChats={showOnlyPausedChats}
                setShowOnlyPausedChats={setShowOnlyPausedChats}
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                handleCleanChannels={handleCleanChannels}
                channel={channel}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                onChangeSearchName={onChangeSearchName}
              />
              <InConversationChatItem
                showOnlyPausedChats={showOnlyPausedChats}
                setShowOnlyPausedChats={setShowOnlyPausedChats}
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
                setDropZoneDisplayed={setDropZoneDisplayed}
                setChatInputDialogue={setChatInputDialogue}
                newMessagesInChat={newMessagesInChat}
                setNewMessagesInChat={setNewMessagesInChat}
                searchByName={searchByName}
              />
            </StyledInConversationRender>
          </StyledInConversation>
        </Tabs>
      )}
    </StyledChatsList>
  );
};
