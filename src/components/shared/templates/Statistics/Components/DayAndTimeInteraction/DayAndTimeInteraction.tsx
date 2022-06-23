import { FC } from 'react';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { Text } from '../../../../atoms/Text/Text';
import { CardInteraction } from '../CardInteraction/CardInteraction';
import {
  WrapperInteractionByDay,
  HeaderInteractionByDay,
  BodyInteractionByDay,
} from './DayAndTimeInteraction.styled';

export const DayAnTimeInteraction: FC = () => {
  const { dataHoursChart } = useAppSelector(
    (state) => state.userStatisticsState,
  );
  const dataWebChat = dataHoursChart?.reduce((a, b) => a + (b.Webchat || 0), 0);
  const dataWhatsapp = dataHoursChart?.reduce(
    (a, b) => a + (b.WhatsApp || 0),
    0,
  );
  const dataInstagram = dataHoursChart?.reduce(
    (a, b) => a + (b.Instagram || 0),
    0,
  );
  const dataMessenger = dataHoursChart?.reduce(
    (a, b) => a + (b.Messenger || 0),
    0,
  );
  const totalInteractionDay =
    dataWebChat + dataWhatsapp + dataInstagram + dataMessenger;

  return (
    <WrapperInteractionByDay>
      <HeaderInteractionByDay>
        <div>
          <Text color="black">Interacciones</Text>
        </div>
      </HeaderInteractionByDay>
      <BodyInteractionByDay>
        <div>
          <CardInteraction
            cardType="day"
            quantity={totalInteractionDay ?? 0}
            name="Por Día"
            icon="/icons/candelar_alt.svg"
          />
        </div>
        <div>
          <CardInteraction
            cardType="time"
            quantity={Math.round(totalInteractionDay / 4) ?? 0}
            name="Promedio por Hora"
            icon="/icons/stop-watch.svg"
          />
        </div>
      </BodyInteractionByDay>
    </WrapperInteractionByDay>
  );
};
