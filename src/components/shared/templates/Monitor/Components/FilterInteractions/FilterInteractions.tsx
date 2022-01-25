import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Tabs } from '../../../../organisms/Tabs/Tabs';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
} from '../../../../atoms/Button/Button';
import { FilterState } from '../FilterState/FilterState';
import { FilterByAgent } from '../FilterByAgent/FilterByAgent';
import {
  WrapperFilterInteractions,
  StyledFilterInteraction,
  StyledFilterInteractionHeader,
  StyledFilterInteractionBody,
  StyledFilterInteractionFooter,
} from './FilterInteraction.styled';
import { FilterChannels } from '../FilterChannels/FilterChannels';
import { IFilterStatus } from './FilterInteractions.interface';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';

export const FilterInteractions: FC<IFilterStatus> = ({
  onChange,
  dateAgent,
  filterStatus,
  filterAgents,
  filterChannels,
  statusAgent,
  byChannels,
  IDAgents,
  onHandleToggle,
  resetHandle,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleReset = () => {
    const longStatus = statusAgent.length;
    const longAgents = IDAgents.length;
    const longChannels = byChannels.length;
    statusAgent?.splice(0, longStatus);
    IDAgents?.splice(0, longAgents);
    byChannels?.splice(0, longChannels);
    setIsComponentVisible(false);
    resetHandle();
  };
  const handleToggle = () => {
    setIsComponentVisible(false);
    onHandleToggle();
  };

  return (
    <WrapperFilterInteractions>
      <button type="button" onClick={() => setIsComponentVisible(true)}>
        <SVGIcon iconFile="/icons/filter.svg" />
      </button>
      {isComponentVisible && (
        <StyledFilterInteraction ref={ref} onChange={onChange}>
          <StyledFilterInteractionHeader>
            <Text color="black"> Filtrar Interacciones por:</Text>
            <button type="button" onClick={() => setIsComponentVisible(false)}>
              <SVGIcon iconFile="/icons/times.svg" />
            </button>
          </StyledFilterInteractionHeader>
          <StyledFilterInteractionBody>
            <Tabs>
              <div title="Estado">
                <FilterState
                  statusAgent={statusAgent}
                  handleFilterStatus={filterStatus}
                />
              </div>
              <div title="Agente">
                <FilterByAgent
                  onChange={onChange}
                  dateAgent={dateAgent ?? []}
                  handleFilterAgents={filterAgents}
                  byAgents={IDAgents}
                />
              </div>
              <div title="Canal">
                <FilterChannels
                  handleFilterChannels={filterChannels}
                  channel={byChannels}
                />
              </div>
            </Tabs>
          </StyledFilterInteractionBody>
          <StyledFilterInteractionFooter>
            <ButtonMolecule
              text="Limpiar"
              size={Size.MEDIUM}
              variant={ButtonVariant.OUTLINED}
              onClick={handleReset}
            />
            <ButtonMolecule
              text="Filtrar"
              size={Size.MEDIUM}
              onClick={handleToggle}
            />
          </StyledFilterInteractionFooter>
        </StyledFilterInteraction>
      )}
    </WrapperFilterInteractions>
  );
};
