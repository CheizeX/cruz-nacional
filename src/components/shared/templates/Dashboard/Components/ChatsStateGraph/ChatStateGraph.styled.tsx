import styled from 'styled-components';

export const StyledDonutGraph = styled.div`
  height: 110px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  & > :first-child {
  }
`;
export const StyledTotalDonutGraph = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.Colors.grays[3]};
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  & div {
    font-size: ${({ theme }) => theme.fontSize[18]};
    margin-bottom: 2px;
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
`;
