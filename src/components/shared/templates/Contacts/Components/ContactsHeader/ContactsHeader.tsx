import { FC } from 'react';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { StyledWrapperContatsHeader } from './ContactsHeader.styled';
import { IPropsContactsHeader } from './ContactsHeader.interface';

export const ContactsHeader: FC<IPropsContactsHeader> = ({
  dataContacts,
  onChange,
  setSelectedContact,
  setIsOpenModal,
}) => {
  const handleOpenCreateContact = () => {
    setIsOpenModal(true);
    setSelectedContact('create');
  };
  return (
    <StyledWrapperContatsHeader>
      <div>
        <Text>Contactos disponibles</Text>
        <div>{dataContacts.length === undefined ? 0 : dataContacts.length}</div>
      </div>
      <div>
        <ContainerInput
          setFocus={() => null}
          placeHolder="Buscar contacto..."
          LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
          onChange={onChange}
        />
        <span>
          <ButtonMolecule
            bgColor="#5C5C5C"
            text="Crear Contacto"
            onClick={handleOpenCreateContact}
          />
        </span>
      </div>
    </StyledWrapperContatsHeader>
  );
};
