import { FC, useState } from 'react';
import { Field, Form, Formik } from 'formik';
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

interface Values {
  finishedStatus: string;
  feedback: string;
}

export const EndChat: FC<IEndChatProps> = ({ setLiveChatModal }) => {
  const showAlert = useToastContext();

  const dispatch = useAppDispatch();
  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { chatSelectedToSendId } = useAppSelector(
    (state) => state.liveChat.chatSelectedToSendId,
  );

  const [reviewConversation, setReviewConversation] = useState('');
  const [openEndChat, setOpenEndChat] = useState<boolean>(false);
  const [realInputValue, setRealInputValue] = useState('');

  const initialValues = {
    finishedStatus: '',
    feedback: '',
  };
  const onSubmit = async (
    values?: Partial<Values>,
    submitProps?: {
      setSubmitting: (arg0: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      if (realInputValue) {
        await endChat(chatSelectedToSendId, {
          finishedStatus: realInputValue as ChatFinishedStatus,
          feedback: values?.feedback || '',
        });
        submitProps?.setSubmitting(false);
        submitProps?.resetForm();
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
      }
      setLiveChatModal(false);
      setOpenEndChat(false);
      setReviewConversation('');
      setRealInputValue('');
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${error}`,
      });
      submitProps?.resetForm();
    }
  };

  const handleClickClose = () => {
    setLiveChatModal(false);
  };
  const handleOpenToConfirmation = () => {
    setOpenEndChat(true);
  };
  const handleInputsClicks = (val: string, val2: string) => {
    setRealInputValue(val);
    setReviewConversation(val2);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ submitForm }) => {
        return (
          <StyledEndChat openEndChat={openEndChat}>
            <Form>
              <StyledEndChatHeader>
                <Text color="black">Finalizar Chat</Text>
                <button type="button" onClick={() => handleClickClose()}>
                  <SVGIcon iconFile="/icons/times.svg" />
                </button>
              </StyledEndChatHeader>
              <StyledEndChatBody>
                <Text color="black">Estado de Finalización</Text>
                <StyledFuntionalRadio>
                  <Field
                    type="radio"
                    id="finishedStatus"
                    name="finishedStatus"
                    onClick={() =>
                      handleInputsClicks('SATISFACTORY', 'SATISFACTORIO')
                    }
                  />
                  <Field
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
                    onClick={() =>
                      handleInputsClicks('SATISFACTORY', 'SATISFACTORIO')
                    }>
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
                <Text color="black">Comentario (Opcional)</Text>
                <Field
                  as={Textarea}
                  name="feedback"
                  id="feedback"
                  type="text"
                />
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
                    submitForm={submitForm}
                  />
                </ModalMolecule>
              </StyledEndChatFooter>
            </Form>
          </StyledEndChat>
        );
      }}
    </Formik>
  );
};
