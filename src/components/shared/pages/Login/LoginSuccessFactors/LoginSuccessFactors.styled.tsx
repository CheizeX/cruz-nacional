import styled from 'styled-components';

export const StyledLoginSuccessFactors = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 411px;
  height: 316px;
  border-radius: 20px;
  padding-top: 33px;
  & > button {
    width: 340px;
    margin: auto;
  }
`;
export const StyledIcon = styled.div`
  & > div {
    padding-top: 76px;
    & > div {
      & > div {
        & > svg {
          width: 49px;
          height: 49px;
          margin-left: 182px;
          & > path {
            fill: ${({ theme }) => theme.Colors.green[3]};
          }
        }
      }
    }
  }
`;
export const StyledTitleSuccess = styled.div`
  display: flex;
  width: 313px;
  text-align: center;
  margin-top: 109;
  margin-left: 50px;
  margin-bottom: 22px;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;
export const StyledMessage = styled.div`
  display: flex;
  width: 313px;
  height: 30px;
  text-align: center;
  margin-left: 50px;
  margin-bottom: 32px;
  & > span {
    line-height: 14px;
    color: ${({ theme }) => theme.Colors.grays[1]};
  }
`;
