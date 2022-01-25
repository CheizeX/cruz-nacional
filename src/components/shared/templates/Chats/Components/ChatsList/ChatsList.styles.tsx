import styled from 'styled-components';

export const StyledChatsList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 0.625rem 0 0 0.625rem;
  max-width: 22rem;
  height: 41rem;
  width: 100%;
  border-right: 0.125rem solid ${({ theme }) => theme.Colors.grays[9]};
  padding-top: 0.9375rem;
  & > div {
    margin-bottom: 0rem;
    font-size: ${({ theme }) => theme.fontSize[12]};
    justify-content: space-evenly;
    padding: 0 0.625rem;
    & > button {
      max-width: 9.5rem;
      width: 9.5rem;
      height: 100%;
    }
  }
  & button {
    height: 100%;
  }
`;

export const StyledIndicatorOnConversation = styled.span`
  min-width: 0.625rem;
  height: 0.625rem;
  background-color: ${({ theme }) => theme.Colors.orange[2]};
  z-index: 1;
  position: absolute;
  right: 1.85rem;
  top: 2.25rem;
  border-radius: 50%;
`;

export const StyledIndicatorPendings = styled.span`
  min-width: 0.625rem;
  height: 0.625rem;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  z-index: 1;
  position: absolute;
  left: 1.9375rem;
  top: 2.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[10]};
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.orange[2]};
  background-color: ${({ theme }) => theme.Colors.orange[2]};
`;

export const StyledIndicatorPaused = styled.span`
  font-weight: 900;
  min-width: 0.7rem;
  height: 0.7rem;
  z-index: 1;
  position: absolute;
  right: 150px;
  top: 2.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6px;
  color: ${({ theme }) => theme.Colors.grays[9]};
  background-color: ${({ theme }) => theme.Colors.green[1]};
`;

export const StyledPendings = styled.div`
  height: fit-content;
  min-height: 35rem;
  width: 100%;
  border-top: 0.125rem solid ${({ theme }) => theme.Colors.grays[9]};
  border-bottom-left-radius: 0.625rem;
`;

export const StyledInConversation = styled.div`
  height: fit-content;
  min-height: 35rem;
  width: 100%;
  border-top: 0.125rem solid ${({ theme }) => theme.Colors.grays[9]};
  border-bottom-left-radius: 0.625rem;
`;

export const StyledPendingsRender = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledInConversationRender = styled.div`
  width: 100%;
  height: 100%;
`;
