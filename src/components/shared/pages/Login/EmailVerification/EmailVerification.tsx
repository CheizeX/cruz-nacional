import React, { FC } from 'react';
import { ButtonMolecule, Size } from '../../../atoms/Button/Button';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { LinkToMolecule } from '../../../molecules/LinkTo/LinkTo';
import {
  StyledGeneralWrapper,
  StyledEmailVerificationContainer,
  StyledEmailVerificationWrapper,
  StyledHeader,
  StyledInformation,
  StyledFooter,
} from './EmailVerification.styled';

export const EmailVerification: FC = () => {
  return (
    <StyledGeneralWrapper>
      <StyledEmailVerificationContainer>
        <StyledEmailVerificationWrapper>
          <StyledHeader>
            <SVGIcon iconFile="/icons/logo_Icon.svg" />
            <SVGIcon iconFile="/icons/ailalia.svg" />
          </StyledHeader>
          <StyledInformation>
            <Text>
              ¡Hemos recibido tu solicitud para cambiar tu contraseña!
            </Text>
            <Text>
              Para cambiar tu contraseña has click en el siguiente botón:
            </Text>
            <ButtonMolecule text="Cambiar mi contraseña" size={Size.MEDIUM} />
            <Text>
              Si no has solicitado un cambio de contraseña, por favor omite este
              correo o comunícate con nosotros para notificar este incidente.
            </Text>
            <Text>
              Esta solicitud de cambio de contraseña tiene una vigencia de 12
              horas, a partir del momento en que es emitida.
            </Text>
          </StyledInformation>
        </StyledEmailVerificationWrapper>
        <StyledFooter>
          <div>
            <LinkToMolecule text="Condiciones del Servicio" />
            <LinkToMolecule text="Políticas de Seguridad" />
            <LinkToMolecule text="Ayuda" href="/home" />
          </div>
          <Text>Elipse &copy; 2021</Text>
        </StyledFooter>
      </StyledEmailVerificationContainer>
    </StyledGeneralWrapper>
  );
};
