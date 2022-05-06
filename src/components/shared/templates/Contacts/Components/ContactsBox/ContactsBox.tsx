/* eslint-disable sonarjs/cognitive-complexity */
import { FC } from 'react';
import {
  StyledContactBox,
  StyledListContacts,
  StyledAllIcon,
} from './ContactsBox.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { IContactsProps } from './ContactsBox.interface';
import { IPropsContacts } from '../../../../../../models/contacts/contacts';
import { IPropsChannel } from '../../../../../../models/chat/chat';
import { setChannelContacts } from '../../../../../../redux/slices/contacts/contacts-form';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import {
  setUpdateContacts,
  setContactById,
} from '../../../../../../redux/slices/contacts/contacts-info';
import { EmptyContacts } from '../EmptyContacts/EmptyContacts';
import { StatusProps } from '../../../Configuration/Components/ContactsConfig/ContactsCreator/ContactsCreator.interface';

export const ContactsBox: FC<IContactsProps> = ({
  dataContacts,
  setSelectedContact,
  setIsOpenModal,
  setSelectedByClient,
  conversationStartError,
}) => {
  const dispatch = useAppDispatch();
  const { contactStatus } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData,
  );
  const { updateContact } = useAppSelector(
    (state) => state.contacts.contactsInfoState,
  );

  const handleOpenSection = (
    arg: string,
    identifier: string,
    mainNumber: string,
    name: string,
    busy: boolean,
    channel: IPropsChannel[],
    secondaryNumber: string,
    email: string,
    contactCompanyName: string,
    status: string,
  ) => {
    setSelectedByClient({
      contactId: mainNumber,
      secondaryContact: secondaryNumber,
      name,
    });
    dispatch(
      setUpdateContacts({
        ...updateContact,
        name,
        mainNumber,
        secondaryNumber,
        email,
        contactCompanyName,
        status,
      }),
    );
    dispatch(setContactById(identifier));
    dispatch(setChannelContacts(channel));
    if (arg === 'edit') {
      setSelectedContact('edit');
    } else if (arg === 'start') {
      !busy && conversationStartError
        ? setSelectedContact('start')
        : setSelectedContact('reject');
    } else {
      setSelectedContact('delete');
    }
    setIsOpenModal(true);
  };
  const handleLimitEmail = (email: string) => {
    if (email.length > 20) {
      return `${email.slice(0, 20)}...`;
    }
    return email;
  };
  const handleLimitName = (name: string) => {
    if (name.length > 10) {
      return `${name.slice(0, 10)}...`;
    }
    return name;
  };

  return (
    <>
      {dataContacts.length !== undefined ? (
        <StyledContactBox>
          <StyledListContacts>
            <div>
              <Text>Nombre</Text>
              <Text>Teléfono</Text>
              <Text>Teléfono</Text>
              <Text>Email</Text>
              <Text>Empresa</Text>
              <Text>Propietario</Text>
              <Text>Canal</Text>
              <Text>Status</Text>
              <Text>Opciones</Text>
            </div>
            <section>
              {dataContacts &&
                dataContacts.map((item: IPropsContacts) => (
                  <div key={item._id}>
                    <Text color="black">
                      <div>{item.name.slice(0, 1).toLocaleUpperCase()}</div>
                      {handleLimitName(item.name)}
                    </Text>
                    <Text color="black">{item.mainNumber}</Text>
                    <Text color="black">{item.secondaryNumber}</Text>
                    <Text color="black">
                      {item.email ? handleLimitEmail(item.email) : ''}
                    </Text>
                    <Text color="black">{item.contactCompanyName}</Text>
                    <Text color="black">{item.owner.name}</Text>
                    <span>
                      {item.channels.length === 1 ? (
                        <SVGIcon
                          iconFile={`/icons/${
                            item.channels[0].name === 'Wassenger'
                              ? 'Whatsapp'
                              : item.channels[0].name
                          }.svg`}
                        />
                      ) : (
                        <StyledAllIcon>
                          <SVGIcon iconFile="/icons/whatsapp.svg" />
                          <SVGIcon iconFile="/icons/messenger.svg" />
                          <SVGIcon iconFile="/icons/instagram.svg" />
                        </StyledAllIcon>
                      )}
                    </span>
                    <Text
                      lineThrough={
                        !contactStatus?.find(
                          (status: StatusProps) => status.name === item.status,
                        )
                      }
                      color={
                        contactStatus?.find(
                          (name: StatusProps) =>
                            name.name.toLowerCase() ===
                            item.status.toLowerCase(),
                        )?.color || 'tomato'
                      }>
                      {item.status ? item.status : ''}
                    </Text>
                    <span>
                      <button
                        type="button"
                        onClick={() =>
                          handleOpenSection(
                            'edit',
                            item._id,
                            item.mainNumber,
                            item.name,
                            item.isBusy,
                            item.channels,
                            item.secondaryNumber || '',
                            item.email || '',
                            item.contactCompanyName,
                            item.status,
                          )
                        }>
                        <SVGIcon iconFile="/icons/pen.svg" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleOpenSection(
                            'delete',
                            item._id,
                            item.mainNumber,
                            item.name,
                            item.isBusy,
                            item.channels,
                            item.secondaryNumber || '',
                            item.email || '',
                            item.contactCompanyName,
                            item.status,
                          )
                        }>
                        <SVGIcon iconFile="/icons/delete.svg" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleOpenSection(
                            'start',
                            item._id,
                            item.mainNumber,
                            item.name,
                            item.isBusy,
                            item.channels,
                            item.secondaryNumber || '',
                            item.email || '',
                            item.contactCompanyName,
                            item.status,
                          )
                        }>
                        <SVGIcon iconFile="/icons/message_icons.svg" />
                      </button>
                    </span>
                  </div>
                ))}
            </section>
          </StyledListContacts>
        </StyledContactBox>
      ) : (
        <EmptyContacts />
      )}
    </>
  );
};
