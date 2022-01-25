import { FC, useState, useContext } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { UserCreateTags } from '../UserCreateTags/UserCreateTags';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { StyleErrors } from '../../../pages/Login/LoginChangePassword/LoginChangePassword.styled';
import { Text } from '../../../atoms/Text/Text';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Tabs } from '../../Tabs/Tabs';
import { ContainerInput } from '../../../molecules/Input/ContainerInput';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
  ButtonState,
} from '../../../atoms/Button/Button';
import {
  ContainerCreateUsers,
  StyledHeader,
  StyledBody,
  StyledUserData,
  StyledAvatar,
  StyledInputContainer,
  StyledFooter,
  StyledTag,
  StyledRealFunctionalRadiosContainer,
  StyledRadioPurple,
  StyledRadioGray,
  StyledVisualRadiosContainer,
} from './UserCreate.styled';
import { IUserCreateProps } from './UserCreate.interface';
import { UserRole } from '../../../../../models/users/role';
import { Tag } from '../../../../../models/tags/tag';
import { websocketContext } from '../../../../../chat/index';
import { createUser } from '../../../../../api/users/index';

interface Values {
  email: string;
  name: string;
  role: string;
  tags: Tag[];
}

const validationShema = Yup.object({
  email: Yup.string()
    .email('El email es inválido')
    .required('Debe introducir un correo electrónico'),
});

export const UserCreate: FC<IUserCreateProps> = ({
  NotificationUsers,
  editButton,
  titleHeader,
  userActive,
  containerTags,
  setContainerTags,
  setUserModal,
  setOpenNewUser,
  setUserActive,
  setUsers,
  users,
}) => {
  const [roleSelected, setRoleSelected] = useState<string>('AGENT');
  const showAlert = useToastContext();
  const socket: any = useContext(websocketContext);
  const clearTagsUser = () => setContainerTags([]);

  const initialValues = {
    name: '',
    email: '',
    role: 'AGENT',
    tags: containerTags?.filter(
      (v, i, a) =>
        a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i,
    ),
  };
  const onSubmit = async (
    values?: Partial<Values>,
    submitProps?: {
      setSubmitting: (arg0: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      if (values?.email && values?.name && values?.role) {
        await createUser({
          role: values?.role.toUpperCase() as UserRole,
          name: values?.name,
          email: values?.email,
          tags: values?.tags,
        });
        submitProps?.setSubmitting(false);
        submitProps?.resetForm();
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: '¡Perfecto!',
          message: 'Se ha creado un usuario con exito',
        });
      }
      clearTagsUser();
      socket.emit('newUser');
      setTimeout(() => {
        setUserModal(false);
      }, 1000);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${error}`,
      });
    }
  };

  const handleClickCloseUser = (modal: boolean, numb: number) => {
    setUserActive(numb);
    setUserModal(modal);
    clearTagsUser();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationShema}
      onSubmit={onSubmit}>
      {({ errors, touched, isValid, submitForm }) => {
        return (
          <ContainerCreateUsers>
            <Form>
              <StyledHeader>
                <Text size="14px" color="black">
                  {`${titleHeader}`}
                </Text>
                <button
                  type="button"
                  onClick={() => handleClickCloseUser(false, 0)}>
                  <SVGIcon iconFile="/icons/times.svg" />
                </button>
              </StyledHeader>
              <StyledBody>
                {NotificationUsers && <NotificationUsers />}
                <Tabs largeTabs activeByDefault={userActive}>
                  <StyledUserData title="Datos personales">
                    <StyledAvatar>
                      <SVGIcon iconFile="/icons/unknown_user.svg" />
                      <SVGIcon iconFile="/icons/IconButtonSmall.svg" />
                    </StyledAvatar>
                    <StyledRealFunctionalRadiosContainer
                      role="group"
                      aria-labelledby="my-radio-group">
                      <Field
                        type="radio"
                        id="role"
                        name="role"
                        value="SUPERVISOR"
                        onClick={() => setRoleSelected('SUPERVISOR')}
                      />
                      <Field
                        type="radio"
                        id="role"
                        name="role"
                        value="AGENT"
                        onClick={() => setRoleSelected('AGENT')}
                      />
                    </StyledRealFunctionalRadiosContainer>
                    <StyledVisualRadiosContainer>
                      {roleSelected === 'SUPERVISOR' ? (
                        <StyledRadioPurple>
                          <div />
                        </StyledRadioPurple>
                      ) : (
                        <StyledRadioGray>
                          <div />
                        </StyledRadioGray>
                      )}
                      <span>Supervisor</span>
                      {roleSelected === 'AGENT' ? (
                        <StyledRadioPurple>
                          <div />
                        </StyledRadioPurple>
                      ) : (
                        <StyledRadioGray>
                          <div />
                        </StyledRadioGray>
                      )}
                      <span>Agente</span>
                    </StyledVisualRadiosContainer>
                    <StyledInputContainer>
                      <Text>Nombre</Text>
                      <Field
                        as={ContainerInput}
                        name="name"
                        setFocus={() => null}
                        type="text"
                      />
                    </StyledInputContainer>
                    <StyledInputContainer>
                      <Text>Correo electrónico</Text>
                      <Field
                        as={ContainerInput}
                        name="email"
                        setFocus={() => null}
                        type="text"
                        valid={touched.email && !errors.email}
                      />
                      <ErrorMessage name="email" component={StyleErrors} />
                    </StyledInputContainer>
                  </StyledUserData>
                  <StyledTag title="Etiquetas">
                    <UserCreateTags
                      userActive={userActive}
                      setUserActive={setUserActive}
                      setSectionModal={setUserModal}
                      setOpenNewUser={setOpenNewUser}
                      setUsers={setUsers}
                      users={users}
                      titleHeader={titleHeader}
                      containerTags={containerTags}
                      setContainerTags={setContainerTags}
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
                  onClick={submitForm}
                  type="submit"
                  text={`${editButton}`}
                  size={Size.MEDIUM}
                  state={!isValid ? ButtonState.DISABLED : ButtonState.NORMAL}
                />
              </StyledFooter>
            </Form>
          </ContainerCreateUsers>
        );
      }}
    </Formik>
  );
};
