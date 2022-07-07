import { FC, useState } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import { DropdownFilterByDate } from './FilterByDate.styled';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ContainerFilter } from './ContainerFilter';
import { IFilterDay, IRagerDate } from './FilterByDate.interface';
import { ContainerCustomRanger } from './ContainerCustomRange';

export const FilterByDate: FC<IFilterDay> = ({
  handleClickFilterByInteraction,
  setCustomRange,
  setDay,
  loandingChart,
  customRange,
  day,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);
  const [customRangeText, setCustomRangeText] = useState<string>('');
  const [seletedComponent, setSeletedComponent] = useState<number>(1);

  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  // DATE OF THE LIST OF USERS
  const dateRange: IRagerDate = {
    today: 'Hoy',
    yesterday: 'Ayer',
    currentWeek: 'Esta Semana',
    currentMonth: 'Este Mes',
    lastMonth: 'Mes Anterior',
  };

  return (
    <DropdownFilterByDate>
      <button type="button" onClick={handleClick}>
        <BadgeMolecule
          leftIcon={() => <SVGIcon iconFile="/icons/candelar_alt.svg" />}
          rightIcon={() =>
            isComponentVisible ? (
              <SVGIcon iconFile="/icons/chevron-square-up.svg" />
            ) : (
              <SVGIcon iconFile="/icons/chevron-square-down.svg" />
            )
          }>
          <Text>
            {customRangeText === 'RangeCustom' &&
            customRange.startDate &&
            customRange.endDate
              ? `(${customRange?.startDate?.toLocaleDateString()})/(${customRange?.endDate?.toLocaleDateString()})`
              : dateRange[day]}
          </Text>
        </BadgeMolecule>
      </button>
      {isComponentVisible && (
        <div ref={ref}>
          {!customRange.isCustomRange ? (
            <ContainerFilter
              setDay={setDay}
              day={day}
              setCustomRange={setCustomRange}
              setIsComponentVisible={setIsComponentVisible}
              setCustomRangeText={setCustomRangeText}
              customRangeText={customRangeText}
            />
          ) : (
            <>
              {seletedComponent === 1 && (
                <ContainerCustomRanger
                  setCustomRange={setCustomRange}
                  setIsComponentVisible={setIsComponentVisible}
                  loandingChart={loandingChart}
                  handleClickFilterByInteraction={
                    handleClickFilterByInteraction
                  }
                  seletedComponent={seletedComponent}
                  setSeletedComponent={setSeletedComponent}
                />
              )}
              {seletedComponent === 2 && (
                <ContainerCustomRanger
                  setCustomRange={setCustomRange}
                  setIsComponentVisible={setIsComponentVisible}
                  loandingChart={loandingChart}
                  handleClickFilterByInteraction={
                    handleClickFilterByInteraction
                  }
                  seletedComponent={seletedComponent}
                  setSeletedComponent={setSeletedComponent}
                />
              )}
            </>
          )}
        </div>
      )}
    </DropdownFilterByDate>
  );
};
