import { FC, useEffect } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledChatsListHeader,
  StyledChatsListHeaderLeft,
  StyledUsersCounter,
} from './ChatsListHeader.styles';
import {
  SortUsers,
  ChatsListHeaderProps,
  ShowOnlyPaused,
} from '../../ChatsSection/ChatsSection.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { ChatFilter } from '../ChatsFilter/ChatFilter/ChatFilter';
import {
  FilterChannelsProps,
  FilterChannel,
} from '../ChatsFilter/ChatFilter/ChatFilter.interface';
import { setSeccionIsPending } from '../../../../../../redux/slices/live-chat/chat-history';

export const ChatsListHeader: FC<
  SortUsers &
    ChatsListHeaderProps &
    FilterChannelsProps &
    FilterChannel &
    ShowOnlyPaused
> = ({
  setSortedChats,
  sortedChats,
  isPendings,
  channel,
  handleCleanChannels,
  checkedTags,
  setCheckedTags,
  showOnlyPausedChats,
  setShowOnlyPausedChats,
  // onChangeSearchName,
}) => {
  const dispatch = useAppDispatch();
  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { chatsPendings } = useAppSelector(
    (state) => state.liveChat.chatsPendings,
  );

  useEffect(() => {
    if (!isPendings) {
      dispatch(setSeccionIsPending(false));
    } else {
      dispatch(setSeccionIsPending(isPendings));
    }
  });

  return (
    <StyledChatsListHeader
      showOnlyPausedChats={showOnlyPausedChats}
      setShowOnlyPausedChats={setShowOnlyPausedChats}>
      <StyledChatsListHeaderLeft>
        <Text color="black">Total</Text>
        <StyledUsersCounter>
          {isPendings
            ? chatsPendings?.length || 0
            : chatsOnConversation?.length || 0}
        </StyledUsersCounter>
      </StyledChatsListHeaderLeft>
      {/* <WrapperSearch isFocus={isFocus}>
         <StyledSearch
          onChange={onChangeSearchName}
          placeholder="Buscar..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <SVGIcon iconFile="/icons/search-solid.svg" />
      </WrapperSearch> */}
      {!isPendings && showOnlyPausedChats && (
        <button type="button" onClick={() => setShowOnlyPausedChats(false)}>
          <SVGIcon iconFile="/icons/pause.svg" />
        </button>
      )}
      {!isPendings && !showOnlyPausedChats && (
        <button type="button" onClick={() => setShowOnlyPausedChats(true)}>
          <SVGIcon iconFile="/icons/pause.svg" />
        </button>
      )}
      <span>
        <button type="button" onClick={() => setSortedChats(!sortedChats)}>
          <SVGIcon iconFile="/icons/watch.svg" />
          {sortedChats ? (
            <SVGIcon iconFile="/icons/upArrow.svg" />
          ) : (
            <SVGIcon iconFile="/icons/downArrow.svg" />
          )}
        </button>
        <ChatFilter
          checkedTags={checkedTags}
          setCheckedTags={setCheckedTags}
          handleCleanChannels={handleCleanChannels}
          channel={channel}
        />
      </span>
    </StyledChatsListHeader>
  );
};
