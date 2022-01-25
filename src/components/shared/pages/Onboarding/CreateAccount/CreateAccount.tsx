import React, { FC, useState, MouseEventHandler, useCallback } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Text } from '../../../atoms/Text/Text';
import {
  ButtonMolecule,
  Size,
  ButtonState,
} from '../../../atoms/Button/Button';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { ContainerInput } from '../../../molecules/Input/ContainerInput';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useCreateAccount } from '../../../../../hooks/create-account';
import { StyleErrors } from '../../Login/LoginView/LoginView.styled';
import {
  StyledLoginPassword,
  StyledTitle,
  StyledAvatar,
  FirstMessage,
  StyledInput,
  StyledRestrictions,
} from './CreateAccount.styled';

export interface LoginChangePasswordProps {
  onClick?: MouseEventHandler;
  onSubmit?: (password: string) => void | Promise<void>;
}
interface Values {
  email: string;
  password: string;
}

// --- Formik settings ---------------------

const validationSchema = Yup.object({
  email: Yup.string().email('El email es inválido'),
  password: Yup.string()
    .min(8, 'Debe tener al menos 8 caracteres')
    .matches(/^(\S+$)/, 'No debe tener espacios vacíos')
    .required('Debe introducir una contraseña'),
});
// --- End of Formik settings ---------------------

export const CreateAccount: FC<LoginChangePasswordProps> = ({
  onClick = () => {},
}) => {
  const [visible, setVisible] = useState(false);
  const toasts = useToastContext();
  const { currentIdUserAccount } = useCreateAccount();
  const { handleSignUp } = useCreateAccount();
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
      setSubmitting: (arg0: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      if (_values?.password)
        handleSignUp({
          email: currentIdUserAccount,
          password: _values.password,
        });
      submitProps?.setSubmitting(false);
      submitProps?.resetForm();
      toasts?.addToast({
        alert: Toast.SUCCESS,
        title: 'SUCCESS',
        message: 'La cuenta ha sido creada',
      });
    } catch (error) {
      toasts?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${error}`,
      });
    }
  };

  return (
    <Formik
      initialValues={{ email: currentIdUserAccount, password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ errors, touched, isValid }) => {
        return (
          <LoginViewsWrapper>
            <StyledLoginPassword>
              <StyledTitle>
                <Text color="black" size="16" weight="600">
                  Crea tu cuenta
                </Text>
              </StyledTitle>
              <StyledAvatar>
                <SVGIcon iconFile="/icons/unknown_user.svg" />
                <SVGIcon iconFile="/icons/IconButtonSmall.svg" />
              </StyledAvatar>
              <Form>
                <FirstMessage>
                  <Text color="black" size="12px" weight="500">
                    Correo electrónico
                  </Text>
                </FirstMessage>
                <StyledInput>
                  <Field
                    as={ContainerInput}
                    name="email"
                    id="email"
                    setFocus={() => null}
                    type="text"
                    value={currentIdUserAccount}
                    valid={touched.email && !errors.email}
                  />
                  <ErrorMessage name="email" component={StyleErrors} />
                </StyledInput>
                <FirstMessage>
                  <Text color="black" size="12px" weight="500">
                    Contraseña
                  </Text>
                </FirstMessage>
                <StyledInput>
                  <Field
                    as={ContainerInput}
                    name="password"
                    setFocus={() => null}
                    type={visible ? 'text' : 'password'}
                    valid={touched.password && !errors.password}
                    id="password"
                    onClick={handleClick}
                    LeftIcon={() => <SVGIcon iconFile="/icons/eye.svg" />}
                  />
                  <ErrorMessage name="password" component={StyleErrors} />
                </StyledInput>
                <StyledRestrictions>
                  <Text color="black" size="12px" weight="500">
                    Tu Contraseña debe:
                  </Text>
                  <SVGIcon iconFile="/icons/check_password.svg" />
                  <Text color="black" size="12px" weight="400">
                    Tener 8 carácteres minímo.
                  </Text>
                  <SVGIcon iconFile="/icons/check_password.svg" />
                  <Text color="black" size="12px" weight="400">
                    No contener espacios vacios.
                  </Text>
                </StyledRestrictions>
                <ButtonMolecule
                  type="submit"
                  text="Crear cuenta"
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

export default CreateAccount;
