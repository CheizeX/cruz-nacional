import styled from 'styled-components';

export const StyledPauseConversationModal = styled.div`
  width: 22rem;
  height: 21.375rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledPauseChatHeader = styled.div`
  width: 21.9375rem;
  height: 1.9375rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  justify-content: space-between;
  padding: 0 1.625rem;
  & > button {
    width: 0.625rem;
    height: 0.625rem;
    & > div {
      & * {
        & > svg {
          cursor: pointer;
          height: 0.8125rem;
          width: 0.8125rem;
          & > path {
            fill: ${({ theme }) => theme.Colors.grays[7]};
          }
        }
      }
    }
    &:hover {
      & > div {
        & * {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.Colors.grays[5]};
            }
          }
        }
      }
    }
  }
  & > span {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: ${({ theme }) => theme.fontWeight[600]};
    font-size: ${({ theme }) => theme.fontSize[14]};
    line-height: 1.0625rem;
  }
`;
export const StyledPausedChatBody = styled.div`
  width: 18.625rem;
  height: 15.1875rem;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > div {
    width: 1.875rem;
    height: 1.875rem;
    * {
      fill: ${({ theme }) => theme.Colors.purples[1]};
    }
  }
  & > :nth-child(2) {
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-weight: 600;
    font-size: 16px;
    line-height: 1.1875rem;
    text-align: center;
  }
  & > :nth-child(3) {
    color: ${({ theme }) => theme.Colors.grays[5]};
    font-weight: 400;
    font-size: 12.8px;

    text-align: center;
  }
`;

export const StyledPausedChatFooter = styled.div`
  width: 100%;
  height: 3.75rem;
  border-top: 0.0625rem solid ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & > button {
    width: 7.5rem;
    height: 2.1875rem;
  }
`;
