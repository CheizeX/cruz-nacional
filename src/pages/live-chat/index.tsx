import { NextPage } from 'next';
import React from 'react';
import { LiveChatsPage } from '../../components/shared/pages/LiveChatsPage/LiveChatsPage';
import { UploadableFile } from '../../components/shared/templates/Chats/Components/UploadFiles/UploadFiles.interface';
import { IBackOfficeProps } from '../../components/shared/organisms/NavBar/BackOffice/NavBarBackOffice.interface';
import {
  FilterChannelsProps,
  FilterChannel,
} from '../../components/shared/templates/Chats/Components/ChatsFilter/ChatFilter/ChatFilter.interface';

const LiveChatPage: NextPage<
  UploadableFile & FilterChannelsProps & FilterChannel & IBackOfficeProps
> = ({
  id,
  errors,
  file,
  channel,
  checkedTags,
  setCheckedTags,
  setMyAccount,
}) => {
  return (
    <>
      <LiveChatsPage
        setMyAccount={setMyAccount}
        checkedTags={checkedTags}
        setCheckedTags={setCheckedTags}
        id={id}
        file={file}
        errors={errors}
        channel={channel}
      />
    </>
  );
};

export default LiveChatPage;
