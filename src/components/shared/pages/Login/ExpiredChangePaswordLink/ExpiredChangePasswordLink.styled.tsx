import styled from 'styled-components';

export const StyledWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-around;
  margin: 30px 0;
  width: 100%;
`;

export const StyledIconsWrapper = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  transform: translateY(-15px);
  margin-bottom: -20px;

  & * {
    fill: ${({ theme }) => theme.Colors.grays[8]};
  }
  & svg {
    margin-top: 5px;
    width: 45px;
    height: 45px;
  }
  & > :last-child {
    position: absolute;
    top: -3px;
    left: 22px;
    & * {
      fill: ${({ theme }) => theme.Colors.orange[1]};
    }
    & svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const StyledHeader = styled.div`
  align-items: flex-start;
  display: flex;
  fill: ${({ theme }) => theme.Colors.purples[1]};
  flex-direction: row;
  height: 20px;
  justify-content: flex-start;
  width: 340px;
  & span {
    color: ${({ theme }) => theme.Colors.purples[1]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    margin-left: 7px;
  }
  & svg {
    height: 17px;
    margin-top: 1px;
    transition: all.2s;
    width: 20px;
    & * {
      fill: ${({ theme }) => theme.Colors.purples[1]};
    }
    & :hover {
      cursor: pointer;
      transform: translateX(-1px);
    }
  }
`;

export const StyledInformation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 72px;
  justify-content: space-between;
  text-align: center;
  width: 340px;
  & span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[400]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 16px;
  }
  & > :first-child {
    font-size: ${({ theme }) => theme.fontSize[20]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
`;
