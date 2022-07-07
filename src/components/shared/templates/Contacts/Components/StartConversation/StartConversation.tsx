import { FC, useState, useEffect, KeyboardEvent } from 'react';
import {
  StyledStartConversationContainer,
  StyledStartConversationHeader,
  StyledBodyStartConverstion,
  StyledSelectedChannel,
  StyledSelectedNumber,
} from './StartConversation.styled';
import { IStartConversation } from './StartConversation.interface';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { startConversation } from '../../../../../../api/contacts';
import {
  ButtonMolecule,
  Size,
  ButtonState,
} from '../../../../atoms/Button/Button';
import { Textarea } from '../../../../atoms/Textarea/Textarea';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { setComponentSection } from '../../../../../../redux/slices/section/live-chat-section';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { Channels } from '../../../../../../models/chat/chat';

export const StartConversation: FC<IStartConversation> = ({
  setIsOpenModal,
  setActiveByDefaultTab,
  setUserSelected,
  selectedByClient,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [textSending, setTextSending] = useState<string>('');
  const [selectedChannel, setSelectedChannel] = useState<string>('WhatsApp');
  const [selectedNumber, setSelectedNumber] = useState<string>(
    selectedByClient.contactId,
  );
  const [isLoanding, setIsLoanding] = useState<boolean>(false);

  const { dataChannel } = useAppSelector(
    (state) => state.contacts.contactsState,
  );

  const handleSelectNumber = (number: string) => {
    setSelectedNumber(number);
  };

  const handleEnterToSendMessage = async (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (e.key === 'Enter' && textSending !== '') {
      setTextSending('');
      try {
        const response = await startConversation(
          selectedByClient.contactId,
          selectedChannel === 'WhatsApp' ? 'Wassenger' : selectedChannel,
          {
            content: textSending,
            contentType: 'TEXT',
            from: 'AGENT',
          },
        );
        if (response.success === false) {
          showAlert?.addToast({
            alert: Toast.WARNING,
            title: 'Upps!',
            message: `${response}`,
          });
        } else {
          showAlert?.addToast({
            alert: Toast.SUCCESS,
            title: 'Perfecto!',
            message: `${response}`,
          });
          setIsOpenModal(false);
          dispatch(setComponentSection('Chat'));
          setActiveByDefaultTab(1);
          setUserSelected(selectedByClient.contactId);
        }
      } catch (err) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: '¡Upps!',
          message: `${err}`,
        });
      }
    }
  };

  const handleSendMessage = async () => {
    try {
      setIsLoanding(true);
      const response = await startConversation(
        selectedNumber,
        Channels.CHAT_API,
        {
          content: textSending,
          contentType: 'TEXT',
          from: 'AGENT',
        },
      );
      setIsLoanding(false);
      if (response.success === false) {
        showAlert?.addToast({
          alert: Toast.WARNING,
          title: 'Upps!',
          message: `${response}`,
        });
      } else {
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'Perfecto!',
          message: `${response}`,
        });
        setIsOpenModal(false);
        dispatch(setComponentSection('Chat'));
        setActiveByDefaultTab(1);
        setUserSelected(selectedByClient.contactId);
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: '¡Upps!',
        message: `${err}`,
      });
    }
  };

  const handleClose = () => {
    setIsOpenModal(false);
    setSelectedChannel('WhatsApp');
  };

  useEffect(() => {
    setSelectedNumber(selectedByClient.contactId);
  }, [selectedByClient.contactId]);

  return (
    <StyledStartConversationContainer>
      <StyledStartConversationHeader>
        <div>
          {' '}
          <SVGIcon
            iconFile={`/icons/${
              selectedChannel === '' || selectedChannel === Channels.CHAT_API
                ? 'WhatsApp'
                : selectedChannel
            }.svg`}
          />
          <Text>{selectedByClient.name}</Text>
        </div>
        <button type="button" onClick={handleClose}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledStartConversationHeader>
      <StyledBodyStartConverstion>
        <div>
          {selectedByClient.secondaryContact !== '' ? (
            <Text>Selecciona un número de teléfono</Text>
          ) : null}
        </div>
        <div>
          <div>
            <SVGIcon iconFile="/icons/calling.svg" />
            <StyledSelectedNumber
              type="button"
              onClick={() => handleSelectNumber(selectedByClient.contactId)}
              selectStartConversation={
                selectedNumber === selectedByClient.contactId
              }
              selectedByChannel={false}>
              {selectedByClient.secondaryContact ? (
                <div>
                  <div />
                </div>
              ) : null}
              <Text>{selectedByClient.contactId}</Text>
            </StyledSelectedNumber>
            <StyledSelectedNumber
              type="button"
              onClick={() =>
                handleSelectNumber(selectedByClient.secondaryContact)
              }
              selectStartConversation={
                selectedNumber === selectedByClient.secondaryContact
              }
              selectedByChannel={false}>
              {selectedByClient.secondaryContact ? (
                <div>
                  <div />
                </div>
              ) : null}
              <Text>{selectedByClient.secondaryContact}</Text>
            </StyledSelectedNumber>
          </div>
          {/* <SVGIcon iconFile="/icons/ray.svg" /> */}
        </div>
        <div>
          {dataChannel.length > 1 ? <Text>Selecciona un canal</Text> : null}
          <div>
            {dataChannel.length > 1
              ? dataChannel.map((item) => (
                  <StyledSelectedChannel
                    key={item._id}
                    onClick={() => setSelectedChannel(item.name)}
                    selectedByChannel={selectedChannel === item.name}
                    selectStartConversation={false}>
                    <SVGIcon iconFile={`/icons/${item.name}.svg`} />
                    <Text>{item.name}</Text>
                  </StyledSelectedChannel>
                ))
              : null}
          </div>
        </div>
        <div>
          <Textarea
            placeholder="Enviar mensaje..."
            onChange={(e) => setTextSending(e.target.value)}
            onKeyPress={(e: KeyboardEvent<HTMLTextAreaElement>) =>
              handleEnterToSendMessage(e)
            }
          />
          <ButtonMolecule
            text="Iniciar Conversación"
            size={Size.MEDIUM}
            onClick={handleSendMessage}
            state={isLoanding ? ButtonState.LOADING : ButtonState.NORMAL}
          />
        </div>
      </StyledBodyStartConverstion>
    </StyledStartConversationContainer>
  );
};
