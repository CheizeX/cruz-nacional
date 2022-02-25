import styled from 'styled-components';
import { ISelectorInstagramAccount } from './LinkInstagramAccount.interface';

export const StyledWrapperLinkInstagram = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
`;

export const StyledHeaderLinkInstagram = styled.div`
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
  margin-bottom: 20px;
`;
export const StyledBodyLinkInstagram = styled.div`
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
export const WrapperSelectorInstagramAccount = styled.div<ISelectorInstagramAccount>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  flex-direction: column;
  & > div {
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
    & > img {
      max-width: 60px;
      max-height: 60px;
      border-radius: 50%;
      font-size: ${({ theme }) => theme.fontSize[12]};
    }
  }
  & > :first-child {
    width: 100%;
  }
  & > :nth-child(2) {
    margin-top: 20px;
  }
  & > :nth-child(3) {
    display: flex;
    height: 90px;
    align-items: center;
    width: 100%;
    justify-content: center;
    display: flex;
    margin: 0 auto;
    & > div {
      display: flex;
      align-items: center;
      & > div {
        background: ${({ isActiveCheckbox, theme }) =>
          isActiveCheckbox ? theme.Colors.purples[1] : theme.Colors.grays[8]};
      }
      & > span {
        min-width: 128px;
        max-width: 130px;
        color: ${({ theme }) => theme.Colors.grays[2]};
        font-weight: ${({ theme }) => theme.fontWeight[600]};
        font-size: ${({ theme }) => theme.fontSize[12]};
        line-height: 14px;
        margin-left: 8px;
        width: 100%;
      }
    }
  }
`;

export const StyledNoInstagramAccount = styled.div`
  & > :first-child {
    margin-top: 30px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    max-height: 84px;
    & > div {
      & * {
        & > svg {
          width: 50px;
          height: 50px;
          & > path {
            fill: ${({ theme }) => theme.Colors.orange[2]};
          }
        }
      }
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
  & > :nth-child(3) {
    width: 100%;
    justify-content: center;
    display: flex;
    margin-top: 10px;
    font-family: Georgia, serif;
    & > a {
      color: ${({ theme }) => theme.Colors.purples[3]};
      & > span {
        font-family: Georgia, serif;
        font-style: italic;
        color: ${({ theme }) => theme.Colors.purples[3]};
      }
    }
  }
`;
