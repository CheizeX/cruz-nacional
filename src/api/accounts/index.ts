import { Accounts } from '../../models/users/user';
import { baseRestApi, authApi } from '../base';

export const validateOnboardingTokenRequest = async (token: string) => {
  return baseRestApi.get(`/accounts/validate-onboarding-token/${token}`);
};

export const doOnboardingRequest = async (password: string) => {
  return baseRestApi.post('/accounts/onboarding', { password });
};

export const validateChangePasswordTokenRequest = async (token: string) => {
  return baseRestApi.get(`/accounts/validate-change-password-token/${token}`);
};

export const changePasswordRequest = async (
  oldPass: string,
  newPass: string,
) => {
  return authApi.patch('/changePassword', {
    oldPass,
    newPass,
  });
};

export const requestChangePasswordLink = async (email: string) => {
  return baseRestApi.post('/accounts/request-change-password-link', { email });
};

export const requestSignUp = async (userDatos: Partial<Accounts>) => {
  return authApi.post<string>('/signup', userDatos);
};
