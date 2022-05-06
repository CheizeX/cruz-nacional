import React, { FC } from 'react';
import { FcCancel } from 'react-icons/fc';
import { useToastContext } from './useToast';
import { Toast } from './Toast.interface';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../atoms/Text/Text';
import {
  StyledToastsContainer,
  StyledToast,
  Icon,
  Wraper,
  Title,
  Message,
} from './ToastContainer.styled';

export const ShowToast: FC = () => {
  const notification = useToastContext();

  return (
    <StyledToastsContainer>
      {notification &&
        notification.toasts.map((toast, id) => (
          <StyledToast key={toast.id} alert={toast.alert}>
            {toast.alert === Toast.SUCCESS ? (
              <Icon alert={toast.alert}>
                <SVGIcon iconFile="/icons/success.svg" />
              </Icon>
            ) : null}
            {toast.alert === Toast.WARNING ? (
              <Icon alert={toast.alert}>
                <SVGIcon iconFile="/icons/warning.svg" />
              </Icon>
            ) : null}
            {toast.alert === Toast.ERROR ? (
              <Icon alert={toast.alert}>
                <SVGIcon iconFile="/icons/danger.svg" />
              </Icon>
            ) : null}
            {toast.alert === Toast.INACTIVE ? (
              <Icon alert={toast.alert}>
                <FcCancel />
              </Icon>
            ) : null}
            <Wraper>
              <Title>
                <Text size="14px">{toast.title}</Text>
              </Title>
              <Message>
                <Text size="12px" weight="500">
                  {toast.message}
                </Text>
              </Message>
            </Wraper>
            <button type="button" onClick={() => notification?.clearToast(id)}>
              <SVGIcon color="#FFFF" iconFile="/icons/times.svg" />
            </button>
          </StyledToast>
        ))}
    </StyledToastsContainer>
  );
};
