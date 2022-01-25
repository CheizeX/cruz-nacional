import { FC } from 'react';
import { useRouter } from 'next/router';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ButtonMolecule, Size } from '../../../atoms/Button/Button';
import {
  StyledOnboardingAccepted,
  StyledIcon,
  StyledHeader,
  StyledInformation,
} from './OnboardingAcceptedInvitation.styled';

export const OnboardingAcceptedInvitation: FC = () => {
  const { push } = useRouter();
  const handleClickLogin = () => {
    push('/');
  };
  return (
    <LoginViewsWrapper>
      <StyledOnboardingAccepted>
        <StyledIcon>
          <SVGIcon iconFile="/icons/user_Accept.svg" />
        </StyledIcon>
        <StyledHeader>
          <Text>¡Ya tienes una cuenta creada!</Text>
        </StyledHeader>
        <StyledInformation>
          <Text>
            Para acceder dirígite a nuestra aplicación e inicia sesión indicando
            tu correo electrónico.
          </Text>
        </StyledInformation>
        <ButtonMolecule
          onClick={handleClickLogin}
          text="Ir a la aplicación"
          size={Size.MEDIUM}
        />
      </StyledOnboardingAccepted>
    </LoginViewsWrapper>
  );
};
