/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import { Text } from '../../../../../../../atoms/Text/Text';
import { baseRestApi } from '../../../../../../../../../api/base';
import {
  StyledInputTypeNumber,
  StyledChatsAlertsByTime,
  StyledChatsAlertsByTimeBody,
  StyledChatsAlertsByTimeHeader,
} from './ChatsAlertsByTime.styled';
import { useToastContext } from '../../../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../../../molecules/Toast/Toast.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../../redux/hook/hooks';
import { getGeneralConfigurationData } from '../../../../../../../../../redux/slices/configuration/configuration-info';
import { TooltipTarget } from '../../../../../../../atoms/Tooltip/tooltip.styled';
import { TooltipPosition } from '../../../../../../../atoms/Tooltip/tooltip.interface';
import { Tooltip } from '../../../../../../../atoms/Tooltip/Tooltip';
import {
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
} from '../../../../../../Channels/Components/CardChannel/CardChannel.styled';
import {
  ButtonMolecule,
  ButtonState,
} from '../../../../../../../atoms/Button/Button';

export const ChatsAlertsByTime: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { redDuration, yellowDuration, neutralDuration, isActive, finishChat } =
    useAppSelector(
      (state) => state.configurationInfo.generalConfigurationData.trafficLight,
    );

  const [neutralDurationAlert, setNeutralDurationAlert] = useState(
    String(neutralDuration),
  );
  const [yellowDurationAlert, setYellowDurationAlert] = useState(
    String(yellowDuration),
  );
  const [loading, setLoading] = useState(false);

  const handleClick = async (onOff?: string) => {
    setLoading(true);
    if (
      neutralDurationAlert !== String(neutralDuration) ||
      yellowDurationAlert !== String(yellowDuration) ||
      onOff
    ) {
      try {
        await baseRestApi.patch(
          `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/trafficLightConfiguration`,
          {
            isActive: onOff || isActive,
            finishChat,
            neutral: neutralDurationAlert,
            yellow: yellowDurationAlert,
            red: redDuration,
          },
        );
        dispatch(getGeneralConfigurationData());
        if (!onOff) {
          showAlert?.addToast({
            alert: Toast.SUCCESS,
            title: 'ALERTAS ACTUALIZADAS',
            message: `Se han establecido nuevas alertas de tiempo de inactividad`,
          });
        }
      } catch (error) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR AL ACTUALIZAR',
          message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
        });
      }
    }
    setLoading(false);
  };

  const handleAlertsValues = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    if (name === 'yellow') {
      setNeutralDurationAlert(e.target.value);
      if (Number(e.target.value) >= Number(yellowDurationAlert)) {
        setYellowDurationAlert(String(Number(e.target.value) + 1));
      }
    }
    if (name === 'red') {
      if (Number(e.target.value) <= Number(neutralDurationAlert)) {
        setYellowDurationAlert(String(Number(e.target.value) + 1));
      } else {
        setYellowDurationAlert(e.target.value);
      }
    }
  };

  return (
    <StyledChatsAlertsByTime>
      <StyledChatsAlertsByTimeHeader>
        <Text>Alertas por demora de atención</Text>
        <Tooltip
          text={`Las alertas pueden activarse para ayudar a los agentes a mantener una conversación activa.
          En caso de estar activadas, deberán definirse los minutos transcurridos desde la última interacción con el agente. 
          Hay dos tipos de alerta: la AMARILLA que da un primer aviso de precaución haciendo que la conversación parpadee en amarillo, y la ROJA que da un segundo aviso parpadeando en rojo.`}
          position={TooltipPosition.left}>
          <TooltipTarget>
            <FaInfoCircle />
          </TooltipTarget>
        </Tooltip>
      </StyledChatsAlertsByTimeHeader>
      <StyledChatsAlertsByTimeBody>
        <span>
          {isActive ? (
            <Text color="#50da71">Alertas activadas</Text>
          ) : (
            <Text color="#bec0be">Alertas desactivadas</Text>
          )}
          <div>
            {isActive ? (
              <ToogleComponentForMappedRestrictions
                onClick={() => handleClick('false')}>
                <div />
              </ToogleComponentForMappedRestrictions>
            ) : (
              <ToogleComponentForMappedRestrictionsNoSel
                onClick={() => handleClick('true')}>
                <div />
              </ToogleComponentForMappedRestrictionsNoSel>
            )}
          </div>
        </span>
        <div>
          <div>
            <div>minutos</div>
            <StyledInputTypeNumber
              type="number"
              name="yellow"
              min="1"
              value={neutralDurationAlert}
              onChange={(e) => handleAlertsValues(e, 'yellow')}
            />
            <div>minutos</div>
            <StyledInputTypeNumber
              type="number"
              name="red"
              min="1"
              value={yellowDurationAlert}
              onChange={(e) => handleAlertsValues(e, 'red')}
            />
          </div>
          <ButtonMolecule
            type="button"
            onClick={() => handleClick()}
            text="Establecer alertas"
            state={
              loading
                ? ButtonState.LOADING
                : neutralDurationAlert === String(neutralDuration) &&
                  yellowDurationAlert === String(yellowDuration)
                ? ButtonState.DISABLED
                : ButtonState.NORMAL
            }
          />
        </div>
      </StyledChatsAlertsByTimeBody>
    </StyledChatsAlertsByTime>
  );
};
