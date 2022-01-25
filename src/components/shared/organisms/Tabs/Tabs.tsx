import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useAppDispatch } from '../../../../redux/hook/hooks';
import { setActiveTabInState } from '../../../../redux/slices/active-tab/active-tab';

export interface Props {
  children?: React.ReactNode;
  focusedTab?: boolean;
  largeTabs?: boolean;
  activeByDefault?: number;
}

export const Notification = styled.span`
  display: flex;
  background: white;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  position: absolute;
  justify-content: center;
  left: 116px;
  top: 67px;
  font-size: 14px;
  padding: 2px 2px;
  color: ${({ theme }) => theme.Colors.purples[1]};
`;

export const StyledTabsHeader = styled.div<Props>`
  display: flex;
  justify-content: space-around;
  height: fit-content;
  margin: 10px 0;
  min-height: 32px;
  width: 100%;

  & button {
    width: ${({ largeTabs }) => (largeTabs ? `142px` : `90px`)};
  }
`;

export const StyledTabsBody = styled.div<Props>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  & > * {
    fill: 'red';
  }
`;

export const StyledTabs = styled.button<Props>`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 24px;
  display: inline-flex;
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  height: 32px;
  justify-content: center;
  max-width: 142px;
  width: 90px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }

  ${({ focusedTab }) =>
    focusedTab &&
    css<Props>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;

export const Tabs = ({ children, largeTabs, activeByDefault }: Props) => {
  const dispatch = useAppDispatch();

  const [active, setActive] = useState<number>(activeByDefault || 0);

  const childrenList = React.Children.toArray(children);

  const tabs = childrenList.map((child, index) => {
    const title = (child as React.ReactElement).props.title ?? index;

    const handleClick = () => {
      setActive(index);
      dispatch(setActiveTabInState(title));
    };

    return (
      <StyledTabs
        focusedTab={active === index}
        key={title}
        onClick={() => handleClick()}>
        {title}
      </StyledTabs>
    );
  });

  const current = childrenList[active];

  return (
    <>
      <StyledTabsHeader largeTabs={largeTabs} activeByDefault={activeByDefault}>
        {tabs}
      </StyledTabsHeader>
      <StyledTabsBody>{current}</StyledTabsBody>
    </>
  );
};
