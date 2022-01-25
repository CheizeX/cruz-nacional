/* eslint-disable react/button-has-type */
import React, { FC, useCallback, useState, MouseEventHandler } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../atoms/Text/Text';
import { BadgeMolecule } from '../../molecules/Badge/Badge';
import { ButtonMolecule, ButtonState, Size } from '../../atoms/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../redux/hook/hooks';
import { IBackOfficeProps } from '../NavBar/BackOffice/NavBarBackOffice.interface';
import { useToastContext } from '../../molecules/Toast/useToast';
import { Toast } from '../../molecules/Toast/Toast.interface';
import { ContainerInput } from '../../molecules/Input/ContainerInput';
import {
  StyledButtonContainer,
  StyledMyAccountSidebar,
  StyledMyAccountHeader,
  StyledImageAndButtonContainer,
  StyledMyAccountAvatar,
  StyledMyAccountInputsContainer,
  StyledMyAccountSimilInput,
  StyledChangePasswordIndication,
  StyledChangeUserPassword,
  StyledUserChangePasswordRestrictions,
} from './MyAccountSidebar.styled';
import { authApi } from '../../../../api/base';
import useLocalStorage from '../../../../hooks/use-local-storage';
import { uploadFilePicture } from '../../../../api/uploads';
import {
  IconButtonMolecule,
  IconButtonState,
} from '../../atoms/IconButton/IconButton';
import { setUpdateDataInState } from '../../../../redux/slices/auth/user-credentials';

interface LoginChangePasswordProps {
  onClick?: MouseEventHandler;
  onSubmit?: (oldPassword: string, newPassword: string) => void | Promise<void>;
}

type Values = {
  oldPassword: string;
  newPassword: string;
};

const validationSchema = Yup.object({
  oldPassword: Yup.string()
    // .min(8, 'Debe tener al menos 8 caracteres')
    .matches(/^(\S+$)/, 'No debe tener espacios vacíos')
    .required('Debe introducir una contraseña'),
  newPassword: Yup.string()
    // .min(8, 'Debe tener al menos 8 caracteres')
    .matches(/^(\S+$)/, 'No debe tener espacios vacíos')
    .required('Debe introducir una contraseña'),
});

export const MyAccountSidebarOrganism: FC<
  IBackOfficeProps & LoginChangePasswordProps
> = ({ myAccount, setMyAccount, onClick = () => {} }) => {
  const toasts = useToastContext();

  const dispatch = useAppDispatch();
  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );

  const [accessToken] = useLocalStorage('AccessToken', '');
  const profilePicture = userDataInState?.urlAvatar
    ? `${userDataInState.urlAvatar}?token=${accessToken}`
    : '';
  const [visibleOld, setVisibleOld] = useState(false);
  const [visibleNew, setVisibleNew] = useState(false);
  const [isLoanding, setIsLoanding] = useState(false);

  const handleInput = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
    input.addEventListener('change', async (event: any) => {
      setIsLoanding(true);
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('file', file);
      try {
        if (userDataInState.urlAvatar !== '') {
          const duplicatedUrl = userDataInState.urlAvatar.split('/');
          const oldName = duplicatedUrl[duplicatedUrl.length - 1];
          if (oldName !== file.name) {
            const result = await uploadFilePicture(formData);
            dispatch(setUpdateDataInState(result));
          } else {
            toasts?.addToast({
              alert: Toast.WARNING,
              title: 'Advertencia',
              message: 'La imagen no puede ser la misma que la actual',
            });
          }
        } else {
          const result = await uploadFilePicture(formData);
          dispatch(setUpdateDataInState(result));
        }
        setIsLoanding(false);
      } catch (err) {
        setIsLoanding(false);
        toasts?.addToast({
          alert: Toast.ERROR,
          title: 'Error',
          message: 'No se pudo cargar la imagen',
        });
      }
    });
  };

  const handleClickOld = useCallback(
    (event) => {
      onClick(event);
      setVisibleOld((currentVisibility) => !currentVisibility);
    },
    [onClick],
  );
  const handleClickNew = useCallback(
    (event) => {
      onClick(event);
      setVisibleNew((currentVisibility) => !currentVisibility);
    },
    [onClick],
  );

  const onSubmit = async (
    values?: Partial<Values>,
    submitProps?: {
      setSubmitting: (arg: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      if (values?.oldPassword && values?.newPassword) {
        const response = await authApi.patch('/changePassword', {
          oldPass: values?.oldPassword,
          newPass: values?.newPassword,
        });
        if (response === 'Ok') {
          submitProps?.resetForm();
          submitProps?.setSubmitting(false);
          toasts?.addToast({
            alert: Toast.SUCCESS,
            title: 'PERFECTO',
            message: 'Has cambiado tu contraseña con éxito',
          });
          setMyAccount(1);
        } else {
          toasts?.addToast({
            alert: Toast.WARNING,
            title: 'ATENCION',
            message: 'Verifica que los datos sean correctos',
          });
        }
      }
    } catch (error) {
      toasts?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: 'No se puede cambiar la contraseña en este momento',
      });
    }
  };
  return (
    <>
      {myAccount === 1 && (
        <StyledMyAccountSidebar>
          <StyledMyAccountHeader>
            <BadgeMolecule
              bgColor="transparent"
              leftIcon={() => (
                <div style={{ height: `1.375rem` }}>
                  <SVGIcon
                    color="white"
                    iconFile="/icons/my-acc-user-config.svg"
                  />
                </div>
              )}>
              <Text size="0.875rem">Mi cuenta</Text>
            </BadgeMolecule>
            <button onClick={() => setMyAccount(0)}>
              <div style={{ height: `0.813rem`, color: 'red' }}>
                <SVGIcon iconFile="/icons/times.svg" />
              </div>
            </button>
          </StyledMyAccountHeader>
          <StyledImageAndButtonContainer>
            {profilePicture && profilePicture !== '' ? (
              <StyledMyAccountAvatar
                src={profilePicture}
                alt={userDataInState.name}
              />
            ) : (
              <StyledMyAccountAvatar src="/icons/user.svg" />
            )}
            <IconButtonMolecule
              color="#8769ff"
              state={
                !isLoanding ? IconButtonState.NORMAL : IconButtonState.LOADING
              }
              onClick={() => handleInput()}
              Icon={() => <SVGIcon iconFile="/icons/camera.svg" />}
            />
          </StyledImageAndButtonContainer>
          <StyledMyAccountInputsContainer>
            <Text size="0.75rem" weight="400">
              Nombre
            </Text>
            <StyledMyAccountSimilInput>
              <Text size="0.875rem" weight="400">
                {userDataInState.name}
              </Text>
            </StyledMyAccountSimilInput>
            <Text size="0.75rem" weight="400">
              Correo electrónico
            </Text>
            <StyledMyAccountSimilInput>
              <Text size="0.875rem" weight="400">
                {userDataInState.email}
              </Text>
            </StyledMyAccountSimilInput>
            <div>
              <button onClick={() => setMyAccount(2)}>
                <Text size="0.75rem" weight="400">
                  Cambiar mi contraseña
                </Text>
              </button>
            </div>
          </StyledMyAccountInputsContainer>
        </StyledMyAccountSidebar>
      )}
      {myAccount === 2 && (
        <Formik
          initialValues={{ oldPassword: '', newPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ errors, touched, isValid, submitForm }) => {
            return (
              <StyledMyAccountSidebar>
                <StyledMyAccountHeader>
                  <BadgeMolecule
                    bgColor="transparent"
                    leftIcon={() => (
                      <button
                        style={{ height: `1.375rem` }}
                        onClick={() => setMyAccount(1)}>
                        <SVGIcon
                          color="white"
                          iconFile="/icons/collapse-left.svg"
                        />
                      </button>
                    )}>
                    <Text size="0.875rem">Mi cuenta</Text>
                  </BadgeMolecule>
                  <button onClick={() => setMyAccount(0)}>
                    <div style={{ height: `0.813rem`, color: 'red' }}>
                      <SVGIcon iconFile="/icons/times.svg" />
                    </div>
                  </button>
                </StyledMyAccountHeader>
                <StyledChangePasswordIndication>
                  <Text size="0.75rem" weight="400">
                    Completa los datos solicitados, considerando las
                    restricciones asociadas a tu nueva contraseña.
                  </Text>
                </StyledChangePasswordIndication>

                <Form>
                  <StyledChangeUserPassword>
                    <Text size="0.75rem" weight="400">
                      Contraseña actual
                    </Text>
                    <Field
                      as={ContainerInput}
                      name="oldPassword"
                      id="oldPassword"
                      setFocus={() => null}
                      type={visibleOld ? 'text' : 'password'}
                      valid={touched.oldPassword && !errors.oldPassword}
                      onClick={handleClickOld}
                      LeftIcon={() => <SVGIcon iconFile="/icons/eye.svg" />}
                    />
                  </StyledChangeUserPassword>
                  <StyledChangeUserPassword>
                    <Text size="0.75rem" weight="400">
                      Nueva contraseña
                    </Text>
                    <Field
                      as={ContainerInput}
                      name="newPassword"
                      id="newPassword"
                      setFocus={() => null}
                      type={visibleNew ? 'text' : 'password'}
                      valid={touched.newPassword && !errors.newPassword}
                      onClick={handleClickNew}
                      LeftIcon={() => <SVGIcon iconFile="/icons/eye.svg" />}
                    />
                  </StyledChangeUserPassword>
                  <StyledUserChangePasswordRestrictions>
                    <Text size="12px" weight="500">
                      Tu nueva contraseña debe:
                    </Text>
                    <div>
                      <SVGIcon iconFile="/icons/check_password.svg" />

                      <Text size="12px" weight="400">
                        Tener 8 carácteres minímo.
                      </Text>
                    </div>
                    <div>
                      <SVGIcon iconFile="/icons/check_password.svg" />
                      <Text size="12px" weight="400">
                        No contener espacios vacios.
                      </Text>
                    </div>
                  </StyledUserChangePasswordRestrictions>
                  <StyledButtonContainer>
                    <ButtonMolecule
                      text="Cambiar contraseña"
                      size={Size.MEDIUM}
                      state={
                        !isValid ? ButtonState.DISABLED : ButtonState.NORMAL
                      }
                      bgColor="#8769FF"
                      onClick={submitForm}
                    />
                  </StyledButtonContainer>
                </Form>
              </StyledMyAccountSidebar>
            );
          }}
        </Formik>
      )}
    </>
  );
};
