import { FC, useState, useRef } from 'react';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import { Event, ICustomAvatar } from './AvatarContainer.interface';

import {
  StyledAvatarContainer,
  StyledSectionPhoto,
  WrapperAvatar,
} from './AvatarContainer.styled';

export const dataAvatar = [
  {
    id: '1',
    name: 'Robot_1',
  },
  { id: '2', name: 'Robot_2' },
  { id: '3', name: 'Robot_3' },
  {
    id: '4',
    name: 'Mujer_1',
  },
  {
    id: '5',
    name: 'Mujer_2',
  },
  { id: '6', name: 'Mujer_3' },
  { id: '7', name: 'Hombre_1' },
  { id: '8', name: 'Hombre_2' },
  { id: '9', name: 'Hombre_3' },
  { id: '10', name: 'Mascota_1' },
  { id: '11', name: 'Mascota_2' },
  { id: '12', name: 'Mascota_3' },
];

export const AvatarContainer: FC<ICustomAvatar> = ({
  customAvatar,
  customizeMyAvatar,
  setCustomAvatar,
  setIsSection,
  setCustomizeMyAvatar,
}) => {
  const [active, setActive] = useState<string>('');
  const hiddenFileInput = useRef(null);

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
  // const handleClick = (event: any) => {
  //   console.log(hiddenFileInput, 'holaaaaaaaaaaa');
  //   hiddenFileInput.current.click();
  // };
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
                  <SVGIcon iconFile={`/avatars/${item.name}.svg`} />
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
            ref={hiddenFileInput}
            name="fileItem"
            id="fileItem"
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
