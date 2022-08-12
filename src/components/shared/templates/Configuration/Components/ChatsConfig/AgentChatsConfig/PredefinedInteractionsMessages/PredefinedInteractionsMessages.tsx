import { FC, useState, useMemo, useRef } from 'react';
import { VscSaveAs } from 'react-icons/vsc';
import { FaInfoCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../../redux';
import { useAppDispatch } from '../../../../../../../../redux/hook/hooks';
import {
  setDeletePredefinedResponse,
  setPredefinedResponse,
} from '../../../../../../../../redux/slices/configuration/configuration-predefined-response';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import { Tooltip } from '../../../../../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../../../../../atoms/Tooltip/tooltip.interface';
import { ContainerWithOutTags } from '../../../../../../molecules/ContainerWithOutTags/ContainerWithOutTags';
import { ContainerInput } from '../../../../../../molecules/Input/ContainerInput';
import { ModalMolecule } from '../../../../../../molecules/Modal/Modal';
import {
  ToogleComponentForMappedRestrictionsNoSel,
  ToogleComponentForMappedRestrictions,
} from '../PredefinedSounds/PreddefinedSound.styled';
import { IPropsResponse } from './PredefinedInteractionsMessages.interface';
import {
  WrapperPredefinedInteractionsMessages,
  HeaderPredefinedInteractionsMessages,
  BodyPredefinedInteractionsMessages,
  ContainerPredefinedMessage,
  StyledTextArea,
  StyledListPredefinedResponse,
  ContainerEmplyResponse,
  StyledButtonEdit,
  ContainerBoxHovered,
  TooltipBox,
  WrapperListMessage,
} from './PredefinedInteractionsMessages.styled';
import useMousePosition from './MousePosition';

export const PredefinedInteractionsMesssages: FC = () => {
  const dispatch = useAppDispatch();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const focusRef = useRef<HTMLInputElement | null>(null);

  const [isActiveResponse, setIsActiveResponse] = useState<boolean>(false);
  const [modalPredefinedResponse, setModalPredefinedResponse] =
    useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [isEdit, setIsEdit] = useState({
    edition: false,
    _id: '',
  });
  const [containerResponse, setContainerResponse] = useState<
    Array<IPropsResponse>
  >([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleActiveResponse = () => {
    setIsActiveResponse((prev) => !prev);
  };

  const { allPredefinedResponse } = useSelector(
    (state: RootState) => state.predefinedResponseState,
  );

  const { x, y } = useMousePosition();
  const generateId = Math.floor(Math.random() * 999999);

  const handleCreateResponse = () => {
    if (title && content) {
      setContainerResponse([
        ...containerResponse,
        {
          _id: generateId.toString(),
          title,
          content,
        },
      ]);
      setTitle('');
      setContent('');
    }
  };

  const handleCreateObjectResponse = () => {
    if (title && content) {
      handleCreateResponse();
    }
    dispatch(setPredefinedResponse(containerResponse));
    setModalPredefinedResponse(false);
  };

  const editResponse = () => {
    const response = containerResponse.map((item) =>
      item._id === isEdit._id ? { ...item, title, content } : item,
    );
    setContainerResponse(response);
    setIsEdit({
      edition: false,
      _id: '',
    });
    setTitle('');
    setContent('');
  };

  const handleChange = (_id: string, message: string, context: string) => {
    setIsEdit({
      edition: !isEdit.edition,
      _id,
    });

    if (!isEdit.edition) {
      setTitle(message);
      setContent(context);
      if (focusRef && focusRef.current) {
        focusRef.current?.focus();
      }
    } else {
      setTitle('');
      setContent('');
    }
  };

  const clearResponse = (idDelete: number) => {
    setContainerResponse((_containerData) =>
      _containerData.filter((_, index) => index !== idDelete),
    );
  };

  const deleteResponse = (_id: string, index: number) => {
    dispatch(setDeletePredefinedResponse(_id));
    clearResponse(index);
  };

  const handleClose = () => {
    setModalPredefinedResponse(false);
    setIsEdit({
      edition: false,
      _id: '',
    });
    setTitle('');
    setContent('');
  };
  const [response, setResponse] = useState<string>('');

  const dataPredefinedResponse = useMemo(() => {
    if (!search) return allPredefinedResponse;
    return allPredefinedResponse?.filter((item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [allPredefinedResponse, search]);

  const handleEnter = (text: string) => {
    setIsHovered(true);
    setResponse(text);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <WrapperPredefinedInteractionsMessages>
        <HeaderPredefinedInteractionsMessages>
          <Text>Respuestas Rapidas</Text>
          <Tooltip
            text="Puedes establecer respuestas rapidas para tus interacciones."
            position={TooltipPosition.left}>
            <FaInfoCircle />
          </Tooltip>
        </HeaderPredefinedInteractionsMessages>
        <BodyPredefinedInteractionsMessages>
          <span>
            {isActiveResponse ? (
              <Text color="#50da71">Respuesta Personalizadas</Text>
            ) : (
              <Text color="#bec0be">Sin Respuestas</Text>
            )}
            <div>
              {isActiveResponse ? (
                <ToogleComponentForMappedRestrictions
                  onClick={() => handleActiveResponse()}>
                  <div />
                </ToogleComponentForMappedRestrictions>
              ) : (
                <ToogleComponentForMappedRestrictionsNoSel
                  onClick={() => handleActiveResponse()}>
                  <div />
                </ToogleComponentForMappedRestrictionsNoSel>
              )}
            </div>
          </span>
          <div>
            <ContainerInput
              placeHolder="Buscar..."
              onChange={(event) => setSearch(event.target.value)}
            />
            <button
              type="button"
              onClick={() => setModalPredefinedResponse(true)}>
              <SVGIcon iconFile="/icons/create-tag-button.svg" />
            </button>
          </div>
          {allPredefinedResponse.length >= 1 && (
            <WrapperListMessage>
              {isHovered && allPredefinedResponse.length >= 1 && (
                <ContainerBoxHovered position={TooltipPosition.top} x={x} y={y}>
                  <TooltipBox>
                    <Text>{response}</Text>
                  </TooltipBox>
                </ContainerBoxHovered>
              )}
              {allPredefinedResponse.length >= 1 && (
                <StyledListPredefinedResponse>
                  {dataPredefinedResponse.map((item, index) => (
                    <div>
                      <div
                        onMouseEnter={() => handleEnter(item.content)}
                        onMouseLeave={() => handleLeave()}
                        ref={targetRef}>
                        <Text>{item.title}</Text>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteResponse(item._id, index)}>
                        <SVGIcon iconFile="/icons/delete.svg" />
                      </button>
                    </div>
                  ))}
                </StyledListPredefinedResponse>
              )}
            </WrapperListMessage>
          )}
          {allPredefinedResponse.length === 0 && (
            <ContainerEmplyResponse>
              <ContainerWithOutTags
                text="No hay respuestas personalizadas"
                icon="small_message.svg"
              />
            </ContainerEmplyResponse>
          )}
          <ButtonMolecule text="Establecer Respuestas" size={Size.MEDIUM} />
        </BodyPredefinedInteractionsMessages>
      </WrapperPredefinedInteractionsMessages>
      {modalPredefinedResponse && (
        <ModalMolecule isModal={modalPredefinedResponse}>
          <ContainerPredefinedMessage>
            <div>
              <Text>Sección de respuestas</Text>
              <button type="button" onClick={handleClose}>
                <SVGIcon iconFile="/icons/times.svg" />
              </button>
            </div>
            <div>
              <div>
                <Text>Título</Text>
                <div>
                  <ContainerInput
                    placeHolder="Título..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    forwardRef={focusRef}
                  />
                  {!isEdit.edition ? (
                    <button type="button" onClick={handleCreateResponse}>
                      <SVGIcon iconFile="/icons/create-tag-button.svg" />
                    </button>
                  ) : (
                    <StyledButtonEdit
                      type="button"
                      onClick={() => editResponse()}>
                      <div>
                        <VscSaveAs />
                      </div>
                    </StyledButtonEdit>
                  )}
                </div>
              </div>
              <div>
                <Text>Contenido</Text>
                <StyledTextArea
                  placeholder="Contenido..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div>
                {containerResponse &&
                  containerResponse.map((item, index) => (
                    <div key={index.toString()}>
                      <Text>{item.title}</Text>
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            handleChange(item._id, item.title, item.content)
                          }>
                          <SVGIcon iconFile="/icons/pen.svg" />
                        </button>
                        <button
                          type="button"
                          onClick={() => clearResponse(index)}>
                          <SVGIcon iconFile="/icons/delete.svg" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <ButtonMolecule
                text="Cancelar"
                size={Size.MEDIUM}
                onClick={() => setModalPredefinedResponse(false)}
                variant={ButtonVariant.OUTLINED}
              />
              <ButtonMolecule
                text="Guardar"
                size={Size.MEDIUM}
                onClick={handleCreateObjectResponse}
              />
            </div>
          </ContainerPredefinedMessage>
        </ModalMolecule>
      )}
    </>
  );
};
