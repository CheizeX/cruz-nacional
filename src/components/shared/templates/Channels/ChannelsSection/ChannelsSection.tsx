import { FC, useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ChannelsListHeader } from '../Components/ChannelsListHeader/ChannelsListHeader';
import { StyledChannelSection } from './ChannelsSection.styled';
import { ChannelsEmpty } from '../Components/ChannelsEmpty/ChannelsEmpty';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { AddChannel } from '../Components/AddChannel/AddChannel';
import { SectionWebChat } from '../Components/SectionWebChat/SectionWebChat';
import { SectionWhatsAppComponent } from '../Components/SectionWhatsapp/SectionWhatsapp';
import { SectionFacebookComponent } from '../Components/SectionFacebook/SectionFacebook';
import { ConfirmationAuth } from '../Components/SectionFacebook/Components/ConfirmationAuth/ConfirmationAuth';
import { SectionComponentInstagram } from '../Components/SectionInstagram/SectionInstagram';
import { ChannelList } from '../Components/ChannelList/ChannelList';
import { getAllChannel } from '../../../../../api/channels';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { useAppDispatch } from '../../../../../redux/hook/hooks';
import { setlistChannel } from '../../../../../redux/slices/channels/list-channel';
import { RootState } from '../../../../../redux';
import { DeleteChannel } from '../Components/DeleteChannel/DeleteChannel';

export const ChannelsSection: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSectionWebChat, setIsSectionWebChat] = useState<boolean>(false);
  const [seletedComponent, setSeletedComponent] = useState<string>('');
  const [confirmationAccount, setConfirmationAccounth] =
    useState<boolean>(false);

  const showAlert = useToastContext();
  const { listChannel } = useSelector(
    (state: RootState) => state.channel.listChannelState,
  );
  const dispatch = useAppDispatch();

  const getChannelList = useCallback(async () => {
    try {
      const response = await getAllChannel();
      if (response.success === false) {
        // dispatch(setlistChannel();
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
  }, [setlistChannel, listChannel]);

  useEffect(() => {
    getChannelList();
  }, []);

  return (
    <StyledChannelSection>
      <ChannelsListHeader setIsOpenModal={setIsOpenModal} />
      <ModalMolecule isModal={isOpenModal}>
        <AddChannel
          setIsOpenModal={setIsOpenModal}
          setIsSectionWebChat={setIsSectionWebChat}
          setSeletedComponent={setSeletedComponent}
        />
      </ModalMolecule>
      <ModalMolecule isModal={isSectionWebChat}>
        {seletedComponent === 'Web Chat' ? (
          <SectionWebChat setIsSectionWebChat={setIsSectionWebChat} />
        ) : null}
        {seletedComponent === 'Whatsapp' ? (
          <SectionWhatsAppComponent setIsSectionWebChat={setIsSectionWebChat} />
        ) : null}
        {seletedComponent === 'Messenger' ? (
          <SectionFacebookComponent
            setConfirmationAccounth={setConfirmationAccounth}
            setIsSectionWebChat={setIsSectionWebChat}
          />
        ) : null}
        {seletedComponent === 'Instagram' ? (
          <SectionComponentInstagram
            setIsSectionWebChat={setIsSectionWebChat}
          />
        ) : null}
        {seletedComponent === 'DeleteChannel' ? (
          <DeleteChannel setIsSectionWebChat={setIsSectionWebChat} />
        ) : null}
      </ModalMolecule>
      <ModalMolecule isModal={confirmationAccount}>
        <ConfirmationAuth setConfirmationAccounth={setConfirmationAccounth} />
      </ModalMolecule>
      {!listChannel?.facebook &&
      !listChannel?.officialWhatsApp &&
      !listChannel?.unofficialWhatsApp ? (
        <ChannelsEmpty setIsOpenModal={setIsOpenModal} />
      ) : (
        <ChannelList
          listChannel={listChannel}
          setSeletedComponent={setSeletedComponent}
          setIsSectionWebChat={setIsSectionWebChat}
        />
      )}
    </StyledChannelSection>
  );
};
