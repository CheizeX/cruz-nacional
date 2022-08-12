/* eslint-disable sonarjs/cognitive-complexity */
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
import { Chat } from '../../../../../models/chat/chat';
import { User } from '../../../../../models/users/user';
import { UserStatus } from '../../../../../models/users/status';
import {
  setChatsToday,
  setSortedByLastDateChats,
  setSortedByFirstDateChats,
  setUpdateChat,
} from '../../../../../redux/slices/monitor/monitor-chats';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { MonitorFirstSection } from '../Components/MonitorFirstSection/MonitorFirstSection';
import { MonitorSecondSection } from '../Components/MonitorSecondSection/MonitorSecondSection';
import { setAgentsNotAvailable } from '../../../../../redux/slices/monitor/monitor-agents-not-available';
import { setAgentsAvailable } from '../../../../../redux/slices/monitor/monitor-agents-available';
import { setInfoByAgent } from '../../../../../redux/slices/monitor/monitor-info-by-agent';
import { setAllUser } from '../../../../../redux/slices/monitor/monitor-all-agents';
import { setCountAgentsAvailable } from '../../../../../redux/slices/monitor/count-agent';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { SectionConversationView } from '../Components/SectionConversationView/SectionConversationView';
import { UserRole } from '../../../../../models/users/role';

const StyledMonitoSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const MonitorSection: FC = () => {
  const socket: any = useContext(websocketContext);
  const showAlert = useToastContext();

  const dispatch = useAppDispatch();
  const [statusAgent, setStatusAgent] = useState<Array<string>>([]);
  const [byChannels, setByChannel] = useState<Array<string>>([]);
  const [IDAgents, setIDAgents] = useState<Array<string>>([]);
  const [byAgentAvailable, setByAgentAvailable] = useState<Array<string>>([]);
  const [stateByAgent, seStateByAgent] = useState<Array<string>>([]);
  const [filterChats, setFilterChat] = useState<string>('');
  const [agentInput, setAgentInput] = useState<string>('');
  const [agentSection, setSectionAgent] = useState<string>('');
  const [orderByInteraction, setOrderByInteraction] = useState<boolean>(true);
  const [openIsModal, setIsOpenModal] = useState<boolean>(false);
  const [optionFilter, setOptionFilter] = useState<boolean>(false);
  const [optionFilterSecond, setOptionFilterSecond] = useState<number>(0);

  // Trae todos los chats
  const { chatsToday } = useAppSelector(
    (state) => state.monitor.monitorTodayChatState,
  );
  // Trae todos lo agentes no disponibles
  const { agentsNotAvailable } = useAppSelector(
    (state) => state.monitor.monitorAgentsNotAvailableState,
  );
  // Trae todos los agentes disponibles
  const { agentsAvailable } = useAppSelector(
    (state) => state.monitor.monitorAgentsAvailableState,
  );
  // Trae todos los usuarios
  const { allUser } = useAppSelector(
    (state) => state.monitor.monitorAllUserState,
  );
  const { countAgent } = useAppSelector(
    (state) => state.monitor.monitorCountAgentsAvailableState,
  );
  // trae a etiquetas que corresponde a usuario.
  const { tagFilter } = useAppSelector(
    (state) => state.userAuthCredentials.userDataInState,
  );

  // Buscar por cliente o agente en la primera sección de monitor
  const handleSearchChatToday = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFilterChat(event.target.value);
  };
  // Array de status por filtrar
  const handleOnChangeState = (status: string) => {
    const currentIndex = statusAgent.indexOf(status);
    const newChecked = [...statusAgent];
    if (currentIndex === -1) {
      newChecked.push(status);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setStatusAgent(newChecked);
  };
  // Array de canales por filtrar
  const handleOnChangeChannels = (channel: string) => {
    const currentIndex = byChannels?.indexOf(channel);
    const newChecked = [...byChannels];
    if (currentIndex === -1) {
      newChecked.push(channel);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setByChannel(newChecked);
  };
  // Array de Agents por filtrar
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
  // Array de agente disponible por filtrar
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
  // Array de stados por filtrar
  const handleChangeState = (id: string) => {
    const stateIndex = stateByAgent.indexOf(id);
    const newCurrentChecked = [...stateByAgent];
    if (stateIndex === -1) {
      newCurrentChecked.push(id);
    } else {
      newCurrentChecked.splice(stateIndex, 1);
    }
    seStateByAgent(newCurrentChecked);
  };

  // Trae los agente disponible
  const getAgentsAvailable = useCallback(async () => {
    try {
      const result = await readingUsers(UserStatus.AVAILABLE);
      if (result.success === false) {
        dispatch(setAgentsAvailable([]));
        dispatch(setCountAgentsAvailable(0));
      } else {
        const response = result?.filter(
          (key: User) => key.role !== UserRole.ADMIN,
        );
        dispatch(setCountAgentsAvailable(response.length));
        dispatch(setAgentsAvailable(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch]);

  const getAgentsNotAvailable = useCallback(async () => {
    try {
      const data = await readingUsers(UserStatus.ALL);
      if (data.success === false) {
        dispatch(setAgentsNotAvailable([]));
        dispatch(setAllUser([]));
        dispatch(setInfoByAgent([]));
      } else {
        const dataAgents = data.filter((item: User) => item.role === 'AGENT');
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
  }, [dispatch]);

  const getChatsToday = useCallback(async () => {
    try {
      const response = await readChatsToday('today');
      if (response.success === false) {
        dispatch(setChatsToday([]));
      } else {
        dispatch(setChatsToday(response));
        setOrderByInteraction(true);
        dispatch(setSortedByLastDateChats());
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, []);

  // se agrego una nueva propiedad de CALL para realizar el fitro de busqueda por status.
  const handleOnClick = () => {
    setOptionFilterSecond(1);
  };

  const handleClickState = async () => {
    setOptionFilterSecond(2);
  };

  const clearSecondSection = () => {
    setByAgentAvailable([]);
    seStateByAgent([]);
    setOptionFilterSecond(0);
  };

  // función para filtrar en el front los canales, estados y agentes
  const filters = [
    {
      _id: 'status',
      byFilter: statusAgent,
    },
    {
      _id: 'assignedAgent',
      byFilter: IDAgents,
    },
    {
      _id: 'channel',
      byFilter: byChannels,
    },
  ];
  const singleFilter = filters.filter((item) => item.byFilter.length >= 1);

  const complexFilter = useMemo(() => {
    if (!singleFilter) return chatsToday;
    if (singleFilter.length === 1) {
      if (singleFilter[0]._id === 'status') {
        return chatsToday.filter((chats: Chat) =>
          singleFilter[0].byFilter.some((key) => key.includes(chats.status)),
        );
      }
      if (singleFilter[0]._id === 'channel') {
        return chatsToday.filter((chats: Chat) =>
          singleFilter[0].byFilter.some((key) => key.includes(chats.channel)),
        );
      }
      return chatsToday.filter((chats: Chat) =>
        singleFilter[0].byFilter.some((key) =>
          key.includes(chats.assignedAgent?._id),
        ),
      );
    }
    if (singleFilter.length === 2) {
      if (byChannels.length > 0 && statusAgent.length > 0 && !IDAgents) {
        return chatsToday.filter(
          (chats) =>
            byChannels.some((key) => key.includes(chats.channel)) &&
            statusAgent.some((item) => item.includes(chats.status)),
        );
      }
      if (byChannels.length > 0 && IDAgents.length > 0 && !statusAgent.length) {
        return chatsToday.filter(
          (chats) =>
            byChannels.some((key) => key.includes(chats.channel)) &&
            IDAgents.some((item) => item.includes(chats.assignedAgent?._id)),
        );
      }
      return chatsToday.filter(
        (chats) =>
          statusAgent.some((key) => key.includes(chats.status)) &&
          IDAgents.some((item) => item.includes(chats.assignedAgent?._id)),
      );
    }
    if (singleFilter.length === 3) {
      return chatsToday.filter(
        (object) =>
          byChannels.some((key) => key.includes(object.channel)) &&
          statusAgent.some((item) => item.includes(object.status)) &&
          IDAgents.some((agent) => agent.includes(object.assignedAgent?._id)),
      );
    }
    return chatsToday;
  }, [IDAgents, byChannels, chatsToday, singleFilter, statusAgent]);

  useEffect(() => {
    if (orderByInteraction) {
      dispatch(setSortedByLastDateChats());
    } else {
      dispatch(setSortedByFirstDateChats());
    }
  }, [dispatch, orderByInteraction]);

  useEffect(() => {
    if (typeof tagFilter === 'string') {
      getAgentsAvailable();
      getAgentsNotAvailable();
      getChatsToday();
    }
  }, [getAgentsAvailable, getAgentsNotAvailable, getChatsToday, tagFilter]);

  useEffect(() => {
    socket.on('newChatEvent', (chat: Chat) => {
      dispatch(setUpdateChat(chat));
      setOrderByInteraction(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('newUserStatusChange', (data: User[]) => {
      const agentAvailable = data?.filter(
        (item: User) => item.status === 'AVAILABLE',
      );
      // Se agrego una propiedad nueva de call.
      const agentNotAvailable = data.filter(
        (item: User) =>
          item.status !== UserStatus.AVAILABLE &&
          item.status !== UserStatus.DISCONNECTED,
      );
      dispatch(setCountAgentsAvailable(agentAvailable.length));
      dispatch(setAgentsAvailable(agentAvailable));
      dispatch(setAgentsNotAvailable(agentNotAvailable));
    });
  }, [socket, agentsAvailable]);

  const onChangeAgent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSectionAgent(event.target.value);
  };
  const onChangeChat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgentInput(event.target.value);
  };

  const filterChatsToday = useMemo(() => {
    if (!filterChats) return chatsToday;
    return chatsToday?.filter(
      (chat: Chat) =>
        (chat.status.includes(filterChats) && !chat.isPaused) ||
        chat.assignedAgent?.name
          .toLocaleLowerCase()
          .includes(filterChats.toLocaleLowerCase()) ||
        chat.client?.name
          .toLocaleLowerCase()
          .includes(filterChats.toLocaleLowerCase()) ||
        (filterChats === 'ON_PAUSE' && chat.isPaused),
    );
  }, [chatsToday, filterChats, optionFilter]);

  // variable para filtar por estatus
  const singleFilterState = useMemo(() => {
    if (!stateByAgent) return allUser;
    return allUser?.filter((item: User) =>
      stateByAgent?.some((key) => item.status && key.includes(item.status)),
    );
  }, [allUser, stateByAgent]);

  // variable para filtrar por agentes
  const singleFilterAgent = useMemo(() => {
    if (!byAgentAvailable.length) return allUser;
    return allUser?.filter((item: User) =>
      byAgentAvailable?.some((key) => key.includes(item._id)),
    );
  }, [allUser, byAgentAvailable]);

  const dateAgent = useMemo(() => {
    if (!agentSection) return agentsAvailable;
    if (agentSection === UserStatus.BATHROOM) return agentsNotAvailable;
    return agentsAvailable?.filter(
      (agent) =>
        agent.name.toLowerCase().includes(agentSection.toLowerCase()) ||
        (agent.status && agent.status.includes(agentSection)),
    );
  }, [agentSection, agentsAvailable, agentsNotAvailable]);

  const responseData = useMemo(() => {
    if (optionFilterSecond === 1) return singleFilterState;
    if (optionFilterSecond === 2) return singleFilterAgent;
    return dateAgent;
  }, [dateAgent, optionFilterSecond, singleFilterAgent, singleFilterState]);

  const dateAllAgents = useMemo(() => {
    if (!agentInput) return allUser;
    return allUser.filter((agent) =>
      agent.name.toLowerCase().includes(agentInput.toLowerCase()),
    );
  }, [allUser, agentInput]);

  const agentAllSecondSection = useMemo(() => {
    if (!agentSection) return allUser;
    return allUser.filter((agent) =>
      agent.name.toLowerCase().includes(agentSection.toLowerCase()),
    );
  }, [allUser, agentSection]);

  return (
    <StyledMonitoSection>
      <MonitorFirstSection
        totalChats={filterChatsToday.length}
        onChange={onChangeChat}
        dateAgent={dateAllAgents}
        chats={optionFilter ? complexFilter : filterChatsToday}
        statusAgent={statusAgent}
        byChannels={byChannels}
        IDAgents={IDAgents}
        filterStatus={handleOnChangeState}
        filterChannels={handleOnChangeChannels}
        filterAgents={handleOnChangeAgents}
        setOptionFilter={setOptionFilter}
        resetHandle={getChatsToday}
        setFilterChat={setFilterChat}
        handleSearchChatToday={handleSearchChatToday}
        setOrderByInteraction={setOrderByInteraction}
        orderByInteraction={orderByInteraction}
        setIsOpenModal={setIsOpenModal}
      />
      <MonitorSecondSection
        countAgent={countAgent}
        dateAgent={responseData}
        allAgent={agentAllSecondSection}
        agentNotAvailable={agentsNotAvailable}
        chats={chatsToday}
        stateByAgent={stateByAgent}
        byAgentAvailable={byAgentAvailable}
        onChange={onChangeAgent}
        filterByAgents={handleClickFilterAgents}
        filterByState={handleChangeState}
        handleChange={handleOnClick}
        handleStateAgents={handleClickState}
        clearSecondSection={clearSecondSection}
        setSectionAgent={setSectionAgent}
        setOptionFilterSecond={setOptionFilterSecond}
      />
      <ModalMolecule isModal={openIsModal}>
        <SectionConversationView setIsOpenModal={setIsOpenModal} />
      </ModalMolecule>
    </StyledMonitoSection>
  );
};
