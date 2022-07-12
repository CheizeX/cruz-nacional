/* eslint-disable no-nested-ternary */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable sonarjs/no-identical-functions */
import React, { FC, useState, useContext, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FaUserShield } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../../redux/hook/hooks';
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
  StyledInfoUsersSection,
  StyledInfoUsersBySupOrAgent,
  StyledInfoNameAndIcon,
  StyledUsersAvailableInfo,
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
import {
  setDataTag,
  setTagColors,
} from '../../../../redux/slices/tags/tag-management';
import { readTagColor, readTags } from '../../../../api/tags';
import { NotificationUsers } from '../../atoms/NotificationUsers/NotificationUsers';
import { getSubscriptionsData } from '../../../../redux/slices/subscriptions/subscriptions-info';

export const AddedUsersSection: FC = () => {
  const dispatch = useAppDispatch();

  const { usersData } = useSelector(
    (state: RootState) => state.users.useQueryState,
  );

  const { subscriptionsData } = useAppSelector(
    (state) => state.subscriptionsInfo,
  );
  const {
    invitaciones_disponibles_supervisor,
    invitaciones_enviadas_supervisor,
    invitaciones_enviadas_agente,
    invitaciones_disponibles_agente,
  } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData.generalPlan,
  );

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
  // chacked para seleccionar tag que ya se encuentran seleccionadas
  const [checkedModifyUser, setCheckedModifyUser] = useState<Array<string>>([]);
  const [filterRole, setFilterRole] = useState<string>('TODOS');
  const [createUserValues, setCreateUserValues] = useState({
    username: '' as string,
    email: '' as string,
    role:
      invitaciones_disponibles_supervisor === 0
        ? ('AGENT' as UserRole)
        : invitaciones_disponibles_supervisor === 0
        ? ('SUPERVISOR' as UserRole)
        : '',
  });

  const socket: any = useContext(websocketContext);
  // crear hook para toast
  const showAlert = useToastContext();

  const handleLetterLimitName = (name: string) => {
    if (name.length > 21) {
      return `${name.slice(0, 21)}...`;
    }
    return name;
  };

  const handleLetterLimitEmail = (email: string) => {
    if (email.length > 26) {
      return `${email.slice(0, 26)}...`;
    }
    return email;
  };

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

  const handleCheckedModifyUser = (name: string) => {
    const currentId = checkedModifyUser.indexOf(name);
    const newChecked = [...checkedModifyUser];
    if (currentId === -1) {
      newChecked.push(name);
    } else {
      newChecked.splice(currentId, 1);
    }
    setCheckedModifyUser(newChecked);
  };

  const handleBadgesClick = (arg: string) => {
    if (arg === 'Crear Usuario') {
      if (
        subscriptionsData.generalPlan.invitaciones_disponibles_agente +
          subscriptionsData.generalPlan.invitaciones_disponibles_supervisor >
        0
      ) {
        setSectionModal(true);
        setOpenNewSection(arg);
        setUsersCreate(arg);
      } else {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'SIN INVITACIONES DISPONIBLES',
          message: `Puedes contratar más usuarios en la sección de suscripciones`,
        });
      }
    } else {
      setSectionModal(true);
      setOpenNewSection(arg);
      setUsersCreate(arg);
    }
  };

  const dataApi = useCallback(async () => {
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
  }, [dispatch, showAlert]);

  const getFilterTag = useCallback(async () => {
    try {
      const response = await readTags();
      const result = await readTagColor();
      if (response.success === false) {
        dispatch(setDataTag([]));
      } else {
        dispatch(setDataTag(response));
      }
      if (result.success === false) {
        dispatch(setTagColors([]));
      } else {
        dispatch(setTagColors(result));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);

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
  }, [dataApi, getFilterTag]);

  useEffect(() => {
    socket?.on('newRegisteredUser', (data: User[]) => {
      dispatch(setDataUser(data));
    });
    dispatch(getSubscriptionsData());
  }, [dispatch, socket]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

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
                    createUserValues={createUserValues}
                    setCreateUserValues={setCreateUserValues}
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
                    NotificationUsers={() => (
                      <NotificationUsers
                        text={`Te quedan ${
                          subscriptionsData.generalPlan
                            .invitaciones_disponibles_agente +
                          subscriptionsData.generalPlan
                            .invitaciones_disponibles_supervisor
                        } usuarios por crear.`}
                        message="Contáctate con nuestro equipo comercial para ampliar el límite de usuarios"
                      />
                    )}
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
                    handleChecked={handleCheckedModifyUser}
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
                    checkedModifyUser={checkedModifyUser}
                    setCheckedModifyUser={setCheckedModifyUser}
                  />
                ) : null}
                {openNewSection === 'Seleccionar Etiquetas' ? (
                  <ModifyUserTagModal
                    text="Seleccionar Etiquetas"
                    tagModal={sectionModal}
                    openNewTag={openNewSection}
                    setTagModal={setSectionModal}
                    setOpenNewTag={setOpenNewSection}
                    InconArrow={() => (
                      <SVGIcon iconFile="/icons/collapse-left.svg" />
                    )}
                    handleChecked={handleCheckedModifyUser}
                    users={usersCreate}
                    tags={tags}
                    setTags={setTags}
                    setContainerTags={setContainerTags}
                    containerTags={containerTags}
                    checkedModifyUser={checkedModifyUser}
                    setCheckedModifyUser={setCheckedModifyUser}
                  />
                ) : null}
                {openNewSection === 'Editar' ? (
                  <EditUsers
                    firstName="Editar"
                    setCheckedModifyUser={setCheckedModifyUser}
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
      <StyledInfoUsersSection>
        <StyledInfoUsersBySupOrAgent>
          <StyledInfoNameAndIcon>
            <FaUserShield size={24} />
          </StyledInfoNameAndIcon>
          <StyledUsersAvailableInfo>
            <span>
              Creados
              <div>{invitaciones_enviadas_supervisor}</div>
            </span>
            <span>
              Disponibles por crear{' '}
              <div>{invitaciones_disponibles_supervisor}</div>
            </span>
          </StyledUsersAvailableInfo>
        </StyledInfoUsersBySupOrAgent>

        <StyledInfoUsersBySupOrAgent>
          <StyledInfoNameAndIcon>
            <MdSupportAgent size={26} />
          </StyledInfoNameAndIcon>
          <StyledUsersAvailableInfo>
            <span>
              Creados
              <div>{invitaciones_enviadas_agente}</div>
            </span>
            <span>
              Disponibles por crear <div>{invitaciones_disponibles_agente}</div>
            </span>
          </StyledUsersAvailableInfo>
        </StyledInfoUsersBySupOrAgent>
      </StyledInfoUsersSection>
      <StyledDisplayedUsers>
        <div>
          {(textInput === ''
            ? usersData
            : usersData?.filter(
                (user: User) =>
                  user.name
                    .toLowerCase()
                    .includes(textInput.toLocaleLowerCase()) ||
                  user.tags?.find((item) =>
                    item.name
                      .toLowerCase()
                      .includes(textInput.toLocaleLowerCase()),
                  ),
              )
          )?.map((user: User) => (
            <UserCardMolecule
              key={user._id}
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
              invitation={user.invitationAccepted ?? false}>
              <StyledUsernameEmail>
                <Text>{handleLetterLimitName(user.name)}</Text>
                <Text>{handleLetterLimitEmail(user.email)}</Text>
              </StyledUsernameEmail>
            </UserCardMolecule>
          )) ?? []}
        </div>
      </StyledDisplayedUsers>
    </StyledAddedUsersSection>
  );
};
