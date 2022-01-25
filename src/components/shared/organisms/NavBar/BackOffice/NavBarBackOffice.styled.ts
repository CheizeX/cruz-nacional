import styled from 'styled-components';

export const StyledNavBarBackOffice = styled.nav`
  width: 1032px;
  background: ${({ theme }) => theme && theme.Colors.grays[9]};
  padding-left: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5rem;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  span {
    padding: ${({ theme }) => theme && theme.fontSize[12]};
  }
`;

export const StyledNotificationBackOffice = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.Colors.orange[4]};
  position: relative;
  top: 23px;
  right: 37px;
`;
export const Wraper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 340px;
  & > button {
    padding-right: 28px;
  }
`;
export const MessageIcon = styled.div`
  padding: 8px 0px 0px 0px;
  width: ${({ theme }) => theme && theme.fontSize[30]};
  cursor: pointer;
  & > div {
    & > div {
      & > div {
        & > svg {
          width: 31px;
          height: 24px;
          & > path {
            fill: ${({ theme }) => theme && theme.Colors.purples[3]};
          }
        }
      }
    }
  }
`;
export const BellIcon = styled.div`
  padding: 12px 28px 0px 24px;
  width: 74px;
  & > div {
    & > div {
      & > div {
        & > svg {
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme && theme.Colors.purples[3]};
          }
        }
      }
    }
  }
`;

export const ArrowIcon = styled.button`
  padding-left: 8px;
  & > div {
    & > div {
      & > div {
        & > svg {
          cursor: pointer;
          & > path {
            fill: ${({ theme }) => theme && theme.Colors.purples[3]};
          }
        }
      }
    }
  }
`;

export const StyledAvatar = styled.div`
  border: 4px solid ${({ theme }) => theme && theme.Colors.purples[3]};
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 4px solid #8769ff;
  border-radius: 50%; */
  & > img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    /* max-width: 2.1rem;
    max-height: 2.1rem; */
    object-fit: cover;
  }
  & > :first-child {
    // transform: translateY(9px);
    & > div {
      & > div {
        // transform: translate(-1px, 7px);
        top: 7px;
        display: flex;
        position: absolute;
      }
    }
  }
  & svg {
    width: 38px;
    height: 35px;
    border-radius: 50%;

    & path {
      transform: translateY(-10px);
      fill: ${({ theme }) => theme && theme.Colors.grays[7]};
    }
  }
`;

export const TriggerElement = styled.div`
  width: max-content;
  margin-right: 24px;
  display: flex;
  align-items: center;
  & svg {
    transform: translateY(-8px);
  }
`;

export const BackofficeDropdownContainer = styled.div`
  // <BackofficeDropdownProps>
  width: 207px;
  height: 102px;
  border-radius: 16px;
  background: ${({ theme }) => theme && theme.Colors.grays[3]};
  box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 73px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  z-index: 1;
  & > :first-child {
    & > :first-child {
      & > :first-child {
        transform: translateY(-2px);
      }
    }
  }
  & > button {
    width: 85%;
    & > div {
      justify-content: flex-start;
      width: 100%;
      background-color: transparent;
      align-items: center;
      border-radius: 2px;
      &:hover {
        & > span {
          color: ${({ theme }) => theme && theme.Colors.purples[3]};
        }
        cursor: pointer;
      }
      &:active {
        & > span {
          color: ${({ theme }) => theme && theme.Colors.grays[8]};
        }
      }
    }
  }
`;
