import { FC, useState } from 'react';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import {
  StyledWebChat,
  StyledHeaderSectionWebChat,
  StyledBodyWebChat,
  StyledFooterWebChat,
} from './SectionWebChat.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { IPropsWebChat } from './SectionWebChat.interface';
import { CustomWebChat } from './Components/CustomWebChat/CustomWebChat';
import { AvatarContainer } from './Components/AvatarContainer/AvatarContainer';
import { WrapperNameAndDescription } from './Components/WrapperNameAndDescription/WrapperNameAndDescription';
import { ColorPaletteWrap } from './Components/ColorPaletteWrap/ColorPaletteWrap';

const data = [
  {
    num: 1,
    message: 'Ingresa un nombre',
  },
  {
    num: 2,
    message: 'Seleciona un color',
  },
  {
    num: 3,
    message: 'Selecciona un avatar',
  },
  {
    num: 4,
    message: '¡Listo!',
  },
];

export const SectionWebChat: FC<IPropsWebChat> = ({ setIsSectionWebChat }) => {
  const [isSection, setIsSection] = useState<number>(1);
  const [primaryColor, setPrimaryColor] = useState<string>('#6e28bf');
  const [secondaryColor, setSecundaryColor] = useState<string>('#65edfa');
  const [customTitle, setCustomTitle] = useState<string>('Elipse Chat');
  const [customDescription, setCustomDescription] =
    useState<string>('Asistente Virtual');
  const [customAvatar, setCustomAvatar] = useState<string>('Robot1.svg');
  const [customizeMyAvatar, setCustomizeMyAvatar] = useState<boolean>(false);
  const [customIsColor, setCustomIsColor] = useState<boolean>(false);
  const [customizeByColor, setCustomizeByColor] = useState<string>('');

  // byColors, byGradient
  const handleToggle = () => {
    setIsSection(isSection + 1);
  };
  const prevToggle = () => {
    setIsSection(isSection - 1);
  };
  const onCloseModal = () => {
    setIsSectionWebChat(false);
    setIsSection(1);
  };

  return (
    <StyledWebChat>
      <StyledHeaderSectionWebChat>
        <Text>Añadir nuevo Web Chat</Text>
        <button type="button" onClick={onCloseModal}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderSectionWebChat>
      <StyledBodyWebChat isSection={isSection}>
        <div>
          <div>
            {data.map((item) => (
              <div key={item.num}>
                <div>
                  <div>{item.num}</div>
                  <Text>{item.message}</Text>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
        <div>
          {isSection === 1 ? (
            <>
              <Text>Ingresa nombre y descripción</Text>
              <WrapperNameAndDescription
                setCustomDescription={setCustomDescription}
                setCustomTitle={setCustomTitle}
              />
            </>
          ) : null}
          {isSection === 2 ? (
            <ColorPaletteWrap
              handleToggle={handleToggle}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              setSecundaryColor={setSecundaryColor}
              setPrimaryColor={setPrimaryColor}
              customIsColor={customIsColor}
              setCustomIsColor={setCustomIsColor}
              setCustomizeByColor={setCustomizeByColor}
              customizeByColor={customizeByColor}
            />
          ) : null}
          {isSection === 3 || isSection === 4 ? (
            <>
              <Text>Selecciona un avatar</Text>
              <AvatarContainer
                setCustomAvatar={setCustomAvatar}
                setIsSection={setIsSection}
                setCustomizeMyAvatar={setCustomizeMyAvatar}
                customAvatar={customAvatar}
                customizeMyAvatar={customizeMyAvatar}
              />
            </>
          ) : null}
        </div>
        <div>
          <div>
            <CustomWebChat
              avatar={customAvatar}
              title={customTitle}
              description={customDescription}
              customizeMyAvatar={customizeMyAvatar}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              customIsColor={customIsColor}
            />
          </div>
        </div>
      </StyledBodyWebChat>
      <StyledFooterWebChat>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
          onClick={prevToggle}
          state={isSection <= 1 ? ButtonState.DISABLED : ButtonState.NORMAL}
        />
        {isSection === 4 ? (
          <ButtonMolecule text="Confirmar" size={Size.MEDIUM} />
        ) : (
          <ButtonMolecule
            text="Siguiente"
            onClick={handleToggle}
            size={Size.MEDIUM}
          />
        )}
      </StyledFooterWebChat>
    </StyledWebChat>
  );
};
