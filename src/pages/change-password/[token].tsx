import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { baseRestApi } from '../../api/base';
import { Loader } from '../../components/shared/atoms/Loader/Loader';
import { ExpiredChangePasswordLink } from '../../components/shared/pages/Login/ExpiredChangePaswordLink/ExpiredChangePaswordLink';
import { LoginChangePassword } from '../../components/shared/pages/Login/LoginChangePassword/LoginChangePassword';
import { LoginSuccessFactors } from '../../components/shared/pages/Login/LoginSuccessFactors/LoginSuccessFactors';

const FullPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const ChangePasswordPage: NextPage = () => {
  const router = useRouter();
  const token = router.query.token as string;

  const [isLoading, setIsLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const verifyToken = useCallback(async () => {
    if (token) {
      setIsLoading(true);
      try {
        const response = await baseRestApi.get(
          `${process.env.NEXT_PUBLIC_AUTH_API_URL}/verifyToken/${token}`,
        );
        if (response === 'VALID TOKEN') {
          setIsValidToken(true);
        } else {
          setIsExpired(true);
        }
      } catch (error) {
        setIsExpired(true);
      }
    }
    setIsLoading(false);
  }, [token]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken, setIsValidToken]);

  return (
    <FullPageContainer>
      {isLoading && <Loader />}
      {!isLoading && isValidToken && !isSuccess && (
        <LoginChangePassword
          token={String(token)}
          setIsSuccess={setIsSuccess}
        />
      )}
      {!isLoading && !isValidToken && !isSuccess && isExpired && (
        <ExpiredChangePasswordLink />
      )}
      {!isLoading && isSuccess && <LoginSuccessFactors />}
    </FullPageContainer>
  );
};

export default ChangePasswordPage;
