import { FC } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledTransferConfirmation,
  StyledIconTransferConfirmation,
  StyledInformationTransferConfirmation,
  StyledFooterTransferConfirmation,
} from './TransferConfirmation.styles';
import { TranferConfirmationProps } from './TransferConfirmation.Interface';
import { transferConversation } from '../../../../../../api/chat';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { SelectedUserProps } from '../../ChatsSection/ChatsSection.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { setChatsOnConversation } from '../../../../../../redux/slices/live-chat/on-conversation-chats';

export const TransferConfirmation: FC<
  TranferConfirmationProps & SelectedUserProps
> = ({ agent, setLiveChatPage, setLiveChatModal, setUserSelected }) => {
  const showAlert = useToastContext();

  const dispatch = useAppDispatch();
  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { chatToTransferById } = useAppSelector(
    (state) => state.liveChat.chatSelectedToTransferById,
  );
  const { userToTransferById } = useAppSelector(
    (state) => state.liveChat.userSelectedToTransferById,
  );

  const handleClickChatToTransfer = async () => {
    try {
      await transferConversation(chatToTransferById, userToTransferById);

      setLiveChatModal(false);

      dispatch(
        setChatsOnConversation(
          chatsOnConversation.filter((chat) => chat._id !== chatToTransferById),
        ),
      );

      setUserSelected('');
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${error}`,
      });
    }
  };

  return (
    <StyledTransferConfirmation>
      <StyledIconTransferConfirmation>
        <SVGIcon iconFile="/icons/icon_transfer_confirmation.svg" />
      </StyledIconTransferConfirmation>
      <StyledInformationTransferConfirmation>
        <Text>¿Deseas transferir este chat a {`${agent}`}?</Text>
        <Text>
          Una vez transferido este chat no podrás hacer seguimiento de ésta
          conversación
        </Text>
      </StyledInformationTransferConfirmation>
      <StyledFooterTransferConfirmation>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={() => setLiveChatPage('ChatTransfer')}
        />
        <ButtonMolecule
          text="Transferir"
          size={Size.MEDIUM}
          onClick={() => handleClickChatToTransfer()}
        />
      </StyledFooterTransferConfirmation>
    </StyledTransferConfirmation>
  );
};
