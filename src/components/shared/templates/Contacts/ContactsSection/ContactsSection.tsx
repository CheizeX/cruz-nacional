import { FC, useMemo, useState, useCallback, useEffect } from 'react';
import { ContactsHeader } from '../Components/ContactsHeader/ContactsHeader';
import { WrapperContactsSection } from './ContactsSection.styled';
import { ContactsBox } from '../Components/ContactsBox/ContactsBox';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { DeleteContact } from '../Components/DeleteContact/DeleteContact';
import { CreateContacts } from '../Components/CreateContacts/CreateContacts';
// import { RejectContact } from '../Components/RejectContact/RejectContact';
import { EditContact } from '../Components/EditContact/EditContact';
import { IPropsContacts } from '../../../../../models/contacts/contacts';
import { readContacts } from '../../../../../api/contacts';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hook/hooks';
import { setInfoContacts } from '../../../../../redux/slices/contacts/contacts-info';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { StartConversation } from '../Components/StartConversation/StartConversation';
import { RejectConversation } from '../Components/RejectConversation/RejectConversation';
import { IContacts } from './Contacts.interface';
import { getGeneralConfigurationData } from '../../../../../redux/slices/configuration/configuration-info';
import { setlistChannel } from '../../../../../redux/slices/channels/list-channel';
import { getAllChannel } from '../../../../../api/channels';
import { ListChannel } from '../../../../../models/channels/channel';

export const ContactsSetion: FC<IContacts> = ({
  setActiveByDefaultTab,
  setUserSelected,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [selectedContact, setSelectedContact] = useState<string>('');

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [searchContacts, setSearchContacts] = useState<string>('');
  const [selectedByClient, setSelectedByClient] = useState({
    contactId: '',
    secondaryContact: '',
    name: '',
  });

  const { dataContacts } = useAppSelector(
    (state) => state.contacts.contactsInfoState,
  );
  const { listChannel } = useAppSelector(
    (state) => state.channel.listChannelState,
  );

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

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContacts(event.target.value);
  };
  const dataAllContacts = useMemo(() => {
    if (!searchContacts) return dataContacts;
    if (dataContacts.length === undefined) return [];
    return dataContacts?.filter(
      (contact: IPropsContacts) =>
        contact.name.toLowerCase().includes(searchContacts.toLowerCase()) ||
        contact.mainNumber
          .toLocaleLowerCase()
          .includes(searchContacts.toLowerCase()) ||
        (contact.secondaryNumber &&
          contact.secondaryNumber
            .toLocaleLowerCase()
            .includes(searchContacts.toLocaleLowerCase())),
    );
  }, [dataContacts, searchContacts]);

  const readListContacts = useCallback(async () => {
    try {
      const response = await readContacts();
      if (response.success === false) {
        dispatch(setInfoContacts([]));
      }
      dispatch(setInfoContacts(response));
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `No se puede establecer la conexión con el servidor`,
      });
    }
  }, [dispatch, showAlert]);

  useEffect(() => {
    readListContacts();
    getChannelList();
    dispatch(getGeneralConfigurationData());
  }, [readListContacts, dispatch, getChannelList]);

  return (
    <WrapperContactsSection>
      <ContactsHeader
        dataContacts={dataContacts}
        onChange={onChange}
        setSelectedContact={setSelectedContact}
        setIsOpenModal={setIsOpenModal}
      />
      <ContactsBox
        dataContacts={dataAllContacts}
        setSelectedContact={setSelectedContact}
        setIsOpenModal={setIsOpenModal}
        setSelectedByClient={setSelectedByClient}
        conversationStartError={!!listChannel.unofficialWhatsApp}
      />
      <ModalMolecule isModal={isOpenModal} setModal={setIsOpenModal}>
        {selectedContact && selectedContact === 'create' && (
          <CreateContacts
            setIsOpenModal={setIsOpenModal}
            readListContacts={readListContacts}
          />
        )}
        {selectedContact && selectedContact === 'edit' ? (
          <EditContact
            setIsOpenModal={setIsOpenModal}
            readListContacts={readListContacts}
          />
        ) : null}
        {selectedContact && selectedContact === 'start' ? (
          <StartConversation
            setIsOpenModal={setIsOpenModal}
            selectedByClient={selectedByClient}
            setActiveByDefaultTab={setActiveByDefaultTab}
            setUserSelected={setUserSelected}
          />
        ) : null}
        {selectedContact && selectedContact === 'delete' ? (
          <DeleteContact
            setIsOpenModal={setIsOpenModal}
            readListContacts={readListContacts}
          />
        ) : null}
        {selectedContact && selectedContact === 'reject' ? (
          <RejectConversation
            setIsOpenModal={setIsOpenModal}
            conversationStartError={!listChannel.unofficialWhatsApp}
          />
        ) : null}
      </ModalMolecule>
    </WrapperContactsSection>
  );
};
