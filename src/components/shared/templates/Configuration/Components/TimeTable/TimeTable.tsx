import React, { FC } from 'react';

import { BusinessHours } from './BusinessHours/BusinesHours';
import { ListedRestrictionsLeft } from './ListedRestrictions/ListedRestrictions';
import { OutOfHourMessage } from './OutOfHourMessage/OutOfHourMessage';
import {
  StyledRightSideTimeRestrictions,
  StyledTimeTableSection,
} from './TimeTable.styled';

export const TimeTable: FC = () => {
  return (
    <StyledTimeTableSection title="Horarios">
      <ListedRestrictionsLeft />
      <StyledRightSideTimeRestrictions>
        <BusinessHours />
        <OutOfHourMessage />
      </StyledRightSideTimeRestrictions>
    </StyledTimeTableSection>
  );
};
