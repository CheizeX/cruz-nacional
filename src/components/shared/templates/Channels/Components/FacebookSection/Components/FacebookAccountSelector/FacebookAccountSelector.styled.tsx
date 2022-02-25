import styled, { css } from 'styled-components';
import { IPropsSelector } from './FacebookAccountSelector.interface';

export const StyledFacebookAccountSelector = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
`;
export const StyledHeaderAcount = styled.div`
  width: 100%;
  margin-bottom: 10px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;

export const StyledBodyWrapperSelector = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;

export const StyledBody = styled.div`
  margin: 0 auto;
  width: 280px;
  padding: 20px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  min-height: 274px;

  & > div {
    width: 240px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    height: 240px;
    padding: 14px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledButtonAuth = styled.div<IPropsSelector>`
  height: 32px;
  display: flex;
  flex-direction: flex-start;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
`;
export const StyledWrapperButton = styled.div<IPropsSelector>`
  border-radius: 50%;
  width: 24px;
  min-height: 24px;
  border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
  margin-right: 7px;
  ${({ isFocused }) =>
    isFocused &&
    css<IPropsSelector>`
      border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    `}
`;
export const Styledbutton = styled.div<IPropsSelector>`
  height: 14px;
  width: 14px;
  max-height: 14px;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
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
  ${({ isFocused }) =>
    isFocused &&
    css<IPropsSelector>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;
