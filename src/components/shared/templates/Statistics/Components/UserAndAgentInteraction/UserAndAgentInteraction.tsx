import { FC, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledWrapperIteractionUser,
  StyledHeaderInteractionUser,
} from './UserAndAgentInteraction.styled';
import { FilterByDate } from '../FilterByDate/FilterByDate';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { IPropsUserAnAgentInteraction } from './UserAndAgentInteraction.interface';
import { ChannelInteractionFilter } from '../ChannelInteractionFilter/ChannelInteractionFilter';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';

export const UserAndAgentInteraction: FC<IPropsUserAnAgentInteraction> = ({
  setInteractionFilterChannel,
  handleInformationByAgent,
  setInteractioFilterDay,
  setCustomRange,
  handleClickFilterByInteraction,
  loandingChart,
  interactionFilterDay,
  customRange,
}) => {
  const { agentInteractionStatistics } = useAppSelector(
    (state) => state.userStatisticsState,
  );
  const { usersData } = useAppSelector((state) => state.users.useQueryState);
  const [currentPage, setCurrentPage] = useState(0);

  const dataPage = () => {
    if (usersData && usersData.length > 4) {
      return usersData.slice(currentPage, currentPage + 4);
    }
    return usersData;
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 4);
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 4);
    }
  };

  const dataStatistics = dataPage()?.map((item) => {
    const result = agentInteractionStatistics.filter(
      (ele) => ele._id === item._id,
    );

    return {
      id: item._id,
      agent: item.name.slice(0, 8),
      Interacción: !result[0]?.quantity ? 0 : result[0].quantity,
    };
  });

  return (
    <StyledWrapperIteractionUser>
      <StyledHeaderInteractionUser>
        <div>
          <Text color="black">Interacciones por agentes</Text>
        </div>
        <ChannelInteractionFilter
          setFilterChannel={setInteractionFilterChannel}
        />
        <FilterByDate
          day={interactionFilterDay}
          setDay={setInteractioFilterDay}
          setCustomRange={setCustomRange}
          customRange={customRange}
          handleClickFilterByInteraction={handleClickFilterByInteraction}
          loandingChart={loandingChart}
        />
      </StyledHeaderInteractionUser>
      <>
        <ResponsiveBar
          data={dataStatistics}
          keys={['Interacción']}
          indexBy="agent"
          margin={{ top: 30, right: 95, bottom: 35, left: 50 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={['#23A236']}
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
          labelSkipWidth={14}
          labelSkipHeight={14}
          labelTextColor={{
            from: 'theme',
            theme: 'grid.line.stroke',
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'right',
              direction: 'row',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 23,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'top-to-bottom',
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          onClick={({ data }) => handleInformationByAgent(data.id)}
          ariaLabel="Nivo bar chart demo"
        />
      </>

      <div>
        <button onClick={prevPage} type="button">
          <SVGIcon iconFile="/icons/chevron-left.svg" color="#999999" />
        </button>
        <button onClick={nextPage} type="button">
          <SVGIcon iconFile="/icons/chevron-right.svg" color="#999999" />
        </button>
      </div>
    </StyledWrapperIteractionUser>
  );
};
