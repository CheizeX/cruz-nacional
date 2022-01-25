import styled, { css } from 'styled-components';
import { IPropsRolFilter } from './RolFilter.interface';

export const StyledWrapper = styled.div`
  width: 343px;
  height: 128px;
`;

export const StyledTabsHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 241px;
  height: 128px;
  justify-content: space-around;
`;

export const StyledTabsBody = styled.button<IPropsRolFilter>`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const StyledContainerRadio = styled.div<IPropsRolFilter>`
  border-radius: 50px;
  width: 24px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
  margin-right: 17px;
  ${({ focusRadio }) =>
    focusRadio &&
    css<IPropsRolFilter>`
      border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    `}
`;
export const StyledRadio = styled.button<IPropsRolFilter>`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 50px;
  display: inline-flex;
  justify-content: center;
  width: 14px;
  height: 14px;
  display: flex;
  margin: auto;
  align-content: center;
  text-align: center;
  position: relative;
  top: 3px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }

  ${({ focusRadio }) =>
    focusRadio &&
    css<IPropsRolFilter>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 6px 21px;
`;
export const StyledLabel = styled.div<IPropsRolFilter>`
  display: flex;
  div:first-child {
    width: 23px;
    display: flex;
    margin-right: 17px;
  }
  div:last-child {
    width: 23px;
    padding-top: 0px;
    display: flex;
    align-items: center;
    margin-right: 11px;
    & > div {
      & > svg {
        & > path {
          fill: ${({ theme }) => theme.Colors.grays[8]};
          ${({ focusRadio }) =>
            focusRadio &&
            css<IPropsRolFilter>`
              fill: ${({ theme }) => theme.Colors.purples[3]};
            `}
        }
      }
    }
  }
  span {
    padding-top: 6px;
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: ${({ theme }) => theme.fontSize[14]};
  }
`;
