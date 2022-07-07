import { FC, useState, useRef, useCallback, useEffect } from 'react';
import { IConversationInReports } from './ConversationViewReports.interface';
import {
  StyledWrapperConversationInReports,
  StyledHeaderConversationReports,
  StyledBodyConversationInReports,
  StyledContainerLeft,
  StyledUserConversationInReports,
  StyledAgentConversationInReports,
  StyledAvatarCoversation,
} from './ConversationVIewInReports.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  WrapperSearchHistory,
  StyledSearchHistory,
} from '../../../Chats/Components/ChatHistory/ChatHistory.styled';
import {
  SectionContainerConversationView,
  StyledCardAgentConversation,
} from '../../../Monitor/Components/ConversationHistory/ConversationView.styled';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import {
  Chat,
  ChatStatus,
  ContentType,
} from '../../../../../../models/chat/chat';
import { UserRole } from '../../../../../../models/users/role';

export const CoversationViewInReports: FC<IConversationInReports> = ({
  dataFilterReports,
  handleAttachmentUser,
  handleAttachmentAgent,
  setIsModalConversationInReports,
  selModalPreviewIamge,
  setIsModalReport,
  setDataImage,
}) => {
  const wordRef = useRef<Array<HTMLSpanElement | null>>([]);
  const [seletedChatReport, setSelectedChatReport] = useState<number>(0);
  const [searchReport, setSearchReport] = useState<string>('');

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
      palabra.toLocaleLowerCase().includes(searchReport.toLocaleLowerCase()),
    );
    if (!searchReport) {
      return false;
    }
    return res;
  };
  const allIdSelected = dataFilterReports
    ?.map((ele) => ele.messages)[0]
    ?.map((v) => v)
    ?.map((e) =>
      e.content.toLocaleLowerCase().includes(searchReport.toLocaleLowerCase()),
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

  const handleDataImage = (content: string, channel: string, agent: string) => {
    setIsModalReport(agent);
    selModalPreviewIamge(true);
    setDataImage({ content, channel });
  };

  // funcion para que busca mediante el scroll.
  const scrollInnerText = useCallback(() => {
    if (!searchReport.length) {
      wordRef?.current[max]?.scrollIntoView({ behavior: 'smooth' });
    } else {
      wordRef?.current[isSelectedRef]?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [wordRef, searchReport, isSelectedRef, max]);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchReport(event.target.value);
  };
  const handleKeyBoardEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      wordRef?.current[max]?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(scrollInnerText, [scrollInnerText, searchReport, setSearchReport]);

  return (
    <StyledWrapperConversationInReports>
      <StyledHeaderConversationReports>
        <Text>Conversación</Text>
        <div>
          <div>
            <WrapperSearchHistory>
              <StyledSearchHistory
                placeholder="Buscar..."
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleKeyBoardEvent(e)
                }
                onChange={onChange}
              />
              <button type="button">
                <SVGIcon iconFile="/icons/search-solid.svg" />
              </button>
            </WrapperSearchHistory>
            <div>
              <button
                type="button"
                disabled={isSelectedRef > longIndex && !searchReport}
                onClick={handlePreviouswWordSearch}>
                <SVGIcon iconFile="/icons/chevron-square-up.svg" />
              </button>
              <button
                type="button"
                disabled={
                  isSelectedRef < 0 || !searchReport || max === isSelectedRef
                }
                onClick={handleNextWordSearch}>
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsModalConversationInReports(false)}>
            <SVGIcon iconFile="/icons/times.svg" />
          </button>
        </div>
      </StyledHeaderConversationReports>
      <StyledBodyConversationInReports>
        <div>
          <span>
            <Text>Chats</Text>
          </span>
          <StyledContainerLeft>
            {dataFilterReports &&
              dataFilterReports.map((item, index) => (
                <StyledCardAgentConversation
                  onClick={() => setSelectedChatReport(index)}
                  focusedChats={index === seletedChatReport}>
                  <div>
                    <SVGIcon iconFile="/icons/candelar_alt.svg" />
                    <Text>{handleDate(item.createdAt)}</Text>
                  </div>
                  <div>
                    <BadgeMolecule>
                      <Text>
                        {new Date(item.createdAt).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: false,
                        })}
                      </Text>
                    </BadgeMolecule>
                    <div>- - -</div>
                    <BadgeMolecule>
                      <Text>
                        {item.status === ChatStatus.ASSIGNMENT_PENDING
                          ? '--:--'
                          : new Date(item.updatedAt).toLocaleTimeString(
                              'en-US',
                              {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: false,
                              },
                            )}
                      </Text>
                    </BadgeMolecule>
                  </div>
                </StyledCardAgentConversation>
              ))}
          </StyledContainerLeft>
        </div>
        <div>
          <Text>Chats</Text>
          <div>
            <div>
              {dataFilterReports &&
                dataFilterReports
                  ?.filter((_, index) => index === seletedChatReport)
                  .map((chat: Chat) => (
                    <SectionContainerConversationView key={chat._id}>
                      {chat.messages.map((item, index) => (
                        <div key={item._id}>
                          {item.contentType !== ContentType.ATTACHMENT
                            ? handleWord(item.content)
                            : null}
                          {item.from !== UserRole.AGENT ? (
                            <StyledUserConversationInReports
                              isFocusedWord={handleWord(item.content)}>
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
                                                chat.channel,
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
                                          chat.channel,
                                        )}
                                      </>
                                    )}
                                  </>
                                  {item.contentType !== 'ATTACHMENT' &&
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
                            </StyledUserConversationInReports>
                          ) : null}
                          {item.from === UserRole.AGENT ? (
                            <StyledAgentConversationInReports
                              isFocusedWord={handleWord(item.content)}>
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
                                                  chat.channel,
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
                                    {item.contentType !== 'ATTACHMENT' &&
                                      item.content}
                                  </Text>
                                  <Text>
                                    {new Date(
                                      item.createdAt,
                                    ).toLocaleTimeString('en-US', {
                                      hour: 'numeric',
                                      minute: 'numeric',
                                      hour12: false,
                                    })}
                                  </Text>
                                </div>
                                <StyledAvatarCoversation>
                                  <SVGIcon iconFile="/icons/user.svg" />
                                </StyledAvatarCoversation>
                              </div>
                            </StyledAgentConversationInReports>
                          ) : null}
                        </div>
                      ))}
                    </SectionContainerConversationView>
                  ))}
            </div>
          </div>
        </div>
      </StyledBodyConversationInReports>
    </StyledWrapperConversationInReports>
  );
};
