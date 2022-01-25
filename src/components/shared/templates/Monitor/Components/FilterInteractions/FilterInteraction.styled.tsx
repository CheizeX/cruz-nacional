import styled from 'styled-components';

export const WrapperFilterInteractions = styled.div`
  position: relative;
  width: 36px;
  top: 8px;
`;
export const StyledFilterInteraction = styled.div`
  position: absolute;
  right: 15px;
  top: 36px;
  z-index: 2;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 343px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 0px #0000004a;
`;
export const StyledFilterInteractionHeader = styled.div`
  width: 340px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  padding-top: 13px;
  margin-bottom: 16px;
  & > button {
    width: 34px;
    height: 17px;
    & > div {
      & * {
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
  & > span {
    margin-left: 23px;
  }
`;
export const StyledFilterInteractionBody = styled.div`
  width: 343px;
  margin: 16px 0;
  height: fit-content;
  & > div {
    padding: 0 24px;
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    line-height: ${({ theme }) => theme.fontSize[14]};
  }
  & > div {
    height: fit-content;
  }
`;
export const StyledFilterInteractionFooter = styled.div`
  width: 343px;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  & > button {
    width: 120px;
  }
`;
