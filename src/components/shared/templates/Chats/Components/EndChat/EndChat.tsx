/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sonarjs/no-duplicate-string */
import { FC, useState, useCallback } from 'react';
import Select from 'react-select';
import {
  StyledEndChat,
  StyledEndChatHeader,
  StyledEndChatBody,
  StyledEndChatFooter,
  WrapperVisualRadio,
  StyledFuntionalRadio,
} from './EndChat.styled';
import { IEndChatProps } from './EndChat.interface';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { endChat } from '../../../../../../api/chat';
import { ChatFinishedStatus } from '../../../../../../models/chat/chat';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledRadioPurple,
  StyledRadioGray,
} from '../../../../organisms/Users/UserCreate/UserCreate.styled';
import { Textarea } from '../../../../atoms/Textarea/Textarea';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { ModalMolecule } from '../../../../molecules/Modal/Modal';
import { EndChatConfirmation } from '../EndChatConfirmation/EndChatConfirmation';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { setChatsOnConversation } from '../../../../../../redux/slices/live-chat/on-conversation-chats';
import { SelectedUserProps } from '../../ChatsSection/ChatsSection.interface';
import { TypifiedClosures } from './TypifiedClosures';

export const EndChat: FC<IEndChatProps & SelectedUserProps> = ({
  setLiveChatModal,
  setUserSelected,
}) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();

  const [isLoanding, setIsLoanding] = useState<boolean>(false);
  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { chatSelectedToSendId } = useAppSelector(
    (state) => state.liveChat.chatSelectedToSendId,
  );
  const { companyId } = useAppSelector(
    (state) => state.userAuthCredentials.userDataInState,
  );

  const optionsToMap = TypifiedClosures.map(({ option }) => ({
    value: option,
    label: option,
  }));

  const [reviewConversation, setReviewConversation] = useState('');
  const [openEndChat, setOpenEndChat] = useState<boolean>(false);
  const [realInputValue, setRealInputValue] = useState('');
  const [isComment, setIsComment] = useState<string>(
    companyId === '62a3c8c92ca8cd7252a24155' && TypifiedClosures.length > 0
      ? optionsToMap[0].value
      : '',
  );

  const colourStyles = {
    control: (styles: any, { isFocused, isSelected }: any) => {
      return {
        ...styles,
        marginTop: '20px',
        fontSize: '12px',
        ...((isFocused || isSelected) && {
          color: '#FFF',
          outline: '1px solid #8520D0',
          border: '1px solid #8520D0',
          '&:hover': {
            outline: '1px solid #8520D0',
            border: '1px solid #8520D0',
            boxShadow: 'none',
          },
        }),
      };
    },
    option: (styles: any, { isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        color: 'black',
        fontSize: '12px',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ...(isSelected && {
          backgroundColor: '#8520D0',
          color: '#FFF',
        }),
        ...(isFocused && {
          backgroundColor: '#876CD0',
          color: '#FFF',
        }),
      };
    },
  };

  const handleInputsClicks = (val: string, val2: string) => {
    setRealInputValue(val);
    setReviewConversation(val2);
  };

  const handleFinishedChat = useCallback(async () => {
    try {
      setIsLoanding(true);
      const response = await endChat(chatSelectedToSendId, {
        finishedStatus: realInputValue as ChatFinishedStatus,
        feedback: isComment,
      });
      if (response.success !== false) {
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: '¡Perfecto!',
          message: 'Gracias por dejar su comentario',
        });
        dispatch(
          setChatsOnConversation(
            chatsOnConversation.filter(
              (chat) => chat._id !== chatSelectedToSendId,
            ),
          ),
        );
        setUserSelected('');
        setRealInputValue('');
        setIsComment('');
        setLiveChatModal(false);
        setOpenEndChat(false);
        setReviewConversation('');
      } else {
        setUserSelected('');
        setRealInputValue('');
        setIsComment('');
        setLiveChatModal(false);
        setOpenEndChat(false);
        setReviewConversation('');
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'Error!',
          message: 'Lo sentimos no pudimos finalizar el chat',
        });
      }
      setIsLoanding(false);
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [
    chatSelectedToSendId,
    chatsOnConversation,
    dispatch,
    isComment,
    realInputValue,
    setLiveChatModal,
    setUserSelected,
    showAlert,
  ]);

  const handleClickClose = () => {
    setIsComment('');
    setRealInputValue('');
    setLiveChatModal(false);
  };
  const handleOpenToConfirmation = () => {
    setOpenEndChat(true);
  };

  return (
    <StyledEndChat openEndChat={openEndChat}>
      <StyledEndChatHeader>
        <Text color="black">Finalizar Chat</Text>
        <button type="button" onClick={handleClickClose}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledEndChatHeader>
      <StyledEndChatBody>
        <Text color="black">Estado de Finalización</Text>
        <StyledFuntionalRadio>
          <input
            type="radio"
            id="finishedStatus"
            name="finishedStatus"
            onClick={() => handleInputsClicks('SATISFACTORY', 'SATISFACTORIO')}
          />
          <input
            type="radio"
            id="finishedStatus"
            name="finishedStatus"
            onClick={() =>
              handleInputsClicks('UNSATISFACTORY', 'INSATISFACTORIO')
            }
          />
        </StyledFuntionalRadio>
        <WrapperVisualRadio>
          {reviewConversation === 'SATISFACTORIO' ? (
            <StyledRadioPurple>
              <div />
            </StyledRadioPurple>
          ) : (
            <StyledRadioGray>
              <div />
            </StyledRadioGray>
          )}
          <button
            type="button"
            onClick={() => handleInputsClicks('SATISFACTORY', 'SATISFACTORIO')}>
            Satisfactorio
          </button>
          {reviewConversation === 'INSATISFACTORIO' ? (
            <StyledRadioPurple>
              <div />
            </StyledRadioPurple>
          ) : (
            <StyledRadioGray>
              <div />
            </StyledRadioGray>
          )}
          <button
            type="button"
            onClick={() =>
              handleInputsClicks('UNSATISFACTORY', 'INSATISFACTORIO')
            }>
            Insatisfactorio
          </button>
        </WrapperVisualRadio>
        {/* Validado con el companyId de SALUD TOTAL */}
        {TypifiedClosures.length > 0 &&
        companyId === '62a3c8c92ca8cd7252a24155' ? (
          <>
            <Text color="black">Tipo de finalización</Text>
            <Select
              options={optionsToMap}
              defaultValue={optionsToMap[0]}
              styles={colourStyles}
              onChange={(option) =>
                setIsComment((option && option.value) || '')
              }
            />
          </>
        ) : (
          <>
            <Text color="black">Comentario (Opcional)</Text>
            <Textarea
              name="feedback"
              id="feedback"
              value={isComment}
              onChange={(e) => setIsComment(e.target.value)}
            />
          </>
        )}
      </StyledEndChatBody>
      <StyledEndChatFooter openEndChat={openEndChat}>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={() => setLiveChatModal(false)}
        />
        <ButtonMolecule
          text="Finalizar"
          size={Size.MEDIUM}
          onClick={() => handleOpenToConfirmation()}
          state={
            realInputValue.length < 1
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
        <ModalMolecule isModal={openEndChat} setModal={setOpenEndChat}>
          <EndChatConfirmation
            setLiveChatModal={() => null}
            setOpenEndChat={setOpenEndChat}
            handleFinishedChat={handleFinishedChat}
            isLoanding={isLoanding}
          />
        </ModalMolecule>
      </StyledEndChatFooter>
    </StyledEndChat>
  );
};
