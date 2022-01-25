import { FC } from 'react';
import router from 'next/router';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledModalPreviousSession,
  StyledModalPreviousBody,
  StyledFooterModalPrevious,
} from './ModalClosePreviousSession.styled';
import { IPropsCloseSession } from './ModalClosePreviousSession.interface';

export const ModalClosePreviousSession: FC<IPropsCloseSession> = ({
  setLiveChatModal,
}) => {
  const closeSession = () => {
    localStorage.removeItem('AccessToken');
    router.push('/');
    setLiveChatModal(false);
  };

  return (
    <StyledModalPreviousSession>
      <StyledModalPreviousBody>
        <div>
          <SVGIcon iconFile="/icons/warning.svg" />
        </div>
        <div>
          <Text> Se ha iniciado sessión desde otro dispositivo.</Text>
          <Text>
            Si no has iniciado sessión te recomendamos volver a loguearte y
            cambiar tu contraseña.
          </Text>
        </div>
      </StyledModalPreviousBody>
      <StyledFooterModalPrevious>
        <ButtonMolecule text="Ok" onClick={closeSession} />
      </StyledFooterModalPrevious>
    </StyledModalPreviousSession>
  );
};
