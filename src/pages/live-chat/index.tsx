import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { websocketContext } from '../../chat';
import { LiveChatsPage } from '../../components/shared/pages/LiveChatsPage/LiveChatsPage';
import { UploadableFile } from '../../components/shared/templates/Chats/Components/UploadFiles/UploadFiles.interface';
import { useAppSelector } from '../../redux/hook/hooks';
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
  const socket: any = React.useContext(websocketContext);

  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );
  useEffect(() => {
    socket?.emit('joinAgentRooms', {
      userId: userDataInState?._id,
      companyId: userDataInState?.companyId,
    });
  }, [socket, userDataInState]);

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
