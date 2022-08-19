import styled from 'styled-components';

export const WrapperAgentInteraction = styled.div``;

export const StyledHeaderAgentInteraction = styled.div`
  display: flex;
  position: relative;
  min-height: 40px;
  align-items: center;
  max-width: 679px;
  margin: auto;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  display: grid;
  grid-template-columns: 1.4fr 1.4fr 1.4fr 1.4fr 1.4fr 1.4fr 1.4fr;
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    line-height: ${({ theme }) => theme.fontSize[14]};
    display: flex;
    justify-content: center;
  }
`;
