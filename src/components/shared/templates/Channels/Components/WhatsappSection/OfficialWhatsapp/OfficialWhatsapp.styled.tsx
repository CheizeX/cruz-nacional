import styled from 'styled-components';
import { IPropsOfficialContainer } from './OfficialWhatsapp.interface';

export const StyledWrapperOfficialWhatsapp = styled.div`
  width: 35rem;
  min-width: 608px;
  height: 32rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding: 1.25rem 0 1.125rem 0;
`;
export const StyledHeaderOfficialWhatsapp = styled.div`
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
export const StyledBodyOfficialWhatsapp = styled.div<IPropsOfficialContainer>`
  height: 24rem;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > :nth-child(1) {
    width: 15rem;
    background-blend-mode: lighten;
    background-color: ${({ theme }) => theme.Colors.purples[1]};
    background-image: url('/images/Background_Modal.svg');
    background-size: 15.9375rem 23.1875rem;
    & > div {
      display: flex;
      flex-direction: column;
      width: 12rem;
      height: fit-content;
      padding: 2rem 0 0 0;
      margin: auto;
      & > div {
        & :nth-child(1) {
          opacity: 'none';
          & > :nth-child(2) {
            opacity: ${({ selectedComponent }) =>
              selectedComponent < 2 ? 0.6 : 'none'};
          }
        }
        & :nth-child(2) {
          & > :nth-child(2) {
            opacity: ${({ selectedComponent }) =>
              selectedComponent < 3 ? 0.6 : 'none'};
          }
          opacity: ${({ selectedComponent }) =>
            selectedComponent < 2 ? 0.6 : 'none'};
        }
        & :nth-child(3) {
          opacity: ${({ selectedComponent }) =>
            selectedComponent < 3 ? 0.6 : 'none'};
          & > :nth-child(2) {
            opacity: ${({ selectedComponent }) =>
              selectedComponent < 4 ? 0.6 : 'none'};
          }
        }
        & :nth-child(4) {
          opacity: ${({ selectedComponent }) =>
            selectedComponent < 4 ? 0.6 : 'none'};
        }
        & > :nth-child(1) {
          display: flex;
          max-width: 12rem;
          width: 100%;
          max-height: 1.5rem;
          align-items: center;
          & > div {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            margin-right: 1rem;
            color: ${({ theme }) => theme.Colors.purples[1]};
            font-weight: ${({ theme }) => theme.fontWeight[700]};
            font-size: ${({ theme }) => theme.fontSize[12]};
            line-height: 0.875rem;
            max-height: 1.875rem;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            min-width: 1.5rem;
            min-height: 1.5rem;
            padding-top: 1px;
            background-color: ${({ theme }) => theme.Colors.grays[10]};
          }
          & > span {
            color: ${({ theme }) => theme.Colors.grays[10]};
            font-weight: ${({ theme }) => theme.fontWeight[700]};
            font-size: ${({ theme }) => theme.fontSize[12]};
            line-height: 14px;
            display: flex;
            align-items: center;
            text-align: start;
            max-height: 1.875rem;
            height: fit-content;
          }
        }
        & > :nth-child(2) {
          width: 0.25rem;
          height: 1.75rem;
          background: ${({ theme }) => theme.Colors.grays[10]};
          margin: 0 0.625rem;
        }
      }
        & > :nth-child(4) {
          & > :nth-child(2) {
            display: none;
          }
        }
      }
    }
  }
  & > :nth-child(2) {
    width: 100%;
    max-width: 370px;
   // padding: 14px 20px;
  }
`;
export const StyledFooterOfficialWhatsapp = styled.div`
  display: flex;
  height: 3.3rem;
  align-items: flex-end;
  padding: 0 0.9375rem;
  justify-content: space-between;
`;
