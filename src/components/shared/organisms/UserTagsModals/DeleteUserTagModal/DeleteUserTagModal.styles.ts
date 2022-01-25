import styled from 'styled-components';

export const StyledDeleteUserTagModal = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  height: 512px;
  width: 341px;
`;

export const StyledDeleteUserTagModalHeader = styled.div`
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
  & > span {
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      padding-left: 20px;
    }
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

export const StyledDeleteUserTagModalBody = styled.div`
  background: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 457px;
  padding: 20px;
  text-align: center;
  width: 100%;
  & > div {
    display: flex;
    height: 40px;
    justify-content: center;
    text-align: center;
    margin-bottom: 11px;
    margin-top: 5px;
    width: 100%;
    & svg {
      & * {
        fill: ${({ theme }) => theme.Colors.orange[2]};
      }
    }
  }
  & p {
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    margin-top: 11px;
    margin-bottom: 24px;
    & span {
      color: ${({ theme }) => theme.Colors.grays[3]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[400]};
    }
  }
  & button {
    background-color: ${({ theme }) => theme.Colors.orange[2]};
    margin-top: 20px;
    width: 100%;
    &:hover {
      background-color: ${({ theme }) => theme.Colors.orange[3]};
    }
  }
`;
