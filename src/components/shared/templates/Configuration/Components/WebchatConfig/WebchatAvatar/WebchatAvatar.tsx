import { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { Tooltip } from '../../../../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../../../../atoms/Tooltip/tooltip.interface';
import { ICustomWebchatAvatar } from './WebchatAvatar.interface';

import {
  StyledWebchatAvatarBody,
  StyledWebchatAvatarContainer,
  StyledWebchatAvatarHeader,
  WrapperWebchatAvatar,
} from './WebchatAvatar.styled';

export const dataWebchatAvatar = [
  { id: '1', name: 'Robot_1' },
  { id: '2', name: 'Robot_2' },
  { id: '3', name: 'Robot_3' },
  { id: '4', name: 'Mujer_1' },
  { id: '5', name: 'Mujer_2' },
  { id: '6', name: 'Mujer_3' },
  { id: '7', name: 'Hombre_1' },
  { id: '8', name: 'Hombre_2' },
  { id: '9', name: 'Hombre_3' },
  { id: '10', name: 'Mascota_1' },
  { id: '11', name: 'Mascota_2' },
  { id: '12', name: 'Mascota_3' },
];

export const WebchatAvatarContainer: FC<ICustomWebchatAvatar> = ({
  customAvatar,
  setCustomAvatar,
}) => {
  const [active, setActive] = useState<string>(
    dataWebchatAvatar.find((item) => item.name === customAvatar)?.id || '',
  );

  const handleToggle = (id: string, name: string) => {
    setActive(id);
    setCustomAvatar(name);
  };

  return (
    <StyledWebchatAvatarContainer>
      <StyledWebchatAvatarHeader>
        <Text>ÁVATAR</Text>
        <Tooltip
          text="Puedes seleccionar el Ávatar que llevará tu Webchat"
          position={TooltipPosition.top}>
          <FaInfoCircle />
        </Tooltip>
      </StyledWebchatAvatarHeader>
      <StyledWebchatAvatarBody>
        {dataWebchatAvatar.map((item) => (
          <div key={item.id}>
            <WrapperWebchatAvatar
              focused={item.id === active}
              onClick={() => handleToggle(item.id, item.name)}>
              <SVGIcon iconFile={`/avatars/${item.name}.svg`} />
            </WrapperWebchatAvatar>
          </div>
        ))}
      </StyledWebchatAvatarBody>
    </StyledWebchatAvatarContainer>
  );
};
