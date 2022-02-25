import { FC } from 'react';
import { StyledWrapperOfficialWhatsappSuccess } from './OfficialWhatsappSuccess.styled';
import { Text } from '../../../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';

export const OfficialWhatsAppSuccess: FC = () => {
  return (
    <StyledWrapperOfficialWhatsappSuccess>
      <div>
        <SVGIcon iconFile="/icons/success.svg" />
      </div>
      <div>
        <Text>Se ha añadido tu canal de WhatsApp satisfactoriamente.</Text>
        <Text>
          Ya puedes disfrutar de todos los beneficios que ofrece la mensajería
          de whatsapp.
        </Text>
      </div>
    </StyledWrapperOfficialWhatsappSuccess>
  );
};
