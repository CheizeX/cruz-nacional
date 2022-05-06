import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledDeleteChannel,
  StyledInformationChannel,
  StyledIconChannel,
  StyledFooterChannel,
} from './DeleteChannel.styled';
import { Text } from '../../../../atoms/Text/Text';
import {
  ButtonMolecule,
  ButtonVariant,
  ButtonState,
  Size,
} from '../../../../atoms/Button/Button';
import { IDeleteChannel } from './DeleteChannel.interface';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { RootState } from '../../../../../../redux';
import { setlistChannel } from '../../../../../../redux/slices/channels/list-channel';
import { deleteChannel } from '../../../../../../api/channels';
import { useAppDispatch } from '../../../../../../redux/hook/hooks';

export const DeleteChannel: FC<IDeleteChannel> = ({
  setIsSectionWebChat,
  getChannelList,
}) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
  const [isLoanding, setIsLoanding] = useState<boolean>(false);

  const { idChannel } = useSelector(
    (state: RootState) => state.channel.listChannelState,
  );

  const handleDelete = async () => {
    try {
      setIsLoanding(true);
      const response = await deleteChannel(idChannel);
      setIsLoanding(false);
      dispatch(setlistChannel(response));
      setTimeout(() => {
        getChannelList();
        setIsSectionWebChat(false);
      }, 2000);
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  return (
    <StyledDeleteChannel>
      <StyledIconChannel>
        <SVGIcon iconFile="/icons/warning.svg" />
      </StyledIconChannel>
      <StyledInformationChannel>
        <Text>¿Estas seguro de querer eliminar este canal?</Text>
        <Text>
          Toda la información asociada a este canal dejará de estar disponible
        </Text>
      </StyledInformationChannel>
      <StyledFooterChannel>
        <ButtonMolecule
          onClick={() => setIsSectionWebChat(false)}
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
        />
        <ButtonMolecule
          onClick={handleDelete}
          state={isLoanding ? ButtonState.LOADING : ButtonState.NORMAL}
          text="Eliminar"
          size={Size.MEDIUM}
        />
      </StyledFooterChannel>
    </StyledDeleteChannel>
  );
};
