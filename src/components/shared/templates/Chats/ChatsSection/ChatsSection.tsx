/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  FC,
  useState,
  useCallback,
  useEffect,
  useContext,
  useRef,
} from 'react';
import { ChatsList } from '../Components/ChatsList/ChatsList';
import { ChatsViewNoSelected } from '../Components/ChatsViewNoSelected/ChatsViewNoSelected';
import { ChatsViewSelectedToConfirm } from '../Components/ChatsViewSelectedToConfirm/ChatsViewSelectedToConfirm';
import { StyledChatsSection } from './ChatsSection.styles';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { TransferConfirmation } from '../Components/TransferConfirmation/TransferConfirmation';
import { UploadableFile } from '../Components/UploadFiles/UploadFiles.interface';
import { getChatByStatus } from '../../../../../api/chat';
import { Chat, ChatStatus } from '../../../../../models/chat/chat';
import {
  ChatInputDialogueProps,
  Emojis,
  SelectedUserProps,
  TabProps,
} from './ChatsSection.interface';
import { websocketContext } from '../../../../../chat/index';
import { ChatTransfer } from '../Components/ChatTransfer/ChatTransfer';
import { EndChat } from '../Components/EndChat/EndChat';
import { PauseChat } from '../Components/PauseChat/PauseChat';
import { ReloadChat } from '../Components/ReloadChat/ReloadChat';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hook/hooks';
import {
  removeOneChatPending,
  setChatsPendings,
  setOneChatPending,
} from '../../../../../redux/slices/live-chat/pending-chats';
import {
  removeOneChatFromOnConversation,
  setChatsOnConversation,
  setOneChatOnConversation,
} from '../../../../../redux/slices/live-chat/on-conversation-chats';
import {
  FilterChannelsProps,
  FilterChannel,
} from '../Components/ChatsFilter/ChatFilter/ChatFilter.interface';
import { ModalClosePreviousSession } from '../Components/ModalClosePreviousSession/ModalClosePreviousSession';
import { SeccionChatHistory } from '../Components/SeccionChatHistory/SeccionChatHistory';

export const ChatsSection: FC<
  UploadableFile &
    ChatInputDialogueProps &
    Emojis &
    FilterChannelsProps &
    FilterChannel &
    TabProps &
    SelectedUserProps
> = ({
  id,
  file,
  errors,
  channel,
  handleCleanChannels,
  checkedTags,
  setCheckedTags,
  setActiveByDefaultTab,
  activeByDefaultTab,
  setUserSelected,
  userSelected,
}) => {
  const socket: any = useContext(websocketContext);
  const showAlert = useToastContext();

  const dispatch = useAppDispatch();

  const { generalConfigurationData }: any = useAppSelector(
    (state) => state.configurationInfo,
  );
  const { userDataInState }: any = useAppSelector(
    (state) => state.userAuthCredentials,
  );

  const [sortedChats, setSortedChats] = useState<boolean>(false);
  const [showOnlyPausedChats, setShowOnlyPausedChats] =
    useState<boolean>(false);
  const [liveChatModal, setLiveChatModal] = useState<boolean>(false);
  const [liveChatPage, setLiveChatPage] = useState('');
  const [agentTransfer, setAgentTransfer] = useState('');
  const [chatInputDialogue, setChatInputDialogue] = useState<string>('');
  const [dropZoneDisplayed, setDropZoneDisplayed] = useState<boolean>(false);
  const [emojisDisplayed, setEmojisDisplayed] = React.useState<boolean>(false);
  const [searchByName, setSearchByName] = useState<string>('');
  const [showPredefinedTexts, setShowPredefinedTexts] =
    React.useState<boolean>(false);
  const [findDialogueInChat, setFindDialogueInChat] =
    React.useState<string>('');
  const [newMessagesInChat, setNewMessagesInChat] = React.useState(
    {} as {
      key: string;
      messageLength: number;
    },
  );
  // Variables de configuración de sonido.
  const soundActive = generalConfigurationData.notificationSounds?.isActive;
  const soundInConversation =
    generalConfigurationData.notificationSounds?.conversationSound;
  const soundInPending =
    generalConfigurationData.notificationSounds?.pendingSound;

  const audioConversation = useRef<HTMLAudioElement | null>(
    soundInConversation &&
      new Audio(`/sound/notification_sound_${soundInConversation}.mp3`),
  );
  const audioPending = useRef<HTMLAudioElement | null>(
    soundInPending &&
      new Audio(`/sound/notification_sound_${soundInPending}.mp3`),
  );

  // ---------------------------------
  useEffect(() => {
    if (
      userDataInState.soundEnabled &&
      generalConfigurationData.notificationSounds &&
      soundInConversation &&
      soundInPending
    ) {
      audioConversation.current = new Audio(
        `/sound/notification_sound_${soundInConversation}.mp3`,
      );
      audioPending.current = new Audio(
        `/sound/notification_sound_${soundInPending}.mp3`,
      );
    } else {
      audioConversation.current = null;
      audioPending.current = null;
    }
  }, [
    generalConfigurationData.notificationSounds?.conversationSound,
    generalConfigurationData.notificationSounds?.pendingSound,
  ]);

  const onChangeSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchByName(event.target.value);
  };

  // SETEA TODOS LOS CHATS PENDIENTES CUANDO SE RENDERIZA X PRIMERA VEZ
  const getPendingChats = useCallback(async () => {
    try {
      const pendings = await getChatByStatus(ChatStatus.ASSIGNMENT_PENDING);
      if (pendings.success === false) {
        dispatch(setChatsPendings([]));
      } else {
        dispatch(setChatsPendings(pendings));
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'Sesión expirada',
        message: `Intente volver a loguearse`,
      });
      localStorage.removeItem('AccessToken');
    }
  }, []);

  // SETEA TODOS LOS CHATS EN CONVERSACIÓN CUANDO SE RENDERIZA X PRIMERA VEZ
  const getOnConversationChats = useCallback(async () => {
    try {
      const response = await getChatByStatus(ChatStatus.ON_CONVERSATION);
      if (response.success === false) {
        dispatch(setChatsOnConversation([]));
      } else {
        dispatch(setChatsOnConversation(response));
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `No se puede establecer la conexión con el servidor`,
      });
      localStorage.removeItem('AccessToken');
    }
  }, []);

  // --------------- <<< WEB SOCKET EVENTS >>> -----------------

  const handleSoundEventPending = (chat: Chat) => {
    if (
      soundActive &&
      userDataInState.soundEnabled &&
      audioPending.current &&
      chat.unreadMessages === 1
    ) {
      audioPending.current.play();
    }
  };

  // Setea los mensajes que ingresan a PENDIENTES.
  const getNewPendingMessage = useCallback(async () => {
    socket?.on('pendingLiveChat', async (data: Chat) => {
      dispatch(setOneChatPending(data));
      handleSoundEventPending(data);
    });
  }, []);

  const handleSoundEvent = async (chats: Chat) => {
    const messageByInactivity = chats.messages[chats.messages.length - 1];
    if (
      soundActive &&
      userDataInState.soundEnabled &&
      audioConversation.current &&
      chats.unreadMessages !== 0 &&
      messageByInactivity.from !== 'AGENT'
    ) {
      await audioConversation.current.play();
    }
  };

  const handleEventAssignedChat = async () => {
    if (
      soundActive &&
      userDataInState.soundEnabled &&
      audioConversation.current
    ) {
      await audioConversation.current.play();
    }
  };

  // Setea los mensajes que ingresan a EN CONVERSACIÓN.
  const getNewOnConversationMessage = useCallback(async () => {
    socket?.on('onConversationLiveChat', async (data: Chat) => {
      dispatch(setOneChatOnConversation(data));
      await handleSoundEvent(data);
    });
  }, []);

  // Solo para Salud Total --- Evento que se ejecuta cuando llega un nuevo mensaje por asignación automáticamente
  const getAutomaticAssignedChat = useCallback(async () => {
    socket?.on('automaticAssignedChat', async (chat: Chat) => {
      dispatch(setOneChatOnConversation(chat));
      handleEventAssignedChat();
    });
  }, []);

  // Setea los mensajes PENDIENTES que ingresan a EN CONVERSACIÓN.
  const setPendingToOnconversation = useCallback(async () => {
    socket?.on('assignedAgent', async (data: string) => {
      dispatch(removeOneChatPending(data));
    });
  }, []);

  // Elimina los chat que se finalizan por inacividad del usuario.
  const getNewChatFinishedByInactivity = useCallback(async () => {
    socket?.on('finishedChat', (chat: Chat) => {
      dispatch(removeOneChatFromOnConversation(chat._id));
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'CIERRE POR INACTIVIDAD',
        message: `El chat ${chat.client.name} ha sido cerrado por inactividad`,
      });
      setUserSelected('');
    });
  }, []);

  // Cierre de sesión por inicio desde otro dispositivo.
  const wsClosePreviousSession = useCallback(async () => {
    socket?.on('closePreviousSession', () => {
      setLiveChatModal(true);
      setLiveChatPage('ModalPreviousSession');
    });
  }, []);

  //-----------------------------------------------------------------------

  useEffect(() => {
    getPendingChats();
    getOnConversationChats();
  }, []);

  useEffect(() => {
    getNewPendingMessage();
    getNewOnConversationMessage();
    setPendingToOnconversation();
    getNewChatFinishedByInactivity();
    wsClosePreviousSession();
    getAutomaticAssignedChat();
  }, [socket]);

  return (
    <StyledChatsSection>
      <ChatsList
        setCheckedTags={setCheckedTags}
        setShowOnlyPausedChats={setShowOnlyPausedChats}
        showOnlyPausedChats={showOnlyPausedChats}
        checkedTags={checkedTags}
        handleCleanChannels={handleCleanChannels}
        channel={channel}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        sortedChats={sortedChats}
        setSortedChats={setSortedChats}
        activeByDefaultTab={activeByDefaultTab}
        setActiveByDefaultTab={setActiveByDefaultTab}
        setDropZoneDisplayed={setDropZoneDisplayed}
        setChatInputDialogue={setChatInputDialogue}
        newMessagesInChat={newMessagesInChat}
        setNewMessagesInChat={setNewMessagesInChat}
        // Funciones para realizar busqueda de nombre y rut
        onChangeSearchName={onChangeSearchName}
        searchByName={searchByName}
      />
      {!userSelected || userSelected === '' ? (
        <ChatsViewNoSelected />
      ) : (
        <ChatsViewSelectedToConfirm
          showPredefinedTexts={showPredefinedTexts}
          setShowPredefinedTexts={setShowPredefinedTexts}
          emojisDisplayed={emojisDisplayed}
          setEmojisDisplayed={setEmojisDisplayed}
          userSelected={userSelected}
          setUserSelected={setUserSelected}
          activeByDefaultTab={activeByDefaultTab}
          setActiveByDefaultTab={setActiveByDefaultTab}
          liveChatModal={liveChatModal}
          setLiveChatModal={setLiveChatModal}
          liveChatPage={liveChatPage}
          setLiveChatPage={setLiveChatPage}
          chatInputDialogue={chatInputDialogue}
          setChatInputDialogue={setChatInputDialogue}
          dropZoneDisplayed={dropZoneDisplayed}
          setDropZoneDisplayed={setDropZoneDisplayed}
          id={id}
          file={file}
          errors={errors}
          setFindDialogueInChat={setFindDialogueInChat}
          findDialogueInChat={findDialogueInChat}
          newMessagesInChat={newMessagesInChat}
          setNewMessagesInChat={setNewMessagesInChat}
        />
      )}
      <ModalMolecule isModal={liveChatModal} setModal={setLiveChatModal}>
        {liveChatPage && liveChatPage === 'ConfirmationTransfer' ? (
          <TransferConfirmation
            setUserSelected={setUserSelected}
            agent={agentTransfer}
            liveChatPage={liveChatPage}
            setLiveChatPage={setLiveChatPage}
            liveChatModal={liveChatModal}
            setLiveChatModal={setLiveChatModal}
          />
        ) : null}

        {liveChatPage && liveChatPage === 'ChatTransfer' ? (
          <ChatTransfer
            liveChatModal={liveChatModal}
            setLiveChatModal={setLiveChatModal}
            liveChatPage={liveChatPage}
            setLiveChatPage={setLiveChatPage}
            setAgentTransfer={setAgentTransfer}
          />
        ) : null}

        {liveChatPage && liveChatPage === 'EndChat' ? (
          <EndChat
            setUserSelected={setUserSelected}
            liveChatModal={liveChatModal}
            setLiveChatModal={setLiveChatModal}
          />
        ) : null}

        {liveChatPage && liveChatPage === 'HistoryChat' ? (
          <SeccionChatHistory
            liveChatModal={liveChatModal}
            setLiveChatModal={setLiveChatModal}
          />
        ) : null}

        {liveChatPage && liveChatPage === 'PauseChat' ? (
          <PauseChat
            setLiveChatModal={setLiveChatModal}
            setLiveChatPage={setLiveChatPage}
          />
        ) : null}

        {liveChatPage && liveChatPage === 'ReloadChat' ? (
          <ReloadChat
            setLiveChatModal={setLiveChatModal}
            setLiveChatPage={setLiveChatPage}
          />
        ) : null}
        {liveChatPage && liveChatPage === 'ModalPreviousSession' ? (
          <ModalClosePreviousSession setLiveChatModal={setLiveChatModal} />
        ) : null}
      </ModalMolecule>
    </StyledChatsSection>
  );
};
