import styled from 'styled-components';

export const StyledBackgroundLogin = styled.article`
  /* background: url('./images/MaskGroup.svg'); */
  position: relative;
  background-color: ${({ theme }) => theme.Colors.purples[1]};
  background-blend-mode: lighten;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & > span {
    z-index: 0;
    & * {
      position: absolute;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 100vh;
    }
  }
`;

export const StyledLoginWrapper = styled.div`
  z-index: 1;
  min-height: 428px;
  background-color: transparent;
  min-width: 411px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const StyledLoginHeader = styled.div`
  min-width: 100%;
  height: 42px;
  color: ${({ theme }) => theme.Colors.grays[10]};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  & > div:first-child {
    width: 40px;
    height: 40px;
  }
  & > div:last-child {
    width: 110px;
    height: 28px;
    margin-left: 10px;
  }
  & > img {
    width: 300px;
  }
`;

export const StyledLoginFooter = styled.div`
  width: 100%;
  height: 18px;
  text-align: center;
  color: ${({ theme }) => theme.Colors.grays[10]};
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
`;
