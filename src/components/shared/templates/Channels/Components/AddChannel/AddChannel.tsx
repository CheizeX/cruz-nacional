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

const dataChannel = [
  {
    id: 1,
    name: 'Web Chat',
    svg: 'webChat',
  },
  {
    id: 2,
    name: 'Whatsapp',
    svg: 'whatsapp',
  },
  {
    id: 3,
    name: 'Messenger',
    svg: 'Messenger',
  },
  {
    id: 4,
    name: 'Instagram',
    svg: 'Instagram',
  },
];

export const AddChannel: FC<IPropsAddChannel> = ({
  setIsOpenModal,
  setIsSectionWebChat,
  setSeletedComponent,
}) => {
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const handleToggle = (arg: string) => {
    setIsSectionWebChat(true);
    setIsOpenModal(false);
    setSeletedComponent(arg);
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
              {dataChannel.map((item) => (
                <button
                  onClick={() => handleToggle(item.name)}
                  key={item.id}
                  type="button">
                  <SVGIcon iconFile={`/icons/${item.svg}.svg`} />
                  <Text>{item.name}</Text>
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
