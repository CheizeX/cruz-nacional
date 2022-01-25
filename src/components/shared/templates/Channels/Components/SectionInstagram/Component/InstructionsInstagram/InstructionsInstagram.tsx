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
              Selecciona Configuracion en el menú de la izquierda.
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
              Para agregar una cuenta de instagram a tu pagina. selecciona
              Conectar cuenta. Asegurate que la opción Permitir acceso a los
              mensajes de Instagran en la bandeja de entrada este activa y has
              click en Continuar. Ingresa nombre de usuario y tu contraseña de
              instagram, y selecciona iniciar sesión
            </Text>
            <Text>
              Si no tienes cuenta comercial, se te pedira que conviertas tu
              cuenta comercial en una.
            </Text>
          </div>
        </div>
      </StyledInstructionsBody>
    </StyledIntructionsInstagram>
  );
};
