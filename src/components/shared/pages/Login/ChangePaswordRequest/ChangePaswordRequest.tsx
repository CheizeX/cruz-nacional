import React, { FC } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import {
  ButtonMolecule,
  Size,
  ButtonState,
} from '../../../atoms/Button/Button';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ContainerInput } from '../../../molecules/Input/ContainerInput';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import {
  StyledChangePasswordRequestWrapper,
  StyledHeader,
  StyledInformation,
} from './ChangePasswordRequest.styled';

interface Values {
  email: string;
}

interface ChangePasswordRequestProps {
  onSubmit?: (email: string) => void | Promise<void>;
}

// --- Formik settings ---------------------
const initialValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('El email es inválido')
    .required('Debe introducir un correo electrónico'),
});
// --- End of Formik settings ---------------------

export const ChangePasswordRequest: FC<ChangePasswordRequestProps> = ({
  onSubmit: onSubmitExternal,
}) => {
  const toasts = useToastContext();
  const { push } = useRouter();

  const handlePrev = () => {
    push('/');
  };

  const onSubmit = async (
    _values?: Partial<Values>,
    submitProps?: {
      setSubmitting: (arg0: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      if (_values?.email && onSubmitExternal)
        await onSubmitExternal(_values.email);

      submitProps?.setSubmitting(false);
      submitProps?.resetForm();
      toasts?.addToast({
        alert: Toast.SUCCESS,
        title: '!',
        message: 'Se le envió correo',
      });
    } catch (error) {
      toasts?.addToast({
        alert: Toast.ERROR,
        title: 'Se produjo un error',
        message: String(error),
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ errors, touched, isValid }) => {
        return (
          <LoginViewsWrapper>
            <StyledChangePasswordRequestWrapper>
              <StyledHeader>
                <button type="button" onClick={handlePrev}>
                  <SVGIcon iconFile="/icons/collapse-left.svg" />
                  <Text>Volver</Text>
                </button>
              </StyledHeader>
              <StyledInformation>
                <Text>Solicitar cambio de contraseña</Text>
                <Text>
                  Indícanos un correo electrónico al cual enviar el enlace de
                  cambio de contraseña.
                </Text>
              </StyledInformation>
              <Form>
                <Text>Correo electrónico</Text>
                <Field
                  as={ContainerInput}
                  setFocus={() => null}
                  type="text"
                  name="email"
                  id="email"
                  valid={touched.email && !errors.email}
                />
                <ErrorMessage component="p" name="email" />
                <ButtonMolecule
                  type="submit"
                  text="Solicitar"
                  size={Size.MEDIUM}
                  state={!isValid ? ButtonState.DISABLED : ButtonState.NORMAL}
                />
              </Form>
            </StyledChangePasswordRequestWrapper>
          </LoginViewsWrapper>
        );
      }}
    </Formik>
  );
};
