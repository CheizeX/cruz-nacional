import { FC } from 'react';
import { StyledWrapperChecked } from './FilterChannels.styled';
import { FilterChannel, FilterChannelsProps } from './FilterChannels.interface';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Channels } from '../../../../../../models/chat/chat';

export const DataChannel = [
  {
    id: 11,
    name: 'WhatsApp',
    idChannel: Channels.WHATSAPP,
    icon: 'whatsapp',
  },
  {
    id: 22,
    name: 'Messenger',
    idChannel: Channels.MESSENGER,
    icon: 'messenger',
  },
  {
    id: 33,
    name: 'Instagram',
    idChannel: Channels.INSTAGRAM,
    icon: 'instagram',
  },
  {
    id: 44,
    name: 'WebChat',
    idChannel: Channels.WEBCHAT,
    icon: 'webchat',
  },
];

export const FilterChannels: FC<FilterChannelsProps & FilterChannel> = ({
  handleFilterChannels,
  channel,
}) => {
  return (
    <>
      {DataChannel?.map(({ id, name, icon, idChannel }) => (
        <StyledWrapperChecked
          checked={channel.indexOf(idChannel) !== -1}
          key={id}>
          <Checkbox
            checked={channel.indexOf(idChannel) !== -1}
            onClick={() => handleFilterChannels(idChannel)}
          />
          <SVGIcon iconFile={`/icons/${icon.toLocaleLowerCase()}.svg`} />
          <Text color="black">{name}</Text>
        </StyledWrapperChecked>
      ))}
    </>
  );
};

// TODO = filtro que diferencia whatsapp oficial de whatsapp no oficial
