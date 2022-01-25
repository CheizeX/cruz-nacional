// import { useRouter } from 'next/dist/client/router';
// import {
//   // useCallback,
//   useEffect,
//   useRef,
// } from 'react';
// import { useMutation } from 'react-query';
// import { atom, useRecoilState } from 'recoil';
import // changePasswordRequest,
// validateChangePasswordTokenRequest,
'../../api/accounts';
// import { ChangePasswordStep } from '../../config/change-password';
// import { appLogger } from '../../helpers/logger';

// const changepasswordStepState = atom({
//   key: 'changepasswordStepState',
//   default: ChangePasswordStep.VALIDATING,
// });

export const useChangePassword = () => {
  //   const [changepasswordStep, setChangePasswordStep] = useRecoilState(
  //     changepasswordStepState,
  //   );
  // const tokenRef = useRef<string | null>(null);
  // const { asPath, push } = useRouter();
  // const validateChangePasswordToken = useMutation(
  //   (token: string) => validateChangePasswordTokenRequest(token),
  //   {
  //     onSuccess: () => setChangePasswordStep(ChangePasswordStep.CORRECT),
  //     onError: (error) => {
  //       appLogger.error(error);
  //       setChangePasswordStep(ChangePasswordStep.INVALID);
  //     },
  //   },
  // );
  // const doChangePassword = useMutation(
  //   (password: string) => changePasswordRequest(password),
  //   {
  //     onSuccess: () => appLogger.info('success'),
  //     onError: () => appLogger.info('error'),
  //     onSettled: () => push('/'),
  //   },
  // );
  // const handleToken = useCallback((token: string | null) => {
  //   if (token) validateChangePasswordToken.mutate(token);
  //   else {
  //     setChangePasswordStep(ChangePasswordStep.INVALID);
  //   }
  // }, []);
  // useEffect(() => {
  //   const url = new URL(`https://ailalia.com${asPath}`);
  //   tokenRef.current = url.searchParams.get('t');
  //   // handleToken(tokenRef.current);
  // }, []);
  // return {
  //   changepasswordStep,
  //   handleChangePassword: doChangePassword.mutate,
  // };
};
