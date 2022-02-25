import {
  FC,
  useState,
  useMemo,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import styled from 'styled-components';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hook/hooks';
import { readChatsToday } from '../../../../../api/chat';
import { readingUsers } from '../../../../../api/users';
import { websocketContext } from '../../../../../chat/index';
import { Channels, Chat, ChatStatus } from '../../../../../models/chat/chat';
import { User } from '../../../../../models/users/user';
import { UserStatus } from '../../../../../models/users/status';
import {
  setChatsToday,
  setCountPending,
  setCountFinished,
  setCountPause,
  setCountOnConversation,
} from '../../../../../redux/slices/monitor/monitor-chats';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { MonitorFirstSection } from '../Components/MonitorFirstSection/MonitorFirstSection';
import { MonitorSecondSection } from '../Components/MonitorSecondSection/MonitorSecondSection';
import { setAgentsNotAvailable } from '../../../../../redux/slices/monitor/monitor-agents-not-available';
import { setAgentsAvailable } from '../../../../../redux/slices/monitor/monitor-agents-available';
import { setInfoByAgent } from '../../../../../redux/slices/monitor/monitor-info-by-agent';
import { setAllUser } from '../../../../../redux/slices/monitor/monitor-all-agents';
import { baseRestApi } from '../../../../../api/base';
import { setCountAgentsAvailable } from '../../../../../redux/slices/monitor/count-agent';

const StyledMonitoSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const MonitorSection: FC = () => {
  const socket: any = useContext(websocketContext);

  const showAlert = useToastContext();

  const dispatch = useAppDispatch();
  const [statusAgent, setStatusAgent] = useState<Array<number>>([]);
  const [byChannels, setByChannel] = useState<Array<number>>([]);
  const [IDAgents, setIDAgents] = useState<Array<string>>([]);
  const [byAgentAvailable, setByAgentAvailable] = useState<Array<string>>([]);
  const [stateByAgent, seStateByAgent] = useState<Array<number>>([]);

  const { chatsToday } = useAppSelector(
    (state) => state.monitor.monitorTodayChatState,
  );
  const { agentsNotAvailable } = useAppSelector(
    (state) => state.monitor.monitorAgentsNotAvailableState,
  );
  const { agentsAvailable } = useAppSelector(
    (state) => state.monitor.monitorAgentsAvailableState,
  );
  const { allUser } = useAppSelector(
    (state) => state.monitor.monitorAllUserState,
  );
  const { countAgent } = useAppSelector(
    (state) => state.monitor.monitorCountAgentsAvailableState,
  );
  // const { userDataInState } = useAppSelector(
  //   (state) => state.userAuthCredentials,
  // );
  const [agentInput, setAgentInput] = useState<string>('');
  const handleOnChangeState = (id: number) => {
    const currentIndex = statusAgent.indexOf(id);
    const newChecked = [...statusAgent];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setStatusAgent(newChecked);
  };
  const handleOnChangeChannels = (id: number) => {
    const currentIndex = byChannels?.indexOf(id);
    const newChecked = [...byChannels];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setByChannel(newChecked);
  };
  const handleOnChangeAgents = (_id: string) => {
    const agentIDIndex = IDAgents?.indexOf(_id);
    const currentChecked = [...IDAgents];
    if (agentIDIndex === -1) {
      currentChecked.push(_id);
    } else {
      currentChecked?.splice(agentIDIndex, 1);
    }
    setIDAgents(currentChecked);
  };
  const handleClickFilterAgents = (_id: string) => {
    const indexAgent = byAgentAvailable?.indexOf(_id);
    const currentByAgent = [...byAgentAvailable];
    if (indexAgent === -1) {
      currentByAgent.push(_id);
    } else {
      currentByAgent?.splice(indexAgent, 1);
    }
    setByAgentAvailable(currentByAgent);
  };
  const handleChangeState = (id: number) => {
    const stateIndex = stateByAgent.indexOf(id);
    const newCurrentChecked = [...stateByAgent];
    if (stateIndex === -1) {
      newCurrentChecked.push(id);
    } else {
      newCurrentChecked.splice(stateIndex, 1);
    }
    seStateByAgent(newCurrentChecked);
  };

  const getAgentsAvailable = useCallback(async () => {
    try {
      const result = await readingUsers(UserStatus.AVAILABLE);
      if (result.success === false) {
        dispatch(setAgentsAvailable([]));
      } else {
        dispatch(setCountAgentsAvailable(result.length));
        dispatch(setAgentsAvailable(result));
        dispatch(setCountAgentsAvailable(result.length));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);
  const getAgentsNotAvailable = useCallback(async () => {
    try {
      const data = await readingUsers(UserStatus.ALL);
      if (data.success === false) {
        dispatch(setAgentsNotAvailable([]));
      } else {
        const dataAgents = data?.filter((item: User) => item.role === 'AGENT');
        dispatch(setAllUser(dataAgents));
        const userPaused = data?.filter(
          (item: User) =>
            item.status === 'BATHROOM' ||
            item.status === 'LUNCH' ||
            item.status === 'CALL',
        );
        dispatch(setInfoByAgent(data));
        if (userPaused) {
          dispatch(setAgentsNotAvailable(userPaused));
        } else {
          dispatch(setAgentsNotAvailable([]));
        }
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);

  const getChatsToday = useCallback(async () => {
    try {
      const response = await readChatsToday('today');
      if (response.success === false) {
        dispatch(setChatsToday([]));
      } else {
        const countOnConversation = response?.filter(
          (chat: Chat) =>
            chat.status === ChatStatus.ON_CONVERSATION &&
            chat.isPaused === false,
        );
        const countIsPause = response?.filter(
          (chat: Chat) =>
            chat.status === ChatStatus.ON_CONVERSATION &&
            chat.isPaused === true,
        );
        const countIspending = response?.filter(
          (chat: Chat) => chat.status === ChatStatus.ASSIGNMENT_PENDING,
        );
        const countIsFinished = response?.filter(
          (chat: Chat) => chat.status === ChatStatus.FINISHED,
        );
        dispatch(setCountOnConversation(countOnConversation.length));
        dispatch(setCountPause(countIsPause.length));
        dispatch(setCountPending(countIspending.length));
        dispatch(setCountFinished(countIsFinished.length));
        dispatch(setChatsToday(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);
  // se agrego una nueva propiedad de CALL para realizar el fitro de busqueda por status.
  const handleOnClick = async () => {
    const responseState = stateByAgent.map(
      (item) =>
        (item === 1 ? UserStatus.AVAILABLE : null) ||
        (item === 2 ? UserStatus.LUNCH : null) ||
        (item === 3 ? UserStatus.BATHROOM : null) ||
        (item === 4 ? UserStatus.CALL : null),
    );
    const querParms = `${process.env.NEXT_PUBLIC_REST_API_URL}/users?agents=&status=${responseState}`;
    // const queryStatusParams = responseState;
    try {
      if (responseState.length) {
        const response = await baseRestApi.get(querParms);
        if (response.success === false) {
          dispatch(setAgentsAvailable([]));
        } else {
          const dats = response.filter((elem: User) => elem.role === 'AGENT');
          dispatch(setAgentsAvailable(dats));
        }
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleClickState = async () => {
    const responseByAgent = byAgentAvailable.map((item) => item);
    const querParms = `${process.env.NEXT_PUBLIC_REST_API_URL}/users?agents=${responseByAgent}&status=`;
    try {
      const response = await baseRestApi.get(querParms);
      if (response.success === false) {
        dispatch(setAgentsAvailable([]));
      } else {
        dispatch(setAgentsAvailable(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleToggle = async () => {
    const responseChannel = byChannels.map(
      (item) =>
        (item === 11 ? Channels.WHATSAPP : null) ||
        (item === 22 ? Channels.MESSENGER : null) ||
        (item === 33 ? Channels.INSTAGRAM : Channels.WEBCHAT),
    );
    const responseStatus = statusAgent.map(
      (item) =>
        (item === 1 ? ChatStatus.ASSIGNMENT_PENDING : null) ||
        (item === 2 ? ChatStatus.ON_CONVERSATION : ChatStatus.FINISHED),
    );

    const responseByAgents = IDAgents.map((item) => item);

    const queryParms = `${process.env.NEXT_PUBLIC_REST_API_URL}/chats/date/0/today?channels=${responseChannel}&states=${responseStatus}&agents=${responseByAgents}`;
    try {
      const response = await baseRestApi.get(queryParms);
      if (response.success === false) {
        dispatch(setChatsToday([]));
      } else {
        dispatch(setChatsToday(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  useEffect(() => {
    getAgentsAvailable();
    getAgentsNotAvailable();
    getChatsToday();
    // socket.emit('joinSupervisorRooms', userDataInState?.companyId);
  }, [getAgentsAvailable, getAgentsNotAvailable, getChatsToday]);

  useEffect(() => {
    socket.on('newChatEvent', (data: Chat[]) => {
      const countOnConversation = data?.filter(
        (chat) =>
          chat.status === ChatStatus.ON_CONVERSATION && chat.isPaused === false,
      );
      const countIsPause = data?.filter(
        (chat) =>
          chat.status === ChatStatus.ON_CONVERSATION && chat.isPaused === true,
      );
      const countIspending = data?.filter(
        (chat) => chat.status === ChatStatus.ASSIGNMENT_PENDING,
      );
      const countIsFinished = data?.filter(
        (chat) => chat.status === ChatStatus.FINISHED,
      );
      dispatch(setCountOnConversation(countOnConversation.length));
      dispatch(setCountPause(countIsPause.length));
      dispatch(setCountPending(countIspending.length));
      dispatch(setCountFinished(countIsFinished.length));
      dispatch(setChatsToday(data));
    });
    socket.on('newUserStatusChange', (data: User[]) => {
      const agentAvailable = data.filter(
        (item: User) => item.status === 'AVAILABLE',
      );
      // Se agrego una propiedad nueva de call.
      const agentNotAvailable = data.filter(
        (item: User) =>
          item.status === UserStatus.BATHROOM ||
          item.status === UserStatus.CALL ||
          item.status === UserStatus.LUNCH,
      );
      dispatch(setCountAgentsAvailable(agentAvailable.length));
      dispatch(setAgentsAvailable(agentAvailable));
      dispatch(setAgentsNotAvailable(agentNotAvailable));
    });
  }, [socket, agentsAvailable, dispatch]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgentInput(event.target.value);
  };

  const dateAgent = useMemo(() => {
    if (!agentInput) return agentsAvailable;
    return agentsAvailable.filter((agent) =>
      agent.name.toLowerCase().includes(agentInput.toLowerCase()),
    );
  }, [agentsAvailable, agentInput]);

  const dateAllAgents = useMemo(() => {
    if (!agentInput) return allUser;
    return allUser.filter((agent) =>
      agent.name.toLowerCase().includes(agentInput.toLowerCase()),
    );
  }, [allUser, agentInput]);
  return (
    <StyledMonitoSection>
      <MonitorFirstSection
        onChange={onChange}
        dateAgent={dateAllAgents}
        chats={chatsToday}
        statusAgent={statusAgent}
        byChannels={byChannels}
        IDAgents={IDAgents}
        filterStatus={handleOnChangeState}
        filterChannels={handleOnChangeChannels}
        filterAgents={handleOnChangeAgents}
        onHandleToggle={handleToggle}
        resetHandle={getChatsToday}
      />
      <MonitorSecondSection
        countAgent={countAgent}
        dateAgent={dateAgent}
        allAgent={dateAllAgents}
        agentNotAvailable={agentsNotAvailable}
        chats={chatsToday}
        stateByAgent={stateByAgent}
        byAgentAvailable={byAgentAvailable}
        onChange={onChange}
        filterByAgents={handleClickFilterAgents}
        filterByState={handleChangeState}
        handleChange={handleOnClick}
        handleClear={getAgentsAvailable}
        handleStateAgents={handleClickState}
      />
    </StyledMonitoSection>
  );
};
