import React, { FC, useCallback, useEffect, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../../../redux/hook/hooks';
import useLocalStorage from '../../../../hooks/use-local-storage';
import { UserRole } from '../../../../models/users/role';
import { Loader } from '../../atoms/Loader/Loader';
import { ContactsSetion } from '../../templates/Contacts/ContactsSection/ContactsSection';
import { LibrarySection } from '../../templates/Library/LibrarySection/LibrarySection';
import { setUserDataInState } from '../../../../redux/slices/auth/user-credentials';
import { readUser } from '../../../../api/users';
import { DecodedToken } from '../../../../models/users/user';
import { useToastContext } from '../../molecules/Toast/useToast';
import { Toast } from '../../molecules/Toast/Toast.interface';

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
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [accessToken] = useLocalStorage('AccessToken', '');

  const [activeByDefaultTab, setActiveByDefaultTab] = useState<number>(0);
  const [userSelected, setUserSelected] = useState<string>('');
  const { decodedToken }: any = useJwt(accessToken);

  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );
  // State que se encarga de cambiar de sección
  const { componentsSection } = useAppSelector(
    (state) => state.section.componentsSectionState,
  );

  const readByAgent = useCallback(async () => {
    try {
      if (decodedToken) {
        const dataUser = decodedToken as DecodedToken;
        const response = await readUser(dataUser._id);
        dispatch(setUserDataInState(response as DecodedToken));
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'Error',
        message: `${error}`,
      });
    }
  }, [decodedToken]);

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
  }, [accessToken, decodedToken, dispatch, push]);

  useEffect(() => {
    readByAgent();
  }, [readByAgent]);

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
          {componentsSection === 'Chat' &&
            userDataInState.soundEnabled !== undefined && (
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
            )}
          {componentsSection === 'Contactos' && (
            <ContactsSetion
              setActiveByDefaultTab={setActiveByDefaultTab}
              activeByDefaultTab={activeByDefaultTab}
              setUserSelected={setUserSelected}
              userSelected={userSelected}
            />
          )}
          {componentsSection === 'Biblioteca' && <LibrarySection />}
        </StyledLiveChats>
      ) : (
        <Loader />
      )}
    </>
  );
};
