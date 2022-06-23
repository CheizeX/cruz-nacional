import { FC } from 'react';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { WrapperFilterByDay } from './FilterByDay.styled';
import { SingleDatepicker } from '../../../../organisms/Datepicker/SingleDatepicker';
import { IFilterDay } from './FilterByDay.interface';
import { ButtonMolecule, ButtonState } from '../../../../atoms/Button/Button';

export const FilterByDay: FC<IFilterDay> = ({
  onChangeDate,
  handleStatisticsByDay,
  isLoandingDay,
  graphFilterDay,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const handleToggle = async () => {
    handleStatisticsByDay();
    setIsComponentVisible(false);
  };

  return (
    <WrapperFilterByDay>
      <button type="button" onClick={handleClick}>
        <BadgeMolecule
          rightIcon={() =>
            isComponentVisible ? (
              <SVGIcon iconFile="/icons/chevron-square-down.svg" />
            ) : (
              <SVGIcon iconFile="/icons/chevron-square-up.svg" />
            )
          }>
          <Text>
            {!graphFilterDay ? 'Dia' : graphFilterDay?.toLocaleDateString()}
          </Text>
        </BadgeMolecule>
      </button>
      {isComponentVisible && (
        <div ref={ref}>
          <SingleDatepicker
            minDate={undefined}
            maxDate={new Date()}
            onChange={onChangeDate}
          />
          <ButtonMolecule
            text="Filtrar"
            onClick={handleToggle}
            state={isLoandingDay ? ButtonState.LOADING : ButtonState.NORMAL}
          />
        </div>
      )}
    </WrapperFilterByDay>
  );
};
