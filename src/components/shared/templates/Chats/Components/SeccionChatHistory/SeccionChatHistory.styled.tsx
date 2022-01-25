import styled from 'styled-components';

export const StyledSeccionChatHistory = styled.div`
  width: 900px;
  max-height: 800px;
  height: 504px;
  position: relative;
  & > button {
    transition: all 1s ease-in-out;
    z-index: 2;
    position: absolute;
    top: 10px;
    right: 13px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      & div {
        & * {
          fill: ${({ theme }) => theme.Colors.purples[2]};
        }
      }
    }
    & div {
      & * {
        width: 100%;
        height: 100%;
        fill: ${({ theme }) => theme.Colors.grays[10]};
      }
    }
  }

  & article {
    transition: all 1s ease-in-out;
    max-height: 80vh;
    max-width: 50vw;
    z-index: 1;
    background-color: ${({ theme }) => theme.Colors.grays[1]};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: bottom;
    border-radius: 10px;
    box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.199);
    overflow: scroll;
    opacity: 1;
    padding-top: 50px;
    transition: all 1s ease-in-out;
    &::-webkit-scrollbar {
      display: none;
    }
    & > img {
      position: absolute;
      top: 30px;
      width: 88%;
      height: 100%;
      object-fit: contain;
    }
    & > iframe {
      width: 100%;
      height: 100%;
    }
  }
`;
