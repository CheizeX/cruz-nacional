/* eslint-disable func-names */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import router from 'next/router';
import { appLogger } from '../helpers/logger';
import { IErrorResponse, ISuccessResponse } from '../models/response';

export class BaseRestApi {
  instance: AxiosInstance;

  constructor(baseURL: string) {
    const instance = axios.create({
      baseURL,
    });

    this.instance = instance;
    this.instance.interceptors.request.use(function (
      config: AxiosRequestConfig,
    ) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${
        window.localStorage.getItem('AccessToken') || ''
      }`;

      return config;
    });
  }

  async get<T = unknown>(uri: string): Promise<any> {
    try {
      const response = await this.instance.get<ISuccessResponse<T>>(uri);
      if (!response.data.success) {
        return response.data;
      }
      return response.data.result;
    } catch (err: any) {
      appLogger.warn(err);
      if (err.response.data.errorMessage === 'Jwt Expired') {
        localStorage.removeItem('AccessToken');
        router.push('/');
        throw new Error('Sesión Expirada. ¡Debes loguearte nuevamente!');
      }
      if (err.response.data.code === 400) {
        localStorage.removeItem('AccessToken');
        router.push('/');
      }
      if (axios.isAxiosError(err)) {
        throw new Error('No se puede establecer la conexión con el servidor.');
      }
      throw new Error(
        (err as AxiosError<IErrorResponse>).response?.data.ailaliaErrorCode ||
          'AIL-501',
      );
      // throw new Error('AIL-501');
    }
  }

  async post<T = unknown>(uri: string, body: unknown): Promise<T> {
    try {
      const response = await this.instance.post<ISuccessResponse<T>>(uri, body);
      // if (!response.data.success) {
      //   router.push('/');
      // }
      return response.data.result;
    } catch (err: any) {
      appLogger.warn(err);
      if (err.response.data.errorMessage === 'Jwt Expired') {
        localStorage.removeItem('AccessToken');
        router.push('/');
        throw new Error('Sesión Expirada. ¡Debes loguearte nuevamente!');
      }
      if (err.response.data.code === 400) {
        localStorage.removeItem('AccessToken');
        router.push('/');
      }
      // if (axios.isAxiosError(err)) {
      //   throw new Error(
      //     (err as AxiosError<IErrorResponse>).response?.data.ailaliaErrorCode ||
      //       'AIL-501',
      //   );
      // }
      throw new Error('No se puede establecer la conexión con el servidor.');
    }
  }

  async postMultipart<T = unknown>(uri: string, body: unknown): Promise<T> {
    try {
      const response = await this.instance.post<ISuccessResponse<T>>(
        uri,
        body,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      // if (!response.data.success)
      //   throw new Error(JSON.stringify(response.data));
      return response.data.result;
    } catch (err: any) {
      appLogger.warn(err);
      if (err.response.data.errorMessage === 'Jwt Expired') {
        localStorage.removeItem('AccessToken');
        router.push('/');
        throw new Error('Sesión Expirada. ¡Debes loguearte nuevamente!');
      }
      if (err.response.data.code === 400) {
        localStorage.removeItem('AccessToken');
        router.push('/');
      }
      // if (axios.isAxiosError(err)) {
      //   throw new Error(
      //     (err as AxiosError<IErrorResponse>).response?.data.ailaliaErrorCode ||
      //       'AIL-501',
      //   );
      // }
      throw new Error('AIL-501');
    }
  }

  async patch<T = unknown>(uri: string, body: unknown): Promise<T> {
    try {
      const response = await this.instance.patch<ISuccessResponse<T>>(
        uri,
        body,
      );
      // if (!response.data.success)
      //   throw new Error(JSON.stringify(response.data));
      return response.data.result;
    } catch (err: any) {
      appLogger.warn(err);
      if (err.response.data.errorMessage === 'Jwt Expired') {
        localStorage.removeItem('AccessToken');
        router.push('/');
        throw new Error('Sesión Expirada. ¡Debes loguearte nuevamente!');
      }
      if (err.response.data.code === 400) {
        localStorage.removeItem('AccessToken');
        router.push('/');
      }
      // if (axios.isAxiosError(err)) {
      //   throw new Error(
      //     (err as AxiosError<IErrorResponse>).response?.data.ailaliaErrorCode ||
      //       'AIL-501',
      //   );
      // }
      throw new Error('AIL-501');
    }
  }

  async delete<T = boolean>(uri: string): Promise<T> {
    try {
      const response = await this.instance.delete<ISuccessResponse<T>>(uri);
      if (!response.data.success)
        throw new Error(JSON.stringify(response.data));
      return response.data.result;
    } catch (err: any) {
      appLogger.warn(err);
      if (err.response.data.errorMessage === 'Jwt Expired') {
        localStorage.removeItem('AccessToken');
        router.push('/');
        throw new Error('Sesión Expirada. ¡Debes loguearte nuevamente!');
      }
      if (err.response.data.code === 400) {
        localStorage.removeItem('AccessToken');
        router.push('/');
      }
      // if (axios.isAxiosError(err)) {
      //   throw new Error(
      //     (err as AxiosError<IErrorResponse>).response?.data.ailaliaErrorCode ||
      //       'AIL-501',
      //   );
      // }
      throw new Error('AIL-501');
    }
  }
}

export const baseRestApi = new BaseRestApi(
  process.env.NEXT_PUBLIC_REST_API_URL ?? '',
);

export const authApi = new BaseRestApi(
  process.env.NEXT_PUBLIC_AUTH_API_URL ?? '',
);
