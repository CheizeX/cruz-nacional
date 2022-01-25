/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios, { AxiosRequestConfig } from 'axios';
import {
  StyledTrialFormContainer,
  StyledTrialFormLayout,
} from './TrialForm.styled';
import {
  ButtonMolecule,
  ButtonState,
  Size,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';

const validationSchema = Yup.object({
  companyName: Yup.string().required('El nombre de la empresa es requerido'),
  name: Yup.string()
    .required('El nombre es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'El nombre solo puede contener letras')
    .min(2, 'El nombre es muy corto'),
  lastName: Yup.string()
    .required('El apellido es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'El nombre solo puede contener letras')
    .min(2, 'El apellido es muy corto'),
  email: Yup.string()
    .email('El email es inválido')
    .required('El email es requerido'),
  phone: Yup.string()
    .required('El teléfono es requerido')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'El teléfono es inválido',
    ),

  password: Yup.string()
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(20),
  verifyPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Las contraseñas no coinciden',
  ),
});
const initialValues = {
  companyName: '',
  name: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  verifyPassword: '',
};

export const TrialForm: FC = () => {
  const onSubmit = async (values: {
    companyName: string;
    name: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
  }) => {
    try {
      const axiosConfig: AxiosRequestConfig = {
        baseURL: process.env.NEXT_PUBLIC_REST_API_URL,
        url: '/trial',
        method: 'post',
        data: {
          companyName: values.companyName,
          name: values.name,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email,
          password: values.password,
        },
      };
      const { data } = await axios(axiosConfig);

      // if (data.success) {
      //   router.push(`/redirect/${data.result}`);
      // }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting }) => {
        return (
          <>
            <StyledTrialFormLayout>
              <SVGIcon iconFile="/images/MaskGroup.svg" />
              <img
                src="/images/elipse-chat-blanco.png"
                width="300px"
                alt="logo"
              />
              <StyledTrialFormContainer>
                <h1>
                  Completa los siguientes campos para poder acceder al período
                  de evaluación
                </h1>

                <Form>
                  {/* <h1>Datos personales:</h1> */}
                  <Field type="text" name="name" placeholder="Nombre" />
                  <div>
                    <ErrorMessage name="name" component="div" />
                  </div>
                  <Field type="text" name="lastName" placeholder="Apellido" />
                  <div>
                    <ErrorMessage name="lastName" component="div" />
                  </div>
                  <Field type="email" name="email" placeholder="Email" />
                  <div>
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <Field
                    type="phone"
                    name="phone"
                    placeholder="Número de teléfono"
                  />
                  <div>
                    <ErrorMessage name="phone" component="div" />
                  </div>
                  <Field
                    type="text"
                    name="companyName"
                    placeholder="Nombre de la empresa"
                  />
                  <div>
                    <ErrorMessage name="companyName" component="div" />
                  </div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                  />
                  <div>
                    <ErrorMessage name="contraseña" component="div" />
                  </div>
                  <Field
                    type="password"
                    name="verifyPassword"
                    placeholder="Verificar contraseña "
                  />
                  <div>
                    <ErrorMessage name="verifyPassword" component="div" />
                  </div>
                  <ButtonMolecule
                    text="Comenzar con mi prueba gratuita"
                    type="submit"
                    size={Size.MEDIUM}
                    state={
                      isSubmitting ? ButtonState.DISABLED : ButtonState.NORMAL
                    }
                  />
                </Form>
              </StyledTrialFormContainer>
            </StyledTrialFormLayout>
          </>
        );
      }}
    </Formik>
  );
};
