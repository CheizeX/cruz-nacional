import styled, { css } from 'styled-components';
import { IEndChatContainer } from './EndChat.interface';

export const StyledEndChat = styled.div<IEndChatContainer>`
  width: 352px;
  height: 342px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding: 16px 0;
  text-align: initial;
  ${({ openEndChat }) =>
    openEndChat &&
    css<IEndChatContainer>`
      height: 290px;
    `}
`;
export const StyledEndChatHeader = styled.div`
  width: 351px;
  height: 31px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  display: flex;
  justify-content: space-between;
  padding: 0 26px;
  & > button {
    width: 10px;
    height: 10px;
    & > div {
      & * {
        & > svg {
          cursor: pointer;
          height: 13px;
          width: 13px;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[7]};
          }
        }
      }
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 17px;
  }
`;
export const StyledEndChatBody = styled.div`
  width: 298px;
  height: 223px;
  margin: auto;
  padding: 16px 0;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
  }
  & > :nth-child(1) {
    padding-left: 12px;
  }
  & > :nth-child(3) {
    margin: 18px 0px;
  }
  & > textarea {
    margin-top: 10px;
    margin-left: -2px;
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    height: 89px;
    border: transparent;
  }
`;
export const StyledEndChatFooter = styled.div<IEndChatContainer>`
  width: 100%;
  height: 56px;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  ${({ openEndChat }) =>
    openEndChat &&
    css<IEndChatContainer>`
      height: 16px;
    `}
`;

export const WrapperVisualRadio = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.Colors.grays[3]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  & button {
    margin: 0 26px 0 6px;
    cursor: pointer;
    width: fit-content;
    z-index: 2;
  }
`;
export const StyledFuntionalRadio = styled.div`
  width: 295px;
  transform: translate(-13px, 14px);
  opacity: 0; //oculta los inputs de los radios
  position: absolute;
  & input {
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.Colors.grays[1]};
    cursor: pointer;
  }
  & > :first-child {
    transform: translate(8px, 1px);
  }
  & > :last-child {
    transform: translate(107px, 1px);
  }
`;
