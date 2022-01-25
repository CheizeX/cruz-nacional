import React, { FC } from 'react';
import { Story, Meta } from '@storybook/react';
import { useToastContext } from './useToast';
import { ToastContextProvider } from './ToastContext';
import { ButtonMolecule } from '../../atoms/Button/Button';
import { IToastProps, Toast } from './Toast.interface';

export default {
  title: 'Ailalia/Molecules/Toast',
  component: ToastContextProvider,
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    alert: {},
  },
} as Meta;

const Foo: FC = () => {
  const toasts = useToastContext();
  const handleClick = () => {
    toasts &&
      toasts.addToast({
        alert: Toast.WARNING,
        title: 'Oops',
        message:
          'En estos momentos no puedo concretar la acción. Intentalo mas tarde',
      });
  };
  return (
    <div>
      <div>
        <ButtonMolecule text="Show Toast" onClick={handleClick} />
      </div>
    </div>
  );
};

const Template: Story<IToastProps> = () => (
  <>
    <Foo />
  </>
);
export const Default = Template.bind({});
