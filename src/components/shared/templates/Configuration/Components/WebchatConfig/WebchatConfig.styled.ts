import styled from 'styled-components';

export const StyledWebchatConfigSection = styled.section`
  width: 1060px;
  height: max-content;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  border-radius: 10px;
  background: ${({ theme }) => theme.Colors.grays[10]};
  position: relative;
  & > main {
    padding-top: 5px;
    height: 550px;
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    & > :first-child {
      margin: 0 auto;
      height: 380px;
    }
    & > button {
      &:disabled {
        background: ${({ theme }) => theme.Colors.grays[10]};
        border: 2px solid ${({ theme }) => theme.Colors.grays[10]};
        cursor: default;
        & > span {
          color: ${({ theme }) => theme.Colors.grays[10]};
        }
        &:hover {
          transition: all 0.3s ease-in-out;
          cursor: default;
          background-color: ${({ theme }) => theme.Colors.grays[10]};
          & > span {
            color: ${({ theme }) => theme.Colors.grays[10]};
            transition: all 0.1s;
          }
        }
      }
      transition: all 0.3s ease-in-out;
      min-height: 80px;
      width: 260px;
      text-align: center;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.Colors.grays[10]};
      border: 2px solid ${({ theme }) => theme.Colors.purples[2]};
      &:hover {
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        background-color: ${({ theme }) => theme.Colors.purples[2]};
        & > span {
          color: ${({ theme }) => theme.Colors.grays[10]};
          transition: all 0.1s;
        }
      }
      & > span {
        color: ${({ theme }) => theme.Colors.purples[2]};
        transition: all 0.1s;
        line-height: 2;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;

export const StyledGlassModalWebchatInConstruction = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: inset 0px 0px 40px rgba(25, 255, 255, 0.1),
    0px 0px 40px rgba(225, 215, 255, 1);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
export const StyledUnderConstructionWebchatAdvice = styled.div`
  width: 320px;
  padding: 30px 10px;
  background-color: ${({ theme }) => theme.Colors.purples[2]};
  border-radius: 5px;
  box-shadow: 10px 40px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    -45deg,
    ${({ theme }) => theme.Colors.purples[3]},
    ${({ theme }) => theme.Colors.purples[1]},
    ${({ theme }) => theme.Colors.blue[2]},
    ${({ theme }) => theme.Colors.green[2]}
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  & > :first-child {
    top: 40px;
    position: absolute;
    border-radius: 50%;
    fill: ${({ theme }) => theme.Colors.grays[1]};
    opacity: 0.1;
  }
  & > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.Colors.green[2]};
    margin-bottom: 20px;
  }
  & > h2 {
    line-height: 1.3;
    padding: 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.Colors.grays[9]};
  }
`;
export const StyledBlocksLoader = styled.div`
  --uib-size: 200px;
  --uib-speed: 2.75s;
  --uib-color: ${({ theme }) => theme.Colors.purples[2]};
  --uib-line-weight: 6px;

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
    animation: wobble var(--uib-speed) ease infinite;
    transform: translateX(-95%);
    background-color: var(--uib-color);
  }

  @keyframes wobble {
    0%,
    100% {
      transform: translateX(-95%);
      background-position: 0% 50%;
    }
    50% {
      transform: translateX(95%);
      background-position: 100% 50%;
    }
  }
`;
