import { FC } from 'react';
import { Text } from '../Text/Text';
import { SVGIcon } from '../SVGIcon/SVGIcon';
import { INotificationProps } from './NotificationUser.interface';
import { StyledNotification } from './NotificationUser.styled';

export const NotificationUsers: FC<INotificationProps> = ({
  text,
  message,
}) => {
  return (
    <StyledNotification>
      <div>
        <SVGIcon iconFile="/icons/icon_informations.svg" />
        <Text>{text}</Text>
      </div>
      <Text>{message}</Text>
    </StyledNotification>
  );
};
