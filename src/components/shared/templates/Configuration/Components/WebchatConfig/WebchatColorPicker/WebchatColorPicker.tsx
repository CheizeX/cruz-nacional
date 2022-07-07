/* eslint-disable sonarjs/no-identical-functions */
import { FC, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import {
  ButtonMolecule,
  ButtonVariant,
} from '../../../../../atoms/Button/Button';
import { Text } from '../../../../../atoms/Text/Text';
import { ICustomColorWebchatColorPicker } from './WebchatColorPicker.interface';
import {
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
} from '../../../../Channels/Components/CardChannel/CardChannel.styled';
import {
  StyledButonOneOrTwoWrapper,
  StyledStyledWebchatColorPickerByColor,
  StyledWebchatColorPickerCustomColor,
  StyledWebchatColorPickerTag,
  StyledWebchatColorPickerWrapper,
  StyledWebchatColorPickerWrapperColor,
  StyledWebchatIsAnimatedOrNot,
} from './WebchatColorPicker.styled';

export const WebchatColorPicker: FC<ICustomColorWebchatColorPicker> = ({
  primaryColor,
  secondaryColor,
  isCustomColor,
  colorName,
  setSecondaryColor,
  setPrimaryColor,
  setIsCustomColor,
  setColorName,
  isAnimated,
  setIsAnimated,
}) => {
  const [isOpenSectionColors, setIsSectionColors] = useState<string>('byColor');

  const ColorPaletteArrays = [
    {
      name: '0',
      color: '#6e28bf',
      secondColor: '#65edfa',
    },
    {
      name: '1',
      color: '#4facfe',
      secondColor: '#00f2fe',
    },
    {
      name: '2',
      color: '#2a27da',
      secondColor: '#00ccff',
    },
    {
      name: '3',
      color: '#0a0e88',
      secondColor: '#00b1ce',
    },
    {
      name: '4',
      color: '#3aa560',
      secondColor: '#b7e66c',
    },
    {
      name: '5',
      color: '#047c8d',
      secondColor: '#2ff289',
    },
    {
      name: '6',
      color: '#ff9a9e',
      secondColor: '#facbc4',
    },
    {
      name: '7',
      color: '#7c3ab7',
      secondColor: '#ff9aad',
    },
    {
      name: '8',
      color: '#ff4e6f',
      secondColor: '#fb9168',
    },
    {
      name: '9',
      color: '#ff5858',
      secondColor: '#f09819',
    },
    {
      name: '10',
      color: '#8a716d',
      secondColor: '#e8b794',
    },
    {
      name: '11',
      color: '#31003e',
      secondColor: '#c3286e',
    },
    {
      name: '12',
      color: '#98033a',
      secondColor: '#f74f28',
    },
    {
      name: '13',
      color: '#29323c',
      secondColor: '#485563',
    },
    {
      name: '14',
      color: `${primaryColor}`,
      secondColor: `${secondaryColor}`,
    },
  ];

  const handleSelectTagColor = (
    color1: string,
    color2: string,
    name: string,
  ) => {
    setPrimaryColor(color1);
    setSecondaryColor(color2);
    setColorName(name);
    if (name !== '14') {
      setIsCustomColor(false);
    }
  };
  const handleSelectedOneColor = () => {
    setIsSectionColors('customizeColor');
  };
  const handleSetOneColor = (color: string) => {
    setPrimaryColor(color);
    setSecondaryColor(color);
  };
  const handleSelectedGradient = () => {
    setIsSectionColors('firstGradient');
  };
  const hadleByColor = () => {
    setColorName('14');
    setIsCustomColor(true);
    setIsSectionColors('byColor');
  };
  const handleSecondColor = () => {
    setIsSectionColors('secondGradient');
  };
  const handleToggle = () => {
    setColorName('14');
    setIsCustomColor(true);
    setIsSectionColors('byColor');
  };

  return (
    <>
      <StyledWebchatIsAnimatedOrNot>
        {isAnimated ? (
          <Text color="#50da71">Animación ACTIVADA</Text>
        ) : (
          <Text color="#bec0be">Animación DESACTIVADA</Text>
        )}
        <div>
          {isAnimated ? (
            <ToogleComponentForMappedRestrictions
              onClick={() => setIsAnimated(false)}>
              <div />
            </ToogleComponentForMappedRestrictions>
          ) : (
            <ToogleComponentForMappedRestrictionsNoSel
              onClick={() => setIsAnimated(true)}>
              <div />
            </ToogleComponentForMappedRestrictionsNoSel>
          )}
        </div>
      </StyledWebchatIsAnimatedOrNot>
      <Text>Paleta de colores sugeridos</Text>
      <StyledWebchatColorPickerWrapper>
        {isOpenSectionColors === 'byColor' && (
          <div>
            <StyledStyledWebchatColorPickerByColor>
              {ColorPaletteArrays?.map(
                (item) =>
                  Number(item.name) < ColorPaletteArrays.length - 1 && (
                    <StyledWebchatColorPickerWrapperColor
                      key={item.name}
                      name={item.name}
                      checked={
                        (item.color === primaryColor &&
                          item.secondColor === secondaryColor) ||
                        colorName === item.name
                      }
                      primaryColor={item.color}
                      secondaryColor={item.secondColor}
                      isCustomColor={isCustomColor}
                      onClick={() =>
                        handleSelectTagColor(
                          item.color,
                          item.secondColor,
                          item.name,
                        )
                      }>
                      <StyledWebchatColorPickerTag
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                        isCustomColor={isCustomColor}
                        viewBox="-4 -4 32 32">
                        <polyline points="20 6 9 17 4 12" />
                      </StyledWebchatColorPickerTag>
                    </StyledWebchatColorPickerWrapperColor>
                  ),
              )}
            </StyledStyledWebchatColorPickerByColor>
            <StyledButonOneOrTwoWrapper>
              <ButtonMolecule
                text="Quiero un color uniforme"
                onClick={handleSelectedOneColor}
                variant={ButtonVariant.OUTLINED}
              />
              <ButtonMolecule
                text="Quiero un gradiente de 2 colores "
                onClick={handleSelectedGradient}
                variant={ButtonVariant.OUTLINED}
              />
            </StyledButonOneOrTwoWrapper>
          </div>
        )}
        {isOpenSectionColors === 'customizeColor' && (
          <StyledWebchatColorPickerCustomColor color={primaryColor}>
            <HexColorPicker color={primaryColor} onChange={handleSetOneColor} />
            <div>
              <Text>Hex</Text>
              <div>
                <HexColorInput
                  color={primaryColor}
                  prefixed
                  onChange={handleSetOneColor}
                />
              </div>
            </div>
            <div>
              <ButtonMolecule
                text="Listo!"
                onClick={hadleByColor}
                variant={ButtonVariant.OUTLINED}
              />
            </div>
          </StyledWebchatColorPickerCustomColor>
        )}
        {isOpenSectionColors === 'firstGradient' && (
          <StyledWebchatColorPickerCustomColor color={primaryColor}>
            <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
            <div>
              <Text>Hex</Text>
              <div>
                <HexColorInput
                  color={primaryColor}
                  prefixed
                  onChange={setPrimaryColor}
                />
              </div>
            </div>
            <div>
              <ButtonMolecule
                text="Continuar al 2° Color"
                onClick={handleSecondColor}
                variant={ButtonVariant.OUTLINED}
              />
            </div>
          </StyledWebchatColorPickerCustomColor>
        )}
        {isOpenSectionColors === 'secondGradient' && (
          <StyledWebchatColorPickerCustomColor color={secondaryColor}>
            <HexColorPicker
              color={secondaryColor}
              onChange={setSecondaryColor}
            />
            <div>
              <Text>Hex</Text>
              <div>
                <HexColorInput
                  color={secondaryColor}
                  prefixed
                  onChange={setSecondaryColor}
                />
              </div>
            </div>
            <div>
              <ButtonMolecule
                text="Listo!"
                onClick={handleToggle}
                variant={ButtonVariant.OUTLINED}
              />
            </div>
          </StyledWebchatColorPickerCustomColor>
        )}
      </StyledWebchatColorPickerWrapper>
    </>
  );
};
