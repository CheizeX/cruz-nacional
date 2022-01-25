import { FC } from 'react';
import {
  StyledFIlterByPeriod,
  StyledHeader,
  StyledCalendarContainer,
  StyledFooter,
} from './FilterByPeriod.styled';
import { IPropsByPeriod } from './FilterByPeriod.interface';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { RangeDatepicker } from '../../../../organisms/Datepicker/RangeDatepicker';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { IPropsAgents } from '../Agents/Agents.interface';
import { useAppDispatch } from '../../../../../../redux/hook/hooks';
import {
  getChatsByPeriod,
  setNameOfSelectedDateToFilter,
} from '../../../../../../redux/slices/dashboard/dashboard-chats-filter';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { readReviewChats } from '../../../../../../api/chat';
import {
  setReviewChatsFinished,
  setReviewDatePicker,
} from '../../../../../../redux/slices/dashboard/dashboard-review';

export const FIlterByPeriod: FC<IPropsByPeriod & IPropsAgents> = ({
  setDatePicker,
  datePicker,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  selectedComponent,
  setIsComponentVisible,
}) => {
  const toasts = useToastContext();
  const dispatch = useAppDispatch();
  const onChange = ({
    startDate: newStartDate,
    endDate: newEndDate,
  }: {
    startDate: Date | null;
    endDate: Date | null;
  }) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  const handleFiltrarButton = async () => {
    if (startDate && endDate) {
      if (selectedComponent === 'AGENT') {
        dispatch(
          getChatsByPeriod(
            `${startDate?.toISOString()}/${endDate?.toISOString()}`,
          ),
        );
        dispatch(
          setNameOfSelectedDateToFilter(
            `Desde el ( ${startDate?.toLocaleDateString()} ) hasta el ( ${endDate?.toLocaleDateString()} )`,
          ),
        );
        setIsComponentVisible(false);
      } else {
        try {
          const currentDts = await readReviewChats(
            startDate?.toISOString(),
            endDate?.toISOString(),
          );
          if (currentDts.success === false) {
            dispatch(setReviewChatsFinished([]));
          } else {
            dispatch(
              setReviewDatePicker(
                `Desde el (${startDate?.toLocaleDateString()}) hasta el (${endDate?.toLocaleDateString()})`,
              ),
            );
            dispatch(setReviewChatsFinished(currentDts));
          }
          setIsComponentVisible(false);
        } catch (err) {
          toasts?.addToast({
            alert: Toast.ERROR,
            title: 'ERROR',
            message: `${err}`,
          });
        }
      }
    } else {
      toasts?.addToast({
        alert: Toast.WARNING,
        title: `ATENCION`,
        message:
          'Si desea buscar por período, debe seleccionar fecha de inicio y de fin',
      });
    }
  };

  const handleLimpiarButton = () => {
    if (startDate && endDate) {
      if (datePicker === 1) {
        setDatePicker(2);
      }
      if (datePicker === 2) {
        setDatePicker(1);
      }
    } else {
      toasts?.addToast({
        alert: Toast.WARNING,
        title: `ATENCION`,
        message:
          'Los selectores de búsqueda por período ya se encuentran limpios',
      });
    }
  };

  const handleOnClose = () => {
    setIsComponentVisible(false);
  };

  return (
    <StyledFIlterByPeriod>
      <StyledHeader>
        <span>
          <button type="button" onClick={() => setDatePicker(0)}>
            <SVGIcon iconFile="/icons/collapse-left.svg" />
          </button>
          <Text>Filtrar por rango de fecha:</Text>
        </span>
        <button type="button" onClick={handleOnClose}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledHeader>
      <StyledCalendarContainer>
        <RangeDatepicker onChange={onChange} />
      </StyledCalendarContainer>
      <StyledFooter>
        <ButtonMolecule
          onClick={handleLimpiarButton}
          variant={ButtonVariant.OUTLINED}
          text="Limpiar"
          size={Size.MEDIUM}
        />
        <ButtonMolecule
          onClick={handleFiltrarButton}
          text="Filtrar"
          size={Size.MEDIUM}
        />
      </StyledFooter>
    </StyledFIlterByPeriod>
  );
};
