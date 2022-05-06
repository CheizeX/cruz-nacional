export enum Toast {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  INACTIVE = 'inactive',
}

export interface IAddToast {
  message: string;
  title: string;
  alert?: Toast;
  durationTime?: boolean;
}

export interface IToastProps {
  alert: Toast;
  id?: number;
  title: string;
  message: string;
  durationTime: boolean;
}

export type IToastContextType = {
  toasts: IToastProps[];
  addToast: (arg: IAddToast) => void;
  clearToast: (arg: number) => void;
};
