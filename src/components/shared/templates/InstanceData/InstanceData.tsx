/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios, { AxiosRequestConfig } from 'axios';
import 'react-phone-input-2/lib/style.css';
import {
  StyledInstanceDataContainer,
  StyledInstanceDataLayout,
} from './InstanceData.styled';
import { ButtonMolecule, ButtonState, Size } from '../../atoms/Button/Button';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { useToastContext } from '../../molecules/Toast/useToast';
import { Toast } from '../../molecules/Toast/Toast.interface';

const validationSchema = Yup.object({
  instanceId: Yup.string().required('El número de la instancia es requerido'),
  instanceToken: Yup.string().required('El tóken de la instancia es requerido'),
  companyId: Yup.string().required('El id de la compañía es requerido'),
});

export const InstanceData: FC = () => {
  const showAlert = useToastContext();

  const initialValues = {
    instanceId: '',
    instanceToken: '',
    companyId: '',
  };

  const onSubmit = async (
    values: {
      instanceId: string;
      instanceToken: string;
      companyId: string;
    },
    { resetForm }: any,
  ) => {
    try {
      const axiosConfig: AxiosRequestConfig = {
        baseURL: process.env.NEXT_PUBLIC_REST_API_URL,
        url: '/chatapi/saveInstanceData',
        method: 'post',
        data: {
          instanceId: values.instanceId.trim(),
          instanceToken: values.instanceToken.trim(),
          companyId: values.companyId.trim(),
        },
      };
      const { data } = await axios(axiosConfig);
      if (data.success) {
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'PERFECTO',
          message: `La información se ha enviado con éxito`,
        });
        resetForm({
          values: initialValues,
        });
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `No se pudo enviar la información`,
      });
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
            <StyledInstanceDataLayout>
              <SVGIcon iconFile="/images/MaskGroup.svg" />
              <img
                src="/images/elipse-chat-blanco.png"
                width="300px"
                alt="logo"
              />
              <StyledInstanceDataContainer>
                <h1>Completar Información</h1>
                <Form>
                  <Field
                    type="text"
                    name="instanceId"
                    placeholder="Número de la instancia"
                  />
                  <div>
                    <ErrorMessage name="instanceId" component="div" />
                  </div>
                  <Field
                    type="text"
                    name="instanceToken"
                    placeholder="Tóken de la instancia"
                  />
                  <div>
                    <ErrorMessage name="instanceToken" component="div" />
                  </div>
                  <Field
                    type="text"
                    name="companyId"
                    placeholder="Id de la compañía"
                  />
                  <div>
                    <ErrorMessage name="companyId" component="div" />
                  </div>
                  <ButtonMolecule
                    text="ENVIAR"
                    type="submit"
                    size={Size.MEDIUM}
                    state={
                      isSubmitting ? ButtonState.LOADING : ButtonState.NORMAL
                    }
                  />
                </Form>
              </StyledInstanceDataContainer>
            </StyledInstanceDataLayout>
          </>
        );
      }}
    </Formik>
  );
};
