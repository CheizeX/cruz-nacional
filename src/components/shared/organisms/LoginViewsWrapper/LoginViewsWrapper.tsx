import React, { FC } from 'react';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import {
  StyledBackgroundLogin,
  StyledLoginWrapper,
  StyledLoginHeader,
  StyledLoginFooter,
} from './LoginViewsWrapper.styled';
import { ILoginProps } from './LoginViewWrapper.interface';

export const LoginViewsWrapper: FC<ILoginProps> = ({ children }) => {
  return (
    <>
      <StyledBackgroundLogin>
        <span>
          <SVGIcon iconFile="/images/MaskGroup.svg" />
        </span>
        <StyledLoginWrapper>
          <StyledLoginHeader>
            {/* <SVGIcon iconFile="icons/logo_Icon.svg" />
          <SVGIcon iconFile="icons/Trazado_ailalia.svg" /> */}
            <img src="/images/elipse-chat-blanco.png" alt="sidebar-1" />
          </StyledLoginHeader>
          {children}
          <StyledLoginFooter>
            <span>Elipse &copy; {new Date().getFullYear()}</span>
          </StyledLoginFooter>
        </StyledLoginWrapper>
      </StyledBackgroundLogin>
    </>
  );
};
