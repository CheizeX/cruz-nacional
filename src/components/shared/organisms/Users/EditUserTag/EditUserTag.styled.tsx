import styled from 'styled-components';
import { IContainerEditUserProps } from './EditUserTag.interface';

export const ContainerTags = styled.div`
  height: fit-content;
  width: auto;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
`;

export const ContainerChecked = styled.div<IContainerEditUserProps>`
  width: 280px;
  height: 42px;
  ${({ color }) => color && `background-color: ${color}`};
  padding: 14px;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  & > span {
    padding-left: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    color: ${({ theme }) => theme.Colors.grays[10]};
  }
  & > button {
    width: 16px;
    height: 100%;
    cursor: pointer;
    & > div {
      height: 14px;
    }
  }
`;
