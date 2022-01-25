import { FC } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledChatsView,
  StyledNotSelectedChats,
} from './ChatsViewNoSelected.styles';

export const ChatsViewNoSelected: FC = () => {
  return (
    <StyledChatsView>
      <StyledNotSelectedChats>
        <SVGIcon iconFile="/icons/handWithStars.svg" />
        <Text>¡Nuestros clientes cuentan contigo!</Text>
        <Text>Selecciona un chat para iniciar una nueva conversación.</Text>
        <Text>¡Buena suerte!</Text>
      </StyledNotSelectedChats>
    </StyledChatsView>
  );
};
