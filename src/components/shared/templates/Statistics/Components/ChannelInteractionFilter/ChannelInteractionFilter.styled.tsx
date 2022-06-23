import styled from 'styled-components';

export const WrapperFilterByChannel = styled.div`
  position: relative;
  & > button {
    cursor: pointer;
    & > div {
      height: 30px;
      width: 76px;
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      & > span {
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
      & > div {
        width: 20px;
        & * {
          width: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > svg {
            width: 8px;
            height: 8px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[3]};
            }
          }
        }
      }
    }
  }
  & > div {
    width: 200px;
    height: 200px;
    position: absolute;
    right: 0;
  }
`;

export const WrapperContainerChannelInteraction = styled.div`
  width: 180px;
  height: 220px;
  border-radius: 10px;
  position: absolute;
  z-index: 2;
  box-shadow: 0px 0px 7px 0px #0000004a;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  & > :first-child {
    height: 42px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    & > span {
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      line-height: 17px;
      color: ${({ theme }) => theme.Colors.grays[1]};
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 20px;
    }
  }
  & > :last-child {
    display: flex;
    flex-direction: column;
    padding: 8px 14px;
    & > button {
      cursor: pointer;
      display: flex;
      align-items: center;
      min-height: 32px;
      & > div {
        margin-right: 10px;
        top: -5px;
      }
      & > span {
        font-size: ${({ theme }) => theme.fontSize[12]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        line-height: 17px;
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
    }
  }
`;
