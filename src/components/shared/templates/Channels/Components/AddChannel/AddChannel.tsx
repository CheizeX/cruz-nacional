import { FC } from 'react';
import { ButtonMolecule, Size } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { IPropsAddChannel } from './AddChannel.interface';
import {
  StyledWrapperAddChannel,
  StyledHeaderAddChannel,
  StyledFooterAddChannel,
  StyledBodyAddChannel,
} from './AddChannel.styled';

export const AddChannel: FC<IPropsAddChannel> = ({
  setIsOpenModal,
  handleToggle,
  listChannel,
  showDivice,
}) => {
  const closeModal = () => {
    setIsOpenModal(false);
  };
  // valida el nombre
  const validateName = (text: string) => {
    if (text === 'unofficialWhatsApp') {
      return 'Whatsapp No Oficial';
    }
    if (text === 'officialWhatsApp') {
      return 'Whatsapp Oficial';
    }
    return text.slice(0, 1).toUpperCase().concat(text.slice(1, text.length));
  };

  const validSvg = (svg: string) => {
    if (svg === 'unofficialWhatsApp' || svg === 'officialWhatsApp') {
      return 'whatsapp';
    }
    if (svg === 'facebook') {
      return 'messenger';
    }
    return svg.toLocaleLowerCase();
  };

  return (
    <StyledWrapperAddChannel>
      <StyledHeaderAddChannel>
        <Text>Añadir nuevo canal</Text>
        <button type="button" onClick={() => setIsOpenModal(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderAddChannel>
      <StyledBodyAddChannel>
        <div />
        <div>
          <Text>Canales disponibles</Text>
          <div>
            <div>
              {listChannel.availableChannels &&
                listChannel.availableChannels.map((item) => (
                  <button
                    onClick={() => handleToggle(item.name)}
                    key={item._id}
                    disabled={item.name === 'unofficialWhatsApp' && showDivice}
                    type="button">
                    <SVGIcon iconFile={`/icons/${validSvg(item.name)}.svg`} />
                    <Text size="12px">{validateName(item.name)}</Text>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </StyledBodyAddChannel>
      <StyledFooterAddChannel>
        <ButtonMolecule
          text="Siguiente"
          size={Size.MEDIUM}
          onClick={closeModal}
        />
      </StyledFooterAddChannel>
    </StyledWrapperAddChannel>
  );
};
