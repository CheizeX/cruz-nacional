import React, { FC, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../../redux/hook/hooks';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ButtonMolecule, Size } from '../../../atoms/Button/Button';
import { setTagByIdDelete } from '../../../../../redux/slices/tags/tag-seleted-delete';
import {
  StyledDeleteUserTagModal,
  StyledDeleteUserTagModalBody,
  StyledDeleteUserTagModalHeader,
} from './DeleteUserTagModal.styles';
import { UserTagModalProps } from './DeleteUserTagModa.interface';
// import { useTagManagement } from '../../../../../hooks/tags-management';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { websocketContext } from '../../../../../chat';
import { deleteTag } from '../../../../../api/tags';
import { RootState } from '../../../../../redux';

export const DeleteUserTagModal: FC<UserTagModalProps> = ({
  setOpenNewTag,
  setTagModal,
  tags,
}) => {
  const socket: any = useContext(websocketContext);
  const showAlert = useToastContext();

  const dispatch = useAppDispatch();
  const { tagDeleteById } = useSelector(
    (state: RootState) => state.tags.tagDeleteByIdState,
  );

  // elimina un tag de la lista de tags
  const handleDeleteTag = async () => {
    try {
      await deleteTag(tagDeleteById);

      socket?.emit('deleteTag');

      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'Perfecto',
        message: 'La etiqueta se ha eliminado satisfactoriamente',
      });
      dispatch(setTagByIdDelete(''));
      setOpenNewTag(`${tags}`);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'Ha ocurrido un Error',
        message: 'La etiqueta no se ha podido eliminar',
      });
    }
  };

  return (
    <StyledDeleteUserTagModal>
      <StyledDeleteUserTagModalHeader>
        <span>
          <button type="button" onClick={() => setOpenNewTag(`${tags}`)}>
            <SVGIcon iconFile="/icons/collapse-left.svg" />
          </button>
          <Text>Eliminar etiqueta</Text>
        </span>
        <button type="button" onClick={() => setTagModal(false)}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledDeleteUserTagModalHeader>
      <StyledDeleteUserTagModalBody>
        <div>
          <SVGIcon iconFile="/icons/warning.svg" />
        </div>
        <h2>
          <Text color="black">
            ¿Estás seguro de querer eliminar esta etiqueta?
          </Text>
        </h2>
        <p>
          <Text>
            La etiqueta será eliminada a todos los usuarios a los cuales fue
            asignada.
          </Text>
        </p>
        <ButtonMolecule
          text="Eliminar"
          size={Size.MEDIUM}
          onClick={handleDeleteTag}
        />
      </StyledDeleteUserTagModalBody>
    </StyledDeleteUserTagModal>
  );
};
