import { FC } from 'react';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { WrapperFilterByChannel } from './ChannelInteractionFilter.styled';
import { ContainerChannelInteraction } from './ContainerChannelInteration';
import { IChannelInteraction } from './ChannelInteraction.interface';

export const ChannelInteractionFilter: FC<IChannelInteraction> = ({
  setFilterChannel,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleClickChannel = () => {
    setIsComponentVisible(true);
  };

  return (
    <WrapperFilterByChannel onClick={handleClickChannel}>
      <button type="button">
        <BadgeMolecule
          rightIcon={() =>
            isComponentVisible ? (
              <SVGIcon iconFile="/icons/chevron-square-up.svg" />
            ) : (
              <SVGIcon iconFile="/icons/chevron-square-down.svg" />
            )
          }>
          <Text>Canal</Text>
        </BadgeMolecule>
      </button>
      {isComponentVisible && (
        <div ref={ref}>
          <ContainerChannelInteraction setFilterChannel={setFilterChannel} />
        </div>
      )}
    </WrapperFilterByChannel>
  );
};
