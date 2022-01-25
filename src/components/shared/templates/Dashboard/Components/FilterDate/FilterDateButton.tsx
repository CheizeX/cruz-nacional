import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { websocketContext } from '../../../../../../chat';
import { useAppDispatch } from '../../../../../../redux/hook/hooks';
import {
  getChatsByPeriod,
  setNameOfSelectedDateToFilter,
} from '../../../../../../redux/slices/dashboard/dashboard-chats-filter';
import { Text } from '../../../../atoms/Text/Text';

export interface PropsDateButton {
  children?: React.ReactNode;
  focusRadio?: boolean;
}
export interface PropsDate {
  setDatePicker: React.Dispatch<React.SetStateAction<number>>;
  datePicker?: number;
}

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const StyledTabsHeaders = styled.div<PropsDateButton>`
  display: flex;
  flex-direction: column;
  width: 215px;
  justify-content: space-around;
`;

export const StyledContainerRadio = styled.div<PropsDateButton>`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  outline: 2px solid ${({ theme }) => theme.Colors.grays[8]};
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  ${({ focusRadio }) =>
    focusRadio &&
    css<PropsDateButton>`
      outline: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    `}
`;

export const StyledRadio = styled.button<PropsDateButton>`
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 50%;
  margin: 0;
  padding: 0;
  width: 12px;
  height: 12px;
  display: flex;
  margin: auto;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  ${({ focusRadio }) =>
    focusRadio &&
    css<PropsDateButton>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;

const Wrapper = styled.div`
  display: flex;
  margin: 8px 21px;
`;

const StyledLabel = styled.div<PropsDateButton>`
  display: flex;
  div:first-child {
    width: 23px;
    display: flex;
    margin-right: 17px;
  }
  div:last-child {
    width: 23px;
    padding-top: 0px;
    display: flex;
    align-items: center;
    margin-right: 11px;
  }
  & span {
    padding-top: 3px;
    color: ${({ theme }) => theme.Colors.grays[1]};
    font-size: ${({ theme }) => theme.fontSize[12]};
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    line-height: ${({ theme }) => theme.fontSize[14]};
  }
`;

export const FilterButtonDate = ({
  children,
  setDatePicker,
}: PropsDateButton & PropsDate) => {
  const [active, setActive] = useState(0);

  const socket: any = React.useContext(websocketContext);
  const dispatch = useAppDispatch();

  const childrenList = React.Children.toArray(children);

  const getNewChatEvent = React.useCallback(async () => {
    await socket?.on('newChatEvent', () => {
      if (active === 0) {
        dispatch(getChatsByPeriod('0/today'));
        dispatch(setNameOfSelectedDateToFilter('Hoy'));
      }
      if (active === 1) {
        dispatch(getChatsByPeriod('0/yesterday'));
        dispatch(setNameOfSelectedDateToFilter('Ayer'));
      }
      if (active === 2) {
        dispatch(getChatsByPeriod('0/currentMonth'));
      }
      if (active === 3) {
        dispatch(getChatsByPeriod('0/lastMonth'));
      }
    });
  }, [socket]);

  useEffect(() => {
    if (active === 0) {
      dispatch(getChatsByPeriod('0/today'));
      dispatch(setNameOfSelectedDateToFilter('Hoy'));
    }
    if (active === 1) {
      dispatch(getChatsByPeriod('0/yesterday'));
      dispatch(setNameOfSelectedDateToFilter('Ayer'));
    }
    if (active === 2) {
      dispatch(getChatsByPeriod('0/currentMonth'));
      dispatch(setNameOfSelectedDateToFilter('Este mes'));
    }
    if (active === 3) {
      dispatch(getChatsByPeriod('0/lastMonth'));
      dispatch(setNameOfSelectedDateToFilter('Mes Anterior'));
    }
    getNewChatEvent();
  }, [active]);

  const handleDatePicker = (id: number) => {
    setActive(id);
    id === 4 ? setDatePicker(1) : null;
  };

  const tabs = childrenList.map((child, index) => {
    const title = (child as React.ReactElement).props.title ?? index.toString();

    return (
      <Wrapper key={index.toString()}>
        <StyledContainerRadio focusRadio={active === index}>
          <StyledRadio
            focusRadio={active === index}
            key={title + index.toString()}
            onClick={() => handleDatePicker(index)}
          />
        </StyledContainerRadio>
        <StyledLabel focusRadio={active === index}>
          <Text>{title}</Text>
        </StyledLabel>
      </Wrapper>
    );
  });

  return (
    <StyledWrapper>
      <StyledTabsHeaders>{tabs}</StyledTabsHeaders>
    </StyledWrapper>
  );
};
