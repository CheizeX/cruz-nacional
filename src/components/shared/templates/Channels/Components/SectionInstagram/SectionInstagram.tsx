import { FC, useState } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledHeaderInstagram,
  StyledSectionInstagram,
  StyledBodyInstagram,
  StyledFooterInstagram,
} from './SectionInstagram.styled';
import { IPropsInstagram } from './SectionInstagram.inteface';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { InstructionsInstagram } from './Component/InstructionsInstagram/InstructionsInstagram';

const dataInstagram = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Vincula tu cuenta de Instagram',
  },
  {
    num: 3,
    message: '¡Listo!',
  },
];
export const SectionComponentInstagram: FC<IPropsInstagram> = ({
  setIsSectionWebChat,
}) => {
  const [isSectionComponent, setIsSectionComponent] = useState<number>(1);

  return (
    <StyledSectionInstagram>
      <StyledHeaderInstagram>
        <Text>Añadir nuevo canal con Instagram</Text>
        <button type="button" onClick={() => setIsSectionWebChat(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderInstagram>
      <StyledBodyInstagram isSectionComponent={isSectionComponent}>
        <div>
          <div>
            {dataInstagram.map((item) => (
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
          <InstructionsInstagram />
        </div>
      </StyledBodyInstagram>
      <StyledFooterInstagram>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          onClick={() => setIsSectionComponent(-1)}
          size={Size.MEDIUM}
          state={
            isSectionComponent <= 1 ? ButtonState.DISABLED : ButtonState.NORMAL
          }
        />
        <ButtonMolecule
          onClick={() => setIsSectionComponent(+1)}
          text="Abrir en Facebook"
          size={Size.MEDIUM}
        />
      </StyledFooterInstagram>
    </StyledSectionInstagram>
  );
};
