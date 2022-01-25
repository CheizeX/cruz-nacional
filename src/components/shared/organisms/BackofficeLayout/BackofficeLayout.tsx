import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useJwt } from 'react-jwt';
import { adminSection, supervisorSection } from '../../../../config/backoffice';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { BackOffice } from '../NavBar/BackOffice/NavBarBackOffice';
import { SideBarOrganism } from '../SideBar/SideBar';
import { useAppSelector } from '../../../../redux/hook/hooks';
import { UserRole } from '../../../../models/users/role';
import { IBackOfficeProps } from '../NavBar/BackOffice/NavBarBackOffice.interface';
import { CollapseSidebar } from './BackofficeLayout.interface';
import { DashboardSection } from '../../templates/Dashboard/DashboardSection/DashboardSection';
import { IPropsAgents } from '../../templates/Dashboard/Components/Agents/Agents.interface';
import { MonitorSection } from '../../templates/Monitor/MonitorSection/MonitorSection';
import { FilterChannel } from '../../templates/Chats/Components/ChatsFilter/ChatFilter/ChatFilter.interface';
import { AddedUsersSection } from '../AddedUsersSection/AddedUsersSection';
import { ReportsSection } from '../../templates/Reports/ReportsSection/ReportsSection';
import useLocalStorage from '../../../../hooks/use-local-storage';
import { Loader } from '../../atoms/Loader/Loader';
import { ChannelsSection } from '../../templates/Channels/ChannelsSection/ChannelsSection';
import { SubscriptionSection } from '../../templates/SubscriptionPlans/SubscriptionSection/SubscriptionSection';
import { ConfigurationSection } from '../../templates/Configuration/ConfigurationSection/ConfigurationSection';

const StyledContainer = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  width: 100%;
  min-height: 100vh;
  min-width: 1366px;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const BackofficeSection = styled.div`
  min-width: 1094px;
  min-height: 732px;
  width: 100%;
`;

export const BackofficeLayout: FC<
  IBackOfficeProps & CollapseSidebar & IPropsAgents & FilterChannel
> = ({
  myAccount,
  setMyAccount,
  setDatePicker,
  setStartDate,
  setEndDate,
  startDate,
  endDate,
}) => {
  const [collapseArrow, setCollapseArrow] = React.useState<boolean>(false);
  const [selectedSection, setSelectedSection] =
    React.useState<string>('Monitor');

  const { push } = useRouter();

  const [accessToken] = useLocalStorage('AccessToken', '');
  const { decodedToken }: any = useJwt(accessToken);

  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );

  const sections =
    userDataInState && userDataInState.role === UserRole.SUPERVISOR
      ? supervisorSection
      : adminSection;

  useEffect(() => {
    if (!accessToken) {
      push('/');
    }
    if (decodedToken && decodedToken?.role === UserRole.AGENT) {
      push('/live-chat');
    }
  }, [userDataInState, decodedToken]);

  return (
    <>
      {decodedToken && decodedToken.role !== UserRole.AGENT ? (
        <StyledContainer>
          <SideBarOrganism
            backofficeSections={sections}
            collapseArrow={collapseArrow}
            setCollapseArrow={setCollapseArrow}
            setSelectedSection={setSelectedSection}
          />
          <BackofficeSection>
            <BackOffice
              setMyAccount={setMyAccount}
              myAccount={myAccount}
              text={selectedSection}
              // messageIcon={() => <SVGIcon iconFile="/icons/message_icons.svg" />}
              bellIcon={() => <SVGIcon iconFile="/icons/bell.svg" />}
            />
            {selectedSection === 'Dashboard' && (
              <DashboardSection
                setDatePicker={setDatePicker}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                startDate={startDate}
                endDate={endDate}
              />
            )}
            {selectedSection === 'Monitor' && <MonitorSection />}
            {selectedSection === 'Usuarios' && <AddedUsersSection />}
            {selectedSection === 'Reportes' && <ReportsSection />}
            {selectedSection === 'Canales' && <ChannelsSection />}
            {selectedSection === 'Suscripciones' && <SubscriptionSection />}
            {selectedSection === 'Configuración' && <ConfigurationSection />}
          </BackofficeSection>
        </StyledContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};
