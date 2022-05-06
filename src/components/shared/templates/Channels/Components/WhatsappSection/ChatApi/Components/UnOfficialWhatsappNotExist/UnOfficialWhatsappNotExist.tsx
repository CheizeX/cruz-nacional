import { FC } from 'react';
import { Checkbox } from '../../../../../../../atoms/Checkbox/Checkbox';
import { Text } from '../../../../../../../atoms/Text/Text';
import { StyledWrapperUnOfficialWhatsappNotExist } from './UnOfficialWhatsappNotExist.styled';
import { IUnOfficialNotExist } from './UnOfficialWhatsappNotExist.interface';
import { SVGIcon } from '../../../../../../../atoms/SVGIcon/SVGIcon';

export const UnOfficialWhatsappNotExist: FC<IUnOfficialNotExist> = ({
  setVerifiedRequest,
  verifiedRequest,
}) => {
  const handleVerifiedRequest = () => {
    setVerifiedRequest(!verifiedRequest);
  };
  return (
    <StyledWrapperUnOfficialWhatsappNotExist>
      <Text>Integrar WhatsApp a través del QR de Whatsapp Web</Text>
      <div>
        <div>
          <div>
            <SVGIcon iconFile="/icons/icon_transfer_confirmation.svg" />
          </div>
          <Text>
            Para poder integrar el canal de Whatsapp QR. Solicitaremos a nuestro
            equipo de soporte técnico la integración del canal. Una vez aprobada
            te informaremos vía correo electrónico para que puedas continuar con
            el proceso.
          </Text>
          <br />
          <Text>
            Si te encuentras dentro del horario de atención en pocos minutos
            recibirás respuesta de nuestro equipo soporte.
          </Text>
          <div>
            <Checkbox
              checked={verifiedRequest}
              onClick={handleVerifiedRequest}
            />
            <Text>¿Estás dispuesto a continuar con el proceso?</Text>
          </div>
        </div>
      </div>
    </StyledWrapperUnOfficialWhatsappNotExist>
  );
};
