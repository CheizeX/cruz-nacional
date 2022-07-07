/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import {
  ButtonMolecule,
  ButtonState,
} from '../../../../../../atoms/Button/Button';
import { Text } from '../../../../../../atoms/Text/Text';
import { baseRestApi } from '../../../../../../../../api/base';
import { useToastContext } from '../../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../../molecules/Toast/Toast.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../redux/hook/hooks';
import { getGeneralConfigurationData } from '../../../../../../../../redux/slices/configuration/configuration-info';
import { TooltipTarget } from '../../../../../../atoms/Tooltip/tooltip.styled';
import { TooltipPosition } from '../../../../../../atoms/Tooltip/tooltip.interface';
import { Tooltip } from '../../../../../../atoms/Tooltip/Tooltip';
import {
  StyledCloseChatsByInactivity,
  StyledCloseChatsByInactivityBody,
  StyledInputTypeNumber,
  StyledCloseChatsByInactivityHeader,
} from './CloseChatsByInactivity.styled';
import {
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
} from '../../../../../Channels/Components/CardChannel/CardChannel.styled';

export const CloseChatsByInactivity: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { redDuration, yellowDuration, neutralDuration, finishChat, isActive } =
    useAppSelector(
      (state) => state.configurationInfo.generalConfigurationData.trafficLight,
    );

  const [closeTime, setCloseTime] = useState(String(redDuration));
  const [loading, setLoading] = useState(false);

  const handleClick = async (onOff?: string) => {
    setLoading(true);
    if (closeTime !== String(redDuration) || onOff) {
      try {
        await baseRestApi.patch(
          `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/trafficLightConfiguration`,
          {
            isActive,
            finishChat: onOff || finishChat,
            neutral: neutralDuration,
            yellow: yellowDuration,
            red: closeTime,
          },
        );
        dispatch(getGeneralConfigurationData());
        if (!onOff) {
          showAlert?.addToast({
            alert: Toast.SUCCESS,
            title: 'CONVERSACION INACTIVA',
            message: `El tiempo que dura una conversación inactiva, ahora es ${closeTime} minutos.`,
          });
        }
      } catch (error) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'CONVERSACION INACTIVA',
          message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
        });
      }
    }
    setLoading(false);
  };

  return (
    <StyledCloseChatsByInactivity>
      <StyledCloseChatsByInactivityHeader>
        <Text>Cancelación por inactividad</Text>
        <Tooltip
          text={`La cancelación puede activarse para finalizar las conversaciones que están mucho tiempo inactivas.
          Debe definirse el tiempo máximo de inactividad, para que una vez transcurrido el mismo, se efectúe automáticamente la finalización del o los chats alcanzados por el rango.`}
          position={TooltipPosition.left}>
          <TooltipTarget>
            <FaInfoCircle />
          </TooltipTarget>
        </Tooltip>
      </StyledCloseChatsByInactivityHeader>
      <StyledCloseChatsByInactivityBody>
        <span>
          {finishChat ? (
            <Text color="#50da71">Cancelación activada</Text>
          ) : (
            <Text color="#bec0be">Cancelación desactivada</Text>
          )}
          <div>
            {finishChat ? (
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
              name="max-conve"
              min="0"
              value={closeTime}
              onChange={(ev) => setCloseTime(ev.target.value)}
            />
          </div>
          <ButtonMolecule
            type="button"
            onClick={() => handleClick()}
            text="Establecer cancelación"
            state={
              loading
                ? ButtonState.LOADING
                : closeTime === String(redDuration)
                ? ButtonState.DISABLED
                : ButtonState.NORMAL
            }
          />
        </div>
      </StyledCloseChatsByInactivityBody>
    </StyledCloseChatsByInactivity>
  );
};
