import { FC } from 'react';
import { SVGIcon } from '../../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../../atoms/Text/Text';
import { StyledWrapperRequestProcess } from './RequestInProcess.styled';

export const RequestInProcess: FC = () => {
  return (
    <StyledWrapperRequestProcess>
      <Text>Integrar WhatsApp a través del QR de Whatsapp Web</Text>
      <div>
        <div>
          <div>
            <SVGIcon iconFile="/icons/warning.svg" />
          </div>
          <Text>
            Hemos recibido tu solicitud de crear un nuevo canal de WhatsApp (No
            Oficial) saltisfactoriamente.
          </Text>
          <br />
          <Text>
            En este momento el equipo de soporte técnico se encuentra revisando
            tu solicitud en breve recibirás respuesta vía correo electrónico con
            la aprobación del canal que quieres añadir.
          </Text>
        </div>
      </div>
    </StyledWrapperRequestProcess>
  );
};
