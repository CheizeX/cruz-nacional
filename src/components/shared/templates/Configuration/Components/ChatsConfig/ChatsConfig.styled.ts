import styled from 'styled-components';

export const StyledChatsConfigSection = styled.section`
  width: 1060px;
  min-height: 615px;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: auto;
`;

export const HeaderChatConfig = styled.div`
  min-width: 1060px;
  width: 100%;
  max-height: 656px;
  & > div {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    & > button {
      width: 200px;
      margin-bottom: 10px;
      border-radius: 2px;
      border-top-left-radius: 7px;
      border-top-right-radius: 18px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    }
  }
`;
