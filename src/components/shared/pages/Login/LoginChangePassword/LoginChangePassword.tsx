import React, { FC, useState, MouseEventHandler, useCallback } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledLoginPassword,
  StyledTitle,
  StyledSubTitle,
  FirstMessage,
  StyledInput,
  SecondMessage,
  StyledRestrictions,
  StyleErrors,
} from './LoginChangePassword.styled';
import { Text } from '../../../atoms/Text/Text';
import {
  ButtonMolecule,
  Size,
  ButtonState,
} from '../../../atoms/Button/Button';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { ContainerInput } from '../../../molecules/Input/ContainerInput';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../molecules/Toast/useToast';

type Values = {
  password: string;
};

const initialValues = {
  password: '',
};

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Debe tener al menos 8 caracteres')
    .matches(/^(\S+$)/, 'No debe tener espacios vacíos')
    .required('Debe introducir una contraseña'),
});
export interface LoginChangePasswordProps {
  onClick?: MouseEventHandler;
  onSubmit?: (password: string) => void | Promise<void>;
}

export const LoginChangePassword: FC<LoginChangePasswordProps> = ({
  onClick = () => {},
  onSubmit: onSubmitExternal,
}) => {
  const [visible, setVisible] = useState(false);
  const toasts = useToastContext();

  const handleClick = useCallback<MouseEventHandler>(
    (event) => {
      onClick(event);
      setVisible((currentVisibility) => !currentVisibility);
    },
    [onClick],
  );

  const onSubmit = async (
    _values?: Partial<Values>,
    submitProps?: {
      setSubmitting: (arg: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      if (onSubmitExternal && _values?.password)
        onSubmitExternal(_values.password);

      submitProps?.setSubmitting(false);
      submitProps?.resetForm();
      toasts?.addToast({
        alert: Toast.SUCCESS,
        title: '¡Perfect!',
        message: 'La iteración ha sido asignada con éxito',
      });
    } catch (error) {
      toasts?.addToast({
        alert: Toast.ERROR,
        title: '¡Oops!',
        message: `${error}`,
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ errors, touched, isValid }) => {
        return (
          <LoginViewsWrapper>
            <StyledLoginPassword>
              <StyledTitle>
                <Text size="16" weight="600">
                  Cambiar contraseña
                </Text>
              </StyledTitle>
              <Form>
                <StyledSubTitle>
                  <Text size="14px" weight="400">
                    Ingresa tu nueva contraseña, considerando las restricciones
                    indicadas
                  </Text>
                </StyledSubTitle>
                <FirstMessage>
                  <Text size="12px" weight="500">
                    Nueva Contraseña
                  </Text>
                </FirstMessage>
                <StyledInput>
                  <Field
                    as={ContainerInput}
                    name="password"
                    id="password"
                    setFocus={() => null}
                    type={visible ? 'text' : 'password'}
                    valid={touched.password && !errors.password}
                    onClick={handleClick}
                    LeftIcon={() => <SVGIcon iconFile="/icons/eye.svg" />}
                  />
                  <ErrorMessage name="password" component={StyleErrors} />
                </StyledInput>
                <SecondMessage>
                  <Text size="12px" weight="500">
                    Tu Contraseña debe:
                  </Text>
                </SecondMessage>
                <StyledRestrictions>
                  <SVGIcon iconFile="/icons/check_password.svg" />
                  <Text size="12px" weight="400">
                    Tener 8 carácteres minímo.
                  </Text>
                  <SVGIcon iconFile="/icons/check_password.svg" />
                  <Text size="12px" weight="400">
                    No contener espacios vacios.
                  </Text>
                </StyledRestrictions>
                <ButtonMolecule
                  text="Cambiar"
                  size={Size.MEDIUM}
                  state={!isValid ? ButtonState.DISABLED : ButtonState.NORMAL}
                />
              </Form>
            </StyledLoginPassword>
          </LoginViewsWrapper>
        );
      }}
    </Formik>
  );
};

export default LoginChangePassword;
