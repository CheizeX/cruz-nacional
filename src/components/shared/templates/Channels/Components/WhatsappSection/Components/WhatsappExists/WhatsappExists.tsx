import { FC } from 'react';
import { Text } from '../../../../../../atoms/Text/Text';
import { StyledWrappperWhatsappUnOfficial } from './WhatsappExists.styled';
import { IPropsWhatsappExists } from './WhatsappExists.interface';
import { Checkbox } from '../../../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';

export const WhatsappExists: FC<IPropsWhatsappExists> = ({
  setUnLink,
  unLink,
}) => {
  const handleUnLink = () => {
    setUnLink(!unLink);
  };
  return (
    <StyledWrappperWhatsappUnOfficial>
      <Text>
        Anteriormente ya vinculaste un dispositivo a tu cuenta de whatsapp.
      </Text>
      <div>
        <div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text>
              Puedes desvincular tu teléfono móvil actual y vincular un
              dispositivo nuevo.
            </Text>
          </div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text>
              Recuerda que al desvincular el dispositivo actual los mensajes ya
              no sé mostraran en Elipse Chat.
            </Text>
          </div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text>Recibirás tus mensajes al nuevo dispositivo vinculado.</Text>
          </div>
          <div>
            <div>
              <Checkbox checked={unLink} onClick={handleUnLink} />
              <Text>¿Estás seguro de desvicular el dispositivo?</Text>
            </div>
          </div>
        </div>
      </div>
    </StyledWrappperWhatsappUnOfficial>
  );
};
