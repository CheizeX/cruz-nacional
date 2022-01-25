import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { StyledCardEmpty } from './CardEmpty.styled';

export const CardEmpty: FC = () => {
  return (
    <StyledCardEmpty>
      <div>
        <div>
          <SVGIcon iconFile="/icons/bars-graphic.svg" />
        </div>
        <div>
          <SVGIcon iconFile="/icons/times.svg" />
        </div>
      </div>
      <Text>Aún no hay ningun chat finalizado.</Text>
    </StyledCardEmpty>
  );
};
