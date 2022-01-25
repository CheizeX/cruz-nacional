import styled from 'styled-components';
import { IAgentToTransferProps } from './AgentToTransfer.interface';

export const StyledContainerTagAgents = styled.div<IAgentToTransferProps>`
  width: 215px;
  height: 32px;
  border-radius: 8px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.Colors.grays[10]};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  font-size: ${({ theme }) => theme.fontSize[12]};
  line-height: 14px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  ${({ color }) => color && `background-color: ${color}`};
`;
export const StyledBadgeChatTransfer = styled.div`
  display: flex;
  width: 160px;
  height: 25px;
  justify-content: center;
  margin: auto;
  & > :nth-child(2) {
    margin: 0 5px;
    & > div {
      height: 18px;
      width: 18px;
      & > div {
        & > div {
          padding-left: 2px;
          padding-top: 2px;
          & > svg {
            width: 14px;
            height: 14px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
    }
  }
  & > :nth-child(1) {
    margin: 0 5px;
    & > div {
      height: 18px;
      width: 18px;
      & > div {
        & > div {
          padding-left: 4px;
          padding-top: 2px;
          & > svg {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
  & > :nth-child(3) {
    margin: 0 5px;
    & > div {
      height: 18px;
      width: 18px;
      & > div {
        & > div {
          padding-left: 2px;
          padding-top: 2px;
          & > svg {
            width: 13px;
            height: 12px;
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[10]};
            }
          }
        }
      }
    }
  }
`;
