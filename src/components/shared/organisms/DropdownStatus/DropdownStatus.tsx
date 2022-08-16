/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable consistent-return */
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
}) => {
  const { companyId } = useAppSelector(
    (state) => state.userAuthCredentials.userDataInState,
  );

  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleToggle = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const statusDropdown = () => {
    if (companyId !== '62a3c8c92ca8cd7252a24155') {
      if (statusChecked === StatusAgent.AVAILABLE) {
        return 'Disponible';
      }
      if (statusChecked === StatusAgent.LUNCH) {
        return 'En Pausa - Almuerzo';
      }
      if (statusChecked === StatusAgent.BATHROOM) {
        return 'En Pausa - Baño';
      }
      if (statusChecked === StatusAgent.CALL) {
        return 'En Pausa - Llamado';
      }
    } else {
      if (statusChecked === StatusAgent.AVAILABLE) {
        return 'Disponible';
      }
      if (statusChecked === StatusAgent.LUNCH) {
        return 'Almuerzo';
      }
      if (statusChecked === StatusAgent.BREAK) {
        return 'Break';
      }
      if (statusChecked === StatusAgent.BATHROOM) {
        return 'WC';
      }
      if (statusChecked === StatusAgent.PAUSES) {
        return 'Pausas Activas';
      }
      if (statusChecked === StatusAgent.ADMINISTRATIVE) {
        return 'Labores Administrativas';
      }
      if (statusChecked === StatusAgent.END) {
        return 'Fin de Jornada';
      }
    }
  };

  return (
    <StyledDropdownStatus statusChecked={statusChecked}>
      <button type="button" onClick={handleToggle}>
        <Text>{statusDropdown()}</Text>
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
            onClick={() => handleClickStatus(StatusAgent.AVAILABLE)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.AVAILABLE}>
              <StyledRadio
                focusCheck={statusChecked === StatusAgent.AVAILABLE}
              />
            </StyledButton>
            <SVGIcon iconFile="/icons/user_question.svg" />
            <Text color="black">Disponible</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() => handleClickStatus(StatusAgent.LUNCH)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.LUNCH}>
              <StyledRadio focusCheck={statusChecked === StatusAgent.LUNCH} />
            </StyledButton>
            <SVGIcon iconFile="/icons/utensils.svg" />
            <Text color="black">En Pausa - Almuerzo</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="three"
            onClick={() => handleClickStatus(StatusAgent.BATHROOM)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.BATHROOM}>
              <StyledRadio
                focusCheck={statusChecked === StatusAgent.BATHROOM}
              />
            </StyledButton>
            <SVGIcon iconFile="/icons/toile.svg" />
            <Text color="black">En Pausa - Baño</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() => handleClickStatus(StatusAgent.CALL)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.CALL}>
              <StyledRadio focusCheck={statusChecked === StatusAgent.CALL} />
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
            onClick={() => handleClickStatus(StatusAgent.AVAILABLE)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.AVAILABLE}>
              <StyledRadio
                focusCheck={statusChecked === StatusAgent.AVAILABLE}
              />
            </StyledButton>
            <SVGIcon iconFile="/icons/play.svg" />
            <Text color="black">Disponible</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() => handleClickStatus(StatusAgent.LUNCH)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.LUNCH}>
              <StyledRadio focusCheck={statusChecked === StatusAgent.LUNCH} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Almuerzo</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() => handleClickStatus(StatusAgent.BREAK)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.BREAK}>
              <StyledRadio focusCheck={statusChecked === StatusAgent.BREAK} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Break</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="three"
            onClick={() => handleClickStatus(StatusAgent.BATHROOM)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.BATHROOM}>
              <StyledRadio
                focusCheck={statusChecked === StatusAgent.BATHROOM}
              />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">WC</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() => handleClickStatus(StatusAgent.PAUSES)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.PAUSES}>
              <StyledRadio focusCheck={statusChecked === StatusAgent.PAUSES} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Pausas Activas</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() => handleClickStatus(StatusAgent.ADMINISTRATIVE)}>
            <StyledButton
              focusCheck={statusChecked === StatusAgent.ADMINISTRATIVE}>
              <StyledRadio
                focusCheck={statusChecked === StatusAgent.ADMINISTRATIVE}
              />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Labores Administrativas</Text>
          </WrapperChackedAgent>
          <WrapperChackedAgent
            position="two"
            onClick={() => handleClickStatus(StatusAgent.END)}>
            <StyledButton focusCheck={statusChecked === StatusAgent.END}>
              <StyledRadio focusCheck={statusChecked === StatusAgent.END} />
            </StyledButton>
            <SVGIcon iconFile="/icons/icon_watch.svg" />
            <Text color="black">Fin de Jornada</Text>
          </WrapperChackedAgent>
        </StyledAgentStatusDropdown>
      )}
    </StyledDropdownStatus>
  );
};
