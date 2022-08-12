import styled from 'styled-components';

export const StyledInitialFlow = styled.section`
  width: 300px;
  height: max-content;
  min-height: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
`;
export const StyledNode = styled.div`
  width: 100px;
  height: 30px;
  background-color: ${({ theme }) => theme.Colors.grays[5]};
  color: ${({ theme }) => theme.Colors.grays[10]};
`;
