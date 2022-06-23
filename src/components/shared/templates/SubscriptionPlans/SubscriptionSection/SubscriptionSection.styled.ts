/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import { SubscriptionSectionProps } from './SubscriptionSection.interface';

export const StyledSubscriptionSection = styled.section`
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
  padding: 0 20px;
  & > :nth-child(2) {
    display: flex;
    width: 100%;
  }
`;

export const StyledSubscriptionSectionHeader = styled.div`
  height: 90px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: ${({ theme }) => theme.Colors.grays[10]}; */
  /* padding: 16px; */
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
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 0 auto;
    & > span {
      background-color: ${({ theme }) => theme.Colors.grays[5]};
      display: flex;
      align-items: center;
      font-weight: 500;
      color: ${({ theme }) => theme.Colors.grays[10]};
      height: 50px;
      font-size: 16px;
      padding-right: 20px;
      padding-left: 20px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      box-shadow: 0px 3px 10px 0px ${({ theme }) => theme.Colors.grays[7]};
    }
    & > p {
      box-shadow: 0px 3px 10px 0px ${({ theme }) => theme.Colors.grays[7]};
      display: flex;
      align-items: center;
      height: 50px;
      font-size: 18px;
      color: ${({ theme }) => theme.Colors.grays[10]};
      background-color: ${({ theme }) => theme.Colors.green[4]};
      font-weight: 500;
      padding: 10px 20px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;
export const StyledInformationButtonContainer = styled.div`
  & > button {
    transition: all 0.3s ease;
    margin: 10px 0;
    height: 60px;
    border-radius: 10px;
    background: ${({ theme }) => theme.Colors.purples[2]};
    /* margin-right: 20px; */
    & :hover {
      background: ${({ theme }) => theme.Colors.purples[3]};
      & > span {
        color: ${({ theme }) => theme.Colors.grays[10]};
      }
    }
  }
`;

export const StyledSubscriptionSectionBody = styled.div`
  height: 100%;
  height: fit-content;
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
    gap: 15px;
    /* justify-content: space-between; */
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
  width: 320px;
  height: 400px;
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
