import { FC, useCallback } from 'react';
import { baseRestApi } from '../../../../../../api/base';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { setOneChatOnConversation } from '../../../../../../redux/slices/live-chat/on-conversation-chats';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { ILiveChatModalProps } from '../../ChatsSection/ChatsSection.interface';
import {
  StyledPausedChatBody,
  StyledPauseChatHeader,
  StyledPauseConversationModal,
  StyledPausedChatFooter,
} from './ReloadChat.styled';

export const ReloadChat: FC<ILiveChatModalProps> = ({ setLiveChatModal }) => {
  const [accessToken] = useLocalStorage('AccessToken', '');
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();

  const { chatToSetOnConversationInStateId } = useAppSelector(
    (state) => state.liveChat.chatToSetOnConversationIdToState,
  );

  const handleReloadClick = useCallback(async () => {
    try {
      const response = await baseRestApi.patch(
        `/chats/pauseConversation/${chatToSetOnConversationInStateId}`,
        {
          accessToken,
        },
      );
      dispatch(setOneChatOnConversation(response));
      setLiveChatModal(false);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `PAUSE-CONVERSATION-ERROR ${error}`,
      });
    }
  }, [
    chatToSetOnConversationInStateId,
    setLiveChatModal,
    showAlert,
    accessToken,
    dispatch,
  ]);

  return (
    <StyledPauseConversationModal>
      <StyledPauseChatHeader>
        <Text>Retomar conversación</Text>
        <button type="button" onClick={() => setLiveChatModal(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledPauseChatHeader>
      <StyledPausedChatBody>
        <SVGIcon iconFile="/icons/icon_transfer_confirmation.svg" />
        <Text>¿Estás seguro que deseas retomar esta conversación?</Text>
        <Text>La conversación se reanudará al instante. </Text>
      </StyledPausedChatBody>
      <StyledPausedChatFooter>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={() => setLiveChatModal(false)}
        />
        <ButtonMolecule
          text="Retomar"
          size={Size.MEDIUM}
          onClick={handleReloadClick}
        />
      </StyledPausedChatFooter>
    </StyledPauseConversationModal>
  );
};
