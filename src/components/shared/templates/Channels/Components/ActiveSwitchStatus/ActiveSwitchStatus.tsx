import { FC } from 'react';
import { useSelector } from 'react-redux';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledContainerActiveSwitchStatus,
  StyledBodyInformation,
} from './ActiveSwitchStatus.styled';
import { Text } from '../../../../atoms/Text/Text';
import {
  ButtonMolecule,
  Size,
  ButtonVariant,
} from '../../../../atoms/Button/Button';
import { IActiveSwitchStatus } from './ActiveSwitchStatus.interface';
import { RootState } from '../../../../../../redux';

export const ActiveSwitchStatus: FC<IActiveSwitchStatus> = ({
  setIsSectionWebChat,
  handleActiveSwitch,
}) => {
  const { statusChannel } = useSelector(
    (state: RootState) => state.channel.listChannelState,
  );

  return (
    <StyledContainerActiveSwitchStatus>
      <div>
        <SVGIcon iconFile="/icons/icon_transfer_confirmation.svg" />
      </div>
      <StyledBodyInformation>
        {statusChannel ? (
          <Text>¿Estás seguro de desactivar este canal</Text>
        ) : (
          <Text>¿Deseas activar este canal?</Text>
        )}
        {statusChannel ? (
          <Text>
            Una vez desactivado este canal no podrás recibir mas chat.
          </Text>
        ) : (
          <Text>
            Una vez que este activado este canal podrás empezar a recibir chat.
          </Text>
        )}
      </StyledBodyInformation>
      <div>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={() => setIsSectionWebChat(false)}
        />
        <ButtonMolecule
          text="Confimar"
          size={Size.MEDIUM}
          onClick={handleActiveSwitch}
        />
      </div>
    </StyledContainerActiveSwitchStatus>
  );
};
