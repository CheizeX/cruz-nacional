/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import {
  ButtonMolecule,
  ButtonState,
} from '../../../../../../atoms/Button/Button';
import { Text } from '../../../../../../atoms/Text/Text';
import { baseRestApi } from '../../../../../../../../api/base';
import {
  StyledInputTypeNumber,
  StyledMaxConversations,
  StyledMaxConversationsBody,
  StyledMaxConversationsHeader,
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
  StyledInputContainer,
} from './MaxConversations.styled';
import { useToastContext } from '../../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../../molecules/Toast/Toast.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../redux/hook/hooks';
import { getGeneralConfigurationData } from '../../../../../../../../redux/slices/configuration/configuration-info';
import { Tooltip } from '../../../../../../atoms/Tooltip/Tooltip';
import { TooltipTarget } from '../../../../../../atoms/Tooltip/tooltip.styled';
import { TooltipPosition } from '../../../../../../atoms/Tooltip/tooltip.interface';

export const MaxConversations: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { maxChatsOnConversation, automaticAssignment } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData,
  );

  const [maxChats, setMaxChats] = useState(String(maxChatsOnConversation));
  const [loading, setLoading] = useState(false);

  const handleActive = async (arg: boolean) => {
    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/changeAutomaticAssignment`,
        {
          automaticAssignment: arg,
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
  };

  const handleClick = async () => {
    setLoading(true);
    if (maxChats !== String(maxChatsOnConversation)) {
      try {
        await baseRestApi.patch(
          `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/setMaxChatsOnConversation`,
          {
            newMax: maxChats,
          },
        );
        dispatch(getGeneralConfigurationData());
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'MÁXIMO ACTUALIZADO',
          message: `Se ha seteado el máximo de chats a ${maxChats}`,
        });
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

  return (
    <StyledMaxConversations>
      <StyledMaxConversationsHeader>
        <Text>Conversaciones por agente</Text>
        <Tooltip
          text="ENCOLADO AUTOMÁTICO: envía las conversaciones que ingresan automáticamente hacia los AGENTES disponibles.   LÍMITE DE CONVERSACIONES POR AGENTE: especifica la cantidad máxima de conversaciones que puede atender un agente al mismo tiempo. Cuando el valor es 0 significa que el agente puede tomar la cantidad de conversaciones que quiera."
          position={TooltipPosition.left}>
          <TooltipTarget>
            <FaInfoCircle />
          </TooltipTarget>
        </Tooltip>
      </StyledMaxConversationsHeader>
      <StyledMaxConversationsBody>
        <span>
          {automaticAssignment ? (
            <Text color="#50da71">Encolado automático activado</Text>
          ) : (
            <Text color="#bec0be">Encolado automático desactivado</Text>
          )}
          <div>
            {automaticAssignment ? (
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
        <StyledInputContainer quantity={Number(maxChats)}>
          <Text>
            {Number(maxChats) > 0
              ? 'Máximo de conversaciones simultáneas por agente'
              : 'Sin límite de conversaciones simultáneas por agente'}
          </Text>
          <StyledInputTypeNumber
            type="number"
            name="max-conve"
            min="0"
            value={maxChats}
            onChange={(ev) => setMaxChats(ev.target.value)}
          />
        </StyledInputContainer>
        <ButtonMolecule
          type="button"
          onClick={handleClick}
          text="Establecer nuevo máximo"
          state={
            loading
              ? ButtonState.LOADING
              : maxChats === String(maxChatsOnConversation)
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
      </StyledMaxConversationsBody>
    </StyledMaxConversations>
  );
};
