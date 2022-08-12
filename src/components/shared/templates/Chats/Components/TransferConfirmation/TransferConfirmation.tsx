import { FC, useState } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
  ButtonState,
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

  const [isLoandingTransfer, setIsLoandingTransfer] = useState<boolean>(false);
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
    setIsLoandingTransfer(true);
    try {
      const response = await transferConversation(
        chatToTransferById,
        userToTransferById,
      );

      setLiveChatModal(false);
      if (response.success === false) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `Disculpe presentamos problemas para transferir.`,
        });
      } else {
        dispatch(
          setChatsOnConversation(
            chatsOnConversation.filter(
              (chat) => chat._id !== chatToTransferById,
            ),
          ),
        );
        setUserSelected('');
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${error}`,
      });
    }
    setIsLoandingTransfer(false);
  };
  const handleCancelTransfer = () => {
    setLiveChatPage('ChatTransfer');
    setIsLoandingTransfer(false);
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
          onClick={handleCancelTransfer}
        />
        <ButtonMolecule
          text="Transferir"
          size={Size.MEDIUM}
          state={isLoandingTransfer ? ButtonState.DISABLED : ButtonState.NORMAL}
          onClick={() => handleClickChatToTransfer()}
        />
      </StyledFooterTransferConfirmation>
    </StyledTransferConfirmation>
  );
};
