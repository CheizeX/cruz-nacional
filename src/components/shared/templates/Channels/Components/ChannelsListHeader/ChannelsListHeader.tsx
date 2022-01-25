import { FC } from 'react';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { Text } from '../../../../atoms/Text/Text';
import { StyledChannelSectionHeader } from './ChannelsListHeader.styled';
import { IPropsHeader } from './ChannelsListHeader.interface';

export const ChannelsListHeader: FC<IPropsHeader> = ({ setIsOpenModal }) => {
  return (
    <StyledChannelSectionHeader>
      <Text>Canales añadidos</Text>
      <ButtonMolecule
        text="Añadir canal"
        bgColor="#878787"
        onClick={() => setIsOpenModal(true)}
      />
    </StyledChannelSectionHeader>
  );
};
