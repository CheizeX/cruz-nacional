import styled from 'styled-components';

export const StyledLiveChats = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  width: 100%;
  height: 100vh;
  min-width: 1366px;
  min-height: 764px;
  & > nav {
    & > :first-child {
      & > :nth-child(3) {
        visibility: hidden;
      }
    }
  }
`;
