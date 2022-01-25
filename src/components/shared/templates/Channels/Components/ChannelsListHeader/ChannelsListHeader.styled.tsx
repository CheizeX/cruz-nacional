import styled from 'styled-components';

export const StyledChannelSectionHeader = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 1.4rem 0 1.3rem;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    align-items: center;
    display: flex;
  }
`;
