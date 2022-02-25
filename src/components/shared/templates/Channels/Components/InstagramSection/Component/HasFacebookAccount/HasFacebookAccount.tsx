import { FC } from 'react';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import { StyledWrapperHasFacebook } from './HasFacebookAccount.styled';

export const HasFacebookAccount: FC = () => {
  return (
    <StyledWrapperHasFacebook>
      <div>
        <SVGIcon iconFile="/icons/warning.svg" />
      </div>
      <div>
        <Text>
          Aun no tienes una cuenta de Messenger vinculada a Elipse Chat.
        </Text>
        <Text>
          Para poder agregar un canal de Instagram primero debes tener agregado
          un canal de Messenger.
        </Text>
        <Text>
          Ingresa a la sesión de añadir canales, donde podrás vincular tu cuenta
          de Messenger.
        </Text>
      </div>
    </StyledWrapperHasFacebook>
  );
};
