import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useJwt } from 'react-jwt';
import { NavBarLive } from '../../organisms/NavBar/NavBarLive/NavBarLive';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { StyledLiveChats } from './LiveChatsPage.styled';
import { ChatsSection } from '../../templates/Chats/ChatsSection/ChatsSection';
import { UploadableFile } from '../../templates/Chats/Components/UploadFiles/UploadFiles.interface';
import { IBackOfficeProps } from '../../organisms/NavBar/BackOffice/NavBarBackOffice.interface';
import {
  FilterChannelsProps,
  FilterChannel,
} from '../../templates/Chats/Components/ChatsFilter/ChatFilter/ChatFilter.interface';
import { useAppSelector } from '../../../../redux/hook/hooks';
import useLocalStorage from '../../../../hooks/use-local-storage';
import { UserRole } from '../../../../models/users/role';
import { Loader } from '../../atoms/Loader/Loader';
import { ContactsSetion } from '../../templates/Contacts/ContactsSection/ContactsSection';

export const LiveChatsPage: FC<
  UploadableFile & FilterChannelsProps & FilterChannel & IBackOfficeProps
> = ({
  id,
  file,
  errors,
  channel,
  selectedChannels,
  setSelectedChannels,
  handleCleanChannels,
  checkedTags,
  setCheckedTags,
  setMyAccount,
}) => {
  const { push } = useRouter();

  const [accessToken] = useLocalStorage('AccessToken', '');
  const [activeByDefaultTab, setActiveByDefaultTab] = useState<number>(0);
  const [userSelected, setUserSelected] = useState<string>('');
  const { decodedToken }: any = useJwt(accessToken);

  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );
  // State que se encarga de cambiar de sección
  const { componentsSection }: any = useAppSelector(
    (state) => state.section.componentsSectionState,
  );

  useEffect(() => {
    if (!accessToken) {
      push('/');
    }
    if (
      decodedToken &&
      userDataInState &&
      decodedToken?.role !== UserRole.AGENT
    ) {
      push('/backoffice');
    }
  }, [accessToken, decodedToken, push, userDataInState]);
  return (
    <>
      {decodedToken && decodedToken.role === UserRole.AGENT ? (
        <StyledLiveChats>
          <NavBarLive
            setMyAccount={setMyAccount}
            messageIcon={() => <SVGIcon iconFile="/icons/message_icons.svg" />}
            bellIcon={() => <SVGIcon iconFile="/icons/bell.svg" />}
            componentsSection={componentsSection}
          />
          {componentsSection === 'Chat' ? (
            <ChatsSection
              checkedTags={checkedTags}
              setCheckedTags={setCheckedTags}
              handleCleanChannels={handleCleanChannels}
              selectedChannels={selectedChannels}
              setSelectedChannels={setSelectedChannels}
              setActiveByDefaultTab={setActiveByDefaultTab}
              activeByDefaultTab={activeByDefaultTab}
              setUserSelected={setUserSelected}
              userSelected={userSelected}
              channel={channel}
              emojisDisplayed
              setEmojisDisplayed={() => {}}
              id={id}
              file={file}
              errors={errors}
              setChatInputDialogue={() => {}}
            />
          ) : null}
          {componentsSection === 'Contactos' ? (
            <ContactsSetion
              setActiveByDefaultTab={setActiveByDefaultTab}
              activeByDefaultTab={activeByDefaultTab}
              setUserSelected={setUserSelected}
              userSelected={userSelected}
            />
          ) : null}
        </StyledLiveChats>
      ) : (
        <Loader />
      )}
    </>
  );
};
