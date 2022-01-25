import { FC } from 'react';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import {
  StyledOnboardingError,
  StyledIcon,
  StyledHeader,
  StyledInformation,
} from './OnboardingErrorInvitation.styled';

export const OnboardingErrorInvitation: FC = () => {
  return (
    <LoginViewsWrapper>
      <StyledOnboardingError>
        <StyledIcon>
          <SVGIcon iconFile="/icons/danger.svg" />
        </StyledIcon>
        <StyledHeader>
          <Text>¡Se produjo un error en el servidor!</Text>
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
      </StyledOnboardingError>
    </LoginViewsWrapper>
  );
};
