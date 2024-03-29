/* eslint-disable sonarjs/cognitive-complexity */
import { FC, useState, useCallback, useRef, useEffect } from 'react';
import { MdSupportAgent } from 'react-icons/md';
import {
  StyledConversationHistory,
  StyledHeaderConversationHistory,
  StyledBodyConversationHistory,
  SectionContainerConversationView,
  StyledUserConversationView,
  StyledAgentConversationView,
  StyledAvatarConversationView,
  SectionContainerLeft,
  StyledCardAgentConversation,
} from './ConversationView.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';

import {
  WrapperSearchHistory,
  StyledSearchHistory,
} from '../../../Chats/Components/ChatHistory/ChatHistory.styled';
import { IConvertsationHistory } from './ConversationView.interface';
import { UserRole } from '../../../../../../models/users/role';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import { ChatStatus, ContentType } from '../../../../../../models/chat/chat';
import { Tag } from '../../../../../../models/tags/tag';

export const ConversationView: FC<IConvertsationHistory> = ({
  setIsOpenModal,
  setOpenModalId,
  setInfoImage,
  selModalPreviewIamge,
  handleAttachmentAgent,
  handleAttachmentUser,
  chatConversationView,
}) => {
  const [searchByWords, setSearchByWords] = useState<string>('');

  const wordRef = useRef<Array<HTMLSpanElement | null>>([]);

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
  const allIdSelected =
    chatConversationView &&
    chatConversationView?.messages?.map(
      (v) =>
        v?.contentType === 'TEXT' &&
        v?.content
          .toLocaleLowerCase()
          .includes(searchByWords.toLocaleLowerCase()),
    );

  const indexChat = allIdSelected?.map((item, index = 0) =>
    item === true ? index : 0,
  );

  const longIndex = indexChat !== undefined ? indexChat.length : 0;
  const max = indexChat !== undefined ? Math.max(...indexChat) : 0;

  const [isSelectedRef, setIsSelectedRef] = useState<number>(longIndex);

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
  const handleDataImage = (content: string, channel: string, agent: string) => {
    setOpenModalId(agent);
    selModalPreviewIamge(true);
    setInfoImage({ content, channel });
  };

  const handleClose = () => {
    setIsOpenModal(false);
    setSearchByWords('');
  };
  useEffect(scrollInnerText, [
    scrollInnerText,
    searchByWords,
    setSearchByWords,
  ]);

  return (
    <StyledConversationHistory>
      <StyledHeaderConversationHistory>
        <div>
          <Text>
            Cliente:{' '}
            {chatConversationView?.client?.name
              .slice(0, 1)
              .toUpperCase()
              .concat(
                chatConversationView?.client?.name.slice(
                  1,
                  chatConversationView?.client?.name.length - 1,
                ),
              )}
          </Text>
          <Text>Contacto: {chatConversationView?.client?.clientId}</Text>
        </div>
        <div>
          <div>
            <WrapperSearchHistory>
              <StyledSearchHistory
                placeholder="Buscar..."
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleKeyBoardEvent(e)
                }
                value={searchByWords}
                onChange={onChange}
              />
              <button type="button">
                <SVGIcon iconFile="/icons/search-solid.svg" />
              </button>
            </WrapperSearchHistory>
            <div>
              <button
                type="button"
                disabled={isSelectedRef > longIndex && !searchByWords}
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
          </div>
          <button type="button" onClick={handleClose}>
            <SVGIcon iconFile="/icons/times.svg" />
          </button>
        </div>
      </StyledHeaderConversationHistory>
      <StyledBodyConversationHistory>
        <div>
          <span>
            <Text>Chats</Text>
          </span>
          <SectionContainerLeft>
            <div>
              <StyledCardAgentConversation>
                <div>
                  <MdSupportAgent />
                  <Text>
                    {chatConversationView.assignedAgent
                      ? chatConversationView.assignedAgent.name
                      : 'Sin asignación'}
                  </Text>
                </div>
                <div>
                  <SVGIcon iconFile="/icons/candelar_alt.svg" />
                  <Text>{handleDate(chatConversationView.createdAt)}</Text>
                </div>
                <div>
                  <BadgeMolecule
                    leftIcon={() => <SVGIcon iconFile="/icons/watch.svg" />}>
                    <Text>
                      {new Date(
                        chatConversationView.createdAt,
                      ).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                      })}
                    </Text>
                  </BadgeMolecule>
                  <div>- - -</div>
                  <BadgeMolecule
                    leftIcon={() => (
                      <SVGIcon iconFile="/icons/thumbs-up.svg" />
                    )}>
                    <Text>
                      {chatConversationView?.status ===
                      ChatStatus.ASSIGNMENT_PENDING
                        ? '--:--'
                        : new Date(
                            chatConversationView?.updatedAt,
                          ).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                          })}
                    </Text>
                  </BadgeMolecule>
                </div>
                <div>
                  {chatConversationView &&
                    chatConversationView?.tags?.map((e: Tag) => (
                      <BadgeMolecule key={e._id} bgColor={e.color}>
                        <Text>{e.name}</Text>
                      </BadgeMolecule>
                    ))}
                </div>
              </StyledCardAgentConversation>
            </div>
          </SectionContainerLeft>
        </div>
        <div>
          <Text>Mensajes</Text>
          {/* <div>
            <Text>
              {chatConversationView.client.name}{' - '}
              {chatConversationView.client.clientId}
            </Text>
          </div> */}
          <div>
            <div>
              <SectionContainerConversationView>
                {chatConversationView &&
                  chatConversationView.messages?.map((item, index) => (
                    <div key={index.toString()}>
                      {item.contentType === ContentType.TEXT &&
                        handleWord(item.content)}
                      {item.from !== UserRole.AGENT ? (
                        <StyledUserConversationView
                          isFocusWord={
                            item.contentType === ContentType.TEXT &&
                            handleWord(item.content)
                          }>
                          <div>
                            <Text
                              ref={(ref) => {
                                wordRef.current[index] = ref;
                              }}>
                              <>
                                {item.contentType === 'ATTACHMENT' && (
                                  <>
                                    <div>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleDataImage(
                                            item.content,
                                            chatConversationView?.channel,
                                            'USER',
                                          )
                                        }>
                                        <SVGIcon
                                          iconFile="/icons/maximize.svg"
                                          color="white"
                                        />
                                      </button>
                                    </div>
                                    {handleAttachmentUser(
                                      item.content,
                                      chatConversationView?.channel,
                                    )}
                                  </>
                                )}
                              </>
                              <>
                                {item.contentType === ContentType.TEXT
                                  ? item.content
                                  : (item.contentType ===
                                      ContentType.INTERACTIVE_BUTTON ||
                                      item.contentType ===
                                        ContentType.INTERACTIVE_LIST) && (
                                      <div>
                                        {item.content.header && (
                                          <div>
                                            {item.content.header.type ===
                                            'text' ? (
                                              item.content.header.body
                                            ) : (
                                              <img
                                                src={item.content.header.body}
                                                width="100px"
                                                height="100px"
                                                alt="message.content"
                                              />
                                            )}
                                          </div>
                                        )}
                                        <div>{item.content.body}</div>
                                        {item.content.footer && (
                                          <div>{item.content.footer}</div>
                                        )}
                                        <div>
                                          {item.content.action.map(
                                            (act: string) => (
                                              <div key={act}>{act}</div>
                                            ),
                                          )}
                                        </div>
                                      </div>
                                    )}
                              </>
                            </Text>
                            <Text>
                              {new Date(item.createdAt).toLocaleTimeString(
                                'en-US',
                                {
                                  hour: 'numeric',
                                  minute: 'numeric',
                                  hour12: false,
                                },
                              )}
                            </Text>
                          </div>
                        </StyledUserConversationView>
                      ) : null}
                      {item.from === UserRole.AGENT ? (
                        <StyledAgentConversationView
                          isFocusWord={handleWord(item.content)}>
                          <div>
                            <div>
                              <Text
                                ref={(ref) => {
                                  wordRef.current[index] = ref;
                                }}>
                                <>
                                  {item.contentType === 'ATTACHMENT' && (
                                    <>
                                      <div>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleDataImage(
                                              item.content,
                                              chatConversationView?.channel,
                                              UserRole.AGENT,
                                            )
                                          }>
                                          <SVGIcon
                                            iconFile="/icons/maximize.svg"
                                            color="white"
                                          />
                                        </button>
                                      </div>
                                      {handleAttachmentAgent(item.content)}
                                    </>
                                  )}
                                </>
                                {item.contentType === ContentType.TEXT &&
                                  item.content}
                              </Text>
                              <Text>
                                {new Date(item.createdAt).toLocaleTimeString(
                                  'en-US',
                                  {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: false,
                                  },
                                )}
                              </Text>
                            </div>
                            <StyledAvatarConversationView>
                              <SVGIcon iconFile="/icons/user.svg" />
                            </StyledAvatarConversationView>
                          </div>
                        </StyledAgentConversationView>
                      ) : null}
                    </div>
                  ))}
              </SectionContainerConversationView>
            </div>
          </div>
        </div>
      </StyledBodyConversationHistory>
    </StyledConversationHistory>
  );
};
