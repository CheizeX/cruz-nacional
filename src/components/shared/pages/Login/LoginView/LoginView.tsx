import React, {
  FC,
  MouseEventHandler,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useJwt } from 'react-jwt';
import { useRouter } from 'next/router';
import { useToastContext } from '../../../molecules/Toast/useToast';
import {
  StyledLoginView,
  StyledHeader,
  StyledFirstInput,
  StyleErrors,
  StyledSecondInput,
  StyledLinkTo,
  StyledLoaderContainer,
} from './LoginView.styled';
import { Text } from '../../../atoms/Text/Text';
import { ContainerInput } from '../../../molecules/Input/ContainerInput';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import {
  ButtonMolecule,
  Size,
  ButtonState,
} from '../../../atoms/Button/Button';
import { LinkToMolecule } from '../../../molecules/LinkTo/LinkTo';
import { LoginViewsWrapper } from '../../../organisms/LoginViewsWrapper/LoginViewsWrapper';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import useLocalStorage from '../../../../../hooks/use-local-storage';
import { useAppDispatch } from '../../../../../redux/hook/hooks';
import { setUserDataInState } from '../../../../../redux/slices/auth/user-credentials';
import { DecodedToken } from '../../../../../models/users/user';
import { UserRole } from '../../../../../models/users/role';
import { Loader } from '../../../atoms/Loader/Loader';

type Values = {
  email: string;
  password: string;
};

export interface ViewLoginProps {
  onClick?: MouseEventHandler;
  onSubmit?: (email: string, password: string) => void | Promise<void>;
}

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('El email es inválido')
    .required('Debe introducir un correo electrónico'),
  password: Yup.string()
    // .min(8, 'Debe tener al menos 8 caracteres')
    .matches(/^(\S+$)/, 'No debe tener espacios vacíos')
    .required('Debe introducir una contraseña'),
});

export const LoginView: FC<ViewLoginProps> = ({
  onClick = () => {},
  onSubmit: onSubmitExternal,
}) => {
  const { push } = useRouter();

  const [accessToken] = useLocalStorage('AccessToken', '');
  const { decodedToken }: any = useJwt(accessToken);

  const dispatch = useAppDispatch();

  const [visible, setVisible] = useState(false);
  const toasts = useToastContext();

  const handleClick = useCallback<MouseEventHandler>(
    (event) => {
      onClick(event);
      setVisible((currentVisibility) => !currentVisibility);
    },
    [onClick],
  );

  useEffect(() => {
    if (decodedToken) {
      dispatch(setUserDataInState(decodedToken as DecodedToken));
    }
    if (decodedToken?.role === UserRole.AGENT) {
      push('/live-chat');
    }
    if (decodedToken?.role === UserRole.SUPERVISOR) {
      push('/backoffice');
    }
    if (decodedToken?.role === UserRole.ADMIN) {
      push('/backoffice');
    }
  }, [decodedToken]);

  const onSubmit = async (
    _values?: Partial<Values>,
    submitProps?: {
      setSubmitting: (arg0: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      if (onSubmitExternal && _values?.email && _values.password) {
        await onSubmitExternal(_values.email, _values.password);
        submitProps?.resetForm();
      }
    } catch (error) {
      toasts?.addToast({
        alert: Toast.ERROR,
        title: 'Error!',
        message: `El usuario o la contraseña no corresponden`,
      });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ errors, touched, isValid, isSubmitting }) => {
        return (
          <>
            {isSubmitting || decodedToken ? (
              <StyledLoaderContainer>
                <LoginViewsWrapper>
                  <Loader />
                </LoginViewsWrapper>
              </StyledLoaderContainer>
            ) : (
              <LoginViewsWrapper>
                <StyledLoginView>
                  <StyledHeader>
                    <Text size="18px" weight="600">
                      Iniciar Sesión
                    </Text>
                  </StyledHeader>
                  <Form>
                    <Text color="black" size="12px" weight="500">
                      Correo electrónico
                    </Text>
                    <StyledFirstInput>
                      <Field
                        as={ContainerInput}
                        name="email"
                        id="email"
                        setFocus={() => null}
                        type="text"
                        valid={touched.email && !errors.email}
                      />
                      <ErrorMessage name="email" component={StyleErrors} />
                    </StyledFirstInput>
                    <Text color="black" size="12px" weight="500">
                      Contraseña
                    </Text>
                    <StyledSecondInput>
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
                    </StyledSecondInput>
                    <Link href="/request-password-change">
                      <StyledLinkTo>
                        <LinkToMolecule text="¿Olvidaste tu contraseña?" />
                      </StyledLinkTo>
                    </Link>
                    <ButtonMolecule
                      text="Iniciar sesión"
                      type="submit"
                      size={Size.MEDIUM}
                      state={
                        !isValid ? ButtonState.DISABLED : ButtonState.NORMAL
                      }
                    />
                  </Form>
                </StyledLoginView>
              </LoginViewsWrapper>
            )}
          </>
        );
      }}
    </Formik>
  );
};
