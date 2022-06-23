import { FC, useEffect, useState, useCallback } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledReviewChart,
  StyledReviewChatsHeader,
  StyledChart,
} from './ReviewChart.styled';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { readReviewChats } from '../../../../../../api/chat';
import {
  setReviewChatsFinished,
  setReviewDatePicker,
} from '../../../../../../redux/slices/dashboard/dashboard-review';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { IPropsReview } from './ReviewChart.interface';
import { ContainerFilterReview } from '../ContainerFilterReview/ContainerFilterReview';
import { FIlterByPeriod } from '../FIlterByPeriod/FIlterByPeriod';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';
import { CardEmpty } from '../CardEmpty/CardEmpty';

export const ReviewChart: FC<IPropsReview> = ({
  selectedComponent,
  chartDatePicker,
  setChartDatePicker,
  setSelectedComponent,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const { reviewChats, datePicker } = useAppSelector(
    (state) => state.review.chatContainerReviewState,
  );

  const [isActive, setIsActive] = useState<number>(0);

  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const readReview = useCallback(async () => {
    try {
      const currentDts = await readReviewChats('0', 'currentWeek');
      if (currentDts.success === false) {
        dispatch(setReviewChatsFinished([]));
      } else {
        dispatch(setReviewDatePicker('Esta Semana'));
        dispatch(setReviewChatsFinished(currentDts));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);
  useEffect(() => {
    readReview();
  }, [readReview]);

  const weekdays = [
    { id: 2, day: 'Lunes', position: 0 },
    { id: 3, day: 'Martes', position: 1 },
    { id: 4, day: 'Miercoles', position: 2 },
    { id: 5, day: 'Jueves', position: 3 },
    { id: 6, day: 'Viernes', position: 4 },
    { id: 7, day: 'Sabado', position: 5 },
    { id: 1, day: 'Domingo', position: 6 },
  ];

  const dataReview = reviewChats?.map((item) => {
    const result = weekdays.filter((ele) => ele.id === Number(item._id));
    return {
      id: item._id,
      day: result[0].day,
      Insatisfactorio: item.unsatisfactory,
      Satisfactorio: item.satisfactory,
    };
  });

  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
    setSelectedComponent('REVIEW');
  };

  return (
    <StyledReviewChart>
      <StyledReviewChatsHeader>
        <Text>Chats Satisfactorios e Insatisfactorios</Text>
        <div>
          <button type="button" onClick={handleClick}>
            <BadgeMolecule
              leftIcon={() => <SVGIcon iconFile="/icons/candelar_alt.svg" />}>
              <Text>{datePicker}</Text>
              {isComponentVisible ? (
                <SVGIcon iconFile="/icons/chevron-square-up.svg" />
              ) : (
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              )}
            </BadgeMolecule>
          </button>
          {isComponentVisible && chartDatePicker === 0 ? (
            <div ref={ref}>
              <ContainerFilterReview
                setChartDatePicker={setChartDatePicker}
                chartDatePicker={chartDatePicker}
                setIsActive={setIsActive}
                isActive={isActive}
                setIsComponentVisible={setIsComponentVisible}
              />
            </div>
          ) : null}
          {isComponentVisible && chartDatePicker === 1 ? (
            <div ref={ref}>
              <FIlterByPeriod
                setDatePicker={setChartDatePicker}
                datePicker={chartDatePicker}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent}
                setIsComponentVisible={setIsComponentVisible}
              />
            </div>
          ) : null}
          {isComponentVisible && chartDatePicker === 2 ? (
            <div ref={ref}>
              <FIlterByPeriod
                setDatePicker={setChartDatePicker}
                datePicker={chartDatePicker}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent}
                setIsComponentVisible={setIsComponentVisible}
              />
            </div>
          ) : null}
        </div>
      </StyledReviewChatsHeader>
      <StyledChart>
        {reviewChats.length < 1 ? (
          <div>
            <CardEmpty />
          </div>
        ) : (
          <ResponsiveBar
            data={dataReview}
            keys={['Satisfactorio', 'Insatisfactorio']}
            indexBy="day"
            margin={{ top: 30, right: 130, bottom: 45, left: 60 }}
            padding={0.3}
            groupMode="grouped"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            enableGridX
            enableLabel={false}
            colors={['#24C3A7', '#F78F28']}
            defs={[
              {
                id: '1',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: '2',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            labelSkipWidth={14}
            labelSkipHeight={14}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
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
            ariaLabel="Nivo bar chart demo"
          />
        )}
      </StyledChart>
    </StyledReviewChart>
  );
};
