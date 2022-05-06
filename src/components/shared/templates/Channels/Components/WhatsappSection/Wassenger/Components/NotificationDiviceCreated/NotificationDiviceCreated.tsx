import { FC, useState } from 'react';
import { SpinnerDiamond } from 'spinners-react';
import { FiMinimize2, FiMaximize2 } from 'react-icons/fi';
import {
  ButtonMolecule,
  ButtonState,
} from '../../../../../../../atoms/Button/Button';
import { Text } from '../../../../../../../atoms/Text/Text';
import {
  IDivice,
  INotificationProps,
} from './NotificationDiviceCreated.interface';
import { StyledWrapperNotification } from './NotificationDiviceCreated.styled';

export const NotificationDiviceCreated: FC<INotificationProps> = ({
  setShowDivice,
  setIsSectionWebChat,
  setSeletedComponent,
  handleClickQR,
  setSelectedByComponentUnOfficialWhatsapp,
  diviceStatus,
}) => {
  const [isLoanding, setIsLoanding] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const handleShowQr = async () => {
    setIsLoanding(true);
    await handleClickQR();
    setIsSectionWebChat(true);
    setSeletedComponent('unofficialWhatsApp');
    setSelectedByComponentUnOfficialWhatsapp(3);
    setIsLoanding(false);
    setShowDivice(false);
  };

  const handleClose = () => {
    if (diviceStatus === IDivice.CREATING) {
      setIsMinimized(!isMinimized);
    }
  };
  return (
    <StyledWrapperNotification
      diviceStatus={diviceStatus === IDivice.CREATING}
      isMinimized={isMinimized}>
      <div>
        {isMinimized ? <Text>Construyendo Wassenger</Text> : null}
        <button type="button" onClick={handleClose}>
          {isMinimized ? <FiMaximize2 /> : <FiMinimize2 />}
        </button>
      </div>
      {diviceStatus === IDivice.CREATING && !isMinimized && (
        <Text>
          Estamos construyendo tu nuevo dispositivo de Wassenger tardará unos
          minutos. Te notificaremos cuando esté construido.
        </Text>
      )}
      {diviceStatus === IDivice.CREATED && !isMinimized && (
        <Text>
          Se ha creado satisfactoriamente tu dispositivo has click para
          continuar con el proceso.
        </Text>
      )}
      {diviceStatus === IDivice.CREATING && !isMinimized && (
        <div>
          <SpinnerDiamond
            color="#fff"
            size="100%"
            style={{ maxHeight: '3rem' }}
          />
        </div>
      )}
      {diviceStatus === IDivice.CREATED && !isMinimized && (
        <ButtonMolecule
          text="click"
          onClick={handleShowQr}
          state={isLoanding ? ButtonState.LOADING : ButtonState.NORMAL}
        />
      )}
    </StyledWrapperNotification>
  );
};
