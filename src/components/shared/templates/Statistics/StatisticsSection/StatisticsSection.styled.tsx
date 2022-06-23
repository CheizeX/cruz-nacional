import styled from 'styled-components';

export const StyledSectionStatistics = styled.section`
  display: flex;
  height: 656px;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  & > :first-child {
    width: 1032px;
    height: 292px;
    display: flex;
    justify-content: space-between;
  }
  & > :last-child {
    width: 100%;
    max-width: 1033px;
    display: flex;
    justify-content: space-between;
  }
`;
