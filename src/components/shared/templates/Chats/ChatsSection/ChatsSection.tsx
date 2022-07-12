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
import { readChat } from '../../../../../api/chat';
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
import { setChatsPendings } from '../../../../../redux/slices/live-chat/pending-chats';
import { setChatsOnConversation } from '../../../../../redux/slices/live-chat/on-conversation-chats';
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

  const { userDataInState }: any = useAppSelector(
    (state) => state.userAuthCredentials,
  );

  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );

  const { generalConfigurationData } = useAppSelector(
    (state) => state.configurationInfo,
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
  // -------------------------------------------------------------------------
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

  // Funcion para buscar por nombre y rut
  // const onChangeSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchByName(event.target.value);
  // };
  const onChangeSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchByName(event.target.value);
  };
  // Variables de configuración de sonido.
  const activeSound = generalConfigurationData.notificationSounds?.isActive;
  const audioConversation = useRef<HTMLAudioElement | null>(
    new Audio(generalConfigurationData.notificationSounds?.conversationSound),
  );
  const audioPending = useRef<HTMLAudioElement | null>(
    new Audio(generalConfigurationData.notificationSounds?.pendingSound),
  );

  // ---------------------------------
  useEffect(() => {
    if (userDataInState.soundEnabled) {
      audioConversation.current = new Audio(
        generalConfigurationData.notificationSounds?.conversationSound,
      );
      audioPending.current = new Audio(
        generalConfigurationData.notificationSounds?.pendingSound,
      );
    } else {
      audioConversation.current = null;
      audioPending.current = null;
    }
  }, [
    userDataInState.soundEnabled,
    generalConfigurationData.notificationSounds?.conversationSound,
    generalConfigurationData.notificationSounds?.pendingSound,
  ]);

  // trae todos los chats que se encuentran ON_CONVERSATION
  const getOnConversationChats = useCallback(async () => {
    try {
      const response = await readChat(ChatStatus.ON_CONVERSATION);
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

  // trae todos los chats que se encuentran ASSIGNMENT_PENDING
  const getPendingChats = useCallback(async () => {
    try {
      const pendings = await readChat(ChatStatus.ASSIGNMENT_PENDING);
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

  // --------------- <<< WEB SOCKET EVENTS >>> -----------------
  // Escucha los chats de usuarios o agentes según el parámetro que se le pase

  const getNewMessageFromNewUserOrAgent = useCallback(async (event: string) => {
    socket?.on(event, async (data: Chat[]) => {
      if (
        event === 'newUserMessage' &&
        userDataInState.soundEnabled &&
        activeSound &&
        audioConversation.current
      ) {
        await audioConversation.current.play();
      }
      dispatch(setChatsOnConversation(data));
    });
  }, []);
  // Escucha los nuevpos chats de conversació y ejecuta el new audio
  const getNewMessageOnConversationTrafficLight = useCallback(async () => {
    socket?.on('trafficLight', async (data: Chat[]) => {
      dispatch(setChatsOnConversation(data));
    });
  }, []);

  // Escucha los mensajes de usuarios que ya enviaron el primer mensaje, pero que todavía no se encuentran ON_CONVERSATION
  const getNewPendingChat = useCallback(async () => {
    socket?.on('newUserMessageToBeAssigned', (data: Chat[]) => {
      dispatch(setChatsPendings(data));
    });
  }, []);

  // escucha los chats de nuevos usuarios
  const wsNewChat = useCallback(async () => {
    socket?.on('newChat', async (data: Chat[]) => {
      if (activeSound && audioPending.current && userDataInState.soundEnabled) {
        await audioPending.current.play();
      }
      dispatch(setChatsPendings(data));
    });
  }, []);

  // Trae los chats Pendientes
  const wsGetPendingChats = useCallback(async () => {
    socket?.on('getPendingChats', (data: Chat[]) => {
      // setUserSelected('');
      dispatch(setChatsPendings(data));
    });
  }, []);

  // Trae los chats transferidos
  const wsGetTransferedChats = useCallback(async () => {
    socket?.on('newTransfer', async (data: Chat[]) => {
      if (userSelected) {
        dispatch(setChatsOnConversation(data));
      }
    });
  }, [dispatch, userSelected]);

  // escucha los chats que pasan a on_conversation
  const wsNewChatAssigned = useCallback(async () => {
    socket?.on('newChatAssigned', async (data: Chat[]) => {
      dispatch(setChatsOnConversation(data));
    });
  }, []);

  // escucha los chats que cambian a pausado
  const newPausedConversation = useCallback(async () => {
    socket?.on('newPausedConversation', (data: Chat[]) => {
      dispatch(setChatsOnConversation(data));
    });
  }, []);
  //-----------------------------------------------------------------------
  // escucha si se ha iniciado sessión desde otro navegador.
  const wsClosePreviousSession = useCallback(async () => {
    socket?.on('closePreviousSession', () => {
      setLiveChatModal(true);
      setLiveChatPage('ModalPreviousSession');
      // localStorage.removeItem('AccessToken');
      // router.push('/');
    });
  }, []);

  // escucha si hay un chat cerrado por inactividad
  const wsCloseByInactivity = useCallback(async () => {
    socket?.on('closeChatByInactivity', (chat: Chat) => {
      showAlert?.addToast({
        alert: Toast.INACTIVE,
        title: 'Chat cerrado por inactividad',
        message: `${chat.client.name} - ${chat.client.clientId} - ${chat.channel}`,
        durationTime: true,
      });
      dispatch(
        setChatsOnConversation(
          chatsOnConversation.filter((item: Chat) => item._id !== chat._id),
        ),
      );
      setUserSelected('');
    });
  }, [chatsOnConversation]);

  useEffect(() => {
    getNewMessageFromNewUserOrAgent('newUserMessage');
    getNewMessageFromNewUserOrAgent('newAgentMessage');
  }, []);

  useEffect(() => {
    getPendingChats();
    getOnConversationChats();
  }, []);

  useEffect(() => {
    wsNewChat();
    wsNewChatAssigned();
    getNewPendingChat();
    wsGetPendingChats();
    wsGetTransferedChats();
    newPausedConversation();
    wsClosePreviousSession();
    wsCloseByInactivity();
    getNewMessageOnConversationTrafficLight();
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
      {!userSelected ? (
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

// TODO = AGREGAR UN SWITCH  PARA QUE EL AGENTE DECIDA SI QUIERE QUE EL LIVE CHAT TENGA SONIDO
// TODO = crear un loanding para los agentes a transferir y el historial
