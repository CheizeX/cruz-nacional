import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useJwt } from 'react-jwt';
import { Loader } from '../components/shared/atoms/Loader/Loader';
import useLocalStorage from '../hooks/use-local-storage';
import { UserRole } from '../models/users/role';

export default function Custom404() {
  const { push } = useRouter();
  const [accessToken] = useLocalStorage('AccessToken', '');
  const { decodedToken }: any = useJwt(accessToken);

  useEffect(() => {
    if (!accessToken) {
      push('/');
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

  return <Loader />;
}
