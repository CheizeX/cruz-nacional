import styled from 'styled-components';
import { FilterChannelsProps } from './FilterChannels.interface';

export const StyledWrapperChecked = styled.div<FilterChannelsProps>`
  width: 295px;
  height: 50px;
  display: flex;
  flex-direction: initial;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2px;
  & > :nth-child(1) {
    height: fit-content;
    background: ${({ checked, theme }) =>
      checked ? theme.Colors.purples[1] : theme.Colors.grays[8]};
  }
  & > :nth-child(2) {
    width: 25px;
    height: 25px;
    margin-left: 15px;
    & > div {
      & * {
        & > svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  & :nth-child(1) {
    & > :nth-child(2) {
      & > div {
        top: -6px;
      }
    }
  }
  & > span {
    margin-left: 9px;
    color: ${({ theme }) => theme.Colors.grays[3]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    line-height: 14px;
    padding-top: 1px;
  }
`;
