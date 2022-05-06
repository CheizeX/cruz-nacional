import React, { FC, useState, MouseEventHandler, useCallback } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledLoginPassword,
  StyledTitle,
  StyledSubTitle,
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
import { baseRestApi } from '../../../../../api/base';

type Values = {
  password: string;
  confirm: string;
};

const initialValues = {
  password: '',
  confirm: '',
};

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Debe tener al menos 8 caracteres')
    .matches(/^(\S+$)/, 'No debe tener espacios vacíos')
    .required('Debe introducir una contraseña'),
  confirm: Yup.string()
    .min(8, 'Debe tener al menos 8 caracteres')
    .matches(/^(\S+$)/, 'No debe tener espacios vacíos')
    .required('Debe introducir una contraseña')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
});

export interface LoginChangePasswordProps {
  onClick?: MouseEventHandler;
  token: string;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginChangePassword: FC<LoginChangePasswordProps> = ({
  onClick = () => {},
  token,
  setIsSuccess,
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
    submitProps?.setSubmitting(true);
    try {
      const response = await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_AUTH_API_URL}/resetPassword/${token}`,
        {
          newPassword: _values?.password,
          confirmedNewPassword: _values?.confirm,
        },
      );
      submitProps?.setSubmitting(false);
      submitProps?.resetForm();
      if (response === 'RESTORED') {
        setIsSuccess(true);
        toasts?.addToast({
          alert: Toast.SUCCESS,
          title: 'CONTRASEÑA CAMBIADA',
          message: 'La contraseña ha sido cambiada con éxito',
        });
      } else {
        toasts?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: 'La contraseña no ha sido cambiada',
        });
      }
    } catch (error) {
      toasts?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `La contraseña no ha podido ser cambiada.`,
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ errors, touched, isValid, values }) => {
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
                    A continuación ingresa tu nueva contraseña considerando las
                    restricciones indicadas:
                  </Text>
                </StyledSubTitle>
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
                <StyledInput>
                  <Field
                    as={ContainerInput}
                    name="confirm"
                    id="confirm"
                    setFocus={() => null}
                    type={visible ? 'text' : 'password'}
                    valid={touched.password && !errors.password}
                    onClick={handleClick}
                    LeftIcon={() => <SVGIcon iconFile="/icons/eye.svg" />}
                  />
                  <ErrorMessage name="confirm" component={StyleErrors} />
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
                    No contener espacios vacíos.
                  </Text>
                </StyledRestrictions>
                <ButtonMolecule
                  type="button"
                  text="Cambiar"
                  size={Size.MEDIUM}
                  state={
                    !isValid || values.confirm === '' || values.password === ''
                      ? ButtonState.DISABLED
                      : ButtonState.NORMAL
                  }
                  onClick={() => onSubmit(values)}
                />
              </Form>
            </StyledLoginPassword>
          </LoginViewsWrapper>
        );
      }}
    </Formik>
  );
};
