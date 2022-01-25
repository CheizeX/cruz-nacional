import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { IType } from '../Components/LeftPanelReports/LeftPanel.interface';
import { LeftPanelReports } from '../Components/LeftPanelReports/LeftPanelReports';
import { RightPanelReports } from '../Components/RightPanelReports/RightPanelReports';
import { StyledWrapperReports } from './ReportsSection.styled';
import { readingUsers } from '../../../../../api/users';
import { UserStatus } from '../../../../../models/users/status';
import { useAppDispatch } from '../../../../../redux/hook/hooks';
import { setDataAgents } from '../../../../../redux/slices/reports/reports-data-agents';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Channels, ChatStatus } from '../../../../../models/chat/chat';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { baseRestApi } from '../../../../../api/base';
import { setDataReports } from '../../../../../redux/slices/reports/reports-management';
import { UserRole } from '../../../../../models/users/role';
import { User } from '../../../../../models/users/user';

export const ReportsSection: FC = () => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
  const [dateStart, setDateStart] = useState<Date | null>(null);
  const [dateEnd, setDateEnd] = useState<Date | null>(null);
  const [types, setTypes] = useState(IType.TODOS);
  const [filterState, setFilterState] = useState<Array<number>>([]);
  const [filterChannel, setFilterChannel] = useState<Array<number>>([]);
  const [filterAsignation, setFilterAsignation] = useState<Array<string>>([]);

  const onChangeStart = (newDate: Date | null) => {
    setDateStart(newDate);
  };
  const onChangeEnd = (newDate: Date | null) => {
    setDateEnd(newDate);
  };

  const handleFilterState = (id: number) => {
    const currentState = filterState?.indexOf(id);
    const newCheckedState = [...filterState];
    if (currentState === -1) {
      newCheckedState.push(id);
    } else {
      newCheckedState.splice(currentState, 1);
    }
    setFilterState(newCheckedState);
  };

  const handleFilterChannel = (id: number) => {
    const currentChannel = filterChannel?.indexOf(id);
    const checkedChannel = [...filterChannel];
    if (currentChannel === -1) {
      checkedChannel.push(id);
    } else {
      checkedChannel.splice(currentChannel, 1);
    }
    setFilterChannel(checkedChannel);
  };

  const handleFilterAsignation = (id: string) => {
    const currentAsignation = filterAsignation?.indexOf(id);
    const newCheckedAsignation = [...filterAsignation];
    if (currentAsignation === -1) {
      newCheckedAsignation.push(id);
    } else {
      newCheckedAsignation.splice(currentAsignation, 1);
    }
    setFilterAsignation(newCheckedAsignation);
  };

  const getInfoAgents = async () => {
    try {
      const data = await readingUsers(UserStatus.ALL);
      if (data.success === false) {
        dispatch(setDataAgents([]));
      } else {
        const agentAsignation = data?.filter(
          (item: User) => item.role === UserRole.AGENT,
        );

        dispatch(setDataAgents(agentAsignation));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const responseChannels = filterChannel.map(
    (item) =>
      (item === 11 ? Channels.WHATSAPP : null) ||
      (item === 22 ? Channels.MESSENGER : null) ||
      (item === 33 ? Channels.INSTAGRAM : Channels.WEBCHAT),
  );
  const responseStatus = filterState.map(
    (item) =>
      (item === 1 ? ChatStatus.ASSIGNMENT_PENDING : null) ||
      (item === 2 ? ChatStatus.ON_CONVERSATION : ChatStatus.FINISHED),
  );
  const responseByAgents = filterAsignation.map((item) => item);

  const handleToggle = async () => {
    const queryParams = `${
      process.env.NEXT_PUBLIC_REST_API_URL
    }/chats/getFile/csv/${dateStart?.toISOString()}/${dateEnd?.toISOString()}?type=all&channels=${responseChannels}&states=${responseStatus}&agents=${responseByAgents}&process=read`;
    try {
      const response = await baseRestApi.get(queryParams);
      if (response.success === false) {
        dispatch(setDataReports([]));
      } else {
        dispatch(setDataReports(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleDownload = async () => {
    const queryParams = `${
      process.env.NEXT_PUBLIC_REST_API_URL
    }/chats/getFile/csv/${dateStart?.toISOString()}/${dateEnd?.toISOString()}?type=all&channels=${responseChannels}&states=${responseStatus}&agents=${responseByAgents}&process=download`;
    try {
      const response = await axios({
        url: queryParams,
        method: 'get',
        responseType: 'blob',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AccessToken')}`,
        },
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'reports.csv';
      document.body.appendChild(a);
      a.click();
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleReset = () => {
    setFilterState([]);
    setFilterChannel([]);
    setFilterAsignation([]);
    setDateStart(null);
    setDateEnd(null);
    dispatch(setDataReports([]));
  };
  useEffect(() => {
    getInfoAgents();
  });
  return (
    <StyledWrapperReports>
      <LeftPanelReports
        setTypes={setTypes}
        types={types}
        filterState={filterState}
        filterByState={handleFilterState}
        filterChannel={filterChannel}
        filterByChannel={handleFilterChannel}
        filterByAsignation={handleFilterAsignation}
        filtersAsignation={filterAsignation}
        dateStart={dateStart}
        dateEnd={dateEnd}
        onChangeStart={onChangeStart}
        onChangeEnd={onChangeEnd}
        handleToggle={handleToggle}
        handleReset={handleReset}
      />
      <RightPanelReports handleDownload={handleDownload} />
    </StyledWrapperReports>
  );
};
