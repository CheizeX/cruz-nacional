import React, { FC } from 'react';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import {
  StyledWrapper,
  StyledHeader,
  StyledInformation,
  StyledIconsWrapper,
} from './UsedChangePasswordLink.styled';

export const UsedChangePasswordLink: FC = () => {
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
            Te informamos que el link de cambio de contraseña con el que
            intentas acceder ya ha sido utilizado.
          </Text>
        </StyledInformation>
        <StyledIconsWrapper>
          <SVGIcon iconFile="/icons/sidebar_invitaciones.svg" />
          <SVGIcon iconFile="/icons/danger.svg" />
        </StyledIconsWrapper>
      </StyledWrapper>
    </LoginViewsWrapper>
  );
};
