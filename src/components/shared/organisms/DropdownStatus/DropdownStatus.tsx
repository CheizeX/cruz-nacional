import { FC } from 'react';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../atoms/Text/Text';
import {
  StyledDropdownStatus,
  StyledAgentStatusDropdown,
  WrapperChackedAgent,
  StyledButton,
  StyledRadio,
} from './DropdownStatus.styled';
import { IPropsDropdownStatus } from './DropdownStatus.interface';
import useDisplayElementOrNot from '../../../../hooks/use-display-element-or-not';

export const DropdownStatus: FC<IPropsDropdownStatus> = ({
  handleClickStatus,
  statusChecked,
  activoCheck,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleToggle = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <StyledDropdownStatus statusChecked={statusChecked}>
      <button type="button" onClick={handleToggle}>
        <Text>{statusChecked}</Text>
        {isComponentVisible ? (
          <SVGIcon iconFile="/icons/chevron-square-up.svg" />
        ) : (
          <SVGIcon iconFile="/icons/chevron-square-down.svg" />
        )}
      </button>
      {isComponentVisible ? (
        <StyledAgentStatusDropdown ref={ref}>
          <WrapperChackedAgent
            position="one"
            onClick={() => handleClickStatus('Disponible', 0, 'AVAILABLE')}>
            <StyledButton focusCheck={activoCheck === 0}>
              <StyledRadio focusCheck={activoCheck === 0} />
            </StyledButton>
            <SVGIcon iconFile="/icons/user_question.svg" />
            <Text color="black">Disponible</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() =>
              handleClickStatus('En Pausa - Almuerzo', 1, 'LUNCH')
            }>
            <StyledButton focusCheck={activoCheck === 1}>
              <StyledRadio focusCheck={activoCheck === 1} />
            </StyledButton>
            <SVGIcon iconFile="/icons/utensils.svg" />
            <Text color="black">En Pausa - Almuerzo</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="three"
            onClick={() => handleClickStatus('En Pausa - Baño', 2, 'BATHROOM')}>
            <StyledButton focusCheck={activoCheck === 2}>
              <StyledRadio focusCheck={activoCheck === 2} />
            </StyledButton>
            <SVGIcon iconFile="/icons/toile.svg" />
            <Text color="black">En Pausa - Baño</Text>
          </WrapperChackedAgent>
          {/* Se agrego una nueva opción de status  */}
          <WrapperChackedAgent
            position="two"
            onClick={() =>
              handleClickStatus('En Pausa - En llamado', 3, 'CALL')
            }>
            <StyledButton focusCheck={activoCheck === 3}>
              <StyledRadio focusCheck={activoCheck === 3} />
            </StyledButton>
            <SVGIcon iconFile="/icons/calling.svg" />
            <Text color="black">En Pausa - En llamada</Text>
          </WrapperChackedAgent>
        </StyledAgentStatusDropdown>
      ) : null}
    </StyledDropdownStatus>
  );
};
