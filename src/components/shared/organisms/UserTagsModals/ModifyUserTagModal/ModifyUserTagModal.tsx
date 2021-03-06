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
import { StyledColorCheckboxProps } from './ModifyUserTagModal.interface';
import {
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
import { readTags } from '../../../../../api/tags';
import { setDataTag } from '../../../../../redux/slices/tags/tag-management';
import { setTagByIdDelete } from '../../../../../redux/slices/tags/tag-seleted-delete';
import {
  setTagByIdEdit,
  setValueColor,
  setValueTag,
} from '../../../../../redux/slices/tags/tag-seleted-edit';
import { websocketContext } from '../../../../../chat';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../molecules/Toast/useToast';

export const ModifyUserTagModal: FC<StyledColorCheckboxProps> = ({
  setTagModal,
  setOpenNewTag,
  setTags,
  setContainerTags,
  setCheckedModifyUser,
  handleChecked,
  checkedModifyUser,
  containerTags,
  tags,
  InconArrow,
  text,
  users,
}) => {
  const socket: any = useContext(websocketContext);
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
  const { tagsData } = useSelector(
    (state: RootState) => state.tags.tagsQueryState,
  );

  const { updateContainerTags } = useSelector(
    (state: RootState) => state.users.updateContainerTagState,
  );

  const getDataTag = async () => {
    try {
      const response = await readTags();
      if (response.success === false) {
        dispatch(setDataTag([]));
      } else {
        dispatch(setDataTag(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  // queda pendiente si getData se pasa como dependencia

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

  // filtro de b??squeda de etiquetas por nombre
  const [searchInputValue, setSearchInputValue] = useState('');
  // const [duplicatedState, setDuplicatedState] = useState;

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  // manejo de etiquetas seleccionadas
  const [checkedState, setCheckedState] = useState(new Array(50).fill(false));
  const handleCheckboxChange = (
    position: number,
    argTag: string,
    colorTag: string,
    idUser: string,
  ) => {
    handleChecked(idUser);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );

    tagsData?.map((item) =>
      item._id === idUser && users === 'Editar'
        ? dispatch(
            setNewtagsContainer({
              _id: item._id,
              name: argTag,
              color: colorTag,
            }),
          )
        : null,
    );

    tagsData?.map((_, index) =>
      users === 'Crear Usuario'
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
    );
    setCheckedState(updatedCheckedState);
  };

  // manejo de modales y actualizaci??n de etiquetas
  const handleClickCrear = (title: string, open: string) => {
    // getTags();
    getDataTag();
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
    setCheckedModifyUser([]);
    dispatch(setUpdateContainerTag([]));
  };

  useEffect(() => {
    if (users === 'Editar') {
      updateContainerTags &&
        updateContainerTags.map(
          (tag: Tag) =>
            tag._id &&
            setCheckedModifyUser((prev) => prev.concat(tag._id ?? '')),
        );
      setCheckedModifyUser((_containerTags) =>
        _containerTags.filter(
          (valor, i) => _containerTags.indexOf(valor) === i,
        ),
      );
    } else {
      setCheckedModifyUser([]);
    }
  }, []);

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
                  setCheckedModifyUser={setCheckedModifyUser}
                  checkedModifyUser={checkedModifyUser}
                  handleChecked={handleChecked}
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
                        // isTransparent
                        checked={checkedModifyUser.indexOf(tag._id) !== -1}
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
                  <Dropdown
                    triggerElement={() => (
                      <StyledModifyTagTriggerElement>
                        <SVGIcon iconFile="/icons/user_options.svg" />
                      </StyledModifyTagTriggerElement>
                    )}>
                    <ModifyTagsDropdownContainer>
                      <BadgeMolecule
                        bgColor="transparent"
                        leftIcon={() => <SVGIcon iconFile="/icons/pen.svg" />}>
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
                </StyledModifyTag>
              ))}
        </StyledModalColorsModifyTags>
      </StyledModalBodyModifyTags>
    </StyledModalModifyUserTag>
  );
};

// TODO = Eliminar opci??n de eliminar y editar etiqueta general
