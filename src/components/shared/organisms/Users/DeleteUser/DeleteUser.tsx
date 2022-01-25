import { FC, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '../../../atoms/Text/Text';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
} from '../../../atoms/Button/Button';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import {
  StyledDeleteUser,
  StyledIcon,
  StyledInformation,
  StyledFooter,
} from './DeleteUser.styled';
import { IDeleteUserProps } from './DeleteUser.interface';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { websocketContext } from '../../../../../chat/index';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { deleteUser } from '../../../../../api/users';
import { RootState } from '../../../../../redux';

export const DeleteUser: FC<IDeleteUserProps> = ({ setDeleteModal }) => {
  const { userByIdDelete } = useSelector(
    (state: RootState) => state.users.userByIdDeleteState,
  );
  const showAlert = useToastContext();
  const socket: any = useContext(websocketContext);
  const handleCurrentDeleteUserId = async () => {
    try {
      await deleteUser(userByIdDelete);
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: '¡Perfecto!',
        message: 'Se ha eliminado el usuario con exito',
      });
      socket.emit('deleteUser');
      setDeleteModal(false);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${error}`,
      });
    }
  };

  return (
    <StyledDeleteUser>
      <StyledIcon>
        <SVGIcon iconFile="/icons/warning.svg" />
      </StyledIcon>
      <StyledInformation>
        <Text>¿Estas seguro de querer eliminar a este usuario?</Text>
        <Text>
          Toda la información asociada a este usuario dejará de estar disponible
        </Text>
      </StyledInformation>
      <StyledFooter>
        <ButtonMolecule
          onClick={() => setDeleteModal(false)}
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
        />
        <ButtonMolecule
          onClick={() => handleCurrentDeleteUserId()}
          text="Eliminar"
          size={Size.MEDIUM}
        />
      </StyledFooter>
    </StyledDeleteUser>
  );
};
