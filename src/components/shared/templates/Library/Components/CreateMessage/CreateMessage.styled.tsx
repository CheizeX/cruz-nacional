import styled from 'styled-components';

export const StyledWrapperCreateMessage = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  width: 420px;
  height: fit-content;
`;

export const StyledHeaderCreateMessage = styled.div`
  align-items: center;
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 21px;
  width: 100%;
  & > div {
    & div {
      transform: translateY(-10px);
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    padding-left: 20px;
  }
  & button {
    height: 13px;
    width: 13px;
    & * {
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
export const StyledBodyCreateMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 0 12px;
  margin: 20px 0;
  height: 100%;
  border-bottom: 1px solid #f5f5f5;
  & > :first-child {
    padding: 0 10px;
    & > span {
      width: 100%;
      display: flex;
      justify-content: start;
      color: ${({ theme }) => theme.Colors.purples[3]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      padding-left: 10px;
    }
    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;
      & > div {
        width: 20rem;
        & > button:first-child {
          display: none;
        }
      }
      & > button {
        width: 44px;
        cursor: pointer;
      }
    }
  }
  & > :last-child {
    display: flex;
    flex-direction: column;
    width: 20rem;
    padding: 0 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    & > span {
      width: 100%;
      display: flex;
      justify-content: start;
      color: ${({ theme }) => theme.Colors.purples[3]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      padding-left: 10px;
    }
    & > textarea {
      width: 362px;
      min-height: 80px;
      resize: 'none';
      height: 100%;
      outline: 2px solid #f5f5f5;
      border: none;
      padding: 10px;
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      color: ${({ theme }) => theme.Colors.grays[4]};
      // border-radius: 5px;
    }
  }
`;

export const StyledMessageContainer = styled.div``;

export const StyledFooterCreateMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  margin-bottom: 20px;
`;
