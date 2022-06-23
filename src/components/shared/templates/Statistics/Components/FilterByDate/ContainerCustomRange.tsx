import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledHeaderCustomRange,
  StyledFooterCustomRange,
  StyledWrapperCustomRange,
  StyledBodyCustomRange,
} from './FilterByDate.styled';
import { RangeDatepicker } from '../../../../organisms/Datepicker/RangeDatepicker';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
  ButtonState,
} from '../../../../atoms/Button/Button';
import { ICustomRangeFilter } from './ContainerFilterByDay.interface';

export const ContainerCustomRanger: FC<ICustomRangeFilter> = ({
  handleClickFilterByInteraction,
  setIsComponentVisible,
  setSeletedComponent,
  seletedComponent,
  setCustomRange,
  loandingChart,
}) => {
  const onChange = ({
    startDate,
    endDate,
  }: {
    startDate: Date | null;
    endDate: Date | null;
  }) => {
    setCustomRange({
      isCustomRange: true,
      startDate,
      endDate,
    });
  };

  const handleToggleCustom = async () => {
    handleClickFilterByInteraction();
    setIsComponentVisible(false);
  };

  const handleResetCustom = () => {
    if (seletedComponent === 1) {
      setSeletedComponent(2);
    }
    if (seletedComponent === 2) {
      setSeletedComponent(1);
    }
  };
  return (
    <StyledWrapperCustomRange>
      <StyledHeaderCustomRange>
        <span>
          <button
            type="button"
            onClick={() =>
              setCustomRange({
                isCustomRange: false,
                startDate: null,
                endDate: null,
              })
            }>
            <SVGIcon iconFile="/icons/collapse-left.svg" />
          </button>
          <Text>Filtrar por rango de fecha:</Text>
        </span>
        <button type="button" onClick={() => setIsComponentVisible(false)}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledHeaderCustomRange>
      <StyledBodyCustomRange>
        <RangeDatepicker onChange={onChange} />
      </StyledBodyCustomRange>
      <StyledFooterCustomRange>
        <ButtonMolecule
          text="Limpiar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={handleResetCustom}
        />
        <ButtonMolecule
          text="Filtrar"
          size={Size.MEDIUM}
          state={loandingChart ? ButtonState.LOADING : ButtonState.NORMAL}
          onClick={handleToggleCustom}
        />
      </StyledFooterCustomRange>
    </StyledWrapperCustomRange>
  );
};
