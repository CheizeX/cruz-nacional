import styled, { css } from 'styled-components';
import { IChatFilterProps, FilterChannelsProps } from './ChatFilter.interface';

export const StyledChatFilterWrapper = styled.div`
  position: relative;
`;

export const StyledChatFilter = styled.div<IChatFilterProps>`
  position: absolute;
  right: -27px;
  top: -10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 343px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 0px #0000004a;
  ${({ filterOnClose }) =>
    filterOnClose &&
    css<IChatFilterProps>`
      display: none;
    `}
`;

export const StyledChatFilterHeader = styled.div`
  color: ${({ theme }) => theme.Colors.grays[3]};
  width: 340px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  margin-bottom: 16px;
  & > button {
    position: relative;
    top: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      width: 34px;
      height: 17px;
      & > div {
        & > div {
          & > svg {
            width: 12px;
            height: 12px;
            cursor: pointer;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[6]};
            }
          }
        }
      }
    }
  }
  & > span {
    margin-left: 23px;
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: 16px;
  }
`;

export const StyledChatFilterBody = styled.div`
  width: 343px;
  margin: 16px 0;
  height: fit-content;
  & > div {
    padding: 0 18px;
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    line-height: ${({ theme }) => theme.fontSize[14]};
    height: fit-content;
    & > button {
      height: 35px;
    }
  }
`;

export const StyledFilterTags = styled.div`
  margin-top: 9px;
  & > div:first-child {
    width: 293px;
    margin-bottom: 16px;
    button:first-child {
      display: none;
    }
    button:last-child {
      & > div {
        & > div {
          & > div {
            & > svg {
              & > path {
                fill: ${({ theme }) => theme.Colors.grays[7]};
              }
            }
          }
        }
      }
    }
  }
  & > div:last-child {
    border-radius: 10px;
    padding: 7px 7px 2px 7px;
    height: 250px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledChatFilterFooter = styled.div`
  width: 343px;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & button {
    width: 120px;
    max-height: 40px;
  }
`;

export const StyledWrapperChecked = styled.div<FilterChannelsProps>`
  width: 295px;
  height: 50px;
  display: flex;
  flex-direction: initial;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2px;
  & > :nth-child(1) {
    height: fit-content;
    background: ${({ checked, theme }) =>
      checked ? theme.Colors.purples[1] : theme.Colors.grays[8]};
    &:hover {
      cursor: pointer;
    }
  }
  & > :nth-child(2) {
    width: 25px;
    height: 25px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      & * {
        & > svg {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
  & > span {
    margin-left: 9px;
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    padding-top: 1px;
  }
`;
