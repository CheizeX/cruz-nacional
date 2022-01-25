import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { authApi } from '../../api/base';
import { appLogger } from '../../helpers/logger';
import useLocalStorage from '../use-local-storage';
import { useToastContext } from '../../components/shared/molecules/Toast/useToast';
import { Toast } from '../../components/shared/molecules/Toast/Toast.interface';

export const useAuth = () => {
  const toasts = useToastContext();

  const { push } = useRouter();

  const [accessToken, setAccessToken] = useLocalStorage('AccessToken', '');

  useEffect(() => {
    appLogger.info({ accessToken });
  }, [accessToken]);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await authApi.post<{
        accessToken: string;
      }>('/signin', {
        email,
        password,
      });

      setAccessToken(response.accessToken);
      // toasts?.addToast({
      //   alert: Toast.SUCCESS,
      //   title: 'Bienvenido !',
      //   message: 'Te has logueado correctamente',
      // });
    } catch (error) {
      toasts?.addToast({
        alert: Toast.ERROR,
        title: 'Error !',
        message: `Compruebe que el nombre de usuario y la contraseña sean correctos`,
      });
      localStorage.removeItem('AccessToken');
    }
  };

  const signOut = async () => {
    try {
      await authApi.post<{
        accessToken: string;
      }>('/signout', {
        accessToken,
        // refresh token
      });

      window.localStorage.removeItem('AccessToken');
      push('/');
    } catch (error) {
      appLogger.error(error);
    }
  };

  return {
    signIn,
    signOut,
    // renewToken,
  };
};
