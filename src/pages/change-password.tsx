import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { Loader } from '../components/shared/atoms/Loader/Loader';
// import { ExpiredChangePasswordLink } from '../components/shared/pages/Login/ExpiredChangePaswordLink/ExpiredChangePaswordLink';
// import { LoginChangePassword } from '../components/shared/pages/Login/LoginChangePassword/LoginChangePassword';
// import { UsedChangePasswordLink } from '../components/shared/pages/Login/UsedChangePasswordLink/UsedChangePasswordLink';
// import { ChangePasswordStep } from '../config/change-password';
// import { useChangePassword } from '../hooks/change-password';

const FullPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const ChangePasswordPage: NextPage = () => {
  // const { changepasswordStep, handleChangePassword } = useChangePassword();

  // if (changepasswordStep === ChangePasswordStep.CORRECT)
  //   return <LoginChangePassword onSubmit={handleChangePassword} />;

  // if (changepasswordStep === ChangePasswordStep.EXPIRED)
  //   return <ExpiredChangePasswordLink />;

  // if (changepasswordStep === ChangePasswordStep.INVALID)
  //   return <UsedChangePasswordLink />;

  return (
    <FullPageContainer>
      <Loader />
    </FullPageContainer>
  );
};

export default ChangePasswordPage;
