import styled from 'styled-components';
import { IPropsWrappeReport } from './RightReports.interface';

export const StyledRightPanel = styled.div`
  width: 725px;
  height: 100%;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
`;
export const StyledHeaderRightPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 23px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 17px;
    padding-top: 3px;
  }
  & > div {
    width: 225px;
    display: flex;
    justify-content: space-evenly;
    & > span {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 17px;
    }
    & > button {
      cursor: pointer;
      width: 60px;
      height: auto;
      justify-content: center;
      display: flex;
      align-items: center;
      margin-left: 18px;
      text-align: center;
      border-left: 1px solid ${({ theme }) => theme.Colors.grays[9]};
      & > div {
        width: 100%;
        margin-left: 16px;
        & * {
          width: 24px;
          height: 22px;
        }
      }
      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`;
export const StyledCount = styled.div<IPropsWrappeReport>`
  min-width: 23px;
  min-height: 19px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  line-height: 14px;
  margin-left: 10px;
  color: ${({ theme }) => theme.Colors.grays[10]};
  font-weight: 700;
  font-size: 12px;
  width: fit-content;
  position: relative;
  top: 1px;
  background-color: ${({ theme, isColor }) =>
    isColor ? theme.Colors.purples[2] : theme.Colors.grays[6]};
  border-radius: 50%;
`;
