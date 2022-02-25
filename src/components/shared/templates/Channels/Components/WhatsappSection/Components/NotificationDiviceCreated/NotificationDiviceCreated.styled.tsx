import styled from 'styled-components';

export const StyledWrapperNotification = styled.div`
  width: 300px;
  height: 160px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  position: absolute;
  right: 34px;
  z-index: 2;
  box-shadow: 0px 0px 7px 0px #0000004a;
  padding: 12px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
    display: flex;
    text-align: center;
  }
  & > button {
    margin: 10px auto;
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    & > button {
      cursor: pointer;
      & > div {
        width: 20px;
        height: 20px;
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[8]};
            }
          }
        }
      }
    }
  }
`;
