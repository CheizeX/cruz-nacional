import { FC, useEffect, useState } from 'react';
import {
  StyledEditContacts,
  StyledHeaderEdit,
  StyledBodyEditContacts,
  StyledFooterEditContacts,
} from './EditContact.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { IPropEditContact } from './EditContact.interface';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { updateContacts } from '../../../../../../api/contacts';
import { StyledStatusSelector } from '../CreateContacts/CreateContacts.styled';
import { StatusProps } from '../../../Configuration/Components/ContactsConfig/ContactsCreator/ContactsCreator.interface';

export const EditContact: FC<IPropEditContact> = ({
  setIsOpenModal,
  readListContacts,
}) => {
  const showAlert = useToastContext();

  const { contactStatus } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData,
  );
  const { updateContact, contactById } = useAppSelector(
    (state) => state.contacts.contactsInfoState,
  );

  const [contactInfo, setContactInfo] = useState({
    name: '',
    mainNumber: '',
    secondaryNumber: '',
    email: '',
    contactCompanyName: '',
    status: '',
  });

  useEffect(() => {
    setContactInfo({
      name: updateContact.name,
      mainNumber: updateContact.mainNumber,
      secondaryNumber: updateContact.secondaryNumber || '',
      email: updateContact.email || '',
      contactCompanyName: updateContact.contactCompanyName,
      status: updateContact.status,
    });
  }, [
    updateContact.name,
    updateContact.mainNumber,
    updateContact.secondaryNumber,
    updateContact.email,
    updateContact.contactCompanyName,
    updateContact.status,
  ]);

  const handleChangeUpdateContact = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await updateContacts(contactById, contactInfo);
      if (response === 'Updated contact') {
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'Perfecto!',
          message: `Se actualizo correctamente ${response}`,
        });
        await readListContacts();
        setIsOpenModal(false);
      } else {
        showAlert?.addToast({
          alert: Toast.WARNING,
          title: 'Upps!',
          message: `Ocurrio un error ${response}`,
        });
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: '¡Upps!',
        message: `${err}`,
      });
    }
  };

  return (
    <StyledEditContacts>
      <StyledHeaderEdit>
        <Text> Editar contacto</Text>
        <button type="button" onClick={() => setIsOpenModal(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderEdit>
      <StyledBodyEditContacts>
        <div>
          <Text>Nombre</Text>
          <ContainerInput
            setFocus={() => null}
            name="name"
            value={contactInfo.name}
            onChange={handleChangeUpdateContact}
          />
          <Text>Teléfono</Text>
          <ContainerInput
            setFocus={() => null}
            name="mainNumber"
            value={contactInfo.mainNumber}
            onChange={handleChangeUpdateContact}
          />
          <Text>Teléfono (otro)</Text>
          <ContainerInput
            setFocus={() => null}
            name="secondaryNumber"
            value={contactInfo.secondaryNumber}
            onChange={handleChangeUpdateContact}
          />
          <Text>Email</Text>
          <ContainerInput
            setFocus={() => null}
            name="email"
            value={contactInfo.email}
            onChange={handleChangeUpdateContact}
          />
          <Text>Empresa</Text>
          <ContainerInput
            setFocus={() => null}
            name="contactCompanyName"
            value={contactInfo.contactCompanyName}
            onChange={handleChangeUpdateContact}
          />
          <Text>Status</Text>
          <StyledStatusSelector
            name="status"
            value={contactInfo.status}
            onChange={(e) => {
              setContactInfo({
                ...contactInfo,
                status: e.target.value,
              });
            }}>
            {contactStatus?.map((status: StatusProps) => (
              <option key={status.name} value={status.name}>
                {status.name}
              </option>
            ))}
          </StyledStatusSelector>
        </div>
      </StyledBodyEditContacts>
      <StyledFooterEditContacts>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          onClick={() => setIsOpenModal(false)}
          variant={ButtonVariant.OUTLINED}
        />
        <ButtonMolecule
          text="Editar"
          size={Size.MEDIUM}
          onClick={handleSubmit}
        />
      </StyledFooterEditContacts>
    </StyledEditContacts>
  );
};
