import styled from 'styled-components';

export const StyledWrapperEmptyContacts = styled.div`
  width: 94%;
  height: 34rem;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > :first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
    & > svg {
      width: 6rem;
      height: 6rem;
      fill: ${({ theme }) => theme.Colors.grays[6]};
    }
  }
  & > :nth-child(2) {
    & > :nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.Colors.grays[6]};
      font-size: ${({ theme }) => theme.fontSize[18]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      line-height: 1.3rem;
      margin-bottom: 0.4rem;
    }
  }
`;
