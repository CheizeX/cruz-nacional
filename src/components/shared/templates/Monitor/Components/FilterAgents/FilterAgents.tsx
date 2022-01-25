import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Tabs } from '../../../../organisms/Tabs/Tabs';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
} from '../../../../atoms/Button/Button';
import { FilterAgentsState } from '../FilterAgentsState.tsx/FilterAgentsState';
import {
  StyledFilterAgents,
  StyledFilterAgentsHeader,
  StyledFilterAgentsBody,
  StyledFilterAgentsFooter,
} from './FilterAgents.styled';
import { IFilterAgentsProps, IFilterContainer } from './FilterAgent.interface';
import { FilterAgentsAvailable } from '../FilterByAgentsAvailable/FilterByAgentsAvailable';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';

export const FilterAgents: FC<IFilterAgentsProps & IFilterContainer> = ({
  onChange,
  dateAgent,
  stateByAgent,
  byAgentAvailable,
  filterByAgents,
  filterByState,
  handleChange,
  handleClear,
  handleStateAgents,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleOnReset = () => {
    const longByAgent = byAgentAvailable.length;
    const longState = stateByAgent.length;
    byAgentAvailable.splice(0, longByAgent);
    stateByAgent.splice(0, longState);
    setIsComponentVisible(false);
    handleClear();
  };
  const handleClickAgent = () => {
    setIsComponentVisible(false);
    handleStateAgents();
  };
  const handleClickState = () => {
    setIsComponentVisible(false);
    handleChange();
  };
  return (
    <>
      <button type="button" onClick={() => setIsComponentVisible(true)}>
        <SVGIcon iconFile="/icons/filter.svg" />
      </button>
      {isComponentVisible && (
        <StyledFilterAgents ref={ref}>
          <StyledFilterAgentsHeader>
            <Text color="black"> Filtrar agentes por:</Text>
            <button type="button" onClick={() => setIsComponentVisible(false)}>
              <SVGIcon iconFile="/icons/times.svg" />
            </button>
          </StyledFilterAgentsHeader>
          <StyledFilterAgentsBody>
            <Tabs largeTabs>
              <div title="Estado">
                <div>
                  <FilterAgentsState
                    stateByAgent={stateByAgent}
                    filterByState={filterByState}
                  />
                </div>
                <StyledFilterAgentsFooter>
                  <ButtonMolecule
                    text="Limpiar"
                    size={Size.MEDIUM}
                    variant={ButtonVariant.OUTLINED}
                    onClick={handleOnReset}
                  />
                  <ButtonMolecule
                    text="Filtrar"
                    size={Size.MEDIUM}
                    onClick={handleClickState}
                  />
                </StyledFilterAgentsFooter>
              </div>
              <div title="Agente">
                <div>
                  <FilterAgentsAvailable
                    onChange={onChange}
                    dateAgent={dateAgent ?? []}
                    handleFilterAgents={filterByAgents}
                    byAgents={byAgentAvailable}
                  />
                </div>
                <StyledFilterAgentsFooter>
                  <ButtonMolecule
                    text="Limpiar"
                    size={Size.MEDIUM}
                    variant={ButtonVariant.OUTLINED}
                    onClick={handleOnReset}
                  />
                  <ButtonMolecule
                    text="Filtrar"
                    size={Size.MEDIUM}
                    onClick={handleClickAgent}
                  />
                </StyledFilterAgentsFooter>
              </div>
            </Tabs>
          </StyledFilterAgentsBody>
        </StyledFilterAgents>
      )}
    </>
  );
};
