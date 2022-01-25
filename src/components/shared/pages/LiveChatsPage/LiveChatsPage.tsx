import React, { FC, useEffect } from 'react';
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
  const { decodedToken }: any = useJwt(accessToken);

  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
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
  }, [decodedToken]);

  return (
    <>
      {decodedToken && decodedToken.role === UserRole.AGENT ? (
        <StyledLiveChats>
          <NavBarLive
            setMyAccount={setMyAccount}
            messageIcon={() => <SVGIcon iconFile="/icons/message_icons.svg" />}
            bellIcon={() => <SVGIcon iconFile="/icons/bell.svg" />}
          />
          <ChatsSection
            checkedTags={checkedTags}
            setCheckedTags={setCheckedTags}
            handleCleanChannels={handleCleanChannels}
            selectedChannels={selectedChannels}
            setSelectedChannels={setSelectedChannels}
            channel={channel}
            emojisDisplayed
            setEmojisDisplayed={() => {}}
            id={id}
            file={file}
            errors={errors}
            setChatInputDialogue={() => {}}
          />
        </StyledLiveChats>
      ) : (
        <Loader />
      )}
    </>
  );
};
