import styled from 'styled-components';
import { IContainerCard } from './CardInteraction.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const WrapperCardInteraction = styled.div<IContainerCard>`
  width: 140px;
  height: 140px;
  border-radius: 10px;
  background-color: ${({ cardType, theme }) =>
    mySelector(cardType === 'day', theme.Colors.purples[1], null) ||
    mySelector(cardType === 'time', theme.Colors.orange[2], null)};
  & > :first-child {
    display: flex;
    justify-content: space-between;
    padding: 15px 16px;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      line-height: 14px;
    }
    & > div {
      width: 30px;
      height: 35px;
      & * {
        width: 30px;
        height: 35px;
        & > svg {
          width: 30px;
          height: 35px;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[10]};
            opacity: ${({ cardType }) => (cardType === 'day' ? 0.6 : 'none')};
          }
        }
      }
    }
  }
  & > span {
    font-size: 40px;
    font-weight: ${({ theme }) => theme.fontWeight[700]};
    color: ${({ theme }) => theme.Colors.grays[10]};
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: end;
    max-height: 26px;
  }
`;
