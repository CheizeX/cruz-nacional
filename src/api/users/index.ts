import { StatusAgent } from '../../models/users/status';
import { User, Status } from '../../models/users/user';
import { baseRestApi } from '../base';

export const createUser = async (userData: Omit<User, '_id'>) => {
  try {
    return await baseRestApi.post<User>('/users', userData);
  } catch (error) {
    return error;
  }
};

export const readUsers = async (qs: string) => {
  try {
    return await baseRestApi.get<User[]>(`/users?${qs}`);
  } catch (error) {
    return error;
  }
};

export const readingUsers = async (status: string) => {
  try {
    return await baseRestApi.get<User[]>(`/users/status/${status}`);
  } catch (error) {
    return error;
  }
};

export const readUser = (userId: string) => {
  return baseRestApi.get<User>(`/users/${userId}`);
};

export const updateUser = async (
  userId: string,
  userData: Partial<Omit<User, '_id'>>,
) => {
  try {
    return await baseRestApi.patch<User>(`/users/${userId}`, userData);
  } catch (error) {
    return error;
  }
};

export const changeStatus = async (userStatus: Partial<Status>) => {
  try {
    return await baseRestApi.patch<StatusAgent>(
      '/users/changeStatus',
      userStatus,
    );
  } catch (error) {
    return error;
  }
};

export const deleteUser = (userId: string) => {
  return baseRestApi.delete<boolean>(`/users/${userId}`);
};
