import styled from 'styled-components';

export const WrapperDayAnHourGraph = styled.div`
  width: 696px;
  height: 290px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  & > :last-child {
    max-height: 250px;
  }
`;
export const StyledHeaderDayAndHourGraph = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  & > :first-child {
    display: flex;
    width: 290px;
    justify-content: space-between;
    & > div {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.Colors.purples[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      min-width: 24px;
      min-height: 24px;
      width: fit-content;
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]}:;
    }
  }
`;

export const StyledBodyDayAndHour = styled.div``;
