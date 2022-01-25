import { FC } from 'react';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import {
  StyledOnboardingExpired,
  StyledIcon,
  StyledHeader,
  StyledInformation,
} from './OnboardingExpiredInvitation.styled';

export const OnboardingExpiredInvitation: FC = () => {
  return (
    <LoginViewsWrapper>
      <StyledOnboardingExpired>
        <StyledIcon>
          <SVGIcon iconFile="/icons/icon_expired_invitation.svg" />
        </StyledIcon>
        <StyledHeader>
          <Text>¡Esta invitación ha expirado!</Text>
        </StyledHeader>
        <StyledInformation>
          <Text>
            Lamentablemente no podrás crear una cuenta hasta recibir una nueva
            invitación.
          </Text>
          <br />
          <Text>
            Contáctate con su remitente y solicita una nueva invitación.
          </Text>
        </StyledInformation>
      </StyledOnboardingExpired>
    </LoginViewsWrapper>
  );
};
