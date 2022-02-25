import { FC } from 'react';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import {
  StyledIntructionsInstagram,
  StyledInstructionsBody,
} from './InstructionsInstagram.styled';

export const InstructionsInstagram: FC = () => {
  return (
    <StyledIntructionsInstagram>
      <Text>Agregar una cuenta de instagram</Text>
      <StyledInstructionsBody>
        <div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text size="12px" weight="400">
              Abre tu página de Facebook.
            </Text>
          </div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text size="12px" weight="400">
              Selecciona Configuración en el menú de la izquierda.
            </Text>
          </div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text size="12px" weight="400">
              Selecciona Instagram.
            </Text>
          </div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text size="12px" weight="400">
              Para agregar una cuenta de Instagram a tu página. selecciona
              Conectar cuenta. Asegúrate que la opción Permitir acceso a los
              mensajes de Instagram en la bandeja de entrada este activa y has
              click en Continuar. Ingresa nombre de usuario y tu contraseña de
              Instagram, y selecciona iniciar sesión.
            </Text>
            <Text>
              Si no tienes cuenta comercial, se te pedirá que conviertas tu
              cuenta en una.
            </Text>
          </div>
        </div>
      </StyledInstructionsBody>
    </StyledIntructionsInstagram>
  );
};
