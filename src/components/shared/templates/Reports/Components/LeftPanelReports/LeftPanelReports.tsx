import { FC, useState, useCallback, MouseEventHandler } from 'react';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { DateRange } from '../DateRange/DateRange';
import { SearchByAsignation } from '../SearchByAsignation/SearchByAsignation';
import { SearchByChannel } from '../SearchByChannel/SearchByChannel';
import { SearchByState } from '../SearchByState/SearchByState';
import { ILeftPanel, IPropsLeftPanel, IType } from './LeftPanel.interface';
import {
  StyledLeftPanel,
  StyledHeaderPanel,
  StyledLeftBody,
  StyledLeftFooter,
  StyledChatBot,
  StyledFocused,
  StyledCount,
} from './LeftPanel.styled';

export const LeftPanelReports: FC<ILeftPanel & IPropsLeftPanel> = ({
  types,
  setTypes,
  filterState,
  filterByState,
  filterChannel,
  filterByChannel,
  filtersAsignation,
  filterByAsignation,
  dateStart,
  dateEnd,
  onChangeStart,
  onChangeEnd,
  handleToggle,
  handleReset,
  onClick = () => {},
}) => {
  const [openChannel, setOpenChannel] = useState<boolean>(false);
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [openState, setOpenState] = useState<boolean>(false);
  const [openSearchByAsignation, setOpenSearchByAsignation] =
    useState<boolean>(false);

  const handleClickChannel = useCallback<MouseEventHandler>(
    (event) => {
      onClick(event);
      if (openChannel !== true) {
        setOpenState(false);
        setOpenSearchByAsignation(false);
        setOpenDate(false);
      }
      setOpenChannel((currentVisibility) => !currentVisibility);
    },
    [onClick],
  );
  const handleClickDate = useCallback<MouseEventHandler>(
    (event) => {
      onClick(event);
      if (openDate !== true) {
        setOpenChannel(false);
        setOpenSearchByAsignation(false);
        setOpenState(false);
      }
      setOpenDate((currentDate) => !currentDate);
    },
    [onClick],
  );
  const handleClickState = useCallback<MouseEventHandler>(
    (event) => {
      onClick(event);
      if (openState !== true) {
        setOpenChannel(false);
        setOpenSearchByAsignation(false);
        setOpenDate(false);
      }
      setOpenState((currentState) => !currentState);
    },
    [onClick],
  );
  const handleClickAsignation = useCallback<MouseEventHandler>(
    (event) => {
      onClick(event);
      if (openSearchByAsignation !== true) {
        setOpenChannel(false);
        setOpenState(false);
        setOpenDate(false);
      }
      setOpenSearchByAsignation((currentAsignation) => !currentAsignation);
    },
    [onClick],
  );
  return (
    <StyledLeftPanel>
      <StyledHeaderPanel>
        <Text>Buscar Chats por:</Text>
      </StyledHeaderPanel>
      <StyledLeftBody types={types}>
        <div>
          <StyledChatBot types={types}>
            <button type="button" onClick={() => setTypes(IType.TODOS)}>
              Todos
            </button>
            <button type="button" onClick={() => setTypes(IType.AGENTS)}>
              {' '}
              Agentes
            </button>
            <button type="button" onClick={() => setTypes(IType.CHATBOT)}>
              ChatBot
            </button>
          </StyledChatBot>
        </div>
        <StyledFocused focused={openDate} types={types}>
          <button type="button" onClick={handleClickDate}>
            <div>
              <Text>Rango de fecha </Text>
            </div>
            {openDate ? (
              <SVGIcon iconFile="/icons/chevron-square-up.svg" />
            ) : (
              <SVGIcon iconFile="/icons/chevron-square-down.svg" />
            )}
          </button>
          <div>
            {openDate ? (
              <DateRange
                dateStart={dateStart}
                dateEnd={dateEnd}
                onChangeStart={onChangeStart}
                onChangeEnd={onChangeEnd}
              />
            ) : null}
          </div>
        </StyledFocused>
        <StyledFocused focused={openChannel} types={types}>
          <button type="button" onClick={handleClickChannel}>
            <div>
              <Text>Canal</Text>
              {filterChannel.length > 0 ? (
                <StyledCount>{filterChannel.length}</StyledCount>
              ) : null}
            </div>
            {openChannel ? (
              <SVGIcon iconFile="/icons/chevron-square-up.svg" />
            ) : (
              <SVGIcon iconFile="/icons/chevron-square-down.svg" />
            )}
          </button>
          <div>
            {openChannel ? (
              <SearchByChannel
                filterChannel={filterChannel}
                filterByChannel={filterByChannel}
              />
            ) : null}
          </div>
        </StyledFocused>
        <StyledFocused focused={openState} types={types}>
          <button
            type="button"
            disabled={types === IType.CHATBOT}
            onClick={handleClickState}>
            <div>
              <Text>Estado</Text>
              {filterState.length > 0 ? (
                <StyledCount>{filterState.length}</StyledCount>
              ) : (
                ''
              )}
            </div>
            {openState ? (
              <SVGIcon iconFile="/icons/chevron-square-up.svg" />
            ) : (
              <SVGIcon iconFile="/icons/chevron-square-down.svg" />
            )}
          </button>
          <div>
            {openState ? (
              <SearchByState
                filterState={filterState}
                filterByState={filterByState}
              />
            ) : null}
          </div>
        </StyledFocused>
        <StyledFocused focused={openSearchByAsignation} types={types}>
          <button
            type="button"
            disabled={types === IType.CHATBOT}
            onClick={handleClickAsignation}>
            <div>
              <Text>Asignación</Text>
              {filtersAsignation.length > 0 ? (
                <StyledCount>{filtersAsignation.length}</StyledCount>
              ) : null}
            </div>
            {openSearchByAsignation ? (
              <SVGIcon iconFile="/icons/chevron-square-up.svg" />
            ) : (
              <SVGIcon iconFile="/icons/chevron-square-down.svg" />
            )}
          </button>
          <div>
            {openSearchByAsignation ? (
              <SearchByAsignation
                filtersAsignation={filtersAsignation}
                filterByAsignation={filterByAsignation}
              />
            ) : null}
          </div>
        </StyledFocused>
      </StyledLeftBody>
      <StyledLeftFooter>
        <ButtonMolecule
          text="Limpiar"
          onClick={handleReset}
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
        />
        <ButtonMolecule
          size={Size.MEDIUM}
          text="Buscar"
          onClick={handleToggle}
          state={
            !dateStart || !dateEnd ? ButtonState.DISABLED : ButtonState.NORMAL
          }
        />
      </StyledLeftFooter>
    </StyledLeftPanel>
  );
};
