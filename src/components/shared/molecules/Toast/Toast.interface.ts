export enum Toast {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export interface IAddToast {
  message: string;
  title: string;
  alert?: Toast;
}

export interface IToastProps {
  alert: Toast;
  id?: number;
  title: string;
  message: string;
}

export type IToastContextType = {
  toasts: IToastProps[];
  addToast: (arg: IAddToast) => void;
  clearToast: (arg: number) => void;
};
