import styled from 'styled-components';

export const StyledEditContacts = styled.div`
  width: 341px;
  height: fit-content;
  border-radius: 10px;
  padding: 0;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin: 0;
`;
export const StyledHeaderEdit = styled.div`
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
export const StyledBodyEditContacts = styled.div`
  width: 324px;
  & > div {
    padding: 16px;
    & > span {
      text-align: center;
      display: flex;
      margin-left: 14px;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[500]};
      color: ${({ theme }) => theme.Colors.grays[1]};
    }
    & > div {
      & > button:first-child {
        display: none;
      }
    }
  }
`;
export const StyledFooterEditContacts = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  justify-content: space-between;
  padding: 10px;
`;
