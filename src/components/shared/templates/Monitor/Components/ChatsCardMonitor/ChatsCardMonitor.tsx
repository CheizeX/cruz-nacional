import { FC } from 'react';
import { StyledCardMonitor } from './ChatsCardMonitor.styled';
import { ICardProps, ICardContainer } from './ChatsCardMonitor.interface';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';

export const ChatsCardMonitor: FC<ICardProps & ICardContainer> = ({
  position,
  name,
  number,
  icon,
}) => {
  return (
    <StyledCardMonitor position={position ?? 'ON_CONVERSATION'}>
      <Text>{number ?? '5'}</Text>
      <Text>{name ?? 'Por Asignar'}</Text>
      <SVGIcon iconFile={icon ?? '/icons/user_question.svg'} />
    </StyledCardMonitor>
  );
};
