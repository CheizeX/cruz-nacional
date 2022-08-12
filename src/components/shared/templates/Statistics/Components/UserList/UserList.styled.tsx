import styled from 'styled-components';
import { IContainerUserList } from './UserList.interface';

export const StyledWrapperUserList = styled.div`
  width: 511px;
  height: 350px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
`;
export const StyledHeaderUserList = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  width: 100%;
  height: 55px;
  display: flex;
  padding: 0 28px;
  justify-content: space-between;
  align-items: center;
  & > :first-child {
    display: flex;
    width: 244px;
    justify-content: start;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      margin-right: 12px;
    }
    & > div {
      border-radius: 50%;
      min-width: 24px;
      min-height: 24px;
      padding: 4px;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.Colors.purples[3]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      line-height: 14px;
    }
  }
  & > :last-child {
    display: flex;
    justify-content: end;
    align-items: center;
    max-width: 208px;
    & > div {
      display: flex;
      justify-content: end;
      align-items: center;
      & > button {
        height: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
`;

export const StyledFilterUser = styled.span<IContainerUserList>`
  width: 250px;
  height: 28px;
  border-radius: 20px;
  display: flex;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  & > button {
    width: fit-content;
    height: 28px;
    width: 100%;
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 14px;
    align-items: center;
    text-align: center;
    :hover {
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      cursor: pointer;
    }
    :active {
      background-color: ${({ theme }) => theme.Colors.grays[5]};
    }
  }
  & > :first-child {
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${({ theme, type }) =>
      type === 'today' ? theme.Colors.purples[1] : theme.Colors.grays[9]};
    color: ${({ theme, type }) =>
      type === 'today' ? theme.Colors.grays[10] : theme.Colors.grays[1]};
  }
  & > :last-child {
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({ theme, type }) =>
      type === 'agent' ? theme.Colors.purples[1] : theme.Colors.grays[9]};
    color: ${({ theme, type }) =>
      type === 'agent' ? theme.Colors.grays[10] : theme.Colors.grays[1]};
  }
`;
export const StyledBodyUserList = styled.div`
  padding: 0 12px;
  & > :first-child {
    display: grid;
    grid-template-columns: 3.5fr 5fr 3.5fr 3fr;
    grid-auto-rows: 40px;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      display: flex;
      justify-content: center;
    }
  }
  & > :last-child {
    overflow: scroll;
    max-height: 240px;
    & ::-webkit-scrollbar {
      display: none;
    }
    & > :nth-child(2n) {
      border-radius: 10px;
      background: ${({ theme }) => theme.Colors.grays[10]};
    }
    & > div {
      display: grid;
      grid-template-columns: 3.5fr 5fr 3.5fr 3fr;
      border-radius: 10px;
      height: 56px;
      font-size: 12px;
      font-weight: 600;
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      & > span {
        color: ${({ theme }) => theme.Colors.grays[1]};
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
