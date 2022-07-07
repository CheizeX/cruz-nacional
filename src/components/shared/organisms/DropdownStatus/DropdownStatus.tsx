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
import { useAppSelector } from '../../../../redux/hook/hooks';
import { StatusAgent } from '../../../../models/users/status';

export const DropdownStatus: FC<IPropsDropdownStatus> = ({
  handleClickStatus,
  statusChecked,
  activoCheck,
}) => {
  const { companyId } = useAppSelector(
    (state) => state.userAuthCredentials.userDataInState,
  );

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
      {isComponentVisible && companyId !== '62a3c8c92ca8cd7252a24155' && (
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
      )}
      {isComponentVisible && companyId === '62a3c8c92ca8cd7252a24155' && (
        <StyledAgentStatusDropdown ref={ref}>
          <WrapperChackedAgent
            position="one"
            onClick={() =>
              handleClickStatus('Disponible', 0, StatusAgent.AVAILABLE)
            }>
            <StyledButton focusCheck={activoCheck === 0}>
              <StyledRadio focusCheck={activoCheck === 0} />
            </StyledButton>
            <SVGIcon iconFile="/icons/play.svg" />
            <Text color="black">Disponible</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() => handleClickStatus('Almuerzo', 1, StatusAgent.LUNCH)}>
            <StyledButton focusCheck={activoCheck === 1}>
              <StyledRadio focusCheck={activoCheck === 1} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Almuerzo</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() => handleClickStatus('Break', 2, StatusAgent.BREAK)}>
            <StyledButton focusCheck={activoCheck === 2}>
              <StyledRadio focusCheck={activoCheck === 2} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Break</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="three"
            onClick={() => handleClickStatus('WC', 3, StatusAgent.BATHROOM)}>
            <StyledButton focusCheck={activoCheck === 3}>
              <StyledRadio focusCheck={activoCheck === 3} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">WC</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() =>
              handleClickStatus('Pausas Activas', 4, StatusAgent.PAUSES)
            }>
            <StyledButton focusCheck={activoCheck === 4}>
              <StyledRadio focusCheck={activoCheck === 4} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Pausas Activas</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() =>
              handleClickStatus(
                'Labores Administrativas',
                5,
                StatusAgent.ADMINISTRATIVE,
              )
            }>
            <StyledButton focusCheck={activoCheck === 5}>
              <StyledRadio focusCheck={activoCheck === 5} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Labores Administrativas</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() =>
              handleClickStatus('Fin de Jornada', 6, StatusAgent.END)
            }>
            <StyledButton focusCheck={activoCheck === 6}>
              <StyledRadio focusCheck={activoCheck === 6} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Fin de Jornada</Text>
          </WrapperChackedAgent>
        </StyledAgentStatusDropdown>
      )}
    </StyledDropdownStatus>
  );
};
