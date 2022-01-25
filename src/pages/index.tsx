import { NextPage } from 'next';
import React from 'react';
import { LoginView } from '../components/shared/pages/Login/LoginView/LoginView';
import { useAuth } from '../hooks/auth/main-auth.hook';

const HomePage: NextPage = () => {
  const { signIn } = useAuth();

  return (
    <>
      <LoginView onSubmit={signIn} />
    </>
  );
};

export default HomePage;
