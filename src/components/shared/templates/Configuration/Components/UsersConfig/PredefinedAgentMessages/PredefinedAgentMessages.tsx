/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import {
  ButtonMolecule,
  ButtonState,
} from '../../../../../atoms/Button/Button';
import { Text } from '../../../../../atoms/Text/Text';
import { baseRestApi } from '../../../../../../../api/base';
import {
  StyledTextArea,
  StyledPredefinedAgentMessages,
  StyledPredefinedAgentMessagesBody,
  StyledPredefinedAgentMessagesHeader,
} from './PredefinedAgentMessages.styled';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../redux/hook/hooks';
import { getGeneralConfigurationData } from '../../../../../../../redux/slices/configuration/configuration-info';
import { Tooltip } from '../../../../../atoms/Tooltip/Tooltip';
import { TooltipTarget } from '../../../../../atoms/Tooltip/tooltip.styled';
import { TooltipPosition } from '../../../../../atoms/Tooltip/tooltip.interface';
import {
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
} from '../../../../Channels/Components/CardChannel/CardChannel.styled';

export const PredefinedAgentMessages: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { welcomeMessage, goodbyeMessage, isActive } = useAppSelector(
    (state) =>
      state.configurationInfo.generalConfigurationData.greetingMessages,
  );

  const [welcome, setWelcome] = useState(welcomeMessage);
  const [goodbye, setGoodbye] = useState(goodbyeMessage);
  const [loading, setLoading] = useState(false);

  const handleGreetingMessages = async () => {
    setLoading(true);
    if (welcome !== welcomeMessage || goodbye !== goodbyeMessage) {
      try {
        await baseRestApi.patch(
          `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/greetingMessagesConfig`,
          {
            welcomeMessage: welcome,
            goodbyeMessage: goodbye,
            isActive,
          },
        );
        dispatch(getGeneralConfigurationData());
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'MENSAJES DE SALUDO',
          message: `La modificación se ha realizado correctamente`,
        });
      } catch (error) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
        });
      }
    }
    setLoading(false);
  };

  const handleActive = async (arg: boolean) => {
    setLoading(true);

    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/changeStatusGreetingMessages`,
        {
          isActive: arg,
        },
      );
      dispatch(getGeneralConfigurationData());
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
      });
    }

    setLoading(false);
  };

  return (
    <StyledPredefinedAgentMessages>
      <StyledPredefinedAgentMessagesHeader>
        <Text>Mensajes Predeterminados</Text>
        <Tooltip
          text="Cuando los Mensajes Predeterminados se activan, el agente va a contestar con un saludo de bienvenida y un saludo final. Estos mensajes pueden personalizarse editando los que se encuentran seteados por defecto. Si se quiere incluir el nombre del agente en el mensaje debe escribir la palabra agente dentro de llaves { } de la siguiente manera: {agente}"
          position={TooltipPosition.bottom}>
          <TooltipTarget>
            <FaInfoCircle />
          </TooltipTarget>
        </Tooltip>
      </StyledPredefinedAgentMessagesHeader>
      <StyledPredefinedAgentMessagesBody>
        <span>
          {isActive ? (
            <Text color="#50da71">Mensajes activados</Text>
          ) : (
            <Text color="#bec0be">Mensajes desactivados</Text>
          )}
          <div>
            {isActive ? (
              <ToogleComponentForMappedRestrictions
                onClick={() => handleActive(false)}>
                <div />
              </ToogleComponentForMappedRestrictions>
            ) : (
              <ToogleComponentForMappedRestrictionsNoSel
                onClick={() => handleActive(true)}>
                <div />
              </ToogleComponentForMappedRestrictionsNoSel>
            )}
          </div>
        </span>
        <Text>Saludo Inicial</Text>
        <StyledTextArea
          name="bienvenida"
          value={welcome}
          onChange={(ev) => setWelcome(ev.target.value)}
        />
        <Text>Saludo Final</Text>
        <StyledTextArea
          name="despedida"
          value={goodbye}
          onChange={(ev) => setGoodbye(ev.target.value)}
        />
        <ButtonMolecule
          type="button"
          onClick={handleGreetingMessages}
          text="Establecer Mensajes"
          state={
            loading
              ? ButtonState.LOADING
              : welcome === welcomeMessage && goodbye === goodbyeMessage
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
      </StyledPredefinedAgentMessagesBody>
    </StyledPredefinedAgentMessages>
  );
};
