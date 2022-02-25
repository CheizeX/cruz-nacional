/* eslint-disable react/no-danger */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC, useRef, useCallback, useState } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { SelectedUserProps } from '../../ChatsSection/ChatsSection.interface';
import { ChatStatus, Message } from '../../../../../../models/chat/chat';
import {
  StyledDialoguesContainer,
  StyledUserDialogue,
  StyledAgentOrSUpervisorDialogue,
  StyledAgentAvatar,
  StyledUserPendingDialogue,
  StyledBoxAvatar,
  StyledDeletedMessage,
  PendingDeletedMessagesStyle,
} from './DialoguesBox.styles';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { ModalBackgroundProps } from '../../../../molecules/Modal/Modal';
import useLocalStorage from '../../../../../../hooks/use-local-storage';

export const DialoguesBox: FC<SelectedUserProps & ModalBackgroundProps> = ({
  userSelected,
}) => {
  const [idModal, setIdModal] = useState('');

  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { chatsPendings } = useAppSelector(
    (state) => state.liveChat.chatsPendings,
  );
  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );

  const [accessToken] = useLocalStorage('AccessToken', '');
  const profilePicture = `${userDataInState?.urlAvatar}?token=${accessToken}`;

  const dialogueBoxRef = useRef<HTMLDivElement>(null);

  const readUrl = (text: string) => {
    // Exp valida url
    const regex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    // Extrae la url del array
    const t = regex.exec(text);
    // remplaza la url por string vacio.
    const res = text.replace(/http([^"'\s]+)/g, '');
    const url = t ? t[0] : '';
    return (
      <p>
        {res}
        <a
          href={url}
          target="_blank"
          dangerouslySetInnerHTML={{ __html: url }}
          rel="noreferrer"
        />
      </p>
    );
  };

  const scrollToBottom = useCallback(() => {
    dialogueBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dialogueBoxRef]);

  const tokenQueryParam = `?token=${accessToken}`;

  const handleOpenAttachments = (message: Message, chatChannel: string) => {
    window.open(
      `${
        process.env.NEXT_PUBLIC_REST_API_URL
      }/whatsapp360/file/${message.content.substring(
        chatChannel === 'Webchat' ? 14 : 16,
        message.content.length,
      )}${tokenQueryParam}`,
    );
  };

  React.useEffect(scrollToBottom, [
    userSelected,
    scrollToBottom,
    chatsOnConversation,
    chatsPendings,
  ]);

  return (
    <StyledDialoguesContainer>
      {chatsOnConversation &&
        chatsOnConversation
          ?.filter(
            (chat) =>
              chat.client.clientId === userSelected &&
              chat.status === ChatStatus.ON_CONVERSATION,
          )
          .map((chat) =>
            chat.messages?.map((message, index) =>
              message.from === chat.client.clientId ? (
                <StyledUserDialogue
                  key={index.toString()}
                  deletedMessage={
                    message.isDeleted ? message.isDeleted : false
                  }>
                  <div>
                    {message.contentType === 'ATTACHMENT' && (
                      <>
                        <Text>
                          {message.content.substring(
                            message.content.length - 3,
                            message.content.length,
                          ) === ('png' || 'jpg') && (
                            <>
                              <div>
                                <button
                                  type="button"
                                  onClick={() => setIdModal(message._id || '')}>
                                  <SVGIcon iconFile="/icons/maximize.svg" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleOpenAttachments(message, chat.channel)
                                  }>
                                  <SVGIcon iconFile="/icons/download.svg" />
                                </button>
                              </div>
                              <img
                                src={`${
                                  process.env.NEXT_PUBLIC_REST_API_URL
                                }/whatsapp360/file/${message.content.substring(
                                  chat.channel !== 'Webchat' ? 16 : 14,
                                  message.content.length,
                                )}${tokenQueryParam}`}
                                width="100px"
                                height="100px"
                                alt="message.content"
                              />
                              {message._id === idModal ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => setIdModal('')}>
                                    <SVGIcon
                                      iconFile="/icons/minimize.svg"
                                      color="white"
                                    />
                                  </button>
                                  <article>
                                    <img
                                      src={`${
                                        process.env.NEXT_PUBLIC_REST_API_URL
                                      }/whatsapp360/file/${message.content.substring(
                                        chat.channel !== 'Webchat' ? 16 : 14,
                                        message.content.length,
                                      )}${tokenQueryParam}`}
                                      width="100px"
                                      height="100px"
                                      alt="message.content"
                                    />
                                  </article>
                                </>
                              ) : null}
                            </>
                          )}

                          {message.content.substring(
                            message.content.length - 3,
                            message.content.length,
                          ) === 'jpg' && (
                            <>
                              <div>
                                <button
                                  type="button"
                                  onClick={() => setIdModal(message._id || '')}>
                                  <SVGIcon iconFile="/icons/maximize.svg" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleOpenAttachments(message, chat.channel)
                                  }>
                                  <SVGIcon iconFile="/icons/download.svg" />
                                </button>
                              </div>
                              <img
                                src={`${
                                  process.env.NEXT_PUBLIC_REST_API_URL
                                }/whatsapp360/file/${message.content.substring(
                                  chat.channel !== 'Webchat' ? 16 : 14,
                                  message.content.length,
                                )}${tokenQueryParam}`}
                                width="100px"
                                height="100px"
                                alt="message.content"
                              />
                              {message._id === idModal ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => setIdModal('')}>
                                    <SVGIcon
                                      iconFile="/icons/minimize.svg"
                                      color="white"
                                    />
                                  </button>
                                  <article>
                                    <img
                                      src={`${
                                        process.env.NEXT_PUBLIC_REST_API_URL
                                      }/whatsapp360/file/${message.content.substring(
                                        chat.channel !== 'Webchat' ? 16 : 14,
                                        message.content.length,
                                      )}${tokenQueryParam}`}
                                      width="100px"
                                      height="100px"
                                      alt="message.content"
                                    />
                                  </article>
                                </>
                              ) : null}
                            </>
                          )}

                          {message.content.substring(
                            message.content.length - 4,
                            message.content.length,
                          ) === 'jpeg' && (
                            <>
                              <div>
                                <button
                                  type="button"
                                  onClick={() => setIdModal(message._id || '')}>
                                  <SVGIcon iconFile="/icons/maximize.svg" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleOpenAttachments(message, chat.channel)
                                  }>
                                  <SVGIcon iconFile="/icons/download.svg" />
                                </button>
                              </div>
                              <img
                                src={`${
                                  process.env.NEXT_PUBLIC_REST_API_URL
                                }/whatsapp360/file/${message.content.substring(
                                  chat.channel !== 'Webchat' ? 16 : 14,
                                  message.content.length,
                                )}${tokenQueryParam}`}
                                width="100px"
                                height="100px"
                                alt="message.content"
                              />
                              {message._id === idModal ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => setIdModal('')}>
                                    <SVGIcon
                                      iconFile="/icons/minimize.svg"
                                      color="white"
                                    />
                                  </button>
                                  <article>
                                    <img
                                      src={`${
                                        process.env.NEXT_PUBLIC_REST_API_URL
                                      }/whatsapp360/file/${message.content.substring(
                                        chat.channel !== 'Webchat' ? 16 : 14,
                                        message.content.length,
                                      )}${tokenQueryParam}`}
                                      width="100px"
                                      height="100px"
                                      alt="message.content"
                                    />
                                  </article>
                                </>
                              ) : null}
                            </>
                          )}

                          {message.content.substring(
                            message.content.length - 3,
                            message.content.length,
                          ) === 'pdf' && (
                            <>
                              <div>
                                <button
                                  type="button"
                                  onClick={() => setIdModal(message._id || '')}>
                                  <SVGIcon iconFile="/icons/maximize.svg" />
                                </button>
                              </div>
                              <iframe
                                src={`${
                                  process.env.NEXT_PUBLIC_REST_API_URL
                                }/whatsapp360/file/${message.content.substring(
                                  chat.channel !== 'Webchat' ? 16 : 14,
                                  message.content.length,
                                )}${tokenQueryParam}`}
                                width="100px"
                                height="100px"
                                style={{
                                  overflow: 'hidden',
                                }}
                                title={`${
                                  process.env.NEXT_PUBLIC_REST_API_URL
                                }/whatsapp360/file/${message.content.substring(
                                  chat.channel !== 'Webchat' ? 16 : 14,
                                  message.content.length,
                                )}${tokenQueryParam}`}
                              />
                              {message._id === idModal ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => setIdModal('')}>
                                    <SVGIcon
                                      iconFile="/icons/minimize.svg"
                                      color="white"
                                    />
                                  </button>
                                  <article>
                                    <iframe
                                      src={`${
                                        process.env.NEXT_PUBLIC_REST_API_URL
                                      }/whatsapp360/file/${message.content.substring(
                                        chat.channel !== 'Webchat' ? 16 : 14,
                                        message.content.length,
                                      )}${tokenQueryParam}`}
                                      width="100%"
                                      height="100%"
                                      title={`${
                                        process.env.NEXT_PUBLIC_REST_API_URL
                                      }/whatsapp360/file/${message.content.substring(
                                        chat.channel !== 'Webchat' ? 16 : 14,
                                        message.content.length,
                                      )}${tokenQueryParam}`}
                                    />
                                  </article>
                                </>
                              ) : null}
                            </>
                          )}
                        </Text>
                        <Text>
                          {new Date(message.createdAt).toLocaleTimeString(
                            'en-US',
                            {
                              hour: 'numeric',
                              minute: 'numeric',
                              hour12: false,
                            },
                          )}
                        </Text>
                      </>
                    )}
                    {message.contentType !== 'ATTACHMENT' && (
                      <>
                        {message.isDeleted === true ? (
                          <StyledDeletedMessage>
                            Se eliminó este mensage
                            <SVGIcon iconFile="/icons/band.svg" />
                          </StyledDeletedMessage>
                        ) : (
                          <p>{readUrl(message.content)}</p>
                        )}
                        <Text>
                          {new Date(message.createdAt).toLocaleTimeString(
                            'en-US',
                            {
                              hour: 'numeric',
                              minute: 'numeric',
                              hour12: false,
                            },
                          )}
                        </Text>
                      </>
                    )}
                  </div>
                </StyledUserDialogue>
              ) : (
                <StyledAgentOrSUpervisorDialogue key={index.toString()}>
                  <div>
                    {message.contentType === 'ATTACHMENT' && (
                      <>
                        <Text>
                          {message.content.substring(
                            message.content.length - 3,
                            message.content.length,
                          ) === 'pdf' && (
                            <>
                              <div>
                                <button
                                  type="button"
                                  onClick={() => setIdModal(message._id || '')}>
                                  <SVGIcon iconFile="/icons/maximize.svg" />
                                </button>
                              </div>
                              <iframe
                                src={`${
                                  process.env.NEXT_PUBLIC_REST_API_URL
                                }/whatsapp360/file/${message.content.substring(
                                  14,
                                  message.content.length,
                                )}${tokenQueryParam}`}
                                width="100px"
                                height="100px"
                                style={{
                                  overflow: 'hidden',
                                }}
                                title={`${
                                  process.env.NEXT_PUBLIC_REST_API_URL
                                }/whatsapp360/file/${message.content.substring(
                                  14,
                                  message.content.length,
                                )}${tokenQueryParam}`}
                              />
                              {message._id === idModal ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => setIdModal('')}>
                                    <SVGIcon
                                      iconFile="/icons/minimize.svg"
                                      color="white"
                                    />
                                  </button>
                                  <article>
                                    <iframe
                                      src={`${
                                        process.env.NEXT_PUBLIC_REST_API_URL
                                      }/whatsapp360/file/${message.content.substring(
                                        14,
                                        message.content.length,
                                      )}${tokenQueryParam}`}
                                      width="100%"
                                      height="100%"
                                      title={`${
                                        process.env.NEXT_PUBLIC_REST_API_URL
                                      }/whatsapp360/file/${message.content.substring(
                                        14,
                                        message.content.length,
                                      )}${tokenQueryParam}`}
                                    />
                                  </article>
                                </>
                              ) : null}
                            </>
                          )}

                          {message.contentType === 'ATTACHMENT' &&
                            message.content.substring(
                              message.content.length - 3,
                              message.content.length,
                            ) === 'png' && (
                              <>
                                <div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setIdModal(message._id || '')
                                    }>
                                    <SVGIcon iconFile="/icons/maximize.svg" />
                                  </button>
                                </div>
                                <img
                                  src={`${
                                    process.env.NEXT_PUBLIC_REST_API_URL
                                  }/whatsapp360/file/${message.content.substring(
                                    14,
                                    message.content.length,
                                  )}${tokenQueryParam}`}
                                  width="100px"
                                  height="100px"
                                  alt="message.content"
                                />
                                {message._id === idModal ? (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => setIdModal('')}>
                                      <SVGIcon
                                        iconFile="/icons/minimize.svg"
                                        color="white"
                                      />
                                    </button>
                                    <article>
                                      <img
                                        src={`${
                                          process.env.NEXT_PUBLIC_REST_API_URL
                                        }/whatsapp360/file/${message.content.substring(
                                          14,
                                          message.content.length,
                                        )}${tokenQueryParam}`}
                                        width="900px"
                                        height="500px"
                                        alt="message.content"
                                      />
                                    </article>
                                  </>
                                ) : null}
                              </>
                            )}

                          {message.contentType === 'ATTACHMENT' &&
                            message.content.substring(
                              message.content.length - 3,
                              message.content.length,
                            ) === 'jpg' && (
                              <>
                                <div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setIdModal(message._id || '')
                                    }>
                                    <SVGIcon iconFile="/icons/maximize.svg" />
                                  </button>
                                </div>
                                <img
                                  src={`${
                                    process.env.NEXT_PUBLIC_REST_API_URL
                                  }/whatsapp360/file/${message.content.substring(
                                    14,
                                    message.content.length,
                                  )}${tokenQueryParam}`}
                                  width="100px"
                                  height="100px"
                                  alt="message.content"
                                />
                                {message._id === idModal ? (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => setIdModal('')}>
                                      <SVGIcon
                                        iconFile="/icons/minimize.svg"
                                        color="white"
                                      />
                                    </button>
                                    <article>
                                      <img
                                        src={`${
                                          process.env.NEXT_PUBLIC_REST_API_URL
                                        }/whatsapp360/file/${message.content.substring(
                                          14,
                                          message.content.length,
                                        )}${tokenQueryParam}`}
                                        width="900px"
                                        height="500px"
                                        alt="message.content"
                                      />
                                    </article>
                                  </>
                                ) : null}
                              </>
                            )}

                          {message.contentType === 'ATTACHMENT' &&
                            message.content.substring(
                              message.content.length - 4,
                              message.content.length,
                            ) === 'jpeg' && (
                              <>
                                <div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setIdModal(message._id || '')
                                    }>
                                    <SVGIcon iconFile="/icons/maximize.svg" />
                                  </button>
                                </div>
                                <img
                                  src={`${
                                    process.env.NEXT_PUBLIC_REST_API_URL
                                  }/whatsapp360/file/${message.content.substring(
                                    14,
                                    message.content.length,
                                  )}${tokenQueryParam}`}
                                  width="100px"
                                  height="100px"
                                  alt="message.content"
                                />
                                {message._id === idModal ? (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => setIdModal('')}>
                                      <SVGIcon
                                        iconFile="/icons/minimize.svg"
                                        color="white"
                                      />
                                    </button>
                                    <article>
                                      <img
                                        src={`${
                                          process.env.NEXT_PUBLIC_REST_API_URL
                                        }/whatsapp360/file/${message.content.substring(
                                          14,
                                          message.content.length,
                                        )}${tokenQueryParam}`}
                                        width="900px"
                                        height="500px"
                                        alt="message.content"
                                      />
                                    </article>
                                  </>
                                ) : null}
                              </>
                            )}
                        </Text>
                        <div>
                          <Text>
                            {message.size &&
                              parseInt(message.size, 10) > 0 &&
                              `${(parseInt(message.size, 10) / 1e6).toFixed(
                                1,
                              )} MB`}
                          </Text>
                          <Text>
                            {new Date(message.createdAt).toLocaleTimeString(
                              'en-US',
                              {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: false,
                              },
                            )}
                          </Text>
                        </div>
                      </>
                    )}

                    {message.contentType !== 'ATTACHMENT' && (
                      //  <StyledInputText value={message.content} />
                      <>
                        {message.isDeleted === true ? (
                          <StyledDeletedMessage>
                            Se eliminó este mensage
                            <SVGIcon iconFile="/icons/band.svg" />
                          </StyledDeletedMessage>
                        ) : (
                          <p>{readUrl(message.content)}</p>
                        )}
                      </>
                    )}
                    <Text color="gray" weight="400">
                      {new Date(message.createdAt).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                      })}
                    </Text>
                  </div>
                  <StyledAgentAvatar>
                    {userDataInState && userDataInState.urlAvatar !== '' ? (
                      <StyledBoxAvatar
                        src={profilePicture}
                        alt={userDataInState.name}
                      />
                    ) : (
                      <SVGIcon iconFile="/icons/user.svg" />
                    )}
                  </StyledAgentAvatar>
                </StyledAgentOrSUpervisorDialogue>
              ),
            ),
          )}

      {chatsPendings &&
        chatsPendings
          ?.filter(
            (chat) =>
              chat.client.clientId === userSelected &&
              chat.status === ChatStatus.ASSIGNMENT_PENDING,
          )
          .map((chat) =>
            chat.messages.map(
              (message) =>
                message.from === chat.client.clientId && (
                  <StyledUserPendingDialogue key={message._id}>
                    <div>
                      <Text>
                        {message.contentType === 'ATTACHMENT' &&
                          message.content.substring(
                            message.content.length - 3,
                            message.content.length,
                          ) === 'png' && (
                            <button type="button">
                              <SVGIcon iconFile="/icons/image-icon.svg" />
                            </button>
                          )}
                        {message.contentType === 'ATTACHMENT' &&
                          message.content.substring(
                            message.content.length - 3,
                            message.content.length,
                          ) === 'pdf' && (
                            <button type="button">
                              <SVGIcon iconFile="/icons/pdf-icon.svg" />
                            </button>
                          )}
                        {message.contentType === 'ATTACHMENT' &&
                          message.content.substring(
                            message.content.length - 3,
                            message.content.length,
                          ) === 'jpg' && (
                            <button type="button">
                              <SVGIcon iconFile="/icons/image-icon.svg" />
                            </button>
                          )}
                        {message.contentType === 'ATTACHMENT' &&
                          message.content.substring(
                            message.content.length - 4,
                            message.content.length,
                          ) === 'jpeg' && (
                            <button type="button">
                              <SVGIcon iconFile="/icons/image-icon.svg" />
                            </button>
                          )}
                        {message.contentType !== 'ATTACHMENT' && (
                          <>
                            {message.isDeleted === true ? (
                              <PendingDeletedMessagesStyle>
                                <SVGIcon iconFile="/icons/band.svg" />
                                Se eliminó este mensage
                              </PendingDeletedMessagesStyle>
                            ) : (
                              <p>{readUrl(message.content)}</p>
                            )}
                          </>
                        )}
                      </Text>
                      <Text>
                        {new Date(message.createdAt).toLocaleTimeString(
                          'en-US',
                          {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                          },
                        )}
                      </Text>
                    </div>
                  </StyledUserPendingDialogue>
                ),
            ),
          )}
      <div ref={dialogueBoxRef} />
    </StyledDialoguesContainer>
  );
};
