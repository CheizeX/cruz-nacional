/* eslint-disable no-nested-ternary */
/* eslint-disable sonarjs/cognitive-complexity */
import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { CgClipboard } from 'react-icons/cg';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import {
  IconButtonMolecule,
  IconButtonState,
} from '../../../../atoms/IconButton/IconButton';
import {
  ChatInputDialogueProps,
  SelectedUserProps,
  TabProps,
  ILiveChatModalProps,
  DropZoneDisplayedProps,
  Emojis,
  PredefinidedTextsInterface,
  FindDialogueInChatInterface,
  MessagesViewedOrNot,
} from '../../ChatsSection/ChatsSection.interface';
import { DialoguesBox } from '../DiaolguesBox/DialoguesBox';
import {
  StyledChatsViewConversation,
  StyledFooterButtonsSelectedToConfirm,
  StyledFooterToChat,
  StyledChatsViewSelectedToConfirm,
  StyledHeaderChatsViewSelectedToConfirm,
  StyledPredefinidedTexts,
  StyledFooterPausedButton,
} from './ChatsViewSelectedToConfirm.styles';
import { UploadFiles } from '../UploadFiles/UploadFiles';
import { UploadableFile } from '../UploadFiles/UploadFiles.interface';
import { Message } from '../../../../../../models/chat/chat';
import { baseRestApi } from '../../../../../../api/base';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { preDefinedTextsObject } from '../../ChatsSection/ChatsSection.shared';
import { StyledEmojisContainer } from '../Emojis/Emojis.styled';
import { emojisDisplayedObject } from '../Emojis/Emojis.shared';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { setChatsToSendId } from '../../../../../../redux/slices/live-chat/chat-selected-to-send-id';
import { setChatToTransferById } from '../../../../../../redux/slices/live-chat/chat-selected-to-transfer-by-id';
import { setChatToSetOnConversationInStateId } from '../../../../../../redux/slices/live-chat/chatset-on-conversation';
import { RootState } from '../../../../../../redux';
import { readHistoryChat } from '../../../../../../api/chat';
import { setChatsHistory } from '../../../../../../redux/slices/live-chat/chat-history';
import {
  StyledCopyToClipboardUser,
  StyledNameAndContactSeparator,
} from '../DiaolguesBox/DialoguesBox.styles';

export const ChatsViewSelectedToConfirm: FC<
  SelectedUserProps &
    TabProps &
    ILiveChatModalProps &
    ChatInputDialogueProps &
    UploadableFile &
    DropZoneDisplayedProps &
    Emojis &
    PredefinidedTextsInterface &
    FindDialogueInChatInterface &
    MessagesViewedOrNot
> = ({
  userSelected,
  setUserSelected,
  setActiveByDefaultTab,
  setLiveChatModal,
  setLiveChatPage,
  chatInputDialogue,
  setChatInputDialogue,
  dropZoneDisplayed,
  setDropZoneDisplayed,
  id,
  file,
  errors,
  emojisDisplayed,
  setEmojisDisplayed,
  showPredefinedTexts,
  setShowPredefinedTexts,
}) => {
  const showAlert = useToastContext();
  const toasts = useToastContext();

  const dispatch = useAppDispatch();
  const { userDataInState }: any = useAppSelector(
    (state) => state.userAuthCredentials,
  );
  const { chatsPendings } = useAppSelector(
    (state) => state.liveChat.chatsPendings,
  );
  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );

  const { idClient, idChannel } = useSelector(
    (state: RootState) => state.liveChat.chatsHistoryState,
  );

  const [sendingMessage, setSendingMessage] = React.useState<boolean>(false);

  const [accessToken] = useLocalStorage('AccessToken', '');

  const chatToSetInConversation = chatsPendings?.find(
    (chat) => chat.client.clientId === userSelected,
  );
  const chatToSetInConversationId = chatToSetInConversation?._id;
  const chatToTalkWithUser = chatsOnConversation?.find(
    (chat) => chat.client.clientId === userSelected,
  );

  const chatToTalkWithUserId = chatToTalkWithUser?._id;
  const chatToTalkWithUserNumber = chatToTalkWithUser?.client.clientId;

  const handleCopyTextToClipboard = useCallback(
    (arg: string) => {
      navigator.clipboard.writeText(arg);
      toasts?.addToast({
        alert: Toast.SUCCESS,
        title: '',
        message: `TEXTO COPIADO AL PORTAPAPELES`,
      });
    },
    [toasts],
  );

  const handleSetUserToOnConversation = async () => {
    // if (chatsOnConversation?.length < userDataInState?.maxChatsOnConversation) {
    try {
      await baseRestApi.patch(
        `/chats/initConversation/${chatToSetInConversationId}`,
        {
          accessToken,
        },
      );
      setUserSelected(`${userSelected}` as string);
      setActiveByDefaultTab(1);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `INIT-CONVERSATION-ERROR ${error}`,
      });
    }

    // }
    // } else {
    //   showAlert?.addToast({
    //     alert: Toast.ERROR,
    //     title: 'Máximo de chats alcanzado',
    //     message: `Solo puedes tener ${userDataInState?.maxChatsOnConversation} chats activos`,
    //   });
    // }
  };

  const handleEnterToSendMessage = async (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter' && chatInputDialogue !== '') {
      setChatInputDialogue('');
      const bodyObject: Message = {
        from: userDataInState.role,
        content: chatInputDialogue || '',
        contentType: 'TEXT',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      try {
        if (chatToTalkWithUser?.channel === 'WhatsApp') {
          await baseRestApi.patch(
            `/whatsapp360/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
            bodyObject,
          );
        }
        if (chatToTalkWithUser?.channel === 'Messenger') {
          await baseRestApi.patch(
            `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
            bodyObject,
          );
        }
        if (chatToTalkWithUser?.channel === 'Instagram') {
          await baseRestApi.patch(
            `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
            bodyObject,
          );
        }
        if (chatToTalkWithUser?.channel === 'Webchat') {
          await baseRestApi.patch(
            `/webchat/sendMessageToUser/${chatToTalkWithUserId}`,
            bodyObject,
          );
        }
      } catch (error) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `INIT-CONVERSATION-ERROR ${error}`,
        });
      }
    }
  };

  const handleClickToSendMessage = async () => {
    setChatInputDialogue('');
    const bodyObject: Message = {
      from: userDataInState.role,
      content: chatInputDialogue || '',
      contentType: 'TEXT',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      setSendingMessage(true);
      if (chatToTalkWithUser?.channel === 'WhatsApp') {
        await baseRestApi.patch(
          `/whatsapp360/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Messenger') {
        await baseRestApi.patch(
          `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Instagram') {
        await baseRestApi.patch(
          `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Webchat') {
        await baseRestApi.patch(
          `/webchat/sendMessageToUser/${chatToTalkWithUserId}`,
          bodyObject,
        );
      }
      setSendingMessage(false);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `INIT-CONVERSATION-ERROR ${error}`,
      });
    }
  };

  const handleClickToSendPredefinidedTexts = async (message: string) => {
    const bodyObject: Message = {
      from: userDataInState.role,
      content: message || '',
      contentType: 'TEXT',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      setShowPredefinedTexts(false);
      if (chatToTalkWithUser?.channel === 'WhatsApp') {
        await baseRestApi.patch(
          `/whatsapp360/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Messenger') {
        await baseRestApi.patch(
          `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Instagram') {
        await baseRestApi.patch(
          `/messenger/sendMessageToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          bodyObject,
        );
      }
      if (chatToTalkWithUser?.channel === 'Webchat') {
        await baseRestApi.patch(
          `/webchat/sendMessageToUser/${chatToTalkWithUserId}`,
          bodyObject,
        );
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `INIT-CONVERSATION-ERROR ${error}`,
      });
    }
  };

  const handlePauseConversation = useCallback(
    async (arg: string) => {
      setLiveChatModal(true);
      setLiveChatPage(arg);
      dispatch(
        setChatToSetOnConversationInStateId(chatToTalkWithUser?._id || ''),
      );
    },
    [chatToTalkWithUser?._id, dispatch, setLiveChatModal, setLiveChatPage],
  );

  const handleTransferConversation = (modal: string, open: boolean) => {
    if (chatToTalkWithUserId) {
      setLiveChatPage(modal);
      setLiveChatModal(open);
      dispatch(setChatToTransferById(chatToTalkWithUserId || ''));
    }
  };

  const handleFinishConversation = () => {
    setLiveChatModal(true);
    setLiveChatPage('EndChat');
    dispatch(setChatsToSendId(chatToTalkWithUserId || ''));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInputDialogue(e.target.value);
  };

  const handleClickHistoryChat = async (open: boolean, pages: string) => {
    try {
      const data = await readHistoryChat(idChannel, idClient, 'chats');
      if (data.success === false) {
        dispatch(setChatsHistory([]));
      } else {
        dispatch(setChatsHistory(data));
        setLiveChatModal(open);
        setLiveChatPage(pages);
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `Opps error de historial ${error}`,
      });
    }
  };

  const handlePredefinedTexts = () => {
    setEmojisDisplayed(false);
    setShowPredefinedTexts(!showPredefinedTexts);
  };
  const handleDropZoneDisplayed = () => {
    setDropZoneDisplayed(true);
    setEmojisDisplayed(false);
    setShowPredefinedTexts(false);
  };

  return (
    <StyledChatsViewSelectedToConfirm>
      <StyledHeaderChatsViewSelectedToConfirm>
        <div>
          {chatsOnConversation?.find(
            (chat) => chat.client.clientId === userSelected?.toString(),
          )?.client.profilePic ? (
            <img
              src={
                chatsOnConversation?.find(
                  (chat) => chat.client.clientId === userSelected?.toString(),
                )?.client.profilePic
              }
              alt="profile"
            />
          ) : (
            <SVGIcon iconFile="/icons/user.svg" />
          )}
          <span>
            <Text>
              Cliente
              {chatsOnConversation?.find(
                (chat) =>
                  chat.client.clientId === userSelected &&
                  chat.channel === 'WhatsApp',
              )?.client.clientId ? (
                <StyledCopyToClipboardUser
                  onClick={() =>
                    handleCopyTextToClipboard(String(userSelected))
                  }>
                  <CgClipboard />
                </StyledCopyToClipboardUser>
              ) : null}
              {chatsOnConversation?.find(
                (chat) =>
                  chat.client.clientId === userSelected &&
                  chat.channel === 'Webchat',
              )?.client.clientId ? (
                <StyledCopyToClipboardUser
                  onClick={() =>
                    handleCopyTextToClipboard(String(userSelected))
                  }>
                  <CgClipboard />
                </StyledCopyToClipboardUser>
              ) : null}
            </Text>
            {chatsOnConversation?.find(
              (chat) => chat.client.clientId === userSelected?.toString(),
            ) && (
              <Text>
                {chatsOnConversation?.find(
                  (chat) => chat.client.clientId === userSelected,
                )?.client.name || userSelected}{' '}
                <StyledNameAndContactSeparator />{' '}
                {
                  chatsOnConversation?.find(
                    (chat) =>
                      chat.client.clientId === userSelected &&
                      chat.channel === 'Webchat',
                  )?.client.clientId
                }
                {
                  chatsOnConversation?.find(
                    (chat) =>
                      chat.client.clientId === userSelected &&
                      chat.channel === 'WhatsApp',
                  )?.client.clientId
                }
              </Text>
            )}
            {chatsPendings?.find(
              (chat) => chat.client.clientId === userSelected?.toString(),
            ) && (
              <Text>
                {chatsPendings?.find(
                  (chat) => chat.client.clientId === userSelected,
                )?.client.name || userSelected}
              </Text>
            )}
          </span>
          {chatsOnConversation?.find(
            (user) => user.client.clientId === userSelected,
          )?.hasHistory && (
            <button
              type="button"
              onClick={() => handleClickHistoryChat(true, 'HistoryChat')}>
              <SVGIcon iconFile="/icons/list_icons.svg" />
            </button>
          )}
        </div>
        {chatsOnConversation?.find(
          (user) =>
            user.client.clientId === userSelected?.toString() && !user.isPaused,
        ) && (
          <span>
            {/* este span es para que no se rompa cuando le saco el buscar mensaje */}
            <span />
            <ButtonMolecule
              text="Pausar"
              onClick={() => handlePauseConversation('PauseChat')}
            />
            <ButtonMolecule
              text="Transferir"
              onClick={() => handleTransferConversation('ChatTransfer', true)}
            />
            <ButtonMolecule
              text="Finalizar"
              onClick={handleFinishConversation}
            />
          </span>
        )}
      </StyledHeaderChatsViewSelectedToConfirm>
      {chatsOnConversation?.find(
        (user) => user.client.clientId === userSelected?.toString(),
      ) && (
        <StyledChatsViewConversation>
          <DialoguesBox
            userSelected={userSelected}
            setUserSelected={setUserSelected}
          />
          {dropZoneDisplayed ? (
            <UploadFiles
              id={id}
              file={file}
              errors={errors}
              setDropZoneDisplayed={setDropZoneDisplayed}
              dropZoneDisplayed={dropZoneDisplayed}
              setUserSelected={setUserSelected}
              userSelected={userSelected}
            />
          ) : null}
        </StyledChatsViewConversation>
      )}

      {chatsPendings?.find(
        (user) => user.client.clientId.toString() === userSelected?.toString(),
      ) && (
        <StyledChatsViewConversation>
          <DialoguesBox
            userSelected={userSelected}
            setUserSelected={setUserSelected}
          />
        </StyledChatsViewConversation>
      )}

      {chatsPendings?.find(
        (user) => user.client.clientId.toString() === userSelected?.toString(),
      ) && (
        <StyledFooterButtonsSelectedToConfirm>
          <ButtonMolecule
            text="Iniciar conversación"
            onClick={handleSetUserToOnConversation}
          />
        </StyledFooterButtonsSelectedToConfirm>
      )}

      {chatsOnConversation?.find(
        (user) =>
          user.client.clientId.toString() === userSelected?.toString() &&
          user.isPaused === false,
      ) && (
        <StyledFooterToChat
          setEmojisDisplayed={setEmojisDisplayed}
          emojisDisplayed={emojisDisplayed}
          showPredefinedTexts={showPredefinedTexts}
          setShowPredefinedTexts={setShowPredefinedTexts}>
          <span>
            <StyledEmojisContainer
              setEmojisDisplayed={setEmojisDisplayed}
              emojisDisplayed={emojisDisplayed}>
              {emojisDisplayedObject &&
                emojisDisplayedObject.map((emoji) => (
                  <button
                    type="button"
                    key={emoji.id}
                    // onClick={() => handleEmojiClick(emoji.id)}
                  >
                    <span role="img" aria-label={emoji.id.toString()}>
                      {emoji.emoji}
                    </span>
                  </button>
                ))}
            </StyledEmojisContainer>
            {preDefinedTextsObject.length > 0 && (
              <StyledPredefinidedTexts
                showPredefinedTexts={showPredefinedTexts}
                setShowPredefinedTexts={setShowPredefinedTexts}>
                {preDefinedTextsObject.map((text: any) => (
                  <button
                    key={text.id}
                    type="button"
                    onClick={() => {
                      handleClickToSendPredefinidedTexts(text.text);
                    }}>
                    <span>{Number(text.id) < 10 ? 0 + text.id : text.id}.</span>
                    <SVGIcon iconFile="/icons/ray.svg" />
                    <Text color="gray" size="12px" key={text.text}>
                      {text.text}
                    </Text>
                  </button>
                ))}
              </StyledPredefinidedTexts>
            )}

            <button type="button" onClick={handleDropZoneDisplayed}>
              <SVGIcon iconFile="/icons/clipper.svg" />
            </button>
            {/* <button type="button" onClick={handleSowEmojisButtton}>
              <SVGIcon iconFile="/icons/emojis.svg" />
            </button> */}
            {preDefinedTextsObject.length > 0 && (
              <button type="button" onClick={handlePredefinedTexts}>
                <SVGIcon iconFile="/icons/ray.svg" />
              </button>
            )}
          </span>
          <ContainerInput
            value={chatInputDialogue}
            onChange={handleInputChange}
            placeHolder="Enviar mensaje.."
            setFocus={() => null}
            LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleEnterToSendMessage(e)
            }
          />
          <IconButtonMolecule
            onClick={handleClickToSendMessage}
            state={
              chatInputDialogue === ''
                ? IconButtonState.DISABLED
                : sendingMessage === true
                ? IconButtonState.LOADING
                : IconButtonState.NORMAL
            }
            Icon={() => <SVGIcon iconFile="/icons/paper_plane.svg" />}
          />
        </StyledFooterToChat>
      )}
      {chatsOnConversation &&
        chatsOnConversation?.find(
          (user) =>
            user.client.clientId.toString() === userSelected?.toString() &&
            user.isPaused === true,
        ) && (
          <StyledFooterToChat
            setEmojisDisplayed={setEmojisDisplayed}
            emojisDisplayed={emojisDisplayed}
            showPredefinedTexts={showPredefinedTexts}
            setShowPredefinedTexts={setShowPredefinedTexts}>
            <span
              style={{
                width: '100%',
                display: 'felx',
                justifyContent: 'center',
                height: '100%',
              }}>
              <StyledFooterPausedButton
                type="button"
                onClick={() => handlePauseConversation('ReloadChat')}>
                Reanudar conversación
              </StyledFooterPausedButton>
            </span>
          </StyledFooterToChat>
        )}
    </StyledChatsViewSelectedToConfirm>
  );
};
