import { FC } from 'react';
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

export const DeleteChannel: FC<IDeleteChannel> = ({ setIsSectionWebChat }) => {
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
          onClick={() => null}
          text="Eliminar"
          size={Size.MEDIUM}
        />
      </StyledFooterChannel>
    </StyledDeleteChannel>
  );
};
