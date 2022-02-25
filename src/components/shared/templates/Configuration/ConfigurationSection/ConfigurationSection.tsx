/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react';
import { Tabs } from '../../../organisms/Tabs/Tabs';
import { StyledConfigurationSectionContainer } from './ConfigurationSection.styled';
import { TimeTable } from '../Components/TimeTable/TimeTable';
import { UsersConfig } from '../Components/UsersConfig/UsersConfig';

export const ConfigurationSection: FC = () => {
  return (
    <StyledConfigurationSectionContainer>
      <Tabs activeByDefault={0}>
        <div title="Horarios">
          <TimeTable />
        </div>
        <div title="Usuarios">
          <UsersConfig />
        </div>
      </Tabs>
    </StyledConfigurationSectionContainer>
  );
};
