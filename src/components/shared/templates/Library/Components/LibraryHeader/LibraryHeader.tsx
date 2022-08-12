import { FC } from 'react';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { IPropsLibraryHeader } from './LibraryHeader.interface';
import { StyledLibraryHeader } from './LibraryHeader.styled';

export const LibraryHeader: FC<IPropsLibraryHeader> = ({
  setIsLibraryModal,
}) => {
  return (
    <StyledLibraryHeader>
      <div>
        <Text>Mensajes disponibles</Text>
        <div>0</div>
      </div>
      <div>
        <ContainerInput
          setFocus={() => null}
          placeHolder="Buscar mensaje o indentificador..."
          LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
        />
        <div>
          <BadgeMolecule
            rightIcon={() => (
              <SVGIcon iconFile="/icons/chevron-square-up.svg" />
            )}>
            <Text>Ver todos</Text>
          </BadgeMolecule>
        </div>
        <div>
          <ButtonMolecule
            bgColor="#5C5C5C"
            text="Crear Mensaje"
            onClick={() => setIsLibraryModal(true)}
          />
        </div>
      </div>
    </StyledLibraryHeader>
  );
};
