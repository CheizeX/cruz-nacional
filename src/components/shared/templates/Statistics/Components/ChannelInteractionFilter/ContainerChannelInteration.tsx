import { FC, useState } from 'react';
import { Radio } from '../../../../atoms/RadioButton/RadioButton';
import { Text } from '../../../../atoms/Text/Text';
import { WrapperContainerChannelInteraction } from './ChannelInteractionFilter.styled';
import {
  DataChannels,
  IChannelInteraction,
} from './ChannelInteraction.interface';

export const ContainerChannelInteraction: FC<IChannelInteraction> = ({
  setFilterChannel,
}) => {
  const [radioCheck, setRadioCheck] = useState<string>('');
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.target;
    setRadioCheck(targetValue);
  };
  const handleToggle = (name: string, arg: string) => {
    setRadioCheck(name);
    setFilterChannel(arg);
  };

  return (
    <WrapperContainerChannelInteraction>
      <div>
        <Text>Filtrar por canal:</Text>
      </div>
      <div>
        <button type="button" onClick={() => handleToggle('', '')}>
          <Radio
            value=""
            name="radio"
            id="radio"
            checked={radioCheck}
            onChange={(event) => handleRadioChange(event)}
          />
          <Text>Todos</Text>
        </button>
        {DataChannels.map((channel) => (
          <button
            type="button"
            key={channel.id}
            onClick={() => handleToggle(channel.name, channel.channel)}>
            <Radio
              value={channel.name}
              name="radio"
              id="radio"
              checked={radioCheck}
              onChange={(event) => handleRadioChange(event)}
            />
            <Text>{channel.name}</Text>
          </button>
        ))}
      </div>
    </WrapperContainerChannelInteraction>
  );
};
