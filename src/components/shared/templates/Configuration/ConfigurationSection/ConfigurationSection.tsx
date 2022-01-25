/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from 'react';
import { BusinessHours } from '../Components/BusinessHours/BusinesHours';
import { ListedRestrictionsLeft } from '../Components/ListedRestrictions/ListedRestrictions';
import {
  StyledConfigurationSection,
  StyledRightSideTimeRestrictions,
} from './ConfigurationSection.styled';

export const ConfigurationSection: FC = () => {
  const [sortedRestrictions, setSortedRestrictions] = useState<boolean>(false);

  const numberOfRestrictions = 0;
  const businessHours = 0;

  return (
    <>
      <StyledConfigurationSection>
        <ListedRestrictionsLeft
          sortedRestrictions={sortedRestrictions}
          setSortedRestrictions={setSortedRestrictions}
          numberOfRestrictions={numberOfRestrictions}
        />
        <StyledRightSideTimeRestrictions>
          <BusinessHours businessHours={businessHours} />
        </StyledRightSideTimeRestrictions>
      </StyledConfigurationSection>
    </>
  );
};
