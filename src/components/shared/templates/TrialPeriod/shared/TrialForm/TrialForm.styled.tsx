import styled from 'styled-components';
import { SubscriptionSectionInterface } from '../../../SubscriptionPlans/SubscriptionSection/SubscriptionSection.shared';

export const StyledTrialFormLayout = styled.div<SubscriptionSectionInterface>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background: ${({ theme }) => theme.Colors.purples[1]};
  overflow: hidden;
  padding-bottom: 20px;
  & > img {
    align-self: center;
    position: relative;
    top: 10px;
  }
  & > div {
    overflow: hidden;
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    & div {
      & svg {
        min-width: 100%;
        min-height: 100vh;
      }
    }
  }
`;

export const StyledTrialFormContainer = styled.main`
  position: relative;
  top: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.452);
  border-radius: 1.5rem;
  min-width: 320px;
  max-width: 600px;
  width: fit-content;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  margin: 0 20px 50px 20px;

  & h1 {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-weight: 500;
    padding: 1rem;
    text-align: center;
    width: 90%;
    border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  }
  & form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-width: 320px;
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    transition: all 0.3s ease-in-out;
    border-radius: 1.5rem;
    & > input {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 40px;
      padding: 0.5rem;
      border-radius: 1.5rem;
      background-color: ${({ theme }) => theme.Colors.grays[9]};
      transition: all 0.1s ease-in-out;
      border: none;
      padding: 1rem;
      color: ${({ theme }) => theme.Colors.grays[3]};
      margin: 0 auto;
      &:focus {
        outline: 2px solid ${({ theme }) => theme.Colors.purples[1]};
      }
      &::placeholder {
        color: ${({ theme }) => theme.Colors.grays[7]};
        padding-left: 0.3rem;
      }
    }
    & > div {
      margin: 0.3rem 0;
      height: 20px;
      color: ${({ theme }) => theme.Colors.purples[3]};
      text-align: left;
      width: 75%;
      font-size: 11px;
    }
    & button {
      width: 80%;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
      margin-top: 1rem;
      min-height: 50px;
    }
  }
  & > div {
    position: absolute;
    left: 0px;
    top: 0;
    min-width: 100vw;
    height: 100vh;
    overflow: hidden;
    & > div {
      position: absolute;
      left: 0px;
      top: 0;
      min-width: 100vw;
      height: 100vh;
      overflow: hidden;
      & > div {
        position: absolute;
        min-width: 100vw;
        min-height: 100vh;
        left: 0;
        top: 0;
        & > svg {
          position: absolute;
          left: 0;
          top: 0;
          min-width: 100vw;
          height: 100vh;
        }
      }
    }
  }
`;

export const StyledInfoCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  transition: all 0.3s ease-in-out;
  & > div {
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    & > div {
      & > div {
        margin: 0.5rem auto;
        /* border: 1px solid ${({ theme }) => theme.Colors.grays[9]}; */
        display: flex;
        align-items: center;
        min-height: 40px;
        width: 100%;
        width: 250px;
        min-width: 150px;
        display: flex;
        color: ${({ theme }) => theme.Colors.grays[3]};
        font-weight: 400;
        font-size: 1rem;
        font-weight: 500;
        padding-left: 1rem;
        & div {
          margin-right: 2rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          & div {
            & div {
              & svg {
                border-radius: 50%;
                border: 1px solid white;
                height: 25px;
                width: 25px;
                background-color: ${({ theme }) => theme.Colors.grays[10]};
                & path {
                  fill: ${({ theme }) => theme.Colors.purples[2]};
                }
              }
            }
          }
        }
      }
    }
  }
`;
