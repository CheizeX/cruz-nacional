import React from 'react';
import {
  StyledWrapper,
  WrapperReview,
  StyledLabelReview,
  StyledTabsHeadersReview,
  StyledContainerRadioReview,
  StyledRadioReview,
} from './FilterReviewDate.styled';
import { Text } from '../../../../atoms/Text/Text';
import {
  IPropsComponent,
  IPropsFilterReviewButton,
} from './FilterReviewDate.interface';
import { readReviewChats } from '../../../../../../api/chat';
import {
  setReviewChatsFinished,
  setReviewDatePicker,
} from '../../../../../../redux/slices/dashboard/dashboard-review';
import { useAppDispatch } from '../../../../../../redux/hook/hooks';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

export const FilterReviewDate = ({
  children,
  isActive,
  setIsActive,
  setChartDatePicker,
  setIsComponentVisible,
}: IPropsFilterReviewButton & IPropsComponent) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();

  const childrenList = React.Children.toArray(children);

  const tabs = childrenList.map((child, index) => {
    const title = (child as React.ReactElement).props.title ?? index.toString();

    const handleDatePicker = async (id: number) => {
      setIsActive(id);
      try {
        if (id === 0) {
          const currentDts = await readReviewChats('0', 'currentWeek');
          if (currentDts.success !== false) {
            dispatch(setReviewChatsFinished(currentDts));
            dispatch(setReviewDatePicker('Esta Semana'));
            setIsComponentVisible(false);
          }
        } else if (id === 1) {
          const currentMonth = await readReviewChats('0', 'currentMonth');
          if (currentMonth.success === false) {
            dispatch(setReviewChatsFinished([]));
          } else {
            dispatch(setReviewChatsFinished(currentMonth));
            dispatch(setReviewDatePicker('Este Mes'));
            setIsComponentVisible(false);
          }
        } else if (id === 2) {
          const lastMonth = await readReviewChats('0', 'lastMonth');
          dispatch(setReviewDatePicker('Mes Anterior'));
          dispatch(setReviewChatsFinished(lastMonth));
          setIsComponentVisible(false);
        } else {
          setChartDatePicker(1);
        }
      } catch (err) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `${err}`,
        });
      }
    };

    return (
      <WrapperReview key={index.toString()}>
        <StyledContainerRadioReview focusRadio={isActive === index}>
          <StyledRadioReview
            focusRadio={isActive === index}
            key={title + index.toString()}
            onClick={() => handleDatePicker(index)}
          />
        </StyledContainerRadioReview>
        <StyledLabelReview focusRadio={isActive === index}>
          <Text>{title}</Text>
        </StyledLabelReview>
      </WrapperReview>
    );
  });

  return (
    <StyledWrapper>
      <StyledTabsHeadersReview>{tabs}</StyledTabsHeadersReview>
    </StyledWrapper>
  );
};
