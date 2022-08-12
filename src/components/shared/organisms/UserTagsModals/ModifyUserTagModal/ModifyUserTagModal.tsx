import React, { FC, useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../../redux/hook/hooks';
import { RootState } from '../../../../../redux';
import { Dropdown } from '../../../atoms/Dropdown/Dropdown';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ContainerInput } from '../../../molecules/Input/ContainerInput';
import { Checkbox } from '../../../atoms/Checkbox/Checkbox';
import { BadgeMolecule } from '../../../molecules/Badge/Badge';
import {
  GenericTag,
  StyledColorCheckboxProps,
} from './ModifyUserTagModal.interface';
import {
  setDeleteTagContainer,
  setNewtagsContainer,
  setUpdateContainerTag,
} from '../../../../../redux/slices/users/user-update-container-tags';
import {
  ModifyTagsDropdownContainer,
  StyledButtonModifyUserTag,
  StyledModalBodyModifyTags,
  StyledModalColorsModifyTags,
  StyledModalHeaderModifyTags,
  StyledModalModifyUserTag,
  StyledModifyTag,
  StyledModifyTagTriggerElement,
} from './ModifyUserTagModal.styles';
import { Tag } from '../../../../../models/tags/tag';
import { setDataTag } from '../../../../../redux/slices/tags/tag-management';
import { setTagByIdDelete } from '../../../../../redux/slices/tags/tag-seleted-delete';
import {
  setTagByIdEdit,
  setValueColor,
  setValueTag,
} from '../../../../../redux/slices/tags/tag-seleted-edit';
import { websocketContext } from '../../../../../chat';
import { SectionUser } from '../../AddedUsersSection/AddedUserSection.interface';

export const ModifyUserTagModal: FC<StyledColorCheckboxProps> = ({
  setTagModal,
  setOpenNewTag,
  setTags,
  setContainerTags,
  containerTags,
  tags,
  InconArrow,
  text,
  users,
}) => {
  const socket: any = useContext(websocketContext);
  const dispatch = useAppDispatch();
  const { tagsData } = useSelector(
    (state: RootState) => state.tags.tagsQueryState,
  );
  const { updateContainerTags } = useSelector(
    (state: RootState) => state.users.updateContainerTagState,
  );

  // const getDataTag = async () => {
  //   try {
  //     const response = await readTags();
  //     if (response.success === false) {
  //       dispatch(setDataTag([]));
  //     } else {
  //       dispatch(setDataTag(response));
  //     }
  //   } catch (err) {
  //     showAlert?.addToast({
  //       alert: Toast.ERROR,
  //       title: 'ERROR',
  //       message: `${err}`,
  //     });
  //   }
  // };

  useEffect(() => {
    socket?.on('newTag', (data: Tag[]) => {
      dispatch(setDataTag(data));
    });
    socket?.on('updateTag', (data: Tag[]) => {
      dispatch(setDataTag(data));
    });
    socket?.on('deleteTag', (data: Tag[]) => {
      dispatch(setDataTag(data));
    });
  }, [socket, setDataTag]);

  // filtro de búsqueda de etiquetas por nombre
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  // manejo de etiquetas seleccionadas
  const handleCheckboxChange = (
    position: number,
    argTag: string,
    colorTag: string,
    idUser: string,
  ) => {
    const unCheckedUpdate =
      updateContainerTags &&
      updateContainerTags.some((tag: Tag) => tag._id.includes(idUser));
    const unCheckedContainer =
      containerTags &&
      containerTags.some((tag: Tag) => tag._id.includes(idUser));

    !unCheckedUpdate
      ? tagsData?.map((item: Tag) =>
          item._id === idUser && users === SectionUser.EDITAR
            ? dispatch(
                setNewtagsContainer({
                  _id: item._id,
                  name: argTag,
                  color: colorTag,
                }),
              )
            : null,
        )
      : dispatch(setDeleteTagContainer(idUser));

    !unCheckedContainer
      ? tagsData?.map((_, index) =>
          users === SectionUser.CREAR_USUARIO
            ? setContainerTags([
                ...containerTags,
                {
                  _id: idUser,
                  name: argTag,
                  color: colorTag,
                  status: index === position,
                },
              ])
            : null,
        )
      : setContainerTags((_containerTag) =>
          _containerTag.filter((tag) => tag._id !== idUser),
        );
  };

  // manejo de modales y actualización de etiquetas
  const handleClickCrear = (title: string, open: string) => {
    // getTags();
    // getDataTag();
    setTags(title);
    setOpenNewTag(open);
  };

  // manejo de editar etiqueta
  const handleClickEditar = (title: string, open: string, arg: any) => {
    setTags(title);
    setOpenNewTag(open);
    dispatch(setTagByIdEdit(arg._id));
    dispatch(setValueTag(arg.name));
    dispatch(setValueColor(arg.color));
  };

  // manejo de eliminar etiqueta
  const handleClickEliminar = (title: string, open: string, tag: any) => {
    setTags(title);
    setOpenNewTag(open);
    dispatch(setTagByIdDelete(tag._id));
  };

  const handleClickClose = () => {
    setTagModal(false);
    dispatch(setUpdateContainerTag([]));
  };

  return (
    <StyledModalModifyUserTag>
      <StyledModalHeaderModifyTags>
        <span>
          <button type="button" onClick={() => setOpenNewTag(`${users}`)}>
            {InconArrow && <InconArrow />}
          </button>
          <Text>{text}</Text>
        </span>
        <button type="button" onClick={() => handleClickClose()}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledModalHeaderModifyTags>
      <StyledModalBodyModifyTags>
        <div>
          <ContainerInput
            setFocus={() => false}
            type="text"
            name="email"
            onChange={handleSearchInputChange}
          />
          <StyledButtonModifyUserTag
            onClick={() => handleClickCrear(`${text}`, 'crear')}>
            <SVGIcon iconFile="/icons/create-tag-button.svg" />
          </StyledButtonModifyUserTag>
        </div>
        <StyledModalColorsModifyTags>
          {tagsData &&
            tagsData
              .filter((tag) =>
                tag.name.toLowerCase().includes(searchInputValue.toLowerCase()),
              )
              .map((tag: any, index: number) => (
                <StyledModifyTag
                  key={tag._id}
                  tags={tags}
                  setTags={setTags}
                  users={users}
                  setOpenNewTag={setOpenNewTag}
                  setTagModal={setTagModal}
                  info={tag.name}
                  setContainerTags={setContainerTags}
                  containerTags={containerTags}
                  color={tag.color}>
                  <div>
                    {text === 'Seleccionar Etiquetas' && (
                      <Checkbox
                        checked={
                          users === SectionUser.EDITAR
                            ? updateContainerTags.some((item) =>
                                item._id.includes(tag._id),
                              )
                            : containerTags.some((item) =>
                                item._id.includes(tag._id),
                              )
                        }
                        onClick={() =>
                          handleCheckboxChange(
                            index,
                            tag.name,
                            tag.color,
                            tag._id,
                          )
                        }
                      />
                    )}
                    <Text size="12px">{tag.name}</Text>
                  </div>
                  {tag.name !== GenericTag.GENERAL && (
                    <Dropdown
                      triggerElement={() => (
                        <StyledModifyTagTriggerElement>
                          <SVGIcon iconFile="/icons/user_options.svg" />
                        </StyledModifyTagTriggerElement>
                      )}>
                      <ModifyTagsDropdownContainer>
                        <BadgeMolecule
                          bgColor="transparent"
                          leftIcon={() => (
                            <SVGIcon iconFile="/icons/pen.svg" />
                          )}>
                          <button
                            type="button"
                            onClick={() =>
                              handleClickEditar(`${text}`, 'editar', tag)
                            }>
                            <Text>Editar </Text>
                          </button>
                        </BadgeMolecule>
                        <BadgeMolecule
                          bgColor="transparent"
                          leftIcon={() => (
                            <SVGIcon iconFile="/icons/delete.svg" />
                          )}>
                          <button
                            type="button"
                            onClick={() =>
                              handleClickEliminar(`${text}`, 'eliminar', tag)
                            }>
                            <Text>Eliminar </Text>
                          </button>
                        </BadgeMolecule>
                      </ModifyTagsDropdownContainer>
                    </Dropdown>
                  )}
                </StyledModifyTag>
              ))}
        </StyledModalColorsModifyTags>
      </StyledModalBodyModifyTags>
    </StyledModalModifyUserTag>
  );
};
