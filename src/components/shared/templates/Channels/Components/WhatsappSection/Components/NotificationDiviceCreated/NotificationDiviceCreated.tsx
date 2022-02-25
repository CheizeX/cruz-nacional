import { FC, useState } from 'react';
import {
  ButtonMolecule,
  ButtonState,
} from '../../../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import { INotificationProps } from './NotificationDiviceCreated.interface';
import { StyledWrapperNotification } from './NotificationDiviceCreated.styled';

export const NotificationDiviceCreated: FC<INotificationProps> = ({
  setShowDivice,
  setIsSectionWebChat,
  setSeletedComponent,
  handleClickQR,
  setSelectedByComponentUnOfficialWhatsapp,
}) => {
  const [isLoanding, setIsLoanding] = useState<boolean>(false);
  const handleShowQr = async () => {
    setIsLoanding(true);
    await handleClickQR();
    setIsSectionWebChat(true);
    setSeletedComponent('UnofficialWhatsapp');
    setSelectedByComponentUnOfficialWhatsapp(3);
    setIsLoanding(false);
    setShowDivice(false);
  };
  return (
    <StyledWrapperNotification>
      <div>
        <button type="button" onClick={() => setShowDivice(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </div>
      <Text>
        Se ha creado satisfactoriamente tu dispositivo has click para continuar
        con el proceso.
      </Text>
      <ButtonMolecule
        text="click"
        onClick={handleShowQr}
        state={isLoanding ? ButtonState.LOADING : ButtonState.NORMAL}
      />
    </StyledWrapperNotification>
  );
};
