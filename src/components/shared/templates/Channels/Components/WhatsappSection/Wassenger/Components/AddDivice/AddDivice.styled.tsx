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
  & > :nth-child(2) {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 14px;
  }
  & > :nth-child(4) {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 14px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 12px 0;
  }
  & > :nth-child(6) {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    display: flex;
    text-align: center;
  }
`;
