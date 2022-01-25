import styled from 'styled-components';

export const StyledDashboardSection = styled.section`
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  max-width: 1032px;
  height: 656px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;
export const WrapperSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
