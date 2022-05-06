/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import { SubscriptionSectionProps } from './SubscriptionSection.interface';

export const StyledSubscriptionSection = styled.section`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  max-width: 1032px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const StyledSubscriptionSectionHeader = styled.div`
  height: 90px;
  border-radius: 10px 10px 0 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & img {
    margin-left: 20px;
  }
`;

export const StyledSubscriptionSectionHeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: fit-content;
  font-size: 12px;
  font-weight: 500;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    margin: 0 auto;
    & > span {
      display: flex;
      align-items: center;
      font-weight: 500;
      color: ${({ theme }) => theme.Colors.grays[1]};
      height: 50px;
      font-size: 22px;
      padding-right: 10px;
      padding-left: 20px;
      border: 3px solid ${({ theme }) => theme.Colors.grays[10]};
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    & > p {
      border: 3px solid ${({ theme }) => theme.Colors.grays[9]};
      box-shadow: 0px 3px 10px 0px ${({ theme }) => theme.Colors.grays[7]};
      display: flex;
      align-items: center;
      height: 50px;
      font-size: 34px;
      color: ${({ theme }) => theme.Colors.grays[10]};
      background-color: ${({ theme }) => theme.Colors.green[4]};
      font-weight: 500;
      padding: 10px 20px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-radius: 10px;
    }
  }
`;

export const StyledSubscriptionSectionBody = styled.div`
  height: 100%;
  height: fit-content;
  border-top: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.Colors.grays[3]};
  & > div {
    height: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const StyledSubscriptionSectionCard = styled.div<SubscriptionSectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 380px;
  margin: 9px 0;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.121);
  font-size: 14px;
  ${({ active, theme }) =>
    active &&
    `
    outline: 3px solid goldenrod;
    box-shadow: 0px 1px 15px 2px  ${theme.Colors.grays[7]};
  `}
  & > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    min-height: 20px;
    & div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 24px;
      max-height: 24px;
      margin-right: 10px;
      & * {
        border-radius: 50%;
        width: 24px;
        height: 24px;
      }
      & > svg {
        width: 20px;
        height: 20px;
        border: 2px solid ${({ theme }) => theme.Colors.grays[10]};
        background-color: ${({ theme }) => theme.Colors.grays[10]};
        & path {
          fill: ${({ theme }) => theme.Colors.green[4]};
          ${({ active }) =>
            active &&
            `
              fill:  goldenrod;
          `}
        }
      }
    }
  }
  & button {
    min-height: 40px;
    width: 100%;
    background: ${({ theme }) => theme.Colors.purples[1]};
    border-radius: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.Colors.grays[10]};
    margin-top: 5px;
    margin-bottom: -5px;
    font-weight: 600;
    & :hover {
      background: ${({ theme }) => theme.Colors.purples[2]};
    }
  }
`;
export const StyledSubscriptionSectionCardHeader = styled.span<SubscriptionSectionProps>`
  height: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px 10px 0px;
  ${({ active }) =>
    active &&
    `
    justify-content: center;
  `}
  & h1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.Colors.purples[1]};
    ${({ active, theme }) =>
      active &&
      `
    font-size: 28px;
    color: goldenrod;
    &::before {
      // the content of the span is the same as the content of the h1
      font-size: 20px;
      color: ${theme.Colors.grays[5]};
      content: 'Mi Plan';
      font-size: 20px;
      font-weight: 500;
      margin-right: 10px;
    }
  `}
  }
  & h3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    font-weight: 600;
    font-size: 20px;
  }
`;

export const StyledSubscriptionSectionEnterpriseCard = styled.div<SubscriptionSectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0 20px 10px 20px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.121);
  font-size: 16px;
  max-width: 633px;
  align-self: flex-start;
  height: 380px;
  ${({ active }) =>
    active &&
    `
    outline: 3px solid goldenrod; 
  `};
  & a {
    min-height: 40px;
    width: 100%;
    background: ${({ theme }) => theme.Colors.purples[1]};
    border-radius: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.Colors.grays[10]};
    margin-bottom: 5px;
    font-weight: 600;
    & :hover {
      background: ${({ theme }) => theme.Colors.purples[2]};
    }
  }
`;
export const StyledSubscriptionSectionEnterpriseCardHeader = styled.div<SubscriptionSectionProps>`
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 10px 0px;
  ${({ active, theme }) =>
    active &&
    `
    justify-content: center;
    &::before {
      // the content of the span is the same as the content of the h1
      font-size: 20px;
      color: ${theme.Colors.grays[5]};
      content: 'Mi Plan';
      font-size: 20px;
      font-weight: 500;
      margin-right: 10px;
    }
  `}
  & > h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.Colors.purples[1]};
    margin-right: 10px;
    ${({ active, theme }) =>
      active &&
      `
      font-size: 28px;
    color: ${theme.Colors.green[3]};
  `}
  }
`;
export const StyledSubscriptionSectionEnterpriseCardBody = styled.div<SubscriptionSectionProps>`
  display: flex;
  flex-direction: row;
  align-items: left;
  color: ${({ theme }) => theme.Colors.grays[3]};
  height: 250px;
  width: 100%;
  margin-top: 10px;
  padding-bottom: 10px;
  line-height: 1.5;
  & > :first-child {
    width: 100%;
    height: 97%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 180px;
      padding-top: 5px;
      min-height: 40px;
      fill: black;
      & > div {
        width: 20px;
        height: 20px;
        margin: 0 10px 0 0px;
        & > div {
          width: 20px;
          height: 20px;
          & > div {
            width: 20px;
            height: 20px;
            & > svg {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: 2px solid ${({ theme }) => theme.Colors.grays[10]};
              background-color: ${({ theme }) => theme.Colors.grays[10]};
              & path {
                fill: ${({ theme }) => theme.Colors.green[4]};
              ${({ active, theme }) =>
                active &&
                `
            border: 2px solid ${theme.Colors.grays[10]};
            background-color: ${theme.Colors.purples[3]};
            fill: ${theme.Colors.purples[3]};
          `}
          }
        }
      }
    }
  }
`;

export const StyledSubscriptionSectionWebchat = styled.div<SubscriptionSectionProps>`
  min-width: 300px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 0 20px 10px 20px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.121);
  font-size: 14px;
  ${({ active, theme }) =>
    active &&
    `
    justify-content: center;
    box-shadow: 0px 2px 5px 3px  ${theme.Colors.purples[2]};
`};
  }
`;
export const StyledSubscriptionSectionWebchatHeader = styled.div<SubscriptionSectionProps>`
  border-bottom: 1px solid ${({ theme }) => theme.Colors.grays[9]};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 10px 0px;
  height: 50px;
  position: relative;
  & > h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.Colors.purples[3]};
    margin-right: 10px;
  }
  & > h3 {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: 22px;
    font-weight: 600;
  }
`;
export const StyledSubscriptionSectionWebchatBody = styled.div<SubscriptionSectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.Colors.grays[3]};
  height: 100%;
  width: 100%;
  & > div {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: left;
    align-items: center;
    & > div {
      width: 20px;
      height: 20px;
      margin: 0 10px 0 0px;
      & > div {
        width: 20px;
        height: 20px;
        & > div {
          width: 20px;
          height: 20px;
          & > svg {
            width: 20px;
            height: 20px;
            background-color: ${({ theme }) => theme.Colors.grays[10]};
            border-radius: 50%;
            border: 2px solid ${({ theme }) => theme.Colors.grays[10]};
            & path {
              fill: ${({ theme }) => theme.Colors.grays[8]};
            }
            ${({ active, theme }) =>
              active &&
              `
            border: 2px solid ${theme.Colors.grays[10]};
            background-color: ${theme.Colors.grays[10]};
            & path {
              fill: ${theme.Colors.purples[3]};
            }
          `}
          }
        }
      }
    }
  }
`;
