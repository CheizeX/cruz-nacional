import { configureStore, combineReducers } from '@reduxjs/toolkit';
import useQueryState from './slices/users/user-management';
import tagsQueryState from './slices/tags/tag-management';
import tagEditByIdState from './slices/tags/tag-seleted-edit';
import tagDeleteByIdState from './slices/tags/tag-seleted-delete';
import chatsPendings from './slices/live-chat/pending-chats';
import chatsOnConversation from './slices/live-chat/on-conversation-chats';
import chatSelectedToSendId from './slices/live-chat/chat-selected-to-send-id';
import chatSelectedToTransferById from './slices/live-chat/chat-selected-to-transfer-by-id';
import userSelectedToTransferById from './slices/live-chat/user-selected-to-transfer-by-id';
import userAuthCredentials from './slices/auth/user-credentials';
import currentByUserFirstNameState from './slices/users/user-seleted-name';
import userContainerTagState from './slices/users/user-container-tags';
import userByInfoEmailState from './slices/users/user-seleted-email';
import currentByUserRoleState from './slices/users/user-seleted-role';
import userByIdEditState from './slices/users/user-seleted-edit';
import userByIdDeleteState from './slices/users/user-seleted-delete';
import onboardingState from './slices/onboarding/onboarding';
import createAccountState from './slices/onboarding/onboarding-create-account';
import updateContainerTagState from './slices/users/user-update-container-tags';
import monitorTodayChatState from './slices/monitor/monitor-chats';
import monitorAgentsNotAvailableState from './slices/monitor/monitor-agents-not-available';
import monitorAgentsAvailableState from './slices/monitor/monitor-agents-available';
import infoByAgentState from './slices/monitor/monitor-info-by-agent';
import dashboardFilterChatsByDate from './slices/dashboard/dashboard-chats-filter';
import monitorAllUserState from './slices/monitor/monitor-all-agents';
import activeTab from './slices/active-tab/active-tab';
import optionsToFilterChats from './slices/live-chat/options-to-filter';
import reportsQueryState from './slices/reports/reports-management';
import reportsAgentsQueryState from './slices/reports/reports-data-agents';
import chatContainerReviewState from './slices/dashboard/dashboard-review';
import monitorCountAgentsAvailableState from './slices/monitor/count-agent';
import chatToSetOnConversationIdToState from './slices/live-chat/chatset-on-conversation';
import chatContainerAuthFacebookState from './slices/channels/auth-facebook';
import chatIntegrationQRState from './slices/channels/integration-with-qr';
import listChannelState from './slices/channels/list-channel';
import chatsHistoryState from './slices/live-chat/chat-history';
import chatsTodayTransferState from './slices/live-chat/chat-transfer';
import configurationInfo from './slices/configuration/configuration-info';
import chatContainerAccountInstagramState from './slices/channels/account-instagram';

const liveChat = combineReducers({
  chatsPendings,
  chatsOnConversation,
  chatSelectedToSendId,
  chatSelectedToTransferById,
  userSelectedToTransferById,
  chatToSetOnConversationIdToState,
  chatsHistoryState,
  chatsTodayTransferState,
});
const users = combineReducers({
  useQueryState,
  userByIdEditState,
  userByInfoEmailState,
  currentByUserFirstNameState,
  userByIdDeleteState,
  currentByUserRoleState,
  updateContainerTagState,
  userContainerTagState,
});
const tags = combineReducers({
  tagsQueryState,
  tagEditByIdState,
  tagDeleteByIdState,
});
const onboarding = combineReducers({
  onboardingState,
  createAccountState,
});
const monitor = combineReducers({
  monitorTodayChatState,
  monitorAgentsNotAvailableState,
  monitorAgentsAvailableState,
  monitorAllUserState,
  monitorCountAgentsAvailableState,
  infoByAgentState,
});
const reports = combineReducers({
  reportsQueryState,
  reportsAgentsQueryState,
});
const review = combineReducers({
  chatContainerReviewState,
});
const channel = combineReducers({
  chatContainerAuthFacebookState,
  chatIntegrationQRState,
  listChannelState,
  chatContainerAccountInstagramState,
});

export const store = configureStore({
  reducer: {
    liveChat,
    userAuthCredentials,
    users,
    tags,
    onboarding,
    reports,
    monitor,
    chatsPendings,
    chatSelectedToSendId,
    chatSelectedToTransferById,
    userSelectedToTransferById,
    dashboardFilterChatsByDate,
    review,
    activeTab,
    optionsToFilterChats,
    channel,
    configurationInfo,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
