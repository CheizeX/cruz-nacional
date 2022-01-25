import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledBadgeChatTransfer,
  StyledContainerTagAgents,
} from './AgentToTransfer.styled';
import { IAgentToTransferProps } from './AgentToTransfer.interface';
import { ContainerWithOutTags } from '../../../../molecules/ContainerWithOutTags/ContainerWithOutTags';

export const AgentToTransfer: FC<IAgentToTransferProps> = ({
  name,
  isPause,
  isTransfer,
  isAverages,
  tag,
  isConversation,
}) => {
  return (
    <>
      <span>
        <SVGIcon iconFile="/icons/unknown_user.svg" />
      </span>
      <Text>{name}</Text>
      <StyledBadgeChatTransfer>
        <BadgeMolecule
          bgColor="#3AA4FF"
          rightIcon={() => <SVGIcon iconFile="/icons/small_message.svg" />}>
          <Text>{isConversation}</Text>
        </BadgeMolecule>
        <BadgeMolecule
          bgColor="#24C3A7"
          rightIcon={() => <SVGIcon iconFile="/icons/pause.svg" />}>
          <Text>{isPause}</Text>
        </BadgeMolecule>
        <BadgeMolecule
          bgColor="#B2B2B2"
          rightIcon={() => <SVGIcon iconFile="/icons/exchange_alt.svg" />}>
          <Text>{isTransfer}</Text>
        </BadgeMolecule>
      </StyledBadgeChatTransfer>
      <BadgeMolecule
        bgColor="#8769FF"
        leftIcon={() => <SVGIcon iconFile="/icons/icon_watch.svg" />}>
        <Text>{isAverages} min.</Text>
      </BadgeMolecule>
      <Text>Etiquetas</Text>
      <div>
        {tag && tag.length < 1 ? (
          <ContainerWithOutTags firstName={name} />
        ) : (
          tag?.map((element, index) => (
            <StyledContainerTagAgents
              isAverages={isAverages}
              key={index.toString()}
              color={element.color}>
              {element.name}
            </StyledContainerTagAgents>
          ))
        )}
      </div>
    </>
  );
};
