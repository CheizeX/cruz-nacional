/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { IPropsRolFilter } from './RolFilter.interface';
import {
  Wrapper,
  StyledContainerRadio,
  StyledRadio,
  StyledLabel,
  StyledWrapper,
  StyledTabsHeader,
} from './RolFilter.styled';

export const RolFilter = ({ children }: IPropsRolFilter) => {
  const [active, setActive] = useState(0);

  const childrenList = React.Children.toArray(children);

  const tabs = childrenList.map((child, index) => {
    const title = (child as React.ReactElement).props.title ?? index;

    return (
      <Wrapper key={title}>
        <StyledContainerRadio focusRadio={active === index}>
          <StyledRadio
            focusRadio={active === index}
            key={title}
            onClick={() => setActive(index)}
          />
        </StyledContainerRadio>
        <StyledLabel focusRadio={active === index}>
          {title === 'Supervisor' ? (
            <SVGIcon iconFile="/icons/user_shelt.svg" />
          ) : null}
          {title === 'Agente' ? <SVGIcon iconFile="/icons/user.svg" /> : null}
          {title === 'Todos' ? <SVGIcon iconFile="/icons/users.svg" /> : null}
          <Text>{title}</Text>
        </StyledLabel>
      </Wrapper>
    );
  });

  return (
    <StyledWrapper>
      <StyledTabsHeader>{tabs}</StyledTabsHeader>
    </StyledWrapper>
  );
};
