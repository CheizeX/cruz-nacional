/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { SpinnerCircularFixed } from 'spinners-react';
import { GrEdit } from 'react-icons/gr';
import { Text } from '../../../../../atoms/Text/Text';
import { baseRestApi } from '../../../../../../../api/base';
import {
  StyledAddStatusButton,
  StyledContactsCreator,
  StyledStatusCreatorBody,
  StyledContactsCreatorHeader,
  StyledStatusArrayContainer,
  StyledAddingNewStatusBody,
  StyledModalColors,
  StyledColorCheckbox,
  StyledIconCheckTag,
  StyledStatusLoaderContainer,
} from './ContactsCreator.styled';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../redux/hook/hooks';
import { getGeneralConfigurationData } from '../../../../../../../redux/slices/configuration/configuration-info';
import { Tooltip } from '../../../../../atoms/Tooltip/Tooltip';
import { TooltipTarget } from '../../../../../atoms/Tooltip/tooltip.styled';
import { TooltipPosition } from '../../../../../atoms/Tooltip/tooltip.interface';
import { ContainerInput } from '../../../../../molecules/Input/ContainerInput';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { tagsColorsArrayCreate } from '../../../../../organisms/UserTagsModals/CreateUserTagModal/CreateUserTagModal.shared';
import {
  ButtonMolecule,
  ButtonState,
  Size,
} from '../../../../../atoms/Button/Button';
import { StatusProps } from './ContactsCreator.interface';

export const ContactsCreator: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { contactStatus } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData,
  );

  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [searching, setSearching] = useState('');

  const [newStatusNameAndColor, setNewStatusNameAndColor] = useState({
    name: '',
    color: '#3AA4FF',
    id: '',
  });
  const [creatingStatus, setCreatingStatus] = useState(false);
  const [statusDeletingId, setStatusDeletingId] = useState('');
  const [editingStatusId, setEditingStatusId] = useState(false);

  const handleEditStatus = (id: string, name: string, color: string) => {
    setNewStatusNameAndColor({ ...newStatusNameAndColor, name, color, id });
    setEditingStatusId(true);
    setCreatingStatus(true);
  };

  const handleDeleteStatus = async (id: string) => {
    setLoadingDelete(true);
    setStatusDeletingId(id);
    try {
      await baseRestApi.delete(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/contactStatus/${id}`,
      );
      dispatch(getGeneralConfigurationData());
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'ESTADO ELIMINADO',
        message: 'El estado ha sido eliminado correctamente',
      });
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
      });
    }
  };

  const handleCreateOrEditNewStatus = async () => {
    setLoadingButton(true);
    if (newStatusNameAndColor.name.length > 0) {
      try {
        await baseRestApi.patch(
          `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/contactStatus/${
            editingStatusId ? newStatusNameAndColor.id : ''
          }`,
          {
            name: newStatusNameAndColor.name.toUpperCase(),
            color: newStatusNameAndColor.color.toUpperCase(),
          },
        );
        dispatch(getGeneralConfigurationData());
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: `${
            editingStatusId ? 'EDICION EXITOSA' : 'NUEVO ESTADO CREADO'
          }`,
          message: `Se ha ${editingStatusId ? 'editado' : 'creado'} el estado ${
            !editingStatusId && newStatusNameAndColor.name
          }`,
        });
      } catch (error) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
        });
      }
      setNewStatusNameAndColor({
        ...newStatusNameAndColor,
        name: '',
        id: '',
        color: '#3AA4FF',
      });
      setCreatingStatus(false);
      setEditingStatusId(false);
    } else {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `El nombre del nuevo estado no puede estar vacío`,
      });
    }
    setLoadingButton(false);
  };

  const handleSelectTagColor = (tag: string) => {
    setNewStatusNameAndColor({
      ...newStatusNameAndColor,
      color: tag.toUpperCase(),
    });
  };

  const handleBackArrow = () => {
    setCreatingStatus(false);
    setEditingStatusId(false);
    setNewStatusNameAndColor({
      ...newStatusNameAndColor,
      name: '',
      color: '#3AA4FF',
      id: '',
    });
  };

  return (
    <StyledContactsCreator>
      <StyledContactsCreatorHeader>
        {!creatingStatus ? (
          <>
            <Text>Etiquetas de estado</Text>
            <Tooltip
              text="Aquí se pueden crear diferentes etiquetas de estados de contacto, como por ejemplo 'ACTIVO', 'INACTIVO' o 'BLOQUEADO' y asignarles también un color para identificarlos. Los contactos que no tengan asigando un estado de los creados serán por defecto 'SIN ESTADO'."
              position={TooltipPosition.bottom}>
              <TooltipTarget title="">
                <FaInfoCircle />
              </TooltipTarget>
            </Tooltip>
          </>
        ) : (
          <>
            <Text>
              {editingStatusId ? 'Editar estado' : 'Crear Nuevo estado'}
            </Text>
            <button type="button" onClick={handleBackArrow}>
              <BiArrowBack />
            </button>
          </>
        )}
      </StyledContactsCreatorHeader>

      {!creatingStatus && (
        <StyledStatusCreatorBody>
          <div>
            <ContainerInput
              setFocus={() => false}
              type="text"
              name="status"
              onChange={(e) => setSearching(e.target.value)}
              placeHolder="Buscar estado..."
            />
            <StyledAddStatusButton
              onClick={() => {
                setCreatingStatus(true);
                setSearching('');
              }}>
              <SVGIcon iconFile="/icons/create-tag-button.svg" />
            </StyledAddStatusButton>
          </div>
          <StyledStatusArrayContainer>
            {contactStatus
              ?.filter((status: StatusProps) =>
                status.name.toUpperCase().includes(searching.toUpperCase()),
              )
              ?.map(({ _id, name, color }: StatusProps) => (
                <Text color={color} key={_id}>
                  {name}
                  {name !== 'SIN ESTADO' && (
                    <article>
                      <GrEdit
                        onClick={() => handleEditStatus(_id, name, color)}
                      />
                      {loadingDelete && statusDeletingId === _id ? (
                        <StyledStatusLoaderContainer>
                          <SpinnerCircularFixed
                            size="12px"
                            thickness={180}
                            speed={180}
                            color="#4142412b"
                            secondaryColor="rgba(0, 0, 0, 0.063)"
                          />
                        </StyledStatusLoaderContainer>
                      ) : (
                        <AiOutlineDelete
                          onClick={() => handleDeleteStatus(_id)}
                        />
                      )}
                    </article>
                  )}
                </Text>
              ))}
          </StyledStatusArrayContainer>
        </StyledStatusCreatorBody>
      )}

      {creatingStatus && (
        <StyledAddingNewStatusBody color={newStatusNameAndColor.color}>
          <Text title="Nombre de la etiqueta de estado">Nombre</Text>
          <ContainerInput
            setFocus={() => false}
            type="text"
            value={newStatusNameAndColor.name}
            onChange={(e) =>
              setNewStatusNameAndColor({
                ...newStatusNameAndColor,
                name: e.target.value.toUpperCase(),
              })
            }
          />
          <Text title="Seleccionar color">Color</Text>
          <StyledModalColors>
            {tagsColorsArrayCreate.map((item, index) => (
              <StyledColorCheckbox
                key={item.name}
                name={index.toString()}
                checked={newStatusNameAndColor.color === item.color}
                onClick={() => handleSelectTagColor(item.color)}>
                <StyledIconCheckTag viewBox="-4 -4 32 32">
                  <polyline points="20 6 9 17 4 12" />
                </StyledIconCheckTag>
              </StyledColorCheckbox>
            ))}
          </StyledModalColors>
          <ButtonMolecule
            text={editingStatusId ? 'Guardar' : 'Crear'}
            size={Size.MEDIUM}
            onClick={handleCreateOrEditNewStatus}
            state={loadingButton ? ButtonState.LOADING : ButtonState.NORMAL}
          />
        </StyledAddingNewStatusBody>
      )}
    </StyledContactsCreator>
  );
};
