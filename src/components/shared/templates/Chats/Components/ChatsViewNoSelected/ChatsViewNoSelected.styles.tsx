import styled from 'styled-components';

export const StyledChatsView = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  height: 600px;
  width: 952px;
  margin: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNotSelectedChats = styled.div`
  /* height: 182px; */
  text-align: center;
  width: 397px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    height: 100px;
    width: 100%;
    margin-bottom: 20px;
    & svg {
      width: 100px;
      height: 130px;
    }
  }
  & > span {
    font-size: ${({ theme }) => theme.fontSize[18]};
    color: ${({ theme }) => theme.Colors.grays[3]};
  }
  & > :nth-child(3) {
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    margin-bottom: 25px;
    margin-top: 5px;
  }
`;
