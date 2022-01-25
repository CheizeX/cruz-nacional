import { FC } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { IPropsChart } from './ModalChart.interface';
import {
  StyledComponentChart,
  StyledHeaderComponentChart,
  StyledBodyModalChart,
  StyledFooterModal,
  StyledContainerTagModal,
} from './ModalChart.styled';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { ContainerWithOutTags } from '../../../../molecules/ContainerWithOutTags/ContainerWithOutTags';
import {
  ChatFinishedStatus,
  ChatStatus,
} from '../../../../../../models/chat/chat';

export const ModalChart: FC<IPropsChart> = ({ setComponentReview }) => {
  const [accessToken] = useLocalStorage('AccessToken', '');
  const { usersData } = useAppSelector((state) => state.users.useQueryState);
  const { reviewByAgent } = useAppSelector(
    (state) => state.review.chatContainerReviewState,
  );
  const { chatsByPeriod } = useAppSelector(
    (state) => state.dashboardFilterChatsByDate,
  );

  const { dateName } = useAppSelector(
    (state) => state.dashboardFilterChatsByDate,
  );
  const infoByAgent = usersData?.find((item) => item._id === reviewByAgent);
  const result = chatsByPeriod?.filter(
    (item) => item.assignedAgent?._id === infoByAgent?._id,
  );
  const sumChatFinished = chatsByPeriod?.filter(
    (item) =>
      item.assignedAgent &&
      item.assignedAgent?._id === infoByAgent?._id &&
      item.status === ChatStatus.FINISHED,
  ).length;
  const datosOnConversation = result.filter(
    (item) => item.status === ChatStatus.ON_CONVERSATION,
  );
  const datosIsTransfer = result.filter((item) => item.isTransfer === true);
  const datosUnsatisfatory = result.filter(
    (elem) => elem.finishedStatus === ChatFinishedStatus.SATISFACTORY,
  );

  const datosSatisfactory = result.filter(
    (item) => item.finishedStatus === ChatFinishedStatus.UNSATISFACTORY,
  );

  const data = [
    {
      id: 'Satisfactorios',
      label: 'Satisfactorio',
      value: ((datosSatisfactory.length / sumChatFinished) * 100).toFixed(),
      color: '#24C3A7',
    },
    {
      id: 'Insatisfactorios',
      label: 'Insatisfactorios',
      value: ((datosUnsatisfatory.length / sumChatFinished) * 100).toFixed(),
      color: '#F78F28',
    },
  ];

  return (
    <StyledComponentChart>
      <StyledHeaderComponentChart>
        <Text>{`Satisfactiorios e Insatisfactorios de ${
          infoByAgent && infoByAgent.name
        }`}</Text>
        <button onClick={() => setComponentReview(false)} type="button">
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderComponentChart>
      <StyledBodyModalChart>
        <div>
          <div>
            <span>
              {infoByAgent && infoByAgent.urlAvatar ? (
                <img
                  src={`${infoByAgent.urlAvatar}?token=${accessToken}`}
                  alt={infoByAgent.name.slice(0, 7)}
                />
              ) : (
                <SVGIcon iconFile="/icons/unknown_user.svg" />
              )}
            </span>
            <div>
              <Text>{infoByAgent && infoByAgent.name}</Text>
              <Text>{infoByAgent && infoByAgent.email}</Text>
            </div>
            <div>
              <BadgeMolecule
                bgColor="#24C3A7"
                rightIcon={() => (
                  <SVGIcon iconFile="/icons/small_message.svg" />
                )}>
                {datosOnConversation.length}
              </BadgeMolecule>
              <BadgeMolecule
                bgColor="#B2B2B2"
                rightIcon={() => (
                  <SVGIcon iconFile="/icons/exchange_alt.svg" />
                )}>
                {datosIsTransfer.length}
              </BadgeMolecule>
            </div>
            <Text>Etiquetas</Text>
            <div>
              {infoByAgent &&
              infoByAgent.tags &&
              infoByAgent.tags.length > 1 ? (
                infoByAgent.tags.map((item) => (
                  <StyledContainerTagModal key={item._id} isColor={item.color}>
                    {item.name}
                  </StyledContainerTagModal>
                ))
              ) : (
                <ContainerWithOutTags />
              )}
            </div>
          </div>
        </div>
        <div>
          <Text>{dateName}</Text>
          <ResponsivePie
            data={data}
            margin={{ top: 18, right: 0, bottom: 48, left: 0.5 }}
            sortByValue
            innerRadius={0.5}
            activeOuterRadiusOffset={2}
            colors={data.map((d) => d.color)}
            arcLinkLabelsTextOffset={-20}
            arcLinkLabelsTextColor="#000000"
            arcLinkLabelsOffset={1}
            isInteractive
            animate
            cornerRadius={4}
            padAngle={1}
            activeInnerRadiusOffset={10}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsDiagonalLength={13}
            arcLinkLabelsStraightLength={10}
            arcLinkLabelsThickness={0}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLinkLabel="label"
            enableArcLabels
            arcLabelsRadiusOffset={0.45}
            arcLabelsSkipAngle={10}
            enableArcLinkLabels={false}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
            transitionMode="centerRadius"
            startAngle={-110}
            arcLabel={(d) => `${d.value}%`}
            endAngle={360}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 44,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 24,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 15,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000',
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </StyledBodyModalChart>
      <StyledFooterModal />
    </StyledComponentChart>
  );
};
