import React, { FC } from 'react';
import { ResponsivePie } from '@nivo/pie';
import {
  StyledDonutGraph,
  StyledTotalDonutGraph,
} from './ChatStateGraph.styled';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { ChatStatus } from '../../../../../../models/chat/chat';

interface ChatsStateGraphProps {
  data?: Array<ChatsStateGraphProps>;
}

export const ChatsStateGraph: FC<ChatsStateGraphProps> = () => {
  const { todayChats } = useAppSelector(
    (state) => state.dashboardFilterChatsByDate,
  );
  const sumValues = todayChats.length;
  const pending =
    todayChats.length > 0
      ? todayChats.filter(
          (chat) => chat.status === ChatStatus.ASSIGNMENT_PENDING,
        ).length
      : null;
  const onConversation =
    todayChats.length > 0
      ? todayChats.filter(
          (chat) =>
            chat.status === ChatStatus.ON_CONVERSATION &&
            chat.isPaused === false,
        ).length
      : null;
  const finished =
    todayChats.length > 0
      ? todayChats.filter((chat) => chat.status === ChatStatus.FINISHED).length
      : null;
  const onPause =
    todayChats.length > 0
      ? todayChats.filter(
          (chat) =>
            chat.status === ChatStatus.ON_CONVERSATION &&
            chat.isPaused === true,
        ).length
      : null;

  const data = [
    {
      id: 'Pendientes',
      value: pending,
      label: `${
        pending !== null ? ((pending / sumValues) * 100).toFixed() : 0
      }%`,
      color: '#F78F28',
    },
    {
      id: 'En conversación',
      value: onConversation,
      label: `${
        onConversation !== null
          ? ((onConversation / sumValues) * 100).toFixed()
          : 0
      }%`,
      // label: `${((onConversation / 14) * 100).toFixed()}%`,
      color: '#3AA4FF',
    },
    {
      id: 'Chat en Pausa',
      value: onPause,
      label: `${
        onPause !== null ? ((onPause / sumValues) * 100).toFixed() : 0
      }%`,
      // label: `${((onConversation / 14) * 100).toFixed()}%`,
      color: '#24C3A7',
    },
    {
      id: 'Finalizadas',
      value: finished,
      label: `${
        finished !== null ? ((finished / sumValues) * 100).toFixed() : 0
      }%`,
      color: '#B2B2B2',
    },
  ];

  return (
    <StyledDonutGraph>
      <ResponsivePie
        data={data}
        margin={{ top: 18, right: 0, bottom: 18, left: 0.5 }}
        sortByValue
        innerRadius={0.75}
        activeOuterRadiusOffset={2}
        colors={data.map((d) => d.color)}
        arcLinkLabelsTextOffset={-20}
        arcLinkLabelsTextColor="#000000"
        arcLinkLabelsOffset={1}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsDiagonalLength={13}
        arcLinkLabelsStraightLength={10}
        arcLinkLabelsThickness={0}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLinkLabel="label"
        enableArcLabels={false}
        arcLabelsRadiusOffset={0}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
        transitionMode="centerRadius"
        isInteractive={false}
        startAngle={-110}
        endAngle={360}
      />
      <StyledTotalDonutGraph>
        <div>{sumValues}</div>
        <p>Total</p>
      </StyledTotalDonutGraph>
    </StyledDonutGraph>
  );
};
