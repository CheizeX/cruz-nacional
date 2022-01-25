import styled from 'styled-components';
import { IContainerProps } from './MonitorFirstSection.interface';

const mySelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

export const StyledMonitorFirstSection = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  width: 656px;
  height: 656px;
  margin-right: 24px;
`;

export const StyledHeaderFirstSection = styled.div`
  width: 656px;
  height: 55px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  justify-content: space-between;
  & > span {
    display: flex;
    align-items: center;
    margin: 0 23px;
    div {
      min-width: 22px;
      min-height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: 700;
      font-size: 12px;
      width: fit-content;
      background-color: ${({ theme }) => theme.Colors.purples[3]};
      border-radius: 50%;
    }
  }
  & > button {
    margin-top: 20px;
    margin-right: 8px;
    & :hover {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
    & :active {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[6]};
      }
    }
  }
  & > :nth-child(3) {
    z-index: 2;
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  div {
    & > div {
      & > div {
        & * {
          & > svg {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
    & > :nth-child(1) {
      font-size: 30px;
      padding-top: 4px;
    }
    & > :nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
`;

export const StyledAgentSection = styled.div<IContainerProps>`
  width: 607px;
  height: 56px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: ${({ theme, index }) =>
    index && index % 2 !== 0 ? theme.Colors.grays[10] : theme.Colors.grays[9]};
  & > div:first-child {
    height: 33px;
    display: flex;
    align-items: center;
    margin: 12px 25px;
    & > div {
      & > div {
        & > div {
          & > svg {
            width: 33px;
            height: 33px;
          }
        }
      }
    }
  }
  & span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    color: ${({ position, theme }) =>
      mySelector(
        position === 'ASSIGNMENT_PENDING',
        theme.Colors.grays[6],
        null,
      )};
  }
  & > :nth-child(2) {
    justify-content: center;
    & > div {
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[700]};
      font-size: ${({ theme }) => theme.fontSize[10]};
      line-height: 12px;
      background-color: ${({ position, theme, isColorPaused }) =>
        mySelector(
          position === 'ASSIGNMENT_PENDING',
          theme.Colors.orange[3],
          null,
        ) ||
        mySelector(
          position === 'ON_CONVERSATION' && isColorPaused === false,
          theme.Colors.blue[1],
          null,
        ) ||
        mySelector(
          position === 'ON_CONVERSATION' && isColorPaused === true,
          theme.Colors.green[1],
          null,
        ) ||
        mySelector(position === 'FINISHED', theme.Colors.grays[6], null)};
    }
  }
  & > :nth-child(3) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > div {
      width: 32px;
      height: 32px;
      margin-right: 9px;
      & * {
        & > svg {
          width: 32px;
          height: 32px;
          & > :nth-child(2) {
            & > rect {
              fill: ${({ theme, index }) =>
                index && index % 2 !== 0
                  ? theme.Colors.grays[9]
                  : theme.Colors.grays[10]};
            }
          }
        }
      }
    }
    & > img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 8px;
    }
  }
  & > :nth-child(4) {
    display: flex;
    padding: 0;
    justify-content: space-evenly;
    & > div {
      & * {
        & > svg {
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[7]};
          }
        }
      }
    }
  }
`;

export const WrapperAgents = styled.div`
  height: 456px;
  width: 607px;
  margin: auto;
  & > :nth-child(1) {
    width: 600px;
    margin: -16px 3px;
    z-index: 1;
    display: flex;
    background: ${({ theme }) => theme.Colors.grays[10]};
    position: relative;
    & > :nth-child(1) {
      padding-left: 20px;
      width: 188px;
      display: flex;
      justify-content: space-between;
      margin-right: 124px;
    }
    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;
      width: 254px;
    }
    & span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
  & :nth-child(2) {
    height: 433px;
    & > :nth-child(2) {
      overflow: scroll;
      min-height: 442px;
      max-height: 442px;
      margin-top: 30px;
      height: 448px;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    & > div {
      & span {
        width: 163px;
        margin: 0 8px;
        display: flex;
        justify-content: center;
        & :nth-child(1) {
          padding-left: 10px;
        }
        & :nth-child(2) {
          padding-left: 10px;
          width: 150px;
          margin: 0 8px;
        }
        & :nth-child(4) {
          padding: 0px 12px;
          & > span {
            display: flex;
            justify-content: center;
          }
          & > div {
            position: relative;
            left: 16px;
          }
        }
        & span {
          font-weight: ${({ theme }) => theme.fontWeight[600]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
        }
      }
    }
  }
`;
