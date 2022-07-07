import { FC, useState, useCallback, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ChannelsListHeader } from '../Components/ChannelsListHeader/ChannelsListHeader';
import { StyledChannelSection } from './ChannelsSection.styled';
import { ChannelsEmpty } from '../Components/ChannelsEmpty/ChannelsEmpty';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { AddChannel } from '../Components/AddChannel/AddChannel';
import { WebChatSection } from '../Components/WebChatSection/WebChatSection';
import { FacebookComponent } from '../Components/FacebookSection/FacebookSection';
import { ConfirmationAuth } from '../Components/FacebookSection/Components/ConfirmationAuth/ConfirmationAuth';
import { InstagramSection } from '../Components/InstagramSection/InstagramSection/InstagramSection';
import { ChannelList } from '../Components/ChannelList/ChannelList';
import {
  getAllChannel,
  getDevicedStatusWassenger,
  getNewDevicedIDWassenger,
  getWassengerQR,
  updateActiveSwitchStatus,
} from '../../../../../api/channels';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useAppDispatch } from '../../../../../redux/hook/hooks';
import {
  setlistChannel,
  setScript,
} from '../../../../../redux/slices/channels/list-channel';
import { RootState } from '../../../../../redux';
import { DeleteChannel } from '../Components/DeleteChannel/DeleteChannel';
import { OfficialWhatsappComponent } from '../Components/WhatsappSection/OfficialWhatsapp/OfficialWhatsapp';
import { NotificationDiviceCreated } from '../Components/WhatsappSection/Wassenger/Components/NotificationDiviceCreated/NotificationDiviceCreated';
import { setImageQR } from '../../../../../redux/slices/channels/integration-with-qr';
import {
  IPropsScripts,
  ListChannel,
} from '../../../../../models/channels/channel';
import { websocketContext } from '../../../../../chat';
import { ScriptBuilder } from '../Components/WebChatSection/Components/ScriptBuilder/ScriptBuilder';
import { ActiveSwitchStatus } from '../Components/ActiveSwitchStatus/ActiveSwitchStatus';
import { IDivice } from '../Components/WhatsappSection/Wassenger/Components/NotificationDiviceCreated/NotificationDiviceCreated.interface';
import { ITypeUnOfficialWhatsapp } from '../Components/WhatsappSection/ChatApi/ChatApiSection/ChatApiSection.interface';
import { ChatApiSession } from '../Components/WhatsappSection/ChatApi/ChatApiSection/ChatApiSection';
import { WassengerSection } from '../Components/WhatsappSection/Wassenger/WassengerSection/WassengerSection';

export const ChannelsSection: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSectionWebChat, setIsSectionWebChat] = useState<boolean>(false);
  const [seletedComponent, setSeletedComponent] = useState<string>('');
  const [showDivice, setShowDivice] = useState<boolean>(false);
  const [diviceStatus, setDiviceStatus] = useState<string>(IDivice.NEUTRO);
  const [seletedByComponentChatApi, setByComponentChatApi] =
    useState<number>(1);
  const [confirmationAccount, setConfirmationAccounth] =
    useState<boolean>(false);
  const [
    selectedByComponentUnOfficialWhatsapp,
    setSelectedByComponentUnOfficialWhatsapp,
  ] = useState<number>(1);

  const showAlert = useToastContext();
  const socket: any = useContext(websocketContext);
  const { listChannel } = useSelector(
    (state: RootState) => state.channel.listChannelState,
  );
  const { idChannel } = useSelector(
    (state: RootState) => state.channel.listChannelState,
  );

  const handleStatusUnOfficial = () => {
    if (listChannel.unofficialWhatsApp) {
      if (listChannel.unofficialWhatsApp.device === '') {
        return ITypeUnOfficialWhatsapp.IN_REVIEW;
      }
      if (listChannel.unofficialWhatsApp.phoneNumber) {
        return ITypeUnOfficialWhatsapp.RESET;
      }
      if (listChannel.unofficialWhatsApp.device !== '') {
        return ITypeUnOfficialWhatsapp.APPROVED;
      }
    }
    return ITypeUnOfficialWhatsapp.NOT_EXIST;
  };

  const dispatch = useAppDispatch();
  let timer: NodeJS.Timeout;
  const handleDiveceCreate = async () => {
    try {
      setShowDivice(true);
      setDiviceStatus(IDivice.CREATING);
      const response = await getNewDevicedIDWassenger();
      setShowDivice(true);
      setDiviceStatus(IDivice.CREATING);
      if (response === 'Device created') {
        timer = setInterval(async () => {
          const result = await getDevicedStatusWassenger();
          if (result.success === false) {
            setTimeout(() => {
              setIsSectionWebChat(false);
            }, 6000);
          } else {
            setShowDivice(true);
            setDiviceStatus(IDivice.CREATED);
            setIsSectionWebChat(false);
            clearInterval(timer);
          }
        }, 30000);
      } else {
        setShowDivice(false);
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `Fallo al crear el dispositivo.`,
        });
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  const handleClickQR = async () => {
    try {
      const response = await getWassengerQR();
      if (response.success !== false) {
        dispatch(setImageQR(response));
      } else {
        dispatch(setImageQR(''));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const getChannelList = useCallback(async () => {
    try {
      const response = await getAllChannel();
      if (response.success === false) {
        dispatch(setlistChannel({} as ListChannel));
      } else {
        dispatch(setlistChannel(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);

  const handleActiveSwitch = useCallback(async () => {
    try {
      const response = await updateActiveSwitchStatus({
        channelId: idChannel,
      });
      dispatch(setlistChannel(response));
      setTimeout(() => {
        getChannelList();
      }, 3000);
      setIsSectionWebChat(false);
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, getChannelList, idChannel, showAlert]);

  const handleToggle = (arg: string) => {
    setIsSectionWebChat(true);
    setIsOpenModal(false);
    setSeletedComponent(arg);
  };
  // socket.on("webchatScriptDone", { scriptJS, scriptCSS, div })

  useEffect(() => {
    socket.on('webchatScriptDone', (script: IPropsScripts) => {
      dispatch(setScript(script));
      getChannelList();
    });
  }, [dispatch, getChannelList, socket]);

  return (
    <StyledChannelSection>
      {showDivice === true ? (
        <NotificationDiviceCreated
          setIsSectionWebChat={setIsSectionWebChat}
          setShowDivice={setShowDivice}
          handleClickQR={handleClickQR}
          setSelectedByComponentUnOfficialWhatsapp={
            setSelectedByComponentUnOfficialWhatsapp
          }
          setSeletedComponent={setSeletedComponent}
          diviceStatus={diviceStatus}
        />
      ) : null}

      <ChannelsListHeader setIsOpenModal={setIsOpenModal} />
      <ModalMolecule isModal={isOpenModal}>
        <AddChannel
          setIsOpenModal={setIsOpenModal}
          listChannel={listChannel}
          showDivice={diviceStatus === IDivice.CREATING}
          handleToggle={handleToggle}
        />
      </ModalMolecule>
      <ModalMolecule isModal={isSectionWebChat}>
        {seletedComponent === 'webchat' ? (
          <WebChatSection
            setIsSectionWebChat={setIsSectionWebChat}
            getChannelList={getChannelList}
            setSeletedComponent={setSeletedComponent}
          />
        ) : null}
        {seletedComponent === 'unofficialWhatsApp' ? (
          <ChatApiSession
            setIsSectionWebChat={setIsSectionWebChat}
            seletedByComponentChatApi={seletedByComponentChatApi}
            setByComponentChatApi={setByComponentChatApi}
            whatsappStatus={handleStatusUnOfficial()}
            getChannelList={getChannelList}
          />
        ) : null}
        {seletedComponent === 'Wassenger' && (
          <WassengerSection
            whatsappUnOfficial={!!listChannel.unofficialWhatsApp}
            setIsSectionWebChat={setIsSectionWebChat}
            getChannelList={getChannelList}
            handleDiveceCreate={handleDiveceCreate}
            handleClickQR={handleClickQR}
            selectedByComponentUnOfficialWhatsapp={
              selectedByComponentUnOfficialWhatsapp
            }
            setSelectedByComponentUnOfficialWhatsapp={
              setSelectedByComponentUnOfficialWhatsapp
            }
          />
        )}
        {seletedComponent === 'facebook' ? (
          <FacebookComponent
            setConfirmationAccounth={setConfirmationAccounth}
            setIsSectionWebChat={setIsSectionWebChat}
            getChannelList={getChannelList}
          />
        ) : null}
        {seletedComponent === 'instagram' ? (
          <InstagramSection
            setIsSectionWebChat={setIsSectionWebChat}
            hasMessengerAccount={!!listChannel.facebook}
            getChannelList={getChannelList}
          />
        ) : null}
        {seletedComponent === 'DeleteChannel' ? (
          <DeleteChannel
            setIsSectionWebChat={setIsSectionWebChat}
            getChannelList={getChannelList}
          />
        ) : null}
        {seletedComponent === 'officialWhatsApp' ? (
          <OfficialWhatsappComponent
            setIsSectionWebChat={setIsSectionWebChat}
            getChannelList={getChannelList}
          />
        ) : null}
        {seletedComponent === 'script' ? (
          <ScriptBuilder setIsSectionWebChat={setIsSectionWebChat} />
        ) : null}
        {seletedComponent === 'switch' ? (
          <ActiveSwitchStatus
            setIsSectionWebChat={setIsSectionWebChat}
            handleActiveSwitch={handleActiveSwitch}
          />
        ) : null}
      </ModalMolecule>
      <ModalMolecule isModal={confirmationAccount}>
        <ConfirmationAuth setConfirmationAccounth={setConfirmationAccounth} />
      </ModalMolecule>
      {!listChannel?.facebook &&
      !listChannel?.officialWhatsApp &&
      !listChannel?.unofficialWhatsApp &&
      !listChannel?.webchat &&
      !listChannel?.instagram ? (
        <ChannelsEmpty setIsOpenModal={setIsOpenModal} />
      ) : (
        <ChannelList
          listChannel={listChannel}
          handleToggle={handleToggle}
          setSeletedComponent={setSeletedComponent}
          setIsSectionWebChat={setIsSectionWebChat}
          handleStatusUnOfficial={handleStatusUnOfficial}
        />
      )}
    </StyledChannelSection>
  );
};
