import { FC } from 'react';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import { StyledWrapperOfficialWhatsappRejected } from './OfficialWhatsappRejected.styled';

export const OfficialWhatsappRejected: FC = () => {
  return (
    <StyledWrapperOfficialWhatsappRejected>
      <div>
        <SVGIcon iconFile="/icons/danger.svg" />
      </div>
      <div>
        <Text>Ups no se pudo añadir tu canal de whatsapp</Text>
        <Text>
          Te recomendamos comunicarte con tu proveedor de servicio o verificar
          nuevamente los datos ingresados.
        </Text>
      </div>
    </StyledWrapperOfficialWhatsappRejected>
  );
};
