import React, { FC, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../../redux/hook/hooks';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ContainerInput } from '../../../molecules/Input/ContainerInput';
import { ButtonMolecule, Size } from '../../../atoms/Button/Button';
import { UserTagModalProps } from '../DeleteUserTagModal/DeleteUserTagModa.interface';
import { StyledEditUserTagColorCheckboxProps } from './EditUserTagModal.interface';
import { setTagByIdEdit } from '../../../../../redux/slices/tags/tag-seleted-edit';
import {
  StyledEditUserTagColorCheckbox,
  StyledEditUserTagIcon,
  StyledEditUserTagModalBody,
  StyledEditUserTagModalColors,
  StyledEditUserTagModalHeader,
  StyledModalEditUserTag,
} from './EditUserTagModal.styles';
import { tagsColorsArrayEdit } from './EditUserTagModal.shared';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { websocketContext } from '../../../../../chat';
import { updateTag } from '../../../../../api/tags';
import { RootState } from '../../../../../redux';

export const EditUserTagModal: FC<
  StyledEditUserTagColorCheckboxProps & UserTagModalProps
> = ({ setOpenNewTag, setTagModal, tags }) => {
  const socket: any = useContext(websocketContext);

  const dispatch = useAppDispatch();
  const { tagEditById } = useSelector(
    (state: RootState) => state.tags.tagEditByIdState,
  );
  const [colorIndex, setColorIndex] = useState(0);

  const showAlert = useToastContext();

  // datos que voy a enviar para editar la etiqueta
  const [colorRgb, setSelectedColorRgb] = useState('#3AA4FF');
  const [tagName, setTagName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameCapitalized = e.target.value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    setTagName(nameCapitalized);
  };

  const handleSetColorIndex = (index: number, colorSelected: string) => {
    setColorIndex(index);
    setSelectedColorRgb(colorSelected);
  };

  const handleCloseModal = () => {
    setTagModal(false);
    dispatch(setTagByIdEdit(''));
  };

  const handleBackToPreviousModal = () => {
    setOpenNewTag(`${tags}`);
  };

  const handleEditUserTag = async () => {
    try {
      if (tagName?.length > 0 && colorRgb?.length > 0) {
        await updateTag(tagEditById, {
          name: tagName,
          color: colorRgb,
        });

        dispatch(setTagByIdEdit(''));

        socket?.emit('updateTag');

        setOpenNewTag(`${tags}`);

        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'MUY BIEN!',
          message: `La etiqueta se ha editado satisfactoriamente`,
        });
      } else {
        showAlert?.addToast({
          alert: Toast.WARNING,
          title: 'ATENCION',
          message: 'Debes colocar un nuevo nombre y seleccionar un color',
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
    <StyledModalEditUserTag>
      <StyledEditUserTagModalHeader>
        <span>
          <button type="button" onClick={handleBackToPreviousModal}>
            <SVGIcon iconFile="/icons/collapse-left.svg" />
          </button>
          <Text>Editar etiqueta</Text>
        </span>
        <button type="button" onClick={handleCloseModal}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledEditUserTagModalHeader>
      <StyledEditUserTagModalBody>
        <p>
          <Text>
            La edición de esta etiqueta se verá reflejada en todos los usuarios
            a los cuales fue asignada.
          </Text>
        </p>
        <Text>Nombre</Text>
        <ContainerInput
          setFocus={() => false}
          type="text"
          name="email"
          onChange={handleChange}
        />
        <Text>Color</Text>
        <StyledEditUserTagModalColors>
          {tagsColorsArrayEdit.map((item, index) => (
            <StyledEditUserTagColorCheckbox
              key={item.color}
              name={item.name}
              checked={colorIndex === index}
              onClick={() => handleSetColorIndex(index, item?.color)}>
              <StyledEditUserTagIcon viewBox="-4 -4 32 32">
                <polyline points="20 6 9 17 4 12" />
              </StyledEditUserTagIcon>
            </StyledEditUserTagColorCheckbox>
          ))}
        </StyledEditUserTagModalColors>
        <ButtonMolecule
          text="Editar"
          size={Size.MEDIUM}
          onClick={handleEditUserTag}
        />
      </StyledEditUserTagModalBody>
    </StyledModalEditUserTag>
  );
};
