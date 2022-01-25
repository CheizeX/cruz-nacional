import { FC } from 'react';
import { Checkbox } from '../../../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import { IPropsComponentQR } from './ConfirmationQR.interface';
import { StyledConfirmationQR } from './ConfirmationQR.styled';

export const ConfirmationQR: FC<IPropsComponentQR> = ({
  isChecked,
  setIsChecked,
}) => {
  return (
    <StyledConfirmationQR checkedConfirmation={isChecked}>
      <Text>
        Descubre como integrar Whatsapp a través del QR de Whatsapp Web
      </Text>
      <div>
        <div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text size="12px" weight="400">
              Asegurate de que tu teléfono tenga una conexión a internet
              estable.
            </Text>
          </div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text size="12px" weight="400">
              Deja abierta la aplicación WhatsApp.
            </Text>
          </div>
          <div>
            <SVGIcon iconFile="/icons/check_password.svg" />
            <Text size="12px" weight="400">
              Nunca apagues el teléfono.
            </Text>
          </div>
          <div>
            <div>
              <Checkbox
                checked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
              />
              <Text>¿Estás dispuesto a continuar con el proceso?</Text>
            </div>
          </div>
        </div>
      </div>
    </StyledConfirmationQR>
  );
};
