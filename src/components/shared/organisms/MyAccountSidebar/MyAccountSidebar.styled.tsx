/* eslint-disable react/button-has-type */
import styled from 'styled-components';

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Mi cuenta >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const StyledMyAccountSidebar = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[3]};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  min-height: 48rem;
  width: 22.25rem;
  box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.15);
  z-index: 2;
  transition: all 0.3s ease-in-out;
`;

export const StyledMyAccountHeader = styled.div`
  height: 4.063rem;
  width: 98%;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1.938rem;
  padding-left: 1.313rem;
  margin-bottom: 2.375rem;
  transition: all 0.3s ease-in-out;

  & > :first-child {
    & > button {
      padding-top: 0.2rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        transform: translateX(-3px);
        & * {
          fill: ${({ theme }) => theme.Colors.purples[3]};
        }
      }
    }
    & > span {
      margin-left: 1.188rem;
    }
  }
  & > button {
    transition: all 0.3s ease-in-out;

    & * {
      fill: ${({ theme }) => theme.Colors.grays[6]};
      &:hover {
        fill: ${({ theme }) => theme.Colors.purples[3]};
        cursor: pointer;
      }
    }
  }
`;

export const StyledImageAndButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.875rem;
  width: fit-content;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  & > :last-child {
    position: absolute;
    top: -5px;
    right: -5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    background-color: #8769ff;
    /* & * {
      & > svg {
        margin: 11px 12px;
      }
    } */
  }
  /* & > button {
    position: relative;
    min-height: 40px;
    height: 0px;
    border-radius: 24px;
    background-color: #8769ff;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  } */
`;

export const StyledMyAccountAvatar = styled.img`
  width: 6.875rem;
  height: 6.875rem;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  object-fit: cover;
`;

export const StyledMyAccountInputsContainer = styled.div`
  height: 15.625rem;
  width: 100%;
  padding: 0 1.875rem;
  margin-top: 1.125rem;
  & > :nth-child(5) {
    width: 100%;
    text-align: right;
    padding-right: 12px;
    padding-top: 10px;
    transition: all 0.3s ease-in-out;
    & > button {
      & span {
        text-decoration: underline;
        text-decoration-color: ${({ theme }) => theme.Colors.grays[10]};
        text-underline-position: under;
        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.Colors.purples[3]};
          text-decoration-color: ${({ theme }) => theme.Colors.purples[3]};
        }
      }
    }
  }
  & > button {
    margin-top: 32px;
    height: 2.5rem;
    width: 100%;
    bottom: 0;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.Colors.purples[3]};
    }
  }
  & > span {
    margin-left: 1.25rem;
  }
`;

export const StyledMyAccountSimilInput = styled.div`
  height: 2.5rem;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.Colors.grays[5]};
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  margin-top: 0.375rem;
`;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Cambiar contraseña >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const StyledChangePasswordIndication = styled.div`
  height: 3.75rem;
  margin: 0 2rem;
  text-align: center;
`;

export const StyledChangeUserPassword = styled.div`
  width: 100%;
  min-width: 18.75rem;
  height: 3.75rem;
  margin-bottom: 1.25rem;
  & > span {
    margin-left: 1.25rem;
  }
  & > div {
    margin-top: 0.313rem;
    background: ${({ theme }) => theme && theme.Colors.grays[5]};
  }
  button {
    width: auto;
    margin-left: 0;
    margin-top: 0.313rem;
  }
  input {
    background: ${({ theme }) => theme && theme.Colors.grays[5]};
    color: ${({ theme }) => theme && theme.Colors.grays[8]};
  }
`;

export const StyledUserChangePasswordRestrictions = styled.span`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  & > :first-child {
  }
  & div {
    justify-content: flex-start;
    align-items: center;
    height: 1.25rem;
    display: flex;
    padding-left: 2px;
    & span {
      padding-left: 5px;
    }
  }
  & > :nth-child(2) {
    margin-top: 0.5rem;
  }
  & > :nth-child(3) {
    margin-top: 0.313rem;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 3.75rem;
  margin-top: 40px;
  & button {
    width: 100%;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.Colors.purples[2]};
    }
  }
`;
