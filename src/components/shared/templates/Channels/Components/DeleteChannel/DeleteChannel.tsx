import { FC } from 'react';
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
  Size,
} from '../../../../atoms/Button/Button';
import { IDeleteChannel } from './DeleteChannel.interface';
// import { deleteChannel } from '../../../../../../api/channels';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { RootState } from '../../../../../../redux';

export const DeleteChannel: FC<IDeleteChannel> = ({ setIsSectionWebChat }) => {
  const showAlert = useToastContext();
  const { idChannel }: any = useSelector(
    (state: RootState) => state.channel.listChannelState,
  );

  const handleDelete = async () => {
    try {
      // const response = await deleteChannel(idChannel);
      // console.log(response);
      if (idChannel) {
        console.log(idChannel);
      } else {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: 'No se puede eliminar este canal.',
        });
      }
      setIsSectionWebChat(false);
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
          text="Eliminar"
          size={Size.MEDIUM}
        />
      </StyledFooterChannel>
    </StyledDeleteChannel>
  );
};
