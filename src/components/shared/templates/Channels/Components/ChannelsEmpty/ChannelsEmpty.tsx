import { FC } from 'react';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { StyledChannelEmpty } from './ChannelsEmpty.styled';
import { IPropsChannelEmpty } from './ChannelsEmpty.interface';

export const ChannelsEmpty: FC<IPropsChannelEmpty> = ({ setIsOpenModal }) => {
  return (
    <StyledChannelEmpty>
      <div>
        <div>
          <div>
            <SVGIcon iconFile="/icons/whatsapp.svg" />
            <SVGIcon iconFile="/icons/instagram.svg" />
            <SVGIcon iconFile="/icons/telegram.svg" />
            <SVGIcon iconFile="/icons/messenger.svg" />
            <SVGIcon iconFile="/icons/webchat.svg" />
          </div>
          <div>
            <img src="/images/Logo-Elipse-AI.png" alt="elipse" />
            {/* <SVGIcon iconFile="/icons/sidebar-1.svg" /> */}
          </div>
        </div>
        <div>
          <Text>¡No has añadido ningun canal!</Text>
          <Text>
            Añadir un nuevo canal es realmente sencillo y no necesitas ningun
            conocimiento técnico
          </Text>
        </div>
        <ButtonMolecule
          text="Añadir canal"
          onClick={() => setIsOpenModal(true)}
        />
      </div>
    </StyledChannelEmpty>
  );
};
