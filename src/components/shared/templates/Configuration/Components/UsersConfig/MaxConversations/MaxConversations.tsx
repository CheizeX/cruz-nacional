/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react';
import {
  ButtonMolecule,
  ButtonState,
} from '../../../../../atoms/Button/Button';
import { Text } from '../../../../../atoms/Text/Text';
import { baseRestApi } from '../../../../../../../api/base';
import {
  StyledInputTypeNumber,
  StyledMaxConversations,
  StyledMaxConversationsBody,
  StyledMaxConversationsHeader,
} from './MaxConversations.styled';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../redux/hook/hooks';
import { getGeneralConfigurationData } from '../../../../../../../redux/slices/configuration/configuration-info';

export const MaxConversations: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { generalConfigurationData } = useAppSelector(
    (state) => state.configurationInfo,
  );
  const { maxChatsOnConversation } = generalConfigurationData;

  const [maxChats, setMaxChats] = useState(String(maxChatsOnConversation));
  const [loading, setLoading] = useState(false);

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
        <Text>Máximo de conversaciones por agente</Text>
      </StyledMaxConversationsHeader>
      <StyledMaxConversationsBody>
        <StyledInputTypeNumber
          type="number"
          name="max-conve"
          min="0"
          value={maxChats}
          onChange={(ev) => setMaxChats(ev.target.value)}
        />
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
