import React, { FC, useState, useMemo, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../redux/hook/hooks';
import { ContainerInput } from '../../molecules/Input/ContainerInput';
import { Text } from '../../atoms/Text/Text';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { UsersFilter } from '../Users/UsersFilter/UserFilter/UsersFilter';
import { UserCreate } from '../Users/UserCreate/UserCreate';
import { BadgeMolecule } from '../../molecules/Badge/Badge';
import { ModalMolecule } from '../../molecules/Modal/Modal';
import { ModifyUserTagModal } from '../UserTagsModals/ModifyUserTagModal/ModifyUserTagModal';
import { EditUserTagModal } from '../UserTagsModals/EditUserTagModal/EditUserTagModal';
import { DeleteUserTagModal } from '../UserTagsModals/DeleteUserTagModal/DeleteUserTagModal';
import { CreateUserTagModal } from '../UserTagsModals/CreateUserTagModal/CreateUserTagModal';
import { DeleteUser } from '../Users/DeleteUser/DeleteUser';
import { websocketContext } from '../../../../chat/index';
import { UserCardMolecule } from '../../molecules/UserCard/UserCard';
import { StyledUsernameEmail } from '../../molecules/UserCard/UserCard.styled';
import {
  StyledAddedUsersSection,
  StyledHeaderUsersSection,
  StyledUsersCounter,
  StyledDisplayedUsers,
} from './AddedUserSection.styled';
import { UserRole } from '../../../../models/users/role';
import { EditUsers } from '../Users/EditUsers/EditUsers';
import { readingUsers } from '../../../../api/users/index';
import { User } from '../../../../models/users/user';
import { UserStatus } from '../../../../models/users/status';
import { useToastContext } from '../../molecules/Toast/useToast';
import { Toast } from '../../molecules/Toast/Toast.interface';
import { setDataUser } from '../../../../redux/slices/users/user-management';
import { RootState } from '../../../../redux';
import { IPropsTags } from './AddedUserSection.interface';
import { setDataTag } from '../../../../redux/slices/tags/tag-management';
import { readTags } from '../../../../api/tags';

export const AddedUsersSection: FC = () => {
  const [sectionModal, setSectionModal] = useState(false);
  //  abrir y cerrar modal
  const [openNewSection, setOpenNewSection] = useState('');
  // seccion a renderizar segun en string que reciba
  const [userActive, setUserActive] = useState<number>(0);
  // corresponse a la tab que debe cerrar
  const [usersCreate, setUsersCreate] = useState<string>('');
  // referencias de usuario a crear o editar
  const [tags, setTags] = useState<string>('');
  // referencia de etiqueta a modificar o gestionar
  const [textInput, setTextInput] = useState<string>('');
  // input de busqueda
  const [containerTags, setContainerTags] = useState<Array<IPropsTags>>([]);
  // contenedor de etiquetas al crear un usuario
  const [checkedAsignationTags, setCheckedAsignationTags] = useState<
    Array<string>
  >([]);
  const [filterRole, setFilterRole] = useState<string>('TODOS');

  const socket: any = useContext(websocketContext);
  // crear hook para toast
  const showAlert = useToastContext();

  const handleChackedTags = (id: string) => {
    const currentIndex = checkedAsignationTags.indexOf(id);
    const newChecked = [...checkedAsignationTags];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedAsignationTags(newChecked);
  };

  const handleBadgesClick = (arg: string) => {
    setSectionModal(true);
    setOpenNewSection(arg);
    setUsersCreate(arg);
  };
  const dispatch = useAppDispatch();
  const { usersData } = useSelector(
    (state: RootState) => state.users.useQueryState,
  );
  const dataApi = async () => {
    try {
      const currentDta = await readingUsers(UserStatus.ALL);
      if (currentDta.success === false) {
        dispatch(setDataUser([]));
      } else {
        dispatch(setDataUser(currentDta));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const getFilterTag = async () => {
    try {
      const response = await readTags();
      if (response.success === false) {
        dispatch(setDataTag([]));
      } else {
        dispatch(setDataTag(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleFilterData = async () => {
    try {
      const filterData = await readingUsers(UserStatus.ALL);
      if (filterData.success === false) {
        dispatch(setDataUser([]));
      } else if (filterRole === 'TODOS') {
        const filtroTags = filterData.filter((elem: User) =>
          elem.tags?.find((item) => checkedAsignationTags.includes(item.name)),
        );
        dispatch(setDataUser(filtroTags));
      } else if (checkedAsignationTags.length === 0) {
        const filterRoles = filterData.filter(
          (item: User) => item.role === filterRole,
        );
        dispatch(setDataUser(filterRoles));
      } else {
        const result = filterData.filter(
          (item: User) =>
            item.role === filterRole &&
            item.tags?.find((ele) => checkedAsignationTags.includes(ele.name)),
        );
        dispatch(setDataUser(result));
      }
      setCheckedAsignationTags([]);
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  useEffect(() => {
    dataApi();
    getFilterTag();
  }, []);

  useEffect(() => {
    socket.on('newUser', (data: User[]) => {
      // se emit un event newUserAdded ---- que viene del servidor
      dispatch(setDataUser(data));
    });
    socket.on('updateUser', (data: User[]) => {
      //   // se emit un event updateUser ---- que viene del servidor
      dispatch(setDataUser(data));
    });
    socket.on('deleteUser', (data: User[]) => {
      //   // se emit un event deleteUser ---- que viene del servidor
      dispatch(setDataUser(data));
    });
  }, [setDataUser, socket, usersData]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };
  const dataUsers = useMemo(() => {
    if (!textInput) return usersData;
    return usersData?.filter(
      (user: User) =>
        user.name.toLowerCase().includes(textInput.toLocaleLowerCase()) ||
        user.tags?.find((item) =>
          item.name.toLowerCase().includes(textInput.toLocaleLowerCase()),
        ),
    );
  }, [usersData, textInput]);

  return (
    <StyledAddedUsersSection>
      <StyledHeaderUsersSection>
        <span>
          <Text>Usuarios añadidos</Text>
          <StyledUsersCounter>
            {usersData ? usersData.length : 0}
          </StyledUsersCounter>
        </span>
        <div>
          <ContainerInput
            placeHolder="Buscar por nombre o etiqueta..."
            onClick={() => {}}
            setFocus={() => null}
            LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
            onChange={onChange}
          />
          <UsersFilter
            handleToggleTags={handleChackedTags}
            handleReset={dataApi}
            checkedAsignationTags={checkedAsignationTags}
            filterRole={filterRole ?? 'TODOS'}
            setFilterRole={setFilterRole}
            handleFilterData={handleFilterData}
            setCheckedAsignationTags={setCheckedAsignationTags}
          />
          <span>
            <>
              <button
                type="button"
                onClick={() => handleBadgesClick('Gestionar Etiquetas')}>
                <BadgeMolecule
                  bgColor="gray"
                  leftIcon={() => <SVGIcon iconFile="/icons/etiqueta.svg" />}>
                  <Text>Etiquetas</Text>
                </BadgeMolecule>
              </button>
              <ModalMolecule isModal={sectionModal} setModal={setSectionModal}>
                {openNewSection === 'Crear Usuario' ? (
                  <UserCreate
                    setUserActive={setUserActive}
                    userActive={userActive}
                    setUserModal={setSectionModal}
                    userModal={sectionModal}
                    openNewUser={openNewSection}
                    setOpenNewUser={setOpenNewSection}
                    setUsers={setUsersCreate}
                    users={usersCreate}
                    editButton="Crear"
                    titleHeader="Crear Usuario"
                    // NotificationUsers={() => (
                    //   <NotificationUsers
                    //     text="Te quedan 4 usuarios por crear."
                    //     message="Contáctate con nuestro equipo comercial para ampliar el límite de usuarios"
                    //   />
                    // )}
                    setContainerTags={setContainerTags}
                    containerTags={containerTags}
                  />
                ) : null}
                {openNewSection === 'editar' ? (
                  <EditUserTagModal
                    tagModal={sectionModal}
                    setTagModal={setSectionModal}
                    openNewTag={openNewSection}
                    setOpenNewTag={setOpenNewSection}
                    tags={tags}
                  />
                ) : null}
                {openNewSection === 'eliminar' ? (
                  <DeleteUserTagModal
                    tagModal={sectionModal}
                    setTagModal={setSectionModal}
                    openNewTag={openNewSection}
                    setOpenNewTag={setOpenNewSection}
                    tags={tags}
                  />
                ) : null}
                {openNewSection === 'crear' ? (
                  <CreateUserTagModal
                    text=""
                    tagModal={sectionModal}
                    setTagModal={setSectionModal}
                    openNewTag={openNewSection}
                    setOpenNewTag={setOpenNewSection}
                    tags={tags}
                  />
                ) : null}{' '}
                {openNewSection === 'Gestionar Etiquetas' ? (
                  <ModifyUserTagModal
                    text="Gestionar Etiquetas"
                    tagModal={sectionModal}
                    openNewTag={openNewSection}
                    setTagModal={setSectionModal}
                    setOpenNewTag={setOpenNewSection}
                    users={usersCreate}
                    tags={tags}
                    setTags={setTags}
                    setContainerTags={setContainerTags}
                    containerTags={containerTags}
                  />
                ) : null}
                {openNewSection === 'Modificar Etiquetas' ? (
                  <ModifyUserTagModal
                    text="Modificar Etiquetas"
                    tagModal={sectionModal}
                    openNewTag={openNewSection}
                    setTagModal={setSectionModal}
                    setOpenNewTag={setOpenNewSection}
                    InconArrow={() => (
                      <SVGIcon iconFile="/icons/collapse-left.svg" />
                    )}
                    users={usersCreate}
                    tags={tags}
                    setTags={setTags}
                    setContainerTags={setContainerTags}
                    containerTags={containerTags}
                  />
                ) : null}
                {openNewSection === 'Editar' ? (
                  <EditUsers
                    firstName="Editar"
                    userModal={sectionModal}
                    setUserModal={setSectionModal}
                    openNewSection={openNewSection}
                    setOpenNewSection={setOpenNewSection}
                    setUsers={setUsersCreate}
                    setUserActive={setUserActive}
                    userActive={userActive}
                    users={usersCreate}
                  />
                ) : null}
                {openNewSection === 'deleteUser' ? (
                  <DeleteUser
                    setDeleteModal={setSectionModal}
                    deleteModal={sectionModal}
                  />
                ) : null}
              </ModalMolecule>
            </>
            <>
              <button
                type="button"
                onClick={() => handleBadgesClick('Crear Usuario')}>
                <BadgeMolecule
                  bgColor="gray"
                  leftIcon={() => <SVGIcon iconFile="/icons/user_plus.svg" />}>
                  <Text>Crear usuario</Text>
                </BadgeMolecule>
              </button>
            </>
          </span>
        </div>
      </StyledHeaderUsersSection>
      <StyledDisplayedUsers>
        <div>
          {dataUsers?.map((user: User) => (
            <UserCardMolecule
              byNameUser={user.name}
              userID={user._id}
              setOpenNewSection={setOpenNewSection}
              setSectionModal={setSectionModal}
              sectionModal={sectionModal}
              isAdmin={user.role === UserRole.ADMIN}
              containerTags={user.tags}
              infoUserEmail={user.email}
              infoUserRole={user.role}
              avatar={user.urlAvatar}
              key={user._id}>
              <StyledUsernameEmail>
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
              </StyledUsernameEmail>
            </UserCardMolecule>
          )) ?? []}
        </div>
      </StyledDisplayedUsers>
    </StyledAddedUsersSection>
  );
};
