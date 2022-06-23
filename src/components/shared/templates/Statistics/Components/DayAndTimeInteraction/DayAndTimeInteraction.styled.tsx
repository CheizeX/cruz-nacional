import styled from 'styled-components';

export const WrapperInteractionByDay = styled.div`
  width: 320px;
  height: 290px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
`;

export const HeaderInteractionByDay = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  & > :first-child {
    display: flex;
    width: 260px;
    justify-content: space-between;
    & > div {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.Colors.purples[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      color: ${({ theme }) => theme.Colors.grays[10]};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      min-width: 24px;
      min-height: 24px;
      width: fit-content;
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]}:;
    }
  }
`;
export const BodyInteractionByDay = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  min-width: 320px;
  padding: 10px 0;
  min-height: 210px;
  align-items: center;
  & :nth-child(1) {
    background-color: '#8520D0';
    max-width: 142px;
    width: 142px;
    height: 142px;
    border-radius: 10px;
    border: 1px solid red;
    & > div {
      background-color: '#8520D0';
    }
  }
  & :nth-child(2) {
    background-color: '#FF6641';
    max-width: 142px;
    width: 142px;
    border-radius: 10px;
    & > div {
      background-color: '#FF6641';
    }
  }
`;
