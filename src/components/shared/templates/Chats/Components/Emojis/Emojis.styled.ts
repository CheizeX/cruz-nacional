import styled from 'styled-components';
import { Emojis } from '../../ChatsSection/ChatsSection.interface';

export const StyledEmojisContainer = styled.div<Emojis>`
  // set visibility hidden when emojisDisplayed === true
  visibility: ${({ emojisDisplayed }) =>
    emojisDisplayed ? 'visible' : 'hidden'};

  position: absolute;
  width: 228px;
  height: 150px;
  bottom: 60px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  & button {
    margin: 5px;
    border-radius: 5px;
    height: 25px;
    width: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      cursor: pointer;
    }
    &:active {
      background-color: ${({ theme }) => theme.Colors.purples[2]};
    }
    & span {
      padding-left: 1px;
      padding-top: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
`;
