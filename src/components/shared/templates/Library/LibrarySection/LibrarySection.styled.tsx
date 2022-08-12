import styled from 'styled-components';

export const StyledWrapperLibrary = styled.section`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 1304px;
  height: 635px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
`;
