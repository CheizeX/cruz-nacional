import styled from 'styled-components';

export const StyledChannelList = styled.div`
  width: 61.5rem;
  height: 34rem;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  margin: 20px auto;
  & > div {
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;
