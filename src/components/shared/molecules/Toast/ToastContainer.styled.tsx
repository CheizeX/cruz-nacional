import styled, { keyframes } from 'styled-components';
import { IAlertProps } from './ToastContainer.interface';
import { Toast } from './Toast.interface';

export const StyledToastsContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 100vw;
  height: 0px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  transition: all 2s ease-in-out;
`;

export const fadeIn = keyframes`
from {
  left: 100vw;
}
to {
  left: 0px;
}
`;

export const StyledToast = styled.div<IAlertProps>`
  width: 352px;
  height: 88px;
  display: flex;
  position: relative;
  ${({ alert, theme }) =>
    alert === Toast.SUCCESS ? `background: ${theme.Colors.green[3]};` : null}
  ${({ alert, theme }) =>
    alert === Toast.WARNING ? `background: ${theme.Colors.orange[3]};` : null}
  ${({ alert, theme }) =>
    alert === Toast.ERROR ? `background: ${theme.Colors.orange[2]};` : null}  
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 16px 0px 18px 22px;
  animation: ${fadeIn} 0.3s ease-in;

  & > button {
    width: 10px;
    height: 10px;
    cursor: pointer;
    padding-left: 16px;
    div {
      width: 10px;
      height: 10px;
      padding: 0px;
      div {
        width: 10px;
        height: 10px;
        padding: 0px;
      }
    }
  }
`;
export const Icon = styled.div`
  padding: 5px 0px 6px 0px;
  div {
    width: 39px;
    height: 39px;
    padding: 0px;
    div {
      width: 39px;
      height: 39px;
      padding: 0px;
    }
  }
`;
export const Title = styled.div`
  padding: 0px;
  height: 16px;
  span {
    line-height: 17px;
  }
`;
export const Message = styled.div`
  padding: 4px 0px 18px 0px;
  height: 30px;
  width: 244px;
  span {
    line-height: 14px;
  }
`;

export const Wraper = styled.div`
  display: inline;
  width: 242px;
  padding: 0 0 0 20px;
`;
