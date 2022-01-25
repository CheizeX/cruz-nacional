import { FC, useState, useRef } from 'react';
import {
  StyledCardChannel,
  StyledPicture,
  StyledBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  DropdownContainerCard,
  StyledWhatsApp360,
  StyledFacebookService,
} from './CardChannel.styled';
import { IPropsCardChannel } from './CardChannel.interface';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Dropdown } from '../../../../atoms/Dropdown/Dropdown';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';

export const CardChannel: FC<IPropsCardChannel> = ({
  name,
  icon,
  service,
  isActive,
  image,
  providerName,
  setIsSectionWebChat,
  setSeletedComponent,
}) => {
  const [toggle, setToggle] = useState<boolean>(isActive);
  const inputRef = useRef(null);
  const handleClickCard = () => {
    setSeletedComponent('DeleteChannel');
    setIsSectionWebChat(true);
  };
  return (
    <StyledCardChannel>
      <div>
        <StyledPicture>
          <div>
            <img src={`${image}`} alt="No se encontro la imagen" />
          </div>
          <SVGIcon iconFile={`/icons/${icon}.svg`} />
        </StyledPicture>
        <div>
          <span>{name}</span>
          <Text>Servicio al Cliente</Text>
        </div>
        <div>
          <div>
            <StyledBoxWrapper>
              <CheckBox type="checkbox" />
              <CheckBoxLabel
                isChecked={toggle}
                ref={inputRef}
                onClick={() => setToggle(!toggle)}
              />
            </StyledBoxWrapper>
            <Dropdown
              triggerElement={() => (
                <SVGIcon iconFile="/icons/user_options.svg" />
              )}>
              <DropdownContainerCard>
                {/* <BadgeMolecule
                  bgColor="transparent"
                  leftIcon={() => <SVGIcon iconFile="/icons/pen.svg" />}>
                  <button type="button">
                    <Text>Editar</Text>
                  </button>
                </BadgeMolecule> */}
                <BadgeMolecule
                  bgColor="transparent"
                  leftIcon={() => <SVGIcon iconFile="/icons/delete.svg" />}>
                  <button type="button" onClick={handleClickCard}>
                    <Text>Eliminar </Text>
                  </button>
                </BadgeMolecule>
              </DropdownContainerCard>
            </Dropdown>
          </div>
        </div>
      </div>
      <div>
        {providerName === '360' && service === 'WhatsApp' ? (
          <StyledWhatsApp360>
            {/* <div>
              <span>360</span>
            </div>
            <span>DIALOG</span> */}
            <img src="/images/dialog.png" alt="" />
          </StyledWhatsApp360>
        ) : null}
        {!providerName && service === 'Messenger' ? (
          <StyledFacebookService>
            <div>
              <span>facebook</span>
            </div>
          </StyledFacebookService>
        ) : null}
        <div>
          <Text>{service}</Text>
        </div>
      </div>
    </StyledCardChannel>
  );
};
