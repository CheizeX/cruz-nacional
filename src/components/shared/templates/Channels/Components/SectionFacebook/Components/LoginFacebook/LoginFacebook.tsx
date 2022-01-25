import { FC } from 'react';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import { IPropsLoginFacebook } from './LoginFacebook.interface';
import {
  StyledButtonFacebook,
  StyledLoginFacebook,
} from './LoginFacebook.styled';

export const LoginFacebook: FC<IPropsLoginFacebook> = ({ handleAuth }) => {
  return (
    <StyledLoginFacebook>
      <div>
        <div>
          <Text>Iniciar sesión con Messenger</Text>
          <span>Para continuar deberas acceder a tu cuenta de facebook.</span>
        </div>
        <SVGIcon iconFile="/icons/Messenger.svg" />
      </div>
      <StyledButtonFacebook type="button" onClick={handleAuth}>
        <SVGIcon iconFile="/icons/icons8-facebook.svg" />
        <Text>Continuar con Facebook</Text>
      </StyledButtonFacebook>
    </StyledLoginFacebook>
  );
};
