import React, { FC } from 'react';
import styled from 'styled-components';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';

interface StyledNumberAndTypeProps {
  position?: string;
  bgColor?: string;
  name?: string;
  number?: string;
  icon?: string;
}

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

const StyledChatsStateCard = styled.div<StyledNumberAndTypeProps>`
  position: relative;
  background-color: ${({ position, theme }) =>
    mySelector(position === 'one', theme.Colors.orange[3], null) ||
    mySelector(position === 'two', theme.Colors.blue[1], null) ||
    mySelector(position === 'three', theme.Colors.grays[6], null) ||
    mySelector(position === 'four', theme.Colors.green[1], null)};
  height: 90px;
  min-width: 11.8rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > :first-child {
    font-size: ${({ theme }) => theme.fontSize[32]};
    font-weight: ${({ theme }) => theme.fontWeight[700]};
  }
  & > :nth-child(2) {
    margin-top: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[700]};
  }
  & > div {
    right: 18px;
    top: 13px;
    position: absolute;
    width: 37px;
    height: 32px;
    & * {
      width: 37px;
      height: 32px;
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
    }
  }
`;

export const ChatsStateCard: FC<StyledNumberAndTypeProps> = ({
  position,
  name,
  number,
  icon,
}) => {
  return (
    <StyledChatsStateCard position={position ?? 'one'}>
      <Text>{number ?? '5'}</Text>
      <Text>{name ?? 'Por asignar'}</Text>
      <SVGIcon iconFile={icon ?? '/icons/user_question.svg'} />
    </StyledChatsStateCard>
  );
};
