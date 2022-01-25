import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { StyledMainView } from './NoChatSearch.styled';

export const NoChatSearch: FC = () => {
  return (
    <StyledMainView>
      <div>
        <SVGIcon iconFile="/icons/search-solid.svg" />
        <div>
          <SVGIcon iconFile="/icons/times.svg" />
        </div>
      </div>
      <Text>Aún no has realizado ninguna búsqueda de chats</Text>
    </StyledMainView>
  );
};
