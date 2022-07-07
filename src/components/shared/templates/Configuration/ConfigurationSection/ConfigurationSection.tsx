/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react';
import { Tabs } from '../../../organisms/Tabs/Tabs';
import { StyledConfigurationSectionContainer } from './ConfigurationSection.styled';
import { TimeTable } from '../Components/TimeTable/TimeTable';
import { ChatsConfig } from '../Components/ChatsConfig/ChatsConfig';
import { ContactsConfig } from '../Components/ContactsConfig/ContactsConfig';
import { WebchatConfig } from '../Components/WebchatConfig/WebchatConfig';
import { useAppSelector } from '../../../../../redux/hook/hooks';
import { GralConfig } from '../Components/GralConfig/GralConfig';

export const ConfigurationSection: FC = () => {
  const { listChannel } = useAppSelector(
    (state) => state.channel.listChannelState,
  );
  return (
    <StyledConfigurationSectionContainer>
      <Tabs activeByDefault={0}>
        <div title="Horarios">
          <TimeTable />
        </div>
        <div title="Conversaciones">
          <ChatsConfig />
        </div>
        <div title="Contactos">
          <ContactsConfig />
        </div>
        {listChannel.webchat && (
          <div title="Webchat">
            <WebchatConfig />
          </div>
        )}
        <div title="General">
          <GralConfig />
        </div>
      </Tabs>
    </StyledConfigurationSectionContainer>
  );
};
