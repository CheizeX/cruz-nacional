import styled from 'styled-components';
import { IPropsWrapperForm } from './OfficialWhatsappForm.interface';

export const StyledWrapperWhatsappForm = styled.div<IPropsWrapperForm>`
  width: 304px;
  height: 100%;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  //margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
  & > div {
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    border-radius: 10px;
    min-height: 240px;
    width: 300px;
    margin: 10px auto;
    padding: 20px;
    & > div {
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      border-radius: 10px;
      min-height: 224px;
      height: 100%;
      text-align: start;
      padding: 12px;
      & > div {
        height: 96px;
        max-width: 254px;
        & > span {
          margin-left: 20px;
          margin-bottom: 5px;
          color: ${({ theme }) => theme.Colors.grays[1]};
          font-weight: ${({ theme }) => theme.fontWeight[500]};
          font-size: ${({ theme }) => theme.fontSize[12]};
          line-height: 14px;
          display: flex;
          align-items: center;
          text-align: start;
        }
        & > div {
          max-width: 280px;
          border-radius: 50px;
        }
      }
    }
  }
`;
export const StyledOfficialWhatsappPhone = styled.div`
  & > div {
    & :nth-child(2) {
      & > :nth-child(2) {
        border-radius: 50px;
        :hover {
          border-radius: 50px;
        }
      }
    }
    & input {
      max-width: 230px;
      border-radius: 50px;
    }
    & > :nth-child(3) {
      border-end-start-radius: 50px;
      border-start-start-radius: 50px;
      border: 1px solid transparent;
      & > :first-child {
        border: 1px solid #cacaca;
        border-end-start-radius: 50px;
        border-start-start-radius: 50px;
        & :nth-child(1) {
          border-end-start-radius: 50px;
          border-start-start-radius: 50px;
        }
      }
      :hover {
        border-end-start-radius: 50px;
        border-start-start-radius: 50px;
      }
      :active {
        opacity: 1;
      }
    }
  }
`;
export const StyledErrorForm = styled.span`
  & > span {
    color: ${({ theme }) => theme.Colors.orange[2]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: 14px;
  }
`;
