import React, { FC } from 'react';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import {
  StyledWrapper,
  StyledHeader,
  StyledInformation,
  StyledIconsWrapper,
} from './ExpiredChangePasswordLink.styled';

export const ExpiredChangePasswordLink: FC = () => {
  return (
    <LoginViewsWrapper>
      <StyledWrapper>
        <StyledHeader>
          <SVGIcon iconFile="/icons/collapse-left.svg" />
          <Text>Volver</Text>
        </StyledHeader>
        <StyledInformation>
          <Text>Lo sentimos!</Text>
          <br />
          <Text>
            Te informamos que el link de cambio de contraseña ha expirado.
          </Text>
        </StyledInformation>
        <StyledIconsWrapper>
          <SVGIcon iconFile="/icons/sidebar_disponibilidad.svg" />
          <SVGIcon iconFile="/icons/warning.svg" />
        </StyledIconsWrapper>
      </StyledWrapper>
    </LoginViewsWrapper>
  );
};
