import styled from 'styled-components';

export const StyledInformation = styled.div`
  width: 600px;
  min-width: 320px;
  height: fit-content;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 0 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const StyledInformationHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    font-weight: 400;
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: 16px;
  }
  & > button {
    transition: all 0.3s ease-in-out;
    width: 30px;
    height: 30px;
    & * {
      fill: ${({ theme }) => theme.Colors.grays[7]};
    }
    & :hover {
      cursor: pointer;
      & * {
        fill: ${({ theme }) => theme.Colors.grays[5]};
      }
    }
    & div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 30px;
      height: 30px;
    }
  }
`;
export const StyledInformationBody = styled.div`
  transition 0.3s ease-in-out;
  width: 100%;
  height: fit-content;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const StyledInfoDateOfSubscription = styled.div`
  transition 0.3s all ease-in-out;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  color: ${({ theme }) => theme.Colors.grays[5]};
  font-size: 14px;
  margin: 10px 0;
  border-radius: 5px;
  border-left: 5px solid ${({ theme }) => theme.Colors.purples[3]};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  & > span {
    transition 0.3s all ease-in-out;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.Colors.purples[3]};
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px dotted ${({ theme }) => theme.Colors.grays[9]};
    padding: 0 16px;
  }
`;
export const StyledItemInSubscription = styled.div`
  transition 0.3s all ease-in-out;
  display: flex;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  padding: 5px 0;
  padding-left: 16px;
  color: ${({ theme }) => theme.Colors.grays[5]};
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${({ theme }) => theme.Colors.orange[1]};
  & > div {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-evenly;
    width: 295px;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      & > span {
        width: 35px;
        transition 0.3s all ease-in-out;
        font-weight: 600;
        color: ${({ theme }) => theme.Colors.grays[10]};
        background: ${({ theme }) => theme.Colors.grays[8]};
        padding: 4px 6px;
        border-radius: 3px;
        box-shadow: 0px 2px 6px 0px ${({ theme }) => theme.Colors.grays[8]};
        margin-right: 10px;
      }
    }
  }
  & > button {
    transition 0.3s all ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.Colors.grays[7]};
    width: 250px;
    height: 50px;
    border-left: 2px dotted ${({ theme }) => theme.Colors.grays[9]};
    margin: 3px 0;
    padding: 0 16px;
    & > svg {
      margin-right: 7px;
      margin-bottom: 2px;
    }
    & :hover {
      transition 0.3s all ease-in-out;
      cursor: pointer;
      color: ${({ theme }) => theme.Colors.orange[1]};
    }
  }
`;
export const StyledDeleteAgentContainer = styled.article`
  transition 0.3s all ease-in-out;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-left: 2px dotted ${({ theme }) => theme.Colors.grays[9]};
  padding: 0 10px;
  & > div {
    transition 0.3s all ease-in-out;
    min-height: 100%;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2px 0px;
    color: ${({ theme }) => theme.Colors.orange[1]};
    & > input {
      transition 0.3s all ease-in-out;
      padding-left: 40px;
      min-height: 33px;
      width: 100%;
      border: 2px solid ${({ theme }) => theme.Colors.grays[9]};
      border-radius: 5px;
      color: ${({ theme }) => theme.Colors.grays[5]};
      & :focus {
        transition 0.3s all ease-in-out;
        padding: 0 3px;
        padding-left: 40px;
        outline: none;
        border: 2px solid ${({ theme }) => theme.Colors.orange[1]};
      }
    }
  }
  & > button {
    transition 0.3s all ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.Colors.grays[7]};
    width: 100px;
    padding: 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    & :hover {
      transition 0.3s all ease-in-out;
      cursor: pointer;
      color: ${({ theme }) => theme.Colors.green[4]};
      box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.Colors.green[4]};
    }
  }
  & > span {
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ theme }) => theme.Colors.grays[4]};
    line-height: 1.2;
    & > div {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      & > button {
        transition 0.3s all ease-in-out;
        width: 20%;
        height: 25px;
        font-size: 12px;
        border-radius: 17px;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        &:hover {
          transition 0.3s all ease-in-out;
          cursor: pointer;
        }
      }
      & > :first-child {
        background: ${({ theme }) => theme.Colors.purples[3]};
        color: ${({ theme }) => theme.Colors.grays[10]};
        &:hover {
          color: ${({ theme }) => theme.Colors.purples[3]};
          border: 2px solid ${({ theme }) => theme.Colors.purples[3]};
          background: ${({ theme }) => theme.Colors.grays[10]};
        }
      }
      & > :last-child {
        color: ${({ theme }) => theme.Colors.orange[1]};
        border: 2px solid ${({ theme }) => theme.Colors.orange[1]};
        &:hover {
          background: ${({ theme }) => theme.Colors.orange[1]};
          color: ${({ theme }) => theme.Colors.grays[10]};
        }
      }
    }
  }
  & > main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    & :first-child {
      width: 100%;
      & > span {
        font-weight: 400;
        font-size: 12px;
        color: ${({ theme }) => theme.Colors.orange[1]};
      }
    }
  }
`;

export const StyledInformationFooter = styled.div`
  width: 100%;
  height: 80px;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  & > button {
    transition: all 0.3s ease-in-out;
    padding: 0 5px;
    height: 50px;
    width: 205px;
  }
`;

export const StyledLoadingBar = styled.div`
  --uib-size: 80px;
  --uib-speed: 1.4s;
  --uib-color: ${({ theme }) => theme.Colors.orange[1]};
  --uib-line-weight: 5px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--uib-line-weight);
  width: var(--uib-size);
  border-radius: calc(var(--uib-line-weight) / 2);
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--uib-color);
    opacity: 0.1;
  }

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: calc(var(--uib-line-weight) / 2);
    animation: raceBy var(--uib-speed) ease-in-out infinite;
    transform: translateX(-100%);
    background-color: var(--uib-color);
  }

  @keyframes raceBy {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const StyledTitleWhenDowngrade = styled.section`
  min-width: 600px;
  max-height: 50px;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 16px;
  padding-left: 20px;
  color: ${({ theme }) => theme.Colors.orange[1]};
  & > span {
    line-height: 1.2;
    color: ${({ theme }) => theme.Colors.orange[1]};
    font-size: 10px;
    margin-left: 5px;
    text-align: left;
    position: relative;
    font-weight: 400;
    & > svg {
      fill: ${({ theme }) => theme.Colors.orange[1]};
      position relative;
      left: 0px;
      top: 2px;
      margin-right: 2px;
    }
  }
`;
