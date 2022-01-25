import styled from 'styled-components';

export const StyledNotification = styled.div`
  width: 298px;
  height: 79px;
  background-color: ${({ theme }) => theme.Colors.purples[3]};
  margin-top: 24px;
  display: inline-block;
  justify-content: center;
  border-radius: 10px;
  margin-left: 22px;
  margin-bottom: 7px;
  padding: 13px;
  & > div:first-child {
    width: 14px;
    height: 14px;
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
    span {
      width: 260px;
      height: 17px;
      padding-left: 21px;
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      line-height: 17px;
    }
    & > div {
      & > div {
        & > div {
          padding-top: 2px;
        }
      }
    }
  }

  span {
    width: 269px;
    height: 30px;
    color: ${({ theme }) => theme.Colors.grays[10]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
  }
`;
