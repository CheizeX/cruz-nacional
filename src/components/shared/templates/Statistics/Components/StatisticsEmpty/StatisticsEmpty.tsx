import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { StyledStatisticsEmpty } from './StatisticsEmpty.styled';

export const StatisticsEmpty: FC = () => {
  return (
    <StyledStatisticsEmpty>
      <div>
        <div>
          <SVGIcon iconFile="/icons/bars-graphic.svg" />
        </div>
        <div>
          <SVGIcon iconFile="/icons/times.svg" />
        </div>
      </div>
      <Text>No hay interacciones</Text>
    </StyledStatisticsEmpty>
  );
};
