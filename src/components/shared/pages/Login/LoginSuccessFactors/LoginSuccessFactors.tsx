import React, { FC, MouseEventHandler } from 'react';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ButtonMolecule, Size } from '../../../atoms/Button/Button';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import {
  StyledLoginSuccessFactors,
  StyledIcon,
  StyledTitleSuccess,
  StyledMessage,
} from './LoginSuccessFactors.styled';

export interface LoginSuccessFactorsProps {
  onClick?: MouseEventHandler;
}

export const LoginSuccessFactors: FC<LoginSuccessFactorsProps> = () => {
  return (
    <LoginViewsWrapper>
      <StyledLoginSuccessFactors>
        <StyledIcon>
          <SVGIcon iconFile="/icons/success.svg" />
        </StyledIcon>
        <StyledTitleSuccess>
          <Text size="16px" weight="600">
            ¡Tu contraseña ha sido cambiada exitosamente!
          </Text>
        </StyledTitleSuccess>
        <StyledMessage>
          <Text size="12px" weight="500">
            No olvides cambiar tu contraseña periódicamente para aumentar la
            seguridad de tu cuenta.
          </Text>
        </StyledMessage>
        <ButtonMolecule text="Ir a la Aplicación" size={Size.MEDIUM} />
      </StyledLoginSuccessFactors>
    </LoginViewsWrapper>
  );
};

export default LoginSuccessFactors;
