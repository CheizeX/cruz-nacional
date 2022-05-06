import { FC } from 'react';
import { ButtonMolecule, Size } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { StyledIcon } from '../DeleteContact/DeleteContact.styled';
import {
  StyledRejectConversationContainer,
  StyledInformationRejectContact,
} from './RejectConversation.styled';
import { IRejectConversation } from './RejectConversation.interface';

export const RejectConversation: FC<IRejectConversation> = ({
  setIsOpenModal,
  conversationStartError,
}) => {
  return (
    <StyledRejectConversationContainer
      conversationStartError={conversationStartError}>
      <StyledIcon>
        <SVGIcon iconFile="/icons/warning.svg" />
      </StyledIcon>
      <StyledInformationRejectContact
        conversationStartError={conversationStartError}>
        {conversationStartError ? (
          <>
            <Text>
              Para poder iniciar una conversacion necesitas tener el canal de
              Chat API integrado.
            </Text>
            <Text>
              Para vincular el canal de Chat API (WhatsApp no oficial) un
              administrador deberá agregarlo desde la sesión de canales.
            </Text>
          </>
        ) : (
          <>
            <Text>
              Este contacto se encuentra en una conversación actualmente
            </Text>
            <Text>
              Deberás esperar a que el agente termine la comunicación para poder
              iniciar una conversación.
            </Text>
          </>
        )}
      </StyledInformationRejectContact>
      <div>
        <ButtonMolecule
          text="Cerrar"
          size={Size.MEDIUM}
          onClick={() => setIsOpenModal(false)}
        />
      </div>
    </StyledRejectConversationContainer>
  );
};
