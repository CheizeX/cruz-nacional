import { FC } from 'react';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { DataChannel } from '../../../Monitor/Components/FilterChannels/FilterChannels';
import {
  StyledWrapperCheckedChannel,
  StyledSearchByChannel,
} from './SearchByChannel.styled';
import { ISearchByChannel } from './SearchByChannel.interface';

export const SearchByChannel: FC<ISearchByChannel> = ({
  filterChannel,
  filterByChannel,
}) => {
  return (
    <StyledSearchByChannel>
      {DataChannel?.map(({ id, name, icon }) => (
        <StyledWrapperCheckedChannel
          checked={filterChannel.indexOf(id) !== -1}
          key={id}>
          <Checkbox
            checked={filterChannel.indexOf(id) !== -1}
            onClick={() => filterByChannel(id)}
          />
          <SVGIcon iconFile={`/icons/${icon.toLocaleLowerCase()}.svg`} />
          <Text color="black">{name}</Text>
        </StyledWrapperCheckedChannel>
      ))}
    </StyledSearchByChannel>
  );
};
