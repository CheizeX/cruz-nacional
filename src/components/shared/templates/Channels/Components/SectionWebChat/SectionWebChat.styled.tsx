import styled from 'styled-components';
import { IContainerWebChat } from './SectionWebChat.interface';

export const StyledWebChat = styled.div`
  width: 59rem;
  height: 34rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 1.25rem 0 1.125rem 0;
`;

export const StyledHeaderSectionWebChat = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-left: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};

  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 1rem;
  }
  & > button {
    width: 2.1rem;
    height: 1rem;
    & > div {
      & * {
        & > svg {
          width: 0.75;
          height: 0.8rem;
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[6]};
          }
        }
      }
    }
  }
`;

export const StyledBodyWebChat = styled.div<IContainerWebChat>`
  height: 26rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  & > :nth-child(1) {
    width: 15rem;
    background-blend-mode: lighten;
    background-color: ${({ theme }) => theme.Colors.purples[1]};
    background-image: url('/images/Background_Modal.svg');
    background-size: 255px 371px;
    & > div {
      display: flex;
      flex-direction: column;
      width: 12rem;
      height: fit-content;
      padding: 32px 0 0 0;
      margin: auto;
      & > :nth-child(1) {
        opacity: 'none';
        & > :nth-child(2) {
          opacity: ${({ isSection }) => (isSection < 2 ? 0.6 : 'none')};
        }
      }
      & > :nth-child(2) {
        & > :nth-child(2) {
          opacity: ${({ isSection }) => (isSection < 3 ? 0.6 : 'none')};
        }
        opacity: ${({ isSection }) => (isSection < 2 ? 0.6 : 'none')};
      }
      & > :nth-child(3) {
        opacity: ${({ isSection }) => (isSection < 3 ? 0.6 : 'none')};
        & > :nth-child(2) {
          opacity: ${({ isSection }) => (isSection < 4 ? 0.6 : 'none')};
        }
      }
      & > :nth-child(4) {
        opacity: ${({ isSection }) => (isSection < 4 ? 0.6 : 'none')};
      }
      & > div {
        & > :nth-child(1) {
          display: flex;
          & > div {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            margin-right: 16px;
            padding: 5px;
            color: ${({ theme }) => theme.Colors.purples[1]};
            font-weight: ${({ theme }) => theme.fontWeight[700]};
            font-size: ${({ theme }) => theme.fontSize[12]};
            line-height: 14px;
            background-color: ${({ theme }) => theme.Colors.grays[10]};
          }
          & > span {
            color: ${({ theme }) => theme.Colors.grays[10]};
            font-weight: ${({ theme }) => theme.fontWeight[700]};
            font-size: ${({ theme }) => theme.fontSize[12]};
            line-height: 14px;
            display: flex;
            align-items: center;
          }
        }
        & > :nth-child(2) {
          width: 0.25rem;
          height: 1.75rem;
          background: ${({ theme }) => theme.Colors.grays[10]};
          margin: 0 9px;
        }
      }
      & > :nth-child(4) {
        & > :nth-child(2) {
          display: none;
        }
      }
    }
  }
  & > :nth-child(2) {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    border-radius: 10px;
    width: 20rem;
    margin: 20px auto;
    padding-top: 10px;
    & > div {
      & > span {
        color: ${({ theme }) => theme.Colors.grays[1]};
      }
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      display: flex;
      max-width: 150px;
      text-align: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
  & > :nth-child(3) {
    border-left: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    & > div {
      width: 19rem;
      border-radius: 10px;
    }
  }
`;
export const StyledFooterWebChat = styled.div`
  display: flex;
  height: 3.3rem;
  align-items: flex-end;
  padding: 0 15px;
  justify-content: space-between;
`;
