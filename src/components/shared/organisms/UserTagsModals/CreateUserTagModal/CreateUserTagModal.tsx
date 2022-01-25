import React, { FC, useState } from 'react';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ContainerInput } from '../../../molecules/Input/ContainerInput';
import {
  ButtonMolecule,
  ButtonMoleculeProps,
  Size,
} from '../../../atoms/Button/Button';
import { StyledColorCheckboxProps } from './CreateUserTagModal.interface';
import {
  StyledColorCheckbox,
  StyledIconCheckTag,
  StyledModalBody,
  StyledModalColors,
  StyledModalCreateUserTag,
  StyledModalHeader,
} from './CreateUserTagModal.styles';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { tagsColorsArrayCreate } from './CreateUserTagModal.shared';
import { UserTagModalProps } from '../DeleteUserTagModal/DeleteUserTagModa.interface';
import { websocketContext } from '../../../../../chat';
import { createUserTag } from '../../../../../api/tags';

export const CreateUserTagModal: FC<
  StyledColorCheckboxProps & UserTagModalProps & ButtonMoleculeProps
> = ({ setOpenNewTag, setTagModal, tags }) => {
  const showAlert = useToastContext();
  const socket: any = React.useContext(websocketContext);

  const [selectedColor, setSelectedColor] = useState('');
  const [tagName, setTagName] = useState('');

  const handleSelectTagColor = (tag: string) => {
    setSelectedColor(tag);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagName(
      e.target.value
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    );
  };

  const handleClick = async () => {
    try {
      if (tagName?.length > 0 && selectedColor?.length > 0) {
        await createUserTag({
          name: tagName,
          color: selectedColor,
        });

        socket?.emit('newTag');

        setOpenNewTag(`${tags}`);

        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'Perfecto!',
          message: `La etiqueta se ha creado satisfactoriamente`,
        });
      } else {
        showAlert?.addToast({
          alert: Toast.WARNING,
          title: 'Cuidado!',
          message: 'Debes colocar un nombre y seleccionar un color',
        });
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${error}`,
      });
    }
  };

  return (
    <StyledModalCreateUserTag>
      <StyledModalHeader>
        <span>
          <button type="button" onClick={() => setOpenNewTag(`${tags}`)}>
            <SVGIcon iconFile="/icons/collapse-left.svg" />
          </button>
          <Text>Crear etiqueta</Text>
        </span>
        <button type="button" onClick={() => setTagModal(false)}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledModalHeader>
      <StyledModalBody>
        <Text>Nombre</Text>
        <ContainerInput
          setFocus={() => false}
          type="text"
          onChange={handleChange}
        />
        <Text>Color</Text>
        <StyledModalColors>
          {tagsColorsArrayCreate.map((item, index) => (
            <StyledColorCheckbox
              key={item.name}
              name={index.toString()}
              checked={selectedColor === item.color}
              onClick={() => handleSelectTagColor(item.color)}>
              <StyledIconCheckTag viewBox="-4 -4 32 32">
                <polyline points="20 6 9 17 4 12" />
              </StyledIconCheckTag>
            </StyledColorCheckbox>
          ))}
        </StyledModalColors>
        <ButtonMolecule text="Crear" size={Size.MEDIUM} onClick={handleClick} />
      </StyledModalBody>
    </StyledModalCreateUserTag>
  );
};
