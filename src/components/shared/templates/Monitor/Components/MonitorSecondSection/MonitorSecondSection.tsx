import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { Text } from '../../../../atoms/Text/Text';
import { FilterAgents } from '../FilterAgents/FilterAgents';
import { Chat, ChatStatus } from '../../../../../../models/chat/chat';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import {
  StyledWrapperSectionMonitor,
  StyledHeaderFirstSection,
  WrapperFirtSectionCard,
  WrapperSecondSectionAgent,
  StyledAgentActive,
  TooltipBoxEmail,
  StyledToolTipCardEmail,
  TooltipTextEmail,
  StyledToolTipCardName,
  TooltipTextName,
  TooltipBoxName,
} from './MonitorSecondSection.styled';
import { ChatsCardMonitor } from '../ChatsCardMonitor/ChatsCardMonitor';
import { IMonitorSecondSection } from './MonitorSecondSection.interface';
import { UserStatus } from '../../../../../../models/users/status';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { TooltipPosition } from '../../../../atoms/Tooltip/tooltip.interface';
import { Tooltip } from '../../../../atoms/Tooltip/Tooltip';
import { Tag } from '../../../../../../models/tags/tag';

export const MonitorSecondSection: FC<IMonitorSecondSection> = ({
  onChange,
  dateAgent,
  agentNotAvailable,
  allAgent,
  chats,
  stateByAgent,
  byAgentAvailable,
  countAgent,
  filterByAgents,
  filterByState,
  handleChange,
  handleClear,
  handleStateAgents,
}) => {
  const [accessToken] = useLocalStorage('AccessToken', '');

  const handleLetterLimitName = (name: string) => {
    if (name.length > 21) {
      return `${name.slice(0, 21)}...`;
    }
    return name;
  };
  const handleLetterLimitEmail = (email: string) => {
    if (email.length > 26) {
      return `${email.slice(0, 26)}...`;
    }
    return email;
  };
  const handleTooltipName = (name: string) => {
    if (name.length > 21) {
      return <TooltipBoxName>{name}</TooltipBoxName>;
    }
    return null;
  };

  const handleTooltipEmail = (email: string) => {
    if (email.length > 26) {
      return <TooltipBoxEmail>{email}</TooltipBoxEmail>;
    }
    return null;
  };

  const handleTag = (tags: Tag[]) => {
    if (tags && tags.length > 1) {
      return tags.length.toString();
    }
    return tags && tags[0].name;
  };
  const handleLetterTag = (tags: Tag[]) => {
    if (tags && tags.length > 1) {
      const str = tags.map((item) => item.name);
      return str.toString();
    }
    return tags && tags[0].name;
  };

  return (
    <StyledWrapperSectionMonitor>
      <StyledHeaderFirstSection>
        <Text color="black">Agentes Conectados</Text>
        <FilterAgents
          onChange={onChange}
          dateAgent={allAgent ?? []}
          stateByAgent={stateByAgent}
          byAgentAvailable={byAgentAvailable}
          handleStateAgents={handleStateAgents}
          filterByAgents={filterByAgents}
          filterByState={filterByState}
          handleChange={handleChange}
          handleClear={handleClear}
        />
      </StyledHeaderFirstSection>
      <WrapperFirtSectionCard>
        <ChatsCardMonitor
          name="Disponible"
          number={countAgent}
          position="AVAILABLE"
          icon="/icons/user_Accept.svg"
          setFilterChat={() => null}
        />
        <ChatsCardMonitor
          name="En Pausa"
          number={agentNotAvailable && agentNotAvailable.length}
          position="BATHROOM"
          icon="/icons/user_watch.svg"
          setFilterChat={() => null}
        />
      </WrapperFirtSectionCard>
      <ContainerInput
        placeHolder="Buscar agente..."
        setFocus={() => null}
        LeftIcon={() => <SVGIcon iconFile="/icons/search-solid.svg" />}
        onChange={onChange}
      />
      <WrapperSecondSectionAgent>
        {(dateAgent &&
          dateAgent.map(({ _id, name, email, status, urlAvatar, tags }) => (
            <div key={_id}>
              <div>
                {urlAvatar && urlAvatar !== '' ? (
                  <img
                    src={`${urlAvatar}?token=${accessToken}`}
                    alt={name.slice(0, 7)}
                  />
                ) : (
                  // <img
                  //   src={`${urlAvatar}?token=${accessToken}`}
                  //   // onLoad={imageOnLoadHandler}
                  //   onError={imageOnErrorHandler}
                  //   alt="www.kindacode.com" laboraorio mundo spec imunospect
                  // />
                  // <StyledMyAccountAvatar src="/icons/user.svg" />
                  <SVGIcon iconFile="/icons/unknown_user.svg" />
                )}
                <div>
                  <span>
                    {status === UserStatus.AVAILABLE ? (
                      <StyledAgentActive />
                    ) : null}
                  </span>
                  <StyledToolTipCardName>
                    <TooltipTextName>
                      {handleLetterLimitName(name)}
                    </TooltipTextName>
                    {handleTooltipName(name)}
                  </StyledToolTipCardName>
                  <StyledToolTipCardEmail>
                    <TooltipTextEmail>
                      {handleLetterLimitEmail(email)}
                    </TooltipTextEmail>
                    {handleTooltipEmail(email)}
                  </StyledToolTipCardEmail>
                </div>
              </div>
              <span>
                <div>
                  {tags && (
                    <Tooltip
                      text={handleLetterTag(tags)}
                      position={TooltipPosition.top}>
                      <BadgeMolecule
                        bgColor="#24C3A7"
                        rightIcon={() => (
                          <SVGIcon iconFile="/icons/etiqueta.svg" />
                        )}>
                        <Text>{handleTag(tags).slice(0, 1)}</Text>
                      </BadgeMolecule>
                    </Tooltip>
                  )}
                  <BadgeMolecule
                    bgColor="#3AA4FF"
                    rightIcon={() => (
                      <SVGIcon iconFile="/icons/small_message.svg" />
                    )}>
                    <Text>
                      {chats?.filter(
                        (chat: Chat) =>
                          chat.status === ChatStatus.ON_CONVERSATION &&
                          chat.assignedAgent &&
                          chat.assignedAgent._id === _id,
                      ).length ?? 0}
                    </Text>
                  </BadgeMolecule>
                  <BadgeMolecule
                    bgColor="#B2B2B2"
                    rightIcon={() => (
                      <SVGIcon iconFile="/icons/exchange_alt.svg" />
                    )}>
                    <Text>
                      {chats?.filter(
                        (chat: Chat) =>
                          chat.isTransfer === true &&
                          chat.assignedAgent &&
                          chat.assignedAgent._id === _id,
                      ).length ?? 0}
                    </Text>
                  </BadgeMolecule>
                </div>
                <BadgeMolecule
                  bgColor="#8769FF"
                  leftIcon={() => <SVGIcon iconFile="/icons/icon_watch.svg" />}>
                  <Text>
                    {chats !== undefined
                      ? (chats.filter(
                          (chat) =>
                            chat.status === ChatStatus.FINISHED &&
                            chat.assignedAgent._id &&
                            chat.assignedAgent._id === _id,
                        ).length === 0
                          ? 0
                          : chats
                              .filter(
                                (chat: Chat) =>
                                  chat.status === ChatStatus.FINISHED &&
                                  chat.assignedAgent &&
                                  chat.assignedAgent._id === _id &&
                                  chat,
                              )
                              .map(
                                (item) =>
                                  new Date(item.updatedAt).getTime() -
                                  new Date(item.createdAt).getTime(),
                              )
                              .reduce(
                                (acum, value) => Math.floor(acum + value),
                                0,
                              ) /
                            1000 /
                            60 /
                            chats.filter(
                              (item: Chat) =>
                                item.assignedAgent &&
                                item.assignedAgent._id === _id,
                            ).length
                        ).toFixed(0) ?? 0
                      : 0}{' '}
                    min
                  </Text>
                </BadgeMolecule>
              </span>
            </div>
          ))) ??
          []}
      </WrapperSecondSectionAgent>
    </StyledWrapperSectionMonitor>
  );
};
