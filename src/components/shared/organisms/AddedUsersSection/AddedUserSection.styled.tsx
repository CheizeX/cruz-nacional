import styled from 'styled-components';

export const StyledAddedUsersSection = styled.section`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  height: fit-content;
  margin: auto;
  max-width: 1032px;
  min-height: 656px;
  width: 100%;
  padding-bottom: 24px;
`;

export const StyledHeaderUsersSection = styled.header`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  height: 72px;
  justify-content: space-between;
  padding: 0px 24px;
  width: 100%;

  & > span {
    align-items: center;
    display: flex;
    height: 17px;
    width: max-content;
    & span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-size: ${({ theme }) => theme.fontSize[12]};
    }
  }
  & > div {
    align-items: center;
    display: flex;
    height: 40px;
    width: fit-content;
    & > :first-child {
      background: ${({ theme }) => theme && theme.Colors.grays[9]};
      width: 296px;
      margin-right: 18px;
      input {
        background: ${({ theme }) => theme && theme.Colors.grays[9]};
        &::placeholder {
          color: ${({ theme }) => theme.Colors.grays[6]};
          letter-spacing: 0.4px;
        }
      }
      button {
        svg {
          width: 15px;
          fill: ${({ theme }) => theme && theme.Colors.grays[6]};
        }
      }
    }
    /* & > :nth-child(2) {
      & div {
        align-items: center;
        display: flex;
        justify-content: center;
      }
    } */
    & > :nth-child(3) {
      /* z-index: 2; */
    }
    & > span {
      border-left: 1px solid ${({ theme }) => theme.Colors.grays[9]};
      display: flex;
      justify-content: flex-end;
      margin-left: 16px;
      & > button {
        :hover {
          cursor: pointer;
        }
        & > div {
          align-items: center;
          border-radius: 24px;
          display: flex;
          height: 32px;
          justify-content: space-between;
          margin-left: 8px;
          padding: 0 20px;
          :hover {
            background-color: ${({ theme }) => theme.Colors.grays[6]};
          }
          :active {
            background-color: ${({ theme }) => theme.Colors.grays[4]};
          }
          & > :first-child {
            & > div {
              & > div {
                & > svg {
                  margin-top: 8px;
                  & > path {
                    fill: ${({ theme }) => theme.Colors.grays[10]};
                  }
                }
              }
            }
          }
          & span {
            font-size: 12px;
            margin: 0;
            padding: 0;
            transform: translateX(-8px);
          }
        }
      }
      & article {
        text-align: unset;
      }
    }
  }
`;

export const StyledUsersCounter = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.purples[2]};
  border-radius: 50%;
  color: ${({ theme }) => theme.Colors.grays[10]};
  display: flex;
  height: 20px;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize[12]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  margin-left: 10px;
  width: 20px;
`;

export const StyledDisplayedUsers = styled.article`
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  height: 545px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  padding: 0.1px 0;
  margin: 0 24px 0px 24px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledInfoUsersSection = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 24px;
  max-width: 984px;
  border-radius: 10px;
  overflow: hidden;
  & > :first-child {
    border-right: 1px solid ${({ theme }) => theme.Colors.grays[10]};
  }
  & > :last-child {
    border-left: 1px solid ${({ theme }) => theme.Colors.grays[10]};
  }
`;
export const StyledInfoUsersBySupOrAgent = styled.div`
  /* border: 1px solid ${({ theme }) => theme.Colors.grays[1]} */
  height: 100%;
  width: 49.4%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
`;
export const StyledInfoNameAndIcon = styled.div`
  /* border-bottom: 3px solid ${({ theme }) => theme.Colors.grays[5]}; */
  border-right: 2px dashed ${({ theme }) => theme.Colors.grays[10]};
  height: 100%;
  width: 60px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    height: 100%;
    fill: ${({ theme }) => theme.Colors.green[1]};
  }
`;

export const StyledUsersAvailableInfo = styled.span`
  /* border-bottom: 3px solid ${({ theme }) => theme.Colors.grays[5]}; */
  height: 100%;
  width: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    color: ${({ theme }) => theme.Colors.grays[3]};
    & > div {
      border-radius: 3px;
      padding: 5px;
      margin-left: 10px;
      color: ${({ theme }) => theme.Colors.grays[10]};
      font-size: ${({ theme }) => theme.fontSize[14]};
      min-width: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      color: ${({ theme }) => theme.Colors.grays[3]};
      background-color: ${({ theme }) => theme.Colors.grays[10]};
    }
  }
`;
