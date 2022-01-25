/* eslint-disable consistent-return */
import { useCallback, useEffect, FC, useState, createContext } from 'react';
import {
  IToastContextType,
  IToastProps,
  IAddToast,
  Toast,
} from './Toast.interface';

const ToastContext = createContext<IToastContextType | null>(null);
export default ToastContext;

export const ToastContextProvider: FC = ({ children }) => {
  const [toasts, setToast] = useState<IToastProps[]>([]);
  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToast((_toasts) => _toasts.slice(1)),
        3000,
      );
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = useCallback(
    (toast: IAddToast) => {
      const nextToast = toasts.concat({
        alert: Toast.SUCCESS,
        id: Math.random(),
        ...toast,
      } as IToastProps);
      setToast(nextToast);
    },
    [toasts, setToast],
  );

  const clearToast = useCallback(
    (indexToDelete: number) =>
      setToast((_toasts) =>
        _toasts.filter((_, index) => indexToDelete !== index),
      ),
    [setToast],
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, clearToast }}>
      {children}
    </ToastContext.Provider>
  );
};
