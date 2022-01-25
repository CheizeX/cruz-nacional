import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export interface Props {
  children?: React.ReactNode;
  focusRadio?: boolean;
}

export const StyledTabsHeader = styled.div`
  display: flex;
`;

export const StyledContainerRadio = styled.div<Props>`
  border-radius: 50px;
  width: 24px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.Colors.grays[8]};
  margin-right: 7px;
  ${({ focusRadio }) =>
    focusRadio &&
    css<Props>`
      border: 2px solid ${({ theme }) => theme.Colors.purples[1]};
    `}
`;
export const StyledRadio = styled.button<Props>`
  height: 14px;
  width: 14px;
  max-height: 14px;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 50px;
  display: inline-flex;
  justify-content: center;
  display: flex;
  margin: auto;
  align-content: center;
  text-align: center;
  position: relative;
  top: 3px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }

  ${({ focusRadio }) =>
    focusRadio &&
    css<Props>`
      background-color: ${({ theme }) => theme.Colors.purples[1]};
      color: ${({ theme }) => theme.Colors.grays[10]};
    `}
`;
const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 7px;
  margin-bottom: 11px;
`;
const StyledLabel = styled.div<Props>`
  color: ${({ theme }) => theme.Colors.grays[2]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  font-size: ${({ theme }) => theme.fontSize[12]};
  line-height: 14px;
  padding: 0 4px;
  margin-top: 4px;
`;

export const UserRadioButton = ({ children }: Props) => {
  const [active, setActive] = useState(0);

  const childrenList = React.Children.toArray(children);
  const tabs = childrenList.map((child, index) => {
    const title = (child as React.ReactElement).props.title ?? index;
    return (
      <Wrapper>
        <StyledContainerRadio focusRadio={active === index}>
          <StyledRadio
            focusRadio={active === index}
            key={title}
            onClick={() => setActive(index)}
          />
        </StyledContainerRadio>
        <StyledLabel focusRadio={active === index}>{title}</StyledLabel>
      </Wrapper>
    );
  });
  return (
    <>
      <StyledTabsHeader>{tabs}</StyledTabsHeader>
    </>
  );
};
