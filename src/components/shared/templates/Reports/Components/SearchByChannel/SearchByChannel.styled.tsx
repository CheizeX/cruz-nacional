import styled from 'styled-components';
import { IFilterChannelProps } from './SearchByChannel.interface';

export const StyledSearchByChannel = styled.div`
  height: 192px;
`;

export const StyledWrapperCheckedChannel = styled.div<IFilterChannelProps>`
  width: 256px;
  height: 50px;
  display: flex;
  margin: 0 23px;
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
    width: 23px;
    height: 23px;
    margin-left: 16px;
    & > div {
      & * {
        & > svg {
          width: 23px;
          height: 23px;
        }
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
