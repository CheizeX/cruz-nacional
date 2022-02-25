import React, { FC, useState, useRef, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  StyledChatHistory,
  StyledChatHistoryHeader,
  StyledChatHistoryBody,
  SectionAgentsContainer,
  StyledCardAgents,
  SectionContainerChats,
  StyledAgentOrSUpervisorDialogue,
  StyledAvatarChats,
  StyledUserChats,
  StyledSearchHistory,
  WrapperSearchHistory,
} from './ChatHistory.styled';
import { IChatHistoryProps } from './ChatHistory.interface';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { RootState } from '../../../../../../redux';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { Chat, Message } from '../../../../../../models/chat/chat';

export const ChatsHistory: FC<IChatHistoryProps> = ({
  setLiveChatModal,
  setIsOpenModal,
  setIsContentChat,
  setIsChannelChat,
}) => {
  const [selected, setSelected] = useState<number>(0);
  const [searchByWords, setSearchByWords] = useState<string>('');
  const [accessToken] = useLocalStorage('AccessToken', '');
  const tokenQueryParam = `?token=${accessToken}`;

  const wordRef = useRef<Array<HTMLSpanElement | null>>([]);

  const { chatHistory, idChannel } = useSelector(
    (state: RootState) => state.liveChat.chatsHistoryState,
  );

  const handleDate = (createAt: Date) => {
    const now = new Date();
    const yesterday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1,
    );
    yesterday.setUTCHours(0, 0, 0, 0);
    const customDate = new Date(createAt);
    customDate.setUTCHours(0, 0, 0, 0);
    if (!createAt) {
      return 'No hay Fecha';
    }
    if (
      new Date(createAt).toLocaleDateString() ===
      new Date().toLocaleDateString()
    ) {
      return 'Hoy';
    }
    if (yesterday.getTime() === customDate.getTime()) {
      return 'Ayer';
    }
    if (new Date(createAt) !== new Date()) {
      return new Date(createAt).toLocaleDateString();
    }
    return '';
  };

  // función para dar estilo al cotenedor de la palabra
  const handleToggle = () => {
    setLiveChatModal(false);
    setSelected(0);
  };
  const handleWord = (arg: string) => {
    const array = [];
    array.push(arg);
    const res = array.some((palabra: string) =>
      palabra.toLocaleLowerCase().includes(searchByWords.toLocaleLowerCase()),
    );
    if (!searchByWords) {
      return false;
    }
    return res;
  };

  // array de palabras que contienen los indices que coorresponden.
  const allIdSelected = chatHistory
    .filter((_, index) => index === selected)
    .map((ele) => ele.messages)[0]
    .map((v) => v)
    .map((e) =>
      e.content.toLocaleLowerCase().includes(searchByWords.toLocaleLowerCase()),
    );

  const indexChat = allIdSelected.map((item, index = 0) =>
    item === true ? index : 0,
  );
  const max = Math.max(...indexChat);
  const [isSelectedRef, setIsSelectedRef] = useState<number>(indexChat.length);

  // const counterMax = () => {
  //   let a = max;
  //   return function newCounter() {
  //     // for (let i = allIdSelected?.length - 1; i >= 0; i -= 1) {
  //     if (allIdSelected[a] === true) {
  //       console.log(a);
  //       setIsSelectedRef((a -= 1));
  //       // }
  //     } else {
  //       a = -1;
  //     }
  //   };
  // };

  // funcion que busca la coincidencia anterior
  const handlePreviouswWordSearch = () => {
    for (let i = allIdSelected?.length - 1; i >= 0; i -= 1) {
      if (allIdSelected[i] === true) {
        setIsSelectedRef(i);
      }
    }
  };

  // funcion que busca la coincidencia posterior en caso de haber buscado una anterior.
  const handleNextWordSearch = () => {
    for (let i = 0; i < allIdSelected?.length; i += 1) {
      if (allIdSelected[i] === true) {
        setIsSelectedRef(i);
      }
    }
  };

  // funcion para que busca mediante el scroll.
  const scrollInnerText = useCallback(() => {
    if (!searchByWords.length) {
      wordRef?.current[max]?.scrollIntoView({ behavior: 'smooth' });
    } else {
      wordRef?.current[isSelectedRef]?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [wordRef, searchByWords, isSelectedRef, max]);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchByWords(event.target.value);
  };
  const handleKeyBoardEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      wordRef?.current[max]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAttachment = (content: string, channel: string) => {
    if (content.substring(content.length - 3, content.length) === 'jpg') {
      return (
        <img
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
          alt={content}
        />
      );
    }
    if (content.substring(content.length - 3, content.length) === 'png') {
      return (
        <img
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
          alt={content}
        />
      );
    }
    if (content.substring(content.length - 4, content.length) === 'jpeg') {
      return (
        <img
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
          alt={content}
        />
      );
    }
    if (content.substring(content.length - 3, content.length) === 'pdf') {
      return (
        <iframe
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
          title={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
        />
      );
    }
    return 'La imagen que intantas descargar no se puede visualizar';
  };

  const openMaxModalAgent = (content: string, channel: string) => {
    setIsOpenModal(true);
    setIsChannelChat(channel);
    setIsContentChat(content);
  };

  const openMaxModalUser = (content: string, channel: string) => {
    setIsChannelChat(channel);
    setIsContentChat(content);
    setIsOpenModal(true);
  };

  useEffect(scrollInnerText, [
    scrollInnerText,
    selected,
    setSelected,
    searchByWords,
    setSearchByWords,
  ]);

  return (
    <StyledChatHistory>
      <StyledChatHistoryHeader>
        <div>
          <SVGIcon iconFile={`/icons/${idChannel}.svg`} />
          <Text>Historial de Chats</Text>
        </div>

        <div>
          <WrapperSearchHistory>
            <StyledSearchHistory
              placeholder="Buscar..."
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyBoardEvent(e)
              }
              onChange={onChange}
            />
            <button type="button" onClick={scrollInnerText}>
              <SVGIcon iconFile="/icons/search-solid.svg" />
            </button>
          </WrapperSearchHistory>
          <div>
            <button
              type="button"
              disabled={isSelectedRef > indexChat.length && !searchByWords}
              onClick={handlePreviouswWordSearch}>
              <SVGIcon iconFile="/icons/chevron-square-up.svg" />
            </button>
            <button
              type="button"
              disabled={
                isSelectedRef < 0 || !searchByWords || max === isSelectedRef
              }
              onClick={handleNextWordSearch}>
              <SVGIcon iconFile="/icons/chevron-square-down.svg" />
            </button>
          </div>
          <button type="button" onClick={handleToggle}>
            <SVGIcon iconFile="/icons/times.svg" />
          </button>
        </div>
      </StyledChatHistoryHeader>
      <StyledChatHistoryBody>
        <div>
          <span>
            <Text>Total</Text>
            <div>{chatHistory.length}</div>
          </span>
          <SectionAgentsContainer>
            {chatHistory?.map((element, index) => (
              <StyledCardAgents
                key={element._id}
                onClick={() => setSelected(index)}
                focusedChats={index === selected}>
                <span>
                  <SVGIcon iconFile="/icons/candelar_alt.svg" />
                  <span>{handleDate(element.createdAt)}</span>
                </span>
                <span>
                  <BadgeMolecule>
                    <SVGIcon iconFile="/icons/watch.svg" />
                    <span>
                      {new Date(element.createdAt).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                      })}
                    </span>
                  </BadgeMolecule>
                  <div>- - -</div>
                  <BadgeMolecule>
                    <SVGIcon iconFile="/icons/thumbs-up.svg" />
                    <span>
                      {new Date(element.updatedAt).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                      })}
                    </span>
                  </BadgeMolecule>
                </span>
                <span>
                  <SVGIcon iconFile="/icons/unknown_user.svg" />
                  <span>
                    {' '}
                    {element.assignedAgent &&
                      element.assignedAgent.name &&
                      element.assignedAgent.name.slice(0, 18)}
                  </span>
                </span>
              </StyledCardAgents>
            ))}
          </SectionAgentsContainer>
        </div>
        <div>
          <Text color="black">Mensajes</Text>
          {chatHistory &&
            chatHistory
              ?.filter((_, index) => index === selected)
              .map(
                (chat: Chat) =>
                  chat.messages && (
                    <SectionContainerChats key={chat._id}>
                      {chat.messages.map((element: Message, index) => (
                        <div id={element._id}>
                          {element.contentType !== 'ATTACHAMENT'
                            ? handleWord(element.content)
                            : null}
                          {element.from !== 'AGENT' ? (
                            <StyledUserChats
                              isFocusWord={handleWord(element.content)}>
                              <div>
                                <Text
                                  ref={(ref) => {
                                    wordRef.current[index] = ref;
                                  }}>
                                  <>
                                    {element.contentType === 'ATTACHMENT' && (
                                      <>
                                        <div>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              openMaxModalUser(
                                                element.content,
                                                chat.channel,
                                              )
                                            }>
                                            <SVGIcon
                                              iconFile="/icons/maximize.svg"
                                              color="white"
                                            />
                                          </button>
                                        </div>
                                        {handleAttachment(
                                          element.content,
                                          chat.channel,
                                        )}{' '}
                                      </>
                                    )}
                                  </>
                                  {element.contentType !== 'ATTACHMENT' &&
                                    element.content}
                                </Text>
                                <Text>
                                  {new Date(
                                    element.createdAt,
                                  ).toLocaleTimeString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: false,
                                  })}
                                </Text>
                              </div>
                            </StyledUserChats>
                          ) : null}
                          {element.from === 'AGENT' ? (
                            <StyledAgentOrSUpervisorDialogue
                              isFocusWord={handleWord(element.content)}>
                              <div>
                                <div>
                                  <Text
                                    ref={(ref) => {
                                      wordRef.current[index] = ref;
                                    }}>
                                    <>
                                      {element.contentType === 'ATTACHMENT' && (
                                        <>
                                          <div>
                                            <button
                                              type="button"
                                              onClick={() =>
                                                openMaxModalAgent(
                                                  element.content,
                                                  chat.channel,
                                                )
                                              }>
                                              <SVGIcon
                                                iconFile="/icons/maximize.svg"
                                                color="white"
                                              />
                                            </button>
                                          </div>
                                          {handleAttachment(
                                            element.content,
                                            chat.channel,
                                          )}{' '}
                                          {/* {element._id === isModalAttachment ? (
                                            <>
                                              <div>
                                                <button
                                                  type="button"
                                                  onClick={() =>
                                                    setIsModalAttachment('')
                                                  }>
                                                  <SVGIcon
                                                    iconFile="/icons/minimize.svg"
                                                    color="white"
                                                  />
                                                </button>
                                              </div>
                                              <article>
                                                {handleAttachment(
                                                  element.content,
                                                  chat.channel,
                                                )}{' '}
                                              </article>
                                            </>
                                          ) : null} */}
                                        </>
                                      )}
                                    </>
                                    {element.contentType !== 'ATTACHMENT' &&
                                      element.content}
                                  </Text>
                                  <Text>
                                    {new Date(
                                      element.createdAt,
                                    ).toLocaleTimeString('en-US', {
                                      hour: 'numeric',
                                      minute: 'numeric',
                                      hour12: false,
                                    })}
                                  </Text>
                                </div>
                                <StyledAvatarChats>
                                  <SVGIcon iconFile="/icons/user.svg" />
                                </StyledAvatarChats>
                              </div>
                            </StyledAgentOrSUpervisorDialogue>
                          ) : null}
                        </div>
                      ))}
                    </SectionContainerChats>
                  ),
              )}
        </div>
      </StyledChatHistoryBody>
    </StyledChatHistory>
  );
};
