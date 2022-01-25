import { FC, useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ContainerInput } from '../../../molecules/Input/ContainerInput';
import { Tabs } from '../../Tabs/Tabs';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
} from '../../../atoms/Button/Button';
import { EditUserTag } from '../EditUserTag/EditUserTag';
import { IEditUsersProps } from './EditUsers.interface';
import {
  StyledHeader,
  StyledBody,
  StyledUserData,
  StyledAvatar,
  StyledInputContainer,
  StyledFooter,
  StyledTag,
} from '../UserCreate/UserCreate.styled';
import {
  ContainerEditUsers,
  StyledVisualContainerEditUser,
  StyledWrapperRadio,
  StyledButton,
  StyledRadio,
} from './EditUser.styled';
import { UserRole } from '../../../../../models/users/role';
import { websocketContext } from '../../../../../chat/index';
import { updateUser } from '../../../../../api/users';
import { RootState } from '../../../../../redux';

export const EditUsers: FC<IEditUsersProps> = ({
  firstName,
  userActive,
  setUserModal,
  setOpenNewSection,
  setUserActive,
  setUsers,
  users,
}) => {
  const showAlert = useToastContext();
  const socket: any = useContext(websocketContext);

  // Redux
  const { usersData } = useSelector(
    (state: RootState) => state.users.useQueryState,
  );
  const { userByIdEdit } = useSelector(
    (state: RootState) => state.users.userByIdEditState,
  );
  const { updateContainerTags } = useSelector(
    (state: RootState) => state.users.updateContainerTagState,
  );
  const { userByInfoEmail } = useSelector(
    (state: RootState) => state.users.userByInfoEmailState,
  );
  const { currentByUserRole } = useSelector(
    (state: RootState) => state.users.currentByUserRoleState,
  );
  const { currentByUserFirstName } = useSelector(
    (state: RootState) => state.users.currentByUserFirstNameState,
  );
  const dataByUser = usersData.filter((item) => item._id === userByIdEdit);
  const [activoCheck, setActivoChecked] = useState<string>(currentByUserRole);
  const [editByUserName, setEditByUserName] = useState<string>('');
  const [editByUserEmail, setEditByUserEmail] = useState<string>('');
  const [editRole, setEditRole] = useState<string>(currentByUserRole);

  useEffect(() => {
    setEditByUserName(currentByUserFirstName);
    setEditRole(currentByUserRole);
    setEditByUserEmail(userByInfoEmail);
    setActivoChecked(currentByUserRole);
  }, [currentByUserFirstName, userByInfoEmail, currentByUserRole]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const nameCapitalized = e.target.value;
    setEditByUserName(nameCapitalized);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const emailCapitalized = e.target.value;
    setEditByUserEmail(emailCapitalized);
  };

  const handleClickEditByUser = async () => {
    const expr = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    try {
      if (!expr.test(editByUserEmail)) {
        showAlert?.addToast({
          alert: Toast.WARNING,
          title: '¡Upps!',
          message: 'El email a modificar es incorrecto',
        });
      } else if (editByUserEmail.length < 3 || editByUserName.length < 3) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'Upps!',
          message: 'Los datos ingresados son incorrecto',
        });
        setUserModal(false);
        setUserActive(0);
      } else if (
        editByUserName?.length > 0 &&
        editByUserEmail?.length > 0 &&
        editRole?.length
      ) {
        await updateUser(userByIdEdit, {
          role: editRole.toUpperCase() as UserRole,
          name: editByUserName,
          email: editByUserEmail,
          tags: updateContainerTags,
        });

        socket.emit('updateUser');
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: '¡Perfecto!',
          message: 'Se ha modificado el usuario con exito',
        });
        // se emite un event para que el web socket envie la respuesta con todos los usuarios
        setUserModal(false);
        setUserActive(0);
      } else {
        showAlert?.addToast({
          alert: Toast.WARNING,
          title: 'Upps!',
          message: 'No se realizaron cambios',
        });
        setUserModal(false);
        setUserActive(0);
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${error}`,
      });
    }
  };
  const handleClickUserTags = (arg: boolean) => {
    setUserModal(arg);
    setUserActive(0);
  };

  const handleClickRol = (arg: string) => {
    setEditRole(arg);
    setActivoChecked(arg);
  };

  return (
    <ContainerEditUsers>
      {dataByUser &&
        dataByUser.map((item) => (
          <>
            <StyledHeader key={item._id}>
              {' '}
              <Text size="14px" color="black">
                {item.name}
              </Text>
              <button type="button" onClick={() => handleClickUserTags(false)}>
                <SVGIcon iconFile="/icons/times.svg" />
              </button>
            </StyledHeader>
            <StyledBody>
              <Tabs largeTabs activeByDefault={userActive}>
                <StyledUserData title="Datos personales">
                  <StyledAvatar>
                    <SVGIcon iconFile="/icons/unknown_user.svg" />
                    <SVGIcon iconFile="/icons/IconButtonSmall.svg" />
                  </StyledAvatar>
                  <StyledVisualContainerEditUser>
                    <StyledWrapperRadio
                      onClick={() => handleClickRol('SUPERVISOR')}>
                      <StyledButton focusedCheck={activoCheck === 'SUPERVISOR'}>
                        <StyledRadio
                          focusedCheck={activoCheck === 'SUPERVISOR'}
                        />
                      </StyledButton>
                      <span>Supervisor</span>
                    </StyledWrapperRadio>
                    <StyledWrapperRadio onClick={() => handleClickRol('AGENT')}>
                      <StyledButton focusedCheck={activoCheck === 'AGENT'}>
                        <StyledRadio focusedCheck={activoCheck === 'AGENT'} />
                      </StyledButton>
                      <span>Agente</span>
                    </StyledWrapperRadio>
                  </StyledVisualContainerEditUser>
                  <StyledInputContainer>
                    <Text>Nombre</Text>
                    <ContainerInput
                      setFocus={() => null}
                      type="text"
                      name="name"
                      value={editByUserName}
                      onChange={handleChangeName}
                      required
                    />
                  </StyledInputContainer>
                  <StyledInputContainer>
                    <Text>Correo electrónico</Text>
                    <ContainerInput
                      setFocus={() => null}
                      type="email"
                      name="email"
                      value={editByUserEmail}
                      onChange={handleChangeEmail}
                      required
                    />
                  </StyledInputContainer>
                </StyledUserData>
                <StyledTag title="Etiquetas">
                  <EditUserTag
                    userActive={userActive}
                    setUserActive={setUserActive}
                    setSectionModal={setUserModal}
                    setOpenNewUser={setOpenNewSection}
                    setUsers={setUsers}
                    users={users}
                    titleHeader={firstName}
                  />
                </StyledTag>
              </Tabs>
            </StyledBody>
            <StyledFooter>
              <ButtonMolecule
                text="Cancelar"
                size={Size.MEDIUM}
                variant={ButtonVariant.OUTLINED}
                onClick={() => setUserModal(false)}
              />
              <ButtonMolecule
                onClick={handleClickEditByUser}
                type="submit"
                text="Editar"
                size={Size.MEDIUM}
              />
            </StyledFooter>
          </>
        ))}
    </ContainerEditUsers>
  );
};
