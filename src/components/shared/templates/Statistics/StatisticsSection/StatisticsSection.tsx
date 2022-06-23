/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useCallback, useState, useMemo } from 'react';
import {
  readStatisticsByDay,
  readStatisticsChat,
  readStatisticsUserAndAgent,
} from '../../../../../api/chat';
import { StyledSectionStatistics } from './StatisticsSection.styled';
import { UserList } from '../Components/UserList/UserList';
import { UserAndAgentInteraction } from '../Components/UserAndAgentInteraction/UserAndAgentInteraction';
import { DayAnTimeInteraction } from '../Components/DayAndTimeInteraction/DayAndTimeInteraction';
import {
  setAgentInteractionStatistics,
  setHoursChart,
  setUserList,
} from '../../../../../redux/slices/statistics/statistics-user';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hook/hooks';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { setDataUser } from '../../../../../redux/slices/users/user-management';
import { readingUsers } from '../../../../../api/users';
import { UserStatus } from '../../../../../models/users/status';
import { UserRole } from '../../../../../models/users/role';
import { User } from '../../../../../models/users/user';
import { DayAndHourGraph } from '../Components/DayAndHourGraph/DayAndHourGraph';
import { ICustomRange } from '../Components/UserAndAgentInteraction/UserAndAgentInteraction.interface';
import { IStatistics } from '../../../../../models/statistics/statistics';

export const StatisticsSection: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [interactionFilterDay, setInteractioFilterDay] =
    useState<string>('today');
  const [interactionFilterChannel, setInteractionFilterChannel] =
    useState<string>('');
  const [graphFilterDay, setGraphFilterDay] = useState<Date | null>(null);
  const [informationByAgent, setInformationByAgent] = useState<string>('today');
  const [isLoandingDay, setIsLoandingDay] = useState<boolean>(false);
  const [loandingChart, setLoandingChart] = useState<boolean>(false);
  const [customRange, setCustomRange] = useState<ICustomRange>({
    isCustomRange: false,
    startDate: null,
    endDate: null,
  });

  // `feat: ail-503 '
  const onChangeDate = (dayGraph: Date | null) => {
    setGraphFilterDay(dayGraph);
  };
  const handleInformationByAgent = (arg: string) => {
    setInformationByAgent(arg);
  };
  const { agentInteractionStatistics } = useAppSelector(
    (state) => state.userStatisticsState,
  );

  const timer = new Date();
  const readStatitiscsChart = useCallback(async () => {
    try {
      const response = await readStatisticsByDay(timer.toISOString());
      if (response.success === false) {
        dispatch(setHoursChart([]));
      } else {
        dispatch(setHoursChart(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);

  const handleCustomFilter = async () => {
    try {
      if (
        customRange.isCustomRange &&
        customRange.startDate &&
        customRange.endDate
      ) {
        setLoandingChart(true);
        const response = await readStatisticsUserAndAgent(
          customRange.startDate.toISOString(),
          customRange.endDate.toISOString(),
          interactionFilterChannel,
        );
        const result = await readStatisticsChat(
          customRange.startDate.toISOString(),
          customRange.endDate.toISOString(),
          interactionFilterChannel,
        );
        if (result.success === false) {
          dispatch(setUserList([]));
        } else {
          dispatch(setUserList(result));
        }
        if (response.success === false) {
          dispatch(setAgentInteractionStatistics([]));
        } else {
          dispatch(setAgentInteractionStatistics(response));
        }
      }
      setLoandingChart(false);
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleStatisticsByDay = async () => {
    try {
      setIsLoandingDay(true);
      if (graphFilterDay) {
        const response = await readStatisticsByDay(
          graphFilterDay?.toISOString(),
        );
        if (response.success === false) {
          dispatch(setHoursChart([]));
        } else {
          dispatch(setHoursChart(response));
        }
      }
      setIsLoandingDay(false);
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleListChat = useCallback(async () => {
    try {
      const response = await readStatisticsChat(
        '0',
        interactionFilterDay,
        interactionFilterChannel,
      );
      if (response.success === false) {
        dispatch(setUserList([]));
      } else {
        dispatch(setUserList(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, interactionFilterChannel, interactionFilterDay, showAlert]);

  const handleInteractionAgent = useCallback(async () => {
    try {
      const result = await readStatisticsUserAndAgent(
        '0',
        interactionFilterDay,
        interactionFilterChannel,
      );
      if (result.success === false) {
        dispatch(setAgentInteractionStatistics([]));
      } else {
        dispatch(setAgentInteractionStatistics(result));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, interactionFilterChannel, interactionFilterDay, showAlert]);

  const dataApi = useCallback(async () => {
    try {
      const currentDta = await readingUsers(UserStatus.ALL);
      if (currentDta.success === false) {
        dispatch(setDataUser([]));
      } else {
        const data = currentDta.filter(
          (item: User) => item.role === UserRole.AGENT,
        );
        dispatch(setDataUser(data));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);

  const userDate = useMemo(() => {
    if (informationByAgent === 'today') return agentInteractionStatistics;
    return agentInteractionStatistics?.filter((user: IStatistics) =>
      user._id.includes(informationByAgent),
    );
  }, [agentInteractionStatistics, informationByAgent]);

  useEffect(() => {
    handleInteractionAgent();
    handleListChat();
    readStatitiscsChart();
    dataApi();
  }, [handleInteractionAgent, dataApi, handleListChat, readStatitiscsChart]);

  return (
    <StyledSectionStatistics>
      <div>
        <DayAnTimeInteraction />
        <DayAndHourGraph
          graphFilterDay={graphFilterDay}
          isLoandingDay={isLoandingDay}
          onChangeDate={onChangeDate}
          handleStatisticsByDay={handleStatisticsByDay}
        />
      </div>
      <div>
        <UserAndAgentInteraction
          handleInformationByAgent={handleInformationByAgent}
          interactionFilterDay={interactionFilterDay}
          setInteractioFilterDay={setInteractioFilterDay}
          setInteractionFilterChannel={setInteractionFilterChannel}
          setCustomRange={setCustomRange}
          customRange={customRange}
          loandingChart={loandingChart}
          handleClickFilterByInteraction={handleCustomFilter}
        />
        <UserList userDate={userDate} />
      </div>
    </StyledSectionStatistics>
  );
};
