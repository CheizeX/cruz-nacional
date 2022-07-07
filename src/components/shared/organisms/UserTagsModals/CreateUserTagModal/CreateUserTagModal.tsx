import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { UserTagModalProps } from '../DeleteUserTagModal/DeleteUserTagModa.interface';
// import { websocketContext } from '../../../../../chat';
import { createUserTag } from '../../../../../api/tags';
import { RootState } from '../../../../../redux';

export const CreateUserTagModal: FC<
  StyledColorCheckboxProps & UserTagModalProps & ButtonMoleculeProps
> = ({ setOpenNewTag, setTagModal, tags }) => {
  const showAlert = useToastContext();
  // const socket: any = React.useContext(websocketContext);

  const [selectedColor, setSelectedColor] = useState('');
  const [tagName, setTagName] = useState('');

  const { tagColors } = useSelector(
    (state: RootState) => state.tags.tagsQueryState,
  );
  const handleSelectTagColor = (tag: string) => {
    setSelectedColor(tag);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagName(
      e.target.value.toUpperCase(),
      // .split(' ')
      // .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      // .join(' ')
    );
  };

  const handleClick = async () => {
    try {
      if (tagName?.length > 0 && selectedColor?.length > 0) {
        await createUserTag({
          name: tagName.toUpperCase(),
          color: selectedColor,
        });

        // socket?.emit('newTag');
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
          value={tagName}
          onChange={handleChange}
        />
        <Text>Color</Text>
        <StyledModalColors>
          {tagColors &&
            tagColors.map((item) => (
              <StyledColorCheckbox
                key={item.name}
                name={item.color}
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
