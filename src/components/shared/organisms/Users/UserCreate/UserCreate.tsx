/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable @typescript-eslint/naming-convention */
import { FC } from 'react';
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
import { createUser } from '../../../../../api/users/index';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hook/hooks';
import { setDataUser } from '../../../../../redux/slices/users/user-management';
import {
  StyledButton,
  StyledRadio,
  StyledVisualContainerEditUser,
  StyledWrapperRadio,
} from '../EditUsers/EditUser.styled';

interface Values {
  email: string;
  name: string;
  role: string;
  tags: Tag[];
  companyId?: string;
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
  createUserValues,
  setCreateUserValues,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { supervisores_registrados, invitaciones_disponibles_supervisor } =
    useAppSelector(
      (state) => state.subscriptionsInfo.subscriptionsData.generalPlan,
    );

  const { username, email, role } = createUserValues;

  const clearTagsUser = () => setContainerTags([]);

  const initialValues = {
    name: username,
    email,
    role,
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
    if (role !== '') {
      try {
        if (values?.email && values?.name && values?.role && values?.tags) {
          const response = await createUser({
            role: createUserValues.role as UserRole,
            name: createUserValues.username,
            email: createUserValues.email,
            tags: values?.tags,
            companyId: values?.companyId || '',
          });
          if (response.errorMessage === 'Limit reached') {
            showAlert?.addToast({
              alert: Toast.ERROR,
              title: '¡Ups!',
              message: 'Has alcanzado el número máximo de usuarios permitidos',
            });
          }
          if (response.errorMessage === 'User exists') {
            showAlert?.addToast({
              alert: Toast.ERROR,
              title: '¡Ups!',
              message: 'Este usuario ya existe.',
            });
          } else {
            dispatch(setDataUser(response));
            showAlert?.addToast({
              alert: Toast.SUCCESS,
              title: '¡Perfecto!',
              message: 'Se ha creado un usuario con exito',
            });
          }
          submitProps?.setSubmitting(false);
          submitProps?.resetForm();
        }
        setCreateUserValues({
          username: '',
          email: '',
          role: '',
          tags: [],
          companyId: '',
        });
        clearTagsUser();
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
    } else {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ROL NO SELECCIONADO',
        message: 'Debe seleccionar un rol para el usuario',
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
                    {supervisores_registrados < 1 ||
                    invitaciones_disponibles_supervisor > 0 ? (
                      <>
                        <StyledRealFunctionalRadiosContainer
                          role="group"
                          aria-labelledby="my-radio-group">
                          <Field
                            type="button"
                            id="role"
                            name="role"
                            value="SUPERVISOR"
                            onClick={() =>
                              setCreateUserValues({
                                ...createUserValues,
                                role: 'SUPERVISOR',
                              })
                            }
                          />
                          <Field
                            type="button"
                            id="role"
                            name="role"
                            value="AGENT"
                            onClick={() =>
                              setCreateUserValues({
                                ...createUserValues,
                                role: 'AGENT',
                              })
                            }
                          />
                        </StyledRealFunctionalRadiosContainer>
                        <StyledVisualRadiosContainer>
                          {role === 'SUPERVISOR' ? (
                            <StyledRadioPurple>
                              <div />
                            </StyledRadioPurple>
                          ) : (
                            <StyledRadioGray>
                              <div />
                            </StyledRadioGray>
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              setCreateUserValues({
                                ...createUserValues,
                                role: 'SUPERVISOR',
                              })
                            }>
                            Supervisor
                          </button>
                          {role === 'AGENT' ? (
                            <StyledRadioPurple>
                              <div />
                            </StyledRadioPurple>
                          ) : (
                            <StyledRadioGray>
                              <div />
                            </StyledRadioGray>
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              setCreateUserValues({
                                ...createUserValues,
                                role: 'AGENT',
                              })
                            }>
                            Agente
                          </button>
                        </StyledVisualRadiosContainer>
                      </>
                    ) : (
                      <>
                        <StyledVisualContainerEditUser>
                          <StyledWrapperRadio>
                            <StyledButton focusedCheck>
                              <StyledRadio focusedCheck />
                            </StyledButton>
                            <span>Agente</span>
                          </StyledWrapperRadio>
                        </StyledVisualContainerEditUser>
                      </>
                    )}
                    <StyledInputContainer>
                      <Text>Nombre</Text>
                      <Field
                        as={ContainerInput}
                        name="name"
                        setFocus={() => null}
                        type="text"
                        placeholder="Nombre"
                        value={username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setCreateUserValues({
                            ...createUserValues,
                            username: e.target.value,
                          })
                        }
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
                        value={createUserValues.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setCreateUserValues({
                            ...createUserValues,
                            email: e.target.value,
                          })
                        }
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
                  onClick={() => {
                    setUserModal(false);
                  }}
                />
                <ButtonMolecule
                  onClick={() => submitForm()}
                  type="submit"
                  text={`${editButton}`}
                  size={Size.MEDIUM}
                  state={
                    !isValid &&
                    Object.values(createUserValues).some(
                      (value) => value === '',
                    )
                      ? ButtonState.DISABLED
                      : ButtonState.NORMAL
                  }
                />
              </StyledFooter>
            </Form>
          </ContainerCreateUsers>
        );
      }}
    </Formik>
  );
};
