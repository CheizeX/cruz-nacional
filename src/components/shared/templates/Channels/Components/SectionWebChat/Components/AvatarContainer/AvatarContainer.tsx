import { FC, useState } from 'react';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import { Event, ICustomAvatar } from './AvatarContainer.interface';

import {
  StyledAvatarContainer,
  StyledSectionPhoto,
  WrapperAvatar,
} from './AvatarContainer.styled';

export const AvatarContainer: FC<ICustomAvatar> = ({
  customAvatar,
  customizeMyAvatar,
  setCustomAvatar,
  setIsSection,
  setCustomizeMyAvatar,
}) => {
  const dataAvatar = [
    {
      id: '1',
      name: 'Robot1.svg',
    },
    { id: '2', name: 'Robot2.svg' },
    { id: '3', name: 'Robot3.svg' },
    {
      id: '4',
      name: 'Mujer.svg',
    },
    {
      id: '5',
      name: 'Mujer2.svg',
    },
    { id: '6', name: 'Mujer3.svg' },
    { id: '7', name: 'Hombre1.svg' },
    { id: '8', name: 'Hombre2.svg' },
    { id: '9', name: 'Hombre3.svg' },
    { id: '10', name: 'Mascota1.svg' },
    { id: '11', name: 'Mascota2.svg' },
    { id: '12', name: 'Mascota3.svg' },
  ];
  const [active, setActive] = useState<string>('');
  const handleToggle = (id: string, name: string) => {
    setCustomizeMyAvatar(false);
    setActive(id);
    setCustomAvatar(name);
    setIsSection(4);
  };

  const processImage = (event: Event) => {
    setCustomizeMyAvatar(true);
    const target = event.target as HTMLInputElement;
    const { files } = target;
    if (files && files.length > 0) {
      const imageFile = files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setCustomAvatar(imageUrl);
    } else {
      setCustomizeMyAvatar(false);
    }
  };
  return (
    <>
      <StyledAvatarContainer>
        <div>
          {dataAvatar.map((item) => (
            <div key={item.id}>
              <WrapperAvatar
                focused={item.id === active}
                onClick={() => handleToggle(item.id, item.name)}>
                {customizeMyAvatar && item.id === '13' ? (
                  <div>
                    <img src={customAvatar} alt={customAvatar} />
                  </div>
                ) : (
                  <SVGIcon iconFile={`/avatars/${item.name}`} />
                )}
              </WrapperAvatar>
            </div>
          ))}
        </div>
      </StyledAvatarContainer>
      <StyledSectionPhoto>
        <div>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={processImage}
          />
          <SVGIcon iconFile="/icons/camera.svg" />
          <SVGIcon iconFile="/icons/up-arrow-symbol.svg" />
          <Text>Personaliza tu avatar</Text>
        </div>
      </StyledSectionPhoto>
    </>
  );
};
