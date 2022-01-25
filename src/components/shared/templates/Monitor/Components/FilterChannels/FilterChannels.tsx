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
    icon: 'Messenger',
  },
  {
    id: 33,
    name: 'Instagram',
    icon: 'Instagram',
  },
  {
    id: 44,
    name: 'Chat web',
    icon: 'WebChat',
  },
  // {
  //   id: 4,
  //   name: 'Telegram',
  //   icon: 'Telegram',
  // },
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
          <SVGIcon iconFile={`/icons/${icon}.svg`} />
          <Text color="black">{name}</Text>
        </StyledWrapperChecked>
      ))}
    </>
  );
};
