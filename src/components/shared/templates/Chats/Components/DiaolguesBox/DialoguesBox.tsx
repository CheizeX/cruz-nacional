/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC, useRef, useCallback, useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { SelectedUserProps } from '../../ChatsSection/ChatsSection.interface';
import {
  Channels,
  ChatStatus,
  ContentType,
  Message,
} from '../../../../../../models/chat/chat';
import {
  StyledDialoguesContainer,
  StyledUserDialogue,
  StyledAgentOrSUpervisorDialogue,
  StyledAgentAvatar,
  StyledUserPendingDialogue,
  StyledBoxAvatar,
  StyledDeletedMessage,
  PendingDeletedMessagesStyle,
  WrapperOnConversation,
  StyledBoxBotAvatar,
  StyledInteractiveButton,
  StyledInteractiveButtonHeader,
  StyledInteractiveButtonBody,
  StyledInteractiveButtonFooter,
  StyledInteractiveButtonActions,
  StyledInteractiveActionTitle,
} from './DialoguesBox.styles';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { ModalBackgroundProps } from '../../../../molecules/Modal/Modal';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { ContactForm } from '../ContactForm/ContactForm';

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
  const { pendingSession } = useAppSelector(
    (state) => state.liveChat.chatsHistoryState,
  );
  const { idChannel } = useAppSelector(
    (state) => state.liveChat.chatsHistoryState,
  );

  const [accessToken] = useLocalStorage('AccessToken', '');
  const profilePicture = `${userDataInState?.urlAvatar}?token=${accessToken}`;

  const dialogueBoxRef = useRef<HTMLDivElement>(null);

  const readUrl = (text: string) => {
    // Exp valida url
    const regex =
      // "^(http|https|ftp)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9-._?,'/\\+&amp;%$#=~])*$";
      // (?:https?:):\/\/(?:youtu\.be\/|(?:[az]{2,3}\.)?youtube\.com\/watch(?:\?|#!)v=)([\w-]{11}).*/gi;
      // https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
      // https?://(?:[-w]+.)?([-w]+).w+(?:.w+)?/?.*/i;
      // ^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/g;
      // ^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/g;
      // ((http(s)?:\/\/)?)(www\.)?((youtube\.com\/)|(youtu.be\/))[\S]+/g;
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    // const str = text;
    // const result = str.split(',');
    // Extrae la url del array
    const t = regex.exec(text);
    const url = t ? t[0] : '';

    // remplaza la url por string vacio.
    const res = text.replace(regex, '');
    return (
      <p>
        <a
          href={url}
          target="_blank"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: url }}
          rel="noreferrer"
        />
        {res}
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
      {(!pendingSession && idChannel === 'WhatsApp') ||
      idChannel === Channels.CHAT_API ? (
        <ContactForm />
      ) : null}
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
                          {message.content
                            .substring(
                              message.content.length - 3,
                              message.content.length,
                            )
                            .toLowerCase() === ('png' || 'jpg') && (
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
                                    <IoMdCloseCircle
                                      color="white"
                                      width="30px"
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

                          {message.content
                            .substring(
                              message.content.length - 3,
                              message.content.length,
                            )
                            .toLowerCase() === 'jpg' && (
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
                                    <IoMdCloseCircle
                                      color="white"
                                      width="30px"
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

                          {message.content
                            .substring(
                              message.content.length - 4,
                              message.content.length,
                            )
                            .toLowerCase() === 'jpeg' && (
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
                                    <IoMdCloseCircle
                                      color="white"
                                      width="30px"
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

                          {message.content
                            .substring(
                              message.content.length - 3,
                              message.content.length,
                            )
                            .toLowerCase() === 'pdf' && (
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
                                    <IoMdCloseCircle
                                      color="white"
                                      width="30px"
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
                          <>
                            {message.contentType === ContentType.TEXT && (
                              <WrapperOnConversation>
                                {readUrl(message.content)}
                              </WrapperOnConversation>
                            )}

                            {(message.contentType ===
                              ContentType.INTERACTIVE_BUTTON ||
                              message.contentType ===
                                ContentType.INTERACTIVE_LIST) && (
                              <StyledInteractiveButton>
                                {message.content.header && (
                                  <StyledInteractiveButtonHeader>
                                    {message.content.header.type === 'text' ? (
                                      message.content.header.body
                                    ) : (
                                      <img
                                        src={message.content.header.body}
                                        width="100px"
                                        height="100px"
                                        alt="message.content"
                                      />
                                    )}
                                  </StyledInteractiveButtonHeader>
                                )}
                                <StyledInteractiveButtonBody>
                                  {message.content.body}
                                </StyledInteractiveButtonBody>
                                {message.content.footer && (
                                  <StyledInteractiveButtonFooter>
                                    {message.content.footer}
                                  </StyledInteractiveButtonFooter>
                                )}
                                <StyledInteractiveActionTitle>
                                  {message.content.action_title || ''}
                                </StyledInteractiveActionTitle>
                                <StyledInteractiveButtonActions>
                                  {message.content.action.map((act: string) => (
                                    <div key={act}>{act}</div>
                                  ))}
                                </StyledInteractiveButtonActions>
                              </StyledInteractiveButton>
                            )}
                          </>
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
                <StyledAgentOrSUpervisorDialogue
                  key={index.toString()}
                  chatFrom={message.from}
                  contentTypeProps={message.contentType}>
                  <div>
                    {message.contentType === 'ATTACHMENT' && (
                      <>
                        <Text>
                          {message.content
                            .substring(
                              message.content.length - 3,
                              message.content.length,
                            )
                            .toLowerCase() === 'pdf' && (
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
                                    <IoMdCloseCircle
                                      color="white"
                                      width="30px"
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
                            message.content
                              .substring(
                                message.content.length - 3,
                                message.content.length,
                              )
                              .toLowerCase() === 'png' && (
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
                                      <IoMdCloseCircle
                                        color="white"
                                        width="30px"
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
                            message.content
                              .substring(
                                message.content.length - 3,
                                message.content.length,
                              )
                              .toLowerCase() === 'jpg' && (
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
                                      <IoMdCloseCircle
                                        color="white"
                                        width="30px"
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
                            message.content
                              .substring(
                                message.content.length - 4,
                                message.content.length,
                              )
                              .toLowerCase() === 'jpeg' && (
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
                                      <IoMdCloseCircle
                                        color="white"
                                        width="30px"
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
                          <>
                            {message.contentType === ContentType.TEXT && (
                              <WrapperOnConversation>
                                {readUrl(message.content)}
                              </WrapperOnConversation>
                            )}

                            {(message.contentType ===
                              ContentType.INTERACTIVE_BUTTON ||
                              message.contentType ===
                                ContentType.INTERACTIVE_LIST) && (
                              <StyledInteractiveButton>
                                {message.content.header && (
                                  <StyledInteractiveButtonHeader>
                                    {message.content.header.type === 'text' ? (
                                      message.content.header.body
                                    ) : (
                                      <img
                                        src={message.content.header.body}
                                        width="100px"
                                        height="100px"
                                        alt="message.content"
                                      />
                                    )}
                                  </StyledInteractiveButtonHeader>
                                )}
                                <StyledInteractiveButtonBody>
                                  {message.content.body}
                                </StyledInteractiveButtonBody>
                                {message.content.footer && (
                                  <StyledInteractiveButtonFooter>
                                    {message.content.footer}
                                  </StyledInteractiveButtonFooter>
                                )}
                                <StyledInteractiveActionTitle>
                                  {message.content.action_title || ''}
                                </StyledInteractiveActionTitle>
                                <StyledInteractiveButtonActions>
                                  {message.content.action.map((act: string) => (
                                    <div key={act}>{act}</div>
                                  ))}
                                </StyledInteractiveButtonActions>
                              </StyledInteractiveButton>
                            )}
                          </>
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
                    {userDataInState &&
                    userDataInState.urlAvatar !== '' &&
                    message.from !== 'Bot' &&
                    message.from !== 'BOT' ? (
                      <StyledBoxAvatar
                        src={profilePicture}
                        alt={userDataInState.name}
                      />
                    ) : (
                      <StyledBoxBotAvatar
                        src="/avatars/Robot_1.svg"
                        alt="Bot"
                      />
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
            chat.messages.map((message) =>
              message.from === chat.client.clientId ? (
                <StyledUserPendingDialogue
                  key={message._id}
                  chatFrom={message.from}
                  contentTypeProps={message.contentType}>
                  <div>
                    <Text>
                      {message.contentType === 'ATTACHMENT' &&
                        message.content
                          .substring(
                            message.content.length - 3,
                            message.content.length,
                          )
                          .toLowerCase() === 'png' && (
                          <button type="button">
                            <SVGIcon iconFile="/icons/image-icon.svg" />
                          </button>
                        )}
                      {message.contentType === 'ATTACHMENT' &&
                        message.content
                          .substring(
                            message.content.length - 3,
                            message.content.length,
                          )
                          .toLowerCase() === 'pdf' && (
                          <button type="button">
                            <SVGIcon iconFile="/icons/pdf-icon.svg" />
                          </button>
                        )}
                      {message.contentType === 'ATTACHMENT' &&
                        message.content
                          .substring(
                            message.content.length - 3,
                            message.content.length,
                          )
                          .toLowerCase() === 'jpg' && (
                          <button type="button">
                            <SVGIcon iconFile="/icons/image-icon.svg" />
                          </button>
                        )}
                      {message.contentType === 'ATTACHMENT' &&
                        message.content
                          .substring(
                            message.content.length - 4,
                            message.content.length,
                          )
                          .toLowerCase() === 'jpeg' && (
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
                            <>
                              {message.contentType === ContentType.TEXT && (
                                <WrapperOnConversation>
                                  {readUrl(message.content)}
                                </WrapperOnConversation>
                              )}
                              {(message.contentType ===
                                ContentType.INTERACTIVE_BUTTON ||
                                message.contentType ===
                                  ContentType.INTERACTIVE_LIST) && (
                                <StyledInteractiveButton>
                                  {message.content.header && (
                                    <StyledInteractiveButtonHeader>
                                      {message.content.header.type ===
                                      'text' ? (
                                        message.content.header.body
                                      ) : (
                                        <img
                                          src={message.content.header.body}
                                          width="100px"
                                          height="100px"
                                          alt="message.content"
                                        />
                                      )}
                                    </StyledInteractiveButtonHeader>
                                  )}
                                  <StyledInteractiveButtonBody>
                                    {message.content.body}
                                  </StyledInteractiveButtonBody>
                                  {message.content.footer && (
                                    <StyledInteractiveButtonFooter>
                                      {message.content.footer}
                                    </StyledInteractiveButtonFooter>
                                  )}
                                  <StyledInteractiveActionTitle>
                                    {message.content.action_title || ''}
                                  </StyledInteractiveActionTitle>
                                  <StyledInteractiveButtonActions>
                                    {message.content.action.map(
                                      (act: string) => (
                                        <div key={act}>{act}</div>
                                      ),
                                    )}
                                  </StyledInteractiveButtonActions>
                                </StyledInteractiveButton>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </Text>
                    <Text>
                      {new Date(message.createdAt).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                      })}
                    </Text>
                  </div>
                </StyledUserPendingDialogue>
              ) : (
                <StyledAgentOrSUpervisorDialogue
                  chatFrom={message.from}
                  key={message._id}
                  contentTypeProps={message.contentType}>
                  <div>
                    {message.contentType !== 'ATTACHMENT' && (
                      <>
                        {message.isDeleted === true ? (
                          <StyledDeletedMessage>
                            Se eliminó este mensage
                            <SVGIcon iconFile="/icons/band.svg" />
                          </StyledDeletedMessage>
                        ) : (
                          <>
                            {message.contentType === ContentType.TEXT && (
                              <WrapperOnConversation>
                                {readUrl(message.content)}
                              </WrapperOnConversation>
                            )}
                            {(message.contentType ===
                              ContentType.INTERACTIVE_BUTTON ||
                              message.contentType ===
                                ContentType.INTERACTIVE_LIST) && (
                              <StyledInteractiveButton>
                                {message.content.header && (
                                  <StyledInteractiveButtonHeader>
                                    {message.content.header.type === 'text' ? (
                                      message.content.header.body
                                    ) : (
                                      <img
                                        src={message.content.header.body}
                                        width="100px"
                                        height="100px"
                                        alt="message.content"
                                      />
                                    )}
                                  </StyledInteractiveButtonHeader>
                                )}
                                <StyledInteractiveButtonBody>
                                  {message.content.body}
                                </StyledInteractiveButtonBody>
                                {message.content.footer && (
                                  <StyledInteractiveButtonFooter>
                                    {message.content.footer}
                                  </StyledInteractiveButtonFooter>
                                )}
                                <StyledInteractiveActionTitle>
                                  {message.content.action_title || ''}
                                </StyledInteractiveActionTitle>
                                <StyledInteractiveButtonActions>
                                  {message.content.action.map((act: string) => (
                                    <div key={act}>{act}</div>
                                  ))}
                                </StyledInteractiveButtonActions>
                              </StyledInteractiveButton>
                            )}
                          </>
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
                    {userDataInState &&
                    userDataInState.urlAvatar !== '' &&
                    message.from !== 'Bot' &&
                    message.from !== 'BOT' ? (
                      <StyledBoxAvatar
                        src={profilePicture}
                        alt={userDataInState.name}
                      />
                    ) : (
                      <>
                        {message.from === 'Bot' || message.from === 'BOT' ? (
                          <StyledBoxBotAvatar
                            src="/avatars/Robot_1.svg"
                            alt="Bot"
                          />
                        ) : (
                          <SVGIcon iconFile="/icons/user.svg" />
                        )}
                      </>
                    )}
                  </StyledAgentAvatar>
                </StyledAgentOrSUpervisorDialogue>
              ),
            ),
          )}
      <div ref={dialogueBoxRef} />
    </StyledDialoguesContainer>
  );
};
