import styled from 'styled-components';

export const StyledCreateContacts = styled.div`
  width: 341px;
  height: fit-content;
  border-radius: 10px;
  padding: 0;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin: 0;
`;
export const StyledHeaderCreateContact = styled.div`
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

export const StyledBodyCreateContacts = styled.div`
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
    & > :nth-child(12) {
      background: ${({ theme }) => theme.Colors.grays[9]};
      border-radius: 24px;
      height: 2.5rem;
      align-items: center;
      display: flex;
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[400]};
      padding-left: 20px;
    }
  }
`;
export const StyledStatusSelector = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 24px;
  background: ${({ theme }) => theme.Colors.grays[9]};
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  padding-left: 15px;
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  &::-ms-expand {
    display: none;
  }
  &::after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: red;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
  }
  &:focus {
    outline: none;
    background: ${({ theme }) => theme.Colors.grays[9]};
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
  }
`;

export const StyledFooterCreateContacts = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  justify-content: space-between;
  padding: 10px;
`;
