import styled from 'styled-components';
import { ISearchByAsignation } from './SearchByAsignation.interface';

export const StyledWrapperAsignation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > :nth-child(1) {
    width: 256px;
    margin: 0 auto;
    margin-bottom: 11px;
    & > button:last-child {
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[7]};
            }
          }
        }
      }
    }
  }
`;
export const StyledSearchByAsignation = styled.div<ISearchByAsignation>`
  width: 256px;
  height: 38px;
  display: flex;
  flex-direction: initial;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2px;
  & > :nth-child(1) {
    height: fit-content;
    background: ${({ checkedAgent, theme }) =>
      checkedAgent ? theme.Colors.purples[1] : theme.Colors.grays[8]};
  }
  & > :nth-child(2) {
    width: 24px;
    height: 24px;
    margin-left: 18px;
    margin-right: 8px;
    border-radius: 50%;
    object-fit: cover;
    & > div {
      & * {
        & > svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  & > :nth-child(3) {
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: ${({ theme }) => theme.fontSize[14]};
  }
`;
