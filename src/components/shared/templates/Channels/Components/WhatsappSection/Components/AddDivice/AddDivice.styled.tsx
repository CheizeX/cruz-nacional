import styled from 'styled-components';

export const StyledAddDivice = styled.div`
  width: 304px;
  height: 100%;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  & > div {
    width: 100%;
    min-height: 114px;
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
`;
