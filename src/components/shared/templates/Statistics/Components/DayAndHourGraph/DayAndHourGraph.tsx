import { FC } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import {
  WrapperDayAnHourGraph,
  StyledHeaderDayAndHourGraph,
} from './DayAndHourGraph.styled';
import { Text } from '../../../../atoms/Text/Text';
import { FilterByDay } from '../FilterByDay/FilterByDay';
import { IDayAndHourGraph } from './DayAndHourGraph.interface';
import { useAppSelector } from '../../../../../../redux/hook/hooks';

export const DayAndHourGraph: FC<IDayAndHourGraph> = ({
  onChangeDate,
  handleStatisticsByDay,
  graphFilterDay,
  isLoandingDay,
}) => {
  // dataHoursChart
  const { dataHoursChart } = useAppSelector(
    (state) => state.userStatisticsState,
  );

  const hoursData = [
    {
      id: 7,
      hours: '07:00',
    },
    {
      id: 8,
      hours: '08:00',
    },
    {
      id: 9,
      hours: '09:00',
    },
    {
      id: 10,
      hours: '10:00',
    },
    {
      id: 11,
      hours: '11:00',
    },
    {
      id: 12,
      hours: '12:00',
    },
    {
      id: 13,
      hours: '13:00',
    },
    {
      id: 14,
      hours: '14:00',
    },
    {
      id: 15,
      hours: '15:00',
    },
    {
      id: 16,
      hours: '16:00',
    },
    {
      id: 17,
      hours: '17:00',
    },
    {
      id: 18,
      hours: '18:00',
    },
    {
      id: 19,
      hours: '19:00',
    },
  ];

  const dataHoursGraph = hoursData.map((item) => {
    const hour = dataHoursChart.filter((ele) => ele._id === item.id);
    return {
      id: item.id,
      hours: item.hours,
      WhatsApp: hour[0]?.WhatsApp ?? 0,
      Webchat: hour[0]?.Webchat ?? 0,
      Messenger: hour[0]?.Messenger ?? 0,
      Instagram: hour[0]?.Instagram ?? 0,
    };
  });

  return (
    <WrapperDayAnHourGraph>
      <StyledHeaderDayAndHourGraph>
        <div>
          <Text color="black">Gestión de interacciones por día y hora</Text>
        </div>
        <FilterByDay
          onChangeDate={onChangeDate}
          handleStatisticsByDay={handleStatisticsByDay}
          graphFilterDay={graphFilterDay}
          isLoandingDay={isLoandingDay}
        />
      </StyledHeaderDayAndHourGraph>
      <ResponsiveBar
        data={dataHoursGraph}
        keys={['WhatsApp', 'Webchat', 'Messenger', 'Instagram']}
        indexBy="hours"
        margin={{ top: 20, right: 100, bottom: 50, left: 50 }}
        padding={0.2}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#1EC143', '#8520D0', '#4D5ECA', '#E6476F']}
        groupMode="grouped"
        isInteractive
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Horas',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Interacciones',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelTextColor={{
          from: 'theme',
          theme: 'grid.line.stroke',
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legendLabel={(datum) => `${datum.id}`}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 110,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 16,
            toggleSerie: true,
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) => {
          return `${e.id}: ${e.formattedValue}`;
        }}
      />
    </WrapperDayAnHourGraph>
  );
};
