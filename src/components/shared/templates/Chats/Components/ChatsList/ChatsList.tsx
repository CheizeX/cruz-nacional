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
} from './ChatsList.styles';
import {
  TabProps,
  SelectedUserProps,
  SortUsers,
  DropZoneDisplayedProps,
  ChatInputDialogueProps,
  ShowOnlyPaused,
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
    // IPropsSearchByName &
    // IPropsStringName &
    ShowOnlyPaused
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
}) => {
  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { chatsPendings } = useAppSelector(
    (state) => state.liveChat.chatsPendings,
  );

  return (
    <StyledChatsList>
      {chatsOnConversation?.length > 0 && <StyledIndicatorOnConversation />}
      {chatsPendings?.length > 0 && <StyledIndicatorPendings />}
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
                // onChangeSearchName={onChangeSearchName}
              />
              <PendingsChatItem
                chatsPendings={chatsPendings}
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
                // searchByName={searchByName}
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
                // onChangeSearchName={onChangeSearchName}
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

                // searchByName={searchByName}
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
                // onChangeSearchName={onChangeSearchName}
              />
              <PendingsChatItem
                chatsPendings={chatsPendings}
                setUserSelected={setUserSelected}
                userSelected={userSelected || ''}
                setSortedChats={setSortedChats}
                sortedChats={sortedChats || false}
                setActiveByDefaultTab={setActiveByDefaultTab}
                // searchByName={searchByName}
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
                // onChangeSearchName={onChangeSearchName}
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
                // searchByName={searchByName}
              />
            </StyledInConversationRender>
          </StyledInConversation>
        </Tabs>
      )}
    </StyledChatsList>
  );
};
