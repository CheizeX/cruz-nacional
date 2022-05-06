import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';
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
  const router = useRouter();

  return (
    <LoginViewsWrapper>
      <StyledWrapper>
        <StyledHeader>
          <BiArrowBack
            onClick={() => router.push('/request-password-change/')}
          />
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
