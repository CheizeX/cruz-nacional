/* eslint-disable sonarjs/cognitive-complexity */
import React, { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { baseRestApi } from '../../../../../../api/base';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import {
  DropZoneDisplayedProps,
  SelectedUserProps,
} from '../../ChatsSection/ChatsSection.interface';
import { UploadableFile } from './UploadFiles.interface';
import {
  StyledOrderedListOfFiles,
  StyledRejectedFile,
  StyledUploadedFile,
  StyledFilesContainer,
  StyledSelectFile,
  StyledDropHere,
  StyledDropHereIconAndText,
  StyledUploadFiles,
  StyledUploadFilesBody,
  StyledUploadFilesFooter,
  StyledUploadFilesHeader,
} from './UploadFiles.styled';

export const UploadFiles: FC<
  UploadableFile & DropZoneDisplayedProps & SelectedUserProps
> = ({ setDropZoneDisplayed, userSelected }) => {
  const showAlert = useToastContext();

  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );

  const [files, setFiles] = useState<UploadableFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const formData = new FormData();

  files.forEach((file) => {
    formData.append('files', file.file, file.name);
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const mappedAcc = acceptedFiles.map((file, index) => ({
      file,
      errors: [],
      id: index + Date.now(),
    }));

    setFiles((curr) => [...curr, ...mappedAcc]);
  }, []);

  const onDelete = (file: File) => {
    setFiles((currentList) => currentList.filter((fw) => fw.file !== file));
  };

  const chatToTalkWithUser = chatsOnConversation?.find(
    (chat) => chat.client.clientId === userSelected,
  );
  const chatToTalkWithUserId = chatToTalkWithUser?._id;
  const chatToTalkWithUserNumber = chatToTalkWithUser?.client.clientId;

  const acceptedForInstagram = 'image/jpeg, image/png';
  const acceptedFiles = 'image/jpeg, image/png, application/pdf';

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept:
      chatToTalkWithUser?.channel === 'Instagram'
        ? acceptedForInstagram
        : acceptedFiles,
    noKeyboard: true,
    noClick: true,
    onDrop,
  });

  const handleAdjuntarClick = async () => {
    try {
      setUploading(true);
      if (chatToTalkWithUser?.channel === 'WhatsApp') {
        await baseRestApi.postMultipart(
          `/whatsapp360/sendFilesToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          formData,
        );
      }
      if (chatToTalkWithUser?.channel === 'Messenger') {
        await baseRestApi.postMultipart(
          `/messenger/sendFilesToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          formData,
        );
      }
      if (chatToTalkWithUser?.channel === 'Instagram') {
        await baseRestApi.postMultipart(
          `/messenger/sendFilesToUser/${chatToTalkWithUserId}/${chatToTalkWithUserNumber}`,
          formData,
        );
      }
      if (chatToTalkWithUser?.channel === 'Webchat') {
        await baseRestApi.postMultipart(
          `/webchat/sendFiles/${chatToTalkWithUserId}?from=AGENT`,
          formData,
        );
      }
      setUploading(false);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `INIT-CONVERSATION-ERROR ${error}`,
      });
    }
    setDropZoneDisplayed(false);
  };

  const dropZonetotalSize = files.reduce(
    (acc, curr) => acc + curr.file.size,
    0,
  );

  return (
    <StyledUploadFiles {...getRootProps()}>
      <StyledUploadFilesHeader>
        <Text>Arrastra o selecciona un archivo</Text>
        <button type="button" onClick={() => setDropZoneDisplayed(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledUploadFilesHeader>
      <StyledUploadFilesBody>
        {isDragActive ? (
          <div>
            <StyledDropHere>
              <StyledDropHereIconAndText>
                <SVGIcon iconFile="/icons/upload-image.svg" />
                <Text size="16px">Suelta tu archivo aquí</Text>
              </StyledDropHereIconAndText>
            </StyledDropHere>
          </div>
        ) : (
          <div>
            <StyledFilesContainer>
              <StyledSelectFile onClick={open}>
                <input type="button" {...getInputProps()} />
                <SVGIcon iconFile="/icons/upload-image.svg" />
                <Text>Seleccionar archivo</Text>
              </StyledSelectFile>
              <StyledOrderedListOfFiles>
                {files?.map((file, index) => (
                  <div key={index.toString()}>
                    {file.errors.length > 0 ||
                      (file.file.size > 1e7 ? (
                        <StyledRejectedFile>
                          <div>
                            <SVGIcon color="red" iconFile="/icons/danger.svg" />
                            {file.file.type === 'application/pdf' ? (
                              <SVGIcon iconFile="/icons/pdf-icon.svg" />
                            ) : (
                              <SVGIcon iconFile="/icons/image-icon.svg" />
                            )}
                            <button
                              type="button"
                              onClick={() => onDelete(file.file)}>
                              <SVGIcon iconFile="/icons/delete.svg" />
                            </button>
                          </div>
                          <span>
                            {file.file.name.length > 15 ? (
                              <Text>
                                {file.file.name.substring(0, 10)}...
                                {file.file.name.substring(
                                  file.file.name.length - 4,
                                  file.file.name.length,
                                )}
                              </Text>
                            ) : (
                              <Text>{file.file.name}</Text>
                            )}
                            <Text>{(file.file.size / 1e6).toFixed(1)} MB</Text>
                          </span>
                        </StyledRejectedFile>
                      ) : (
                        <StyledUploadedFile key={file.id}>
                          <div>
                            <SVGIcon iconFile="/icons/success.svg" />
                            {file.file.type === 'application/pdf' ? (
                              <SVGIcon iconFile="/icons/pdf-icon.svg" />
                            ) : (
                              <SVGIcon iconFile="/icons/image-icon.svg" />
                            )}
                            <button
                              type="button"
                              onClick={() => onDelete(file.file)}>
                              <SVGIcon iconFile="/icons/delete.svg" />
                            </button>
                          </div>
                          <span>
                            {file.file.name.length > 15 ? (
                              <Text>
                                {file.file.name.substring(0, 10)}...
                                {file.file.name.substring(
                                  file.file.name.length - 4,
                                  file.file.name.length,
                                )}
                              </Text>
                            ) : (
                              <Text>{file.file.name}</Text>
                            )}
                            <Text>{(file.file.size / 1e6).toFixed(1)} MB</Text>
                          </span>
                        </StyledUploadedFile>
                      ))}
                  </div>
                ))}
              </StyledOrderedListOfFiles>
            </StyledFilesContainer>
          </div>
        )}
        {chatToTalkWithUser?.channel !== 'Instagram' &&
          (dropZonetotalSize > 1e7 ? (
            <div>
              <Text color="#FA5F5F">
                Uno o varios archivos exceden el tamaño máximo de 10 MB.
              </Text>
            </div>
          ) : (
            <div>
              <Text color="#5C5C5C">Tamaño máx. de archivos: 10MB.</Text>
              <Text color="#5C5C5C">Formatos soportados: png, jpg y pdf.</Text>
            </div>
          ))}
        {chatToTalkWithUser?.channel === 'Instagram' &&
          (dropZonetotalSize > 8e6 ? (
            <div>
              <Text color="#FA5F5F">
                Uno o varios archivos exceden el tamaño máximo de 8 MB.
              </Text>
            </div>
          ) : (
            <div>
              <Text color="#5C5C5C">Tamaño máx. de archivos: 8MB.</Text>
              <Text color="#5C5C5C">Formatos soportados: png y jpg.</Text>
            </div>
          ))}
      </StyledUploadFilesBody>
      <StyledUploadFilesFooter>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={() => setDropZoneDisplayed(false)}
        />
        {chatToTalkWithUser?.channel !== 'Instagram' ? (
          <ButtonMolecule
            text="Adjuntar"
            size={Size.MEDIUM}
            onClick={() => handleAdjuntarClick()}
            state={
              // eslint-disable-next-line no-nested-ternary
              uploading === true
                ? ButtonState.LOADING
                : dropZonetotalSize > 1e7
                ? ButtonState.DISABLED
                : ButtonState.NORMAL
            }
          />
        ) : (
          <ButtonMolecule
            text="Adjuntar"
            size={Size.MEDIUM}
            onClick={() => handleAdjuntarClick()}
            state={
              // eslint-disable-next-line no-nested-ternary
              uploading === true
                ? ButtonState.LOADING
                : dropZonetotalSize > 8e6
                ? ButtonState.DISABLED
                : ButtonState.NORMAL
            }
          />
        )}
      </StyledUploadFilesFooter>
    </StyledUploadFiles>
  );
};
