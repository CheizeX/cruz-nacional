import { FC } from 'react';
import { StyledWrapperChecked } from './FilterChannels.styled';
import { FilterChannel, FilterChannelsProps } from './FilterChannels.interface';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';

export const Channels = [
  {
    id: 11,
    name: 'WhatsApp',
    icon: 'whatsapp',
  },
  {
    id: 22,
    name: 'Messenger',
    icon: 'messenger',
  },
  {
    id: 33,
    name: 'Instagram',
    icon: 'instagram',
  },
  {
    id: 44,
    name: 'Chat web',
    icon: 'webchat',
  },
];

export const FilterChannels: FC<FilterChannelsProps & FilterChannel> = ({
  handleFilterChannels,
  channel,
}) => {
  return (
    <>
      {Channels?.map(({ id, name, icon }) => (
        <StyledWrapperChecked checked={channel.indexOf(id) !== -1} key={id}>
          <Checkbox
            checked={channel.indexOf(id) !== -1}
            onClick={() => handleFilterChannels(id)}
          />
          <SVGIcon iconFile={`/icons/${icon.toLocaleLowerCase()}.svg`} />
          <Text color="black">{name}</Text>
        </StyledWrapperChecked>
      ))}
    </>
  );
};
