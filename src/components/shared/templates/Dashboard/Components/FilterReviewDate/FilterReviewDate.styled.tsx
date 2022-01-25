import styled, { css } from 'styled-components';
import { IPropsFilterReviewButton } from './FilterReviewDate.interface';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const StyledTabsHeadersReview = styled.div<IPropsFilterReviewButton>`
  display: flex;
  flex-direction: column;
  width: 13.4rem;
  justify-content: space-around;
`;

export const StyledContainerRadioReview = styled.div<IPropsFilterReviewButton>`
  border-radius: 50%;
  width: 1.25rem;
  height: 20px;
  outline: 0.125rem solid ${({ theme }) => theme.Colors.grays[8]};
  margin-right: 0.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  ${({ focusRadio }) =>
    focusRadio &&
    css<IPropsFilterReviewButton>`
      outline: 0.125rem solid ${({ theme }) => theme.Colors.purples[1]};
    `}
`;

export const StyledRadioReview = styled.button<IPropsFilterReviewButton>`
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 50%;
  margin: 0;
  padding: 0;
  width: 0.75rem;
  height: 0.75rem;
  display: flex;
  margin: auto;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  ${({ focusRadio }) =>
    focusRadio &&
    css<IPropsFilterReviewButton>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;

export const WrapperReview = styled.div`
  display: flex;
  margin: 0.5rem 1.3rem;
`;

export const StyledLabelReview = styled.div<IPropsFilterReviewButton>`
  display: flex;
  div:first-child {
    width: 1.4rem;
    display: flex;
    margin-right: 1rem;
  }
  div:last-child {
    width: 1.4rem;
    padding-top: 0rem;
    display: flex;
    align-items: center;
    margin-right: 0.6rem;
  }
  & span {
    padding-top: 0.1rem;
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: ${({ theme }) => theme.fontSize[14]};
  }
`;
