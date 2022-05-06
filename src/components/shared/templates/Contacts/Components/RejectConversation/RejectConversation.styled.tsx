import styled from 'styled-components';
import { IContainerReject } from './RejectConversation.interface';

export const StyledRejectConversationContainer = styled.div<IContainerReject>`
  width: ${({ conversationStartError }) =>
    conversationStartError ? '420px' : '400px'};
  height: 280px;
  background-color: ${({ theme }) => theme && theme.Colors.grays[10]};
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 16px;
  & > :nth-child(3) {
    width: 100%;
    display: flex;
    justify-content: center;
    & > button {
      width: 154px;
      background-color: ${({ theme }) => theme.Colors.orange[2]};
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const StyledInformationRejectContact = styled.div<IContainerReject>`
  align-items: center;
  width: 318px;
  height: fit-content;
  margin: auto;
  padding-top: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  & span {
    width: ${({ conversationStartError }) =>
      conversationStartError ? '340px' : '318px'};
    height: 38px;
    color: ${({ theme }) => theme.Colors.grays[6]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 16px;
    margin-bottom: 31px;
  }
  & > :first-child {
    width: 318px;
    height: ${({ conversationStartError }) =>
      conversationStartError ? '48px' : '38px'};
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[16]};
    line-height: 19px;
    margin-bottom: 16px;
  }
`;
