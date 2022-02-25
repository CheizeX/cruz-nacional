import styled from 'styled-components';

export const StyledConfigurationSectionContainer = styled.div`
  padding-top: 5px;
  & > :first-child {
    width: 1060px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    & > button {
      height: 40px;
      min-width: 150px;
      border-radius: 3px;
      margin-right: 10px;
      margin-bottom: 20px;
      box-shadow: 0px 4px 5px ${({ theme }) => theme.Colors.grays[8]};
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
