import styled from 'styled-components';

export const StyledFinalFlow = styled.section`
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
  border: 1px solid ${({ theme }) => theme.Colors.orange[2]};
`;
