import styled from 'styled-components';
import { IContainerTagAsignament } from './TagAsignament.interface';

export const ContainerTags = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[9]};
`;

export const ContainerChecked = styled.div<IContainerTagAsignament>`
  width: 280px;
  height: 42px;
  ${({ color }) => color && `background-color: ${color}`};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 10px;
  margin-bottom: 10px;
  & > span {
    padding: 13px 0px 12px 16px;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    color: ${({ theme }) => theme.Colors.grays[10]};
  }
`;
