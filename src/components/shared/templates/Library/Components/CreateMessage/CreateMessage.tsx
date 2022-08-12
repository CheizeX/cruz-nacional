import { FC, useState } from 'react';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Textarea } from '../../../../atoms/Textarea/Textarea';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { IPropsResponse } from '../../../Configuration/Components/ChatsConfig/AgentChatsConfig/PredefinedInteractionsMessages/PredefinedInteractionsMessages.interface';
import { IPropsCreateMessage } from './CreateMessage.interface';
import {
  StyledWrapperCreateMessage,
  StyledHeaderCreateMessage,
  StyledBodyCreateMessage,
  StyledFooterCreateMessage,
  StyledMessageContainer,
} from './CreateMessage.styled';

export const CreateMessage: FC<IPropsCreateMessage> = ({
  setIsLibraryModal,
}) => {
  const [titleMessage, setTitleMessage] = useState<string>('');
  const [contentMessage, setContentMessage] = useState<string>('');
  const [containerMessage, setContainerMessage] = useState<
    Array<IPropsResponse>
  >([]);
  const generateId = Math.floor(Math.random() * 999999);

  const handleCreateMessage = () => {
    if (titleMessage && contentMessage) {
      setContainerMessage([
        ...containerMessage,
        {
          _id: generateId.toString(),
          title: titleMessage,
          content: contentMessage,
        },
      ]);
      setTitleMessage('');
      setContentMessage('');
    }
  };

  return (
    <StyledWrapperCreateMessage>
      <StyledHeaderCreateMessage>
        <Text>Crear Mensaje</Text>
        <button type="button" onClick={() => setIsLibraryModal(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderCreateMessage>
      <StyledBodyCreateMessage>
        <div>
          <Text>Título</Text>
          <div>
            <ContainerInput
              placeHolder="Título..."
              value={titleMessage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitleMessage(e.target.value)
              }
            />
            <button type="button" onClick={handleCreateMessage}>
              <SVGIcon iconFile="/icons/create-tag-button.svg" />
            </button>
          </div>
        </div>
        <div>
          <Text>Contenido</Text>
          <Textarea
            placeholder="Contenido..."
            value={contentMessage}
            onChange={(e) => setContentMessage(e.target.value)}
          />
        </div>
      </StyledBodyCreateMessage>
      <StyledMessageContainer>
        {containerMessage &&
          containerMessage.map((message) => (
            <div key={message._id}>
              <Text>{message.title}</Text>
            </div>
          ))}
      </StyledMessageContainer>
      <StyledFooterCreateMessage>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
        />
        <ButtonMolecule text="Guardar" size={Size.MEDIUM} />
      </StyledFooterCreateMessage>
    </StyledWrapperCreateMessage>
  );
};
