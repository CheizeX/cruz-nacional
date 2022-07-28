import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { CollapseSidebar } from '../../components/shared/organisms/BackofficeLayout/BackofficeLayout.interface';
import { IBackOfficeProps } from '../../components/shared/organisms/NavBar/BackOffice/NavBarBackOffice.interface';
import { IPropsAgents } from '../../components/shared/templates/Dashboard/Components/Agents/Agents.interface';
import { FilterChannel } from '../../components/shared/templates/Chats/Components/ChatsFilter/ChatFilter/ChatFilter.interface';
import { BackofficeLayout } from '../../components/shared/organisms/BackofficeLayout/BackofficeLayout';
import { websocketContext } from '../../chat';
import { useAppSelector } from '../../redux/hook/hooks';

const BackofficePage: NextPage<
  IBackOfficeProps & CollapseSidebar & IPropsAgents & FilterChannel
> = ({
  setSelectedSection,
  setCollapseArrow,
  setMyAccount,
  myAccount,
  setDatePicker,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  checkedTags,
  setCheckedTags,
}) => {
  const socket: any = React.useContext(websocketContext);

  const { _id: userId, companyId } = useAppSelector(
    (state) => state?.userAuthCredentials.userDataInState,
  );

  useEffect(() => {
    socket?.emit('joinBackofficeRooms', {
      companyId,
      userId,
    });
  }, [companyId, userId]);

  return (
    <BackofficeLayout
      checkedTags={checkedTags}
      setCheckedTags={setCheckedTags}
      setDatePicker={setDatePicker}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      setSelectedSection={setSelectedSection}
      myAccount={myAccount}
      setMyAccount={setMyAccount}
      setCollapseArrow={setCollapseArrow}
    />
  );
};

export default BackofficePage;
