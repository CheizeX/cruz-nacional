import styled from 'styled-components';

export const ContainerCreateUsers = styled.div`
  width: 341px;
  height: fit-content;
  border-radius: 10px;
  padding-bottom: 19px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin: 0;
`;
export const StyledHeader = styled.div`
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

export const StyledBody = styled.div`
  width: 341px;
  height: fit-content;
  text-align: -webkit-auto;
  div {
    justify-content: space-evenly;
    button {
      height: 34px;
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
  }
  & > div {
    height: fit-content;
    width: 295px;
    margin: 16px 23px;
  }
`;

export const StyledUserData = styled.div`
  width: 100%;
  height: fit-content;
`;

export const StyledRadio = styled.div`
  display: flex;
  align-items: center;
  max-width: 204px;
  justify-content: center;
  margin: auto;
`;

export const StyledAvatar = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  margin-bottom: 31px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      & > div {
        & > svg {
          width: 66px;
          height: 66px;
        }
      }
    }
    & :last-child {
      position: absolute;
      left: 160px;
      top: 0px;
      font-size: 24px;
      width: 30px;
      height: 30px;
      & > div {
        & > div {
          & > svg {
            width: 26px;
            height: 27px;
          }
        }
      }
    }
  }
`;

export const StyledInputContainer = styled.div`
  width: 295px;
  height: 65px;
  margin-top: 12px;
  & > div {
    margin-top: 6px;
    background-color: ${({ theme }) => theme.Colors.grays[9]};
    button:first-child {
      display: none;
    }
    input {
      background-color: ${({ theme }) => theme.Colors.grays[9]};
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    padding: 16px;
  }
`;

export const StyledFooter = styled.div`
  width: 341px;
  height: 56px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[8]};
  & > button {
    width: 120px;
  }
`;
export const StyledTag = styled.div`
  margin-top: 9px;
  & > div:first-child {
    width: 295px;
    display: flex;
    justify-content: space-between;
    padding: 8px 2px 0 11px;
    margin-bottom: 8px;
    & > div {
      margin-right: 20px;
      & > div {
        & > div {
          & > svg {
            cursor: pointer;
            & > path {
              fill: ${({ theme }) => theme.Colors.purples[3]};
            }
          }
        }
      }
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[1]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      font-size: ${({ theme }) => theme.fontSize[12]};
      line-height: 14px;
    }
    button:first-child {
      display: none;
    }
    button:last-child {
      background-color: transparent;
      width: 22px;
      height: 20px;
      & > div {
        & > div {
          & > div {
            & > svg {
              cursor: pointer;
              & > path {
                fill: ${({ theme }) => theme.Colors.purples[1]};
              }
            }
          }
        }
      }
    }
  }
  & > div:last-child {
    border-radius: 10px;
    padding: 10px;
    & > div {
      display: flex;
      justify-content: space-between;
      & > div {
        & > div {
          & > div {
            & > svg {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

// -------------- RADIO INPUTS --------------
export const StyledRealFunctionalRadiosContainer = styled.div`
  width: 295px;
  transform: translate(14px, -4px);
  position: absolute;
  opacity: 0; //oculta los inputs de los radios
  & input {
    width: 24px;
    height: 24px;
  }
  & > :first-child {
    transform: translate(8px, 1px);
  }
  & > :last-child {
    transform: translate(120px, 1px);
  }
`;

export const StyledRadioGray = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & div {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.Colors.grays[8]};
  }
  & > :first-child {
    & div {
      width: 14px;
      height: 14px;
    }
  }
`;

export const StyledRadioPurple = styled(StyledRadioGray)`
  border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
  & div {
    background-color: ${({ theme }) => theme.Colors.purples[1]};
  }
  & > :first-child {
    background-color: ${({ theme }) => theme.Colors.purples[1]};
    & div {
      width: 14px;
      height: 14px;
    }
  }
`;

export const StyledVisualRadiosContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.Colors.grays[3]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  & span {
    transform: translateX(-20px);
  }
`;
