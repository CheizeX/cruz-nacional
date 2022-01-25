import styled from 'styled-components';

export const StyledFIlterByPeriod = styled.div`
  background-color: ${({ theme }) => theme && theme.Colors.grays[10]};
  border-radius: 10px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.29);
  height: 320px;
  width: 542px;
  position: absolute;
  right: 0;
`;

export const StyledHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  height: 43px;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  & > span {
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      padding-left: 20px;
    }
  }
  & button {
    height: 13px;
    width: 13px;
    & * {
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledCalendarContainer = styled.div`
  height: 220px;
  & div {
    margin: 0 auto;
    margin-bottom: -5px;
    & div {
      & div {
        margin: 0;
        & div {
          height: 26px;
        }
        & button {
          height: 26px;
          padding: 0 3px;
          width: 32px;
          & div {
            & span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;

export const StyledFooter = styled.div`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  height: 56px;
  justify-content: space-between;
  margin: 0;
  padding: 0 24px;
  button:first-child {
    width: 120px;
  }
  button:last-child {
    width: 120px;
  }
`;
