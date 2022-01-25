import { Tag } from '../tags/tag';
import { UserRole } from './role';
import { UserStatus } from './status';

export type User = {
  _id: string;
  email: string;
  name: string;
  role: UserRole;
  tags: Tag[] | undefined;
  status?: UserStatus;
  urlAvatar?: string;
};

export type Status = {
  status: string;
};

export type Accounts = {
  email: string;
  password: string;
};

export type DecodedToken = {
  email?: string;
  exp?: number;
  iat?: number;
  name?: string;
  role?: string;
  urlAvatar: string;
  _id?: string;
};
