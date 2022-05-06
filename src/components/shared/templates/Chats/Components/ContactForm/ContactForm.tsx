import { FC, useState, useCallback } from 'react';
import { FcBusinessContact } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import {
  ButtonMolecule,
  ButtonState,
  Size,
} from '../../../../atoms/Button/Button';
import { Text } from '../../../../atoms/Text/Text';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { createContacts } from '../../../../../../api/contacts';
import {
  StyledButtonContactForm,
  StyledContactFormContainer,
} from './ContactForm.styled';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { RootState } from '../../../../../../redux';
import { StyledStatusSelector } from '../../../Contacts/Components/CreateContacts/CreateContacts.styled';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { StatusProps } from '../../../Configuration/Components/ContactsConfig/ContactsCreator/ContactsCreator.interface';
import { Channels } from '../../../../../../models/chat/chat';

export const ContactForm: FC = () => {
  const showAlert = useToastContext();
  const [isValid, setIsValid] = useState<boolean>(true);
  const { idClient, idChannel } = useSelector(
    (state: RootState) => state.liveChat.chatsHistoryState,
  );

  const { contactStatus } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData,
  );
  const { userDataInState } = useSelector(
    (state: RootState) => state.userAuthCredentials,
  );

  const agentName = userDataInState?.name;

  const [showContact, setShowContact] = useState<boolean>(false);
  const [datsContact, setDatsContact] = useState({
    name: '',
    mainNumber: idClient,
    secondaryNumber: '',
    email: '',
    contactCompanyName: '',
    channel: {
      name: '',
      clientId: '',
    },
    status: 'Activo',
  });

  const handleClick = () => {
    setShowContact(!showContact);
    setDatsContact({
      ...datsContact,
      name: '',
      mainNumber: '',
      secondaryNumber: '',
      email: '',
      contactCompanyName: '',
      channel: {
        name: '',
        clientId: '',
      },
      status: 'Activo',
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (event.target.name === 'email') {
      if (emailRegex.test(event.target.value)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
    if (event.target.value.slice(0, 1) === '+') {
      setDatsContact({
        ...datsContact,
        [event.target.name]: event.target.value.slice(
          1,
          event.target.value.length,
        ),
        channel: {
          name: idChannel,
          clientId: idClient,
        },
      });
    } else if (idChannel === 'Webchat') {
      // dispatch(setChatsIdClient(''));
      setDatsContact({
        ...datsContact,
        [event.target.name]: event.target.value,
        channel: {
          name: Channels.CHAT_API,
          clientId: datsContact.mainNumber,
        },
      });
    } else {
      setDatsContact({
        ...datsContact,
        [event.target.name]: event.target.value,
        mainNumber: idClient,
        channel: {
          name: idChannel,
          clientId: idClient,
        },
      });
    }

    // dispatch(setChatsIdChannel(idChannel));
    // dispatch(setChatsIdClient(idClient));
  };

  const handleToggle = useCallback(async () => {
    try {
      const response = await createContacts(datsContact);
      if (response.success === false) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: '¡Error!',
          message: 'Recuerda ingresar los datos correctamente',
        });
      } else {
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: '¡Perfecto!',
          message: `Se guardo correctamente el contacto ${response}`,
        });
      }
      setShowContact(false);
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [datsContact, showAlert]);

  return (
    <div>
      <StyledButtonContactForm onClick={handleClick}>
        <FcBusinessContact />
      </StyledButtonContactForm>
      <StyledContactFormContainer showContact={showContact}>
        <Text>Nombre</Text>
        <ContainerInput
          setFocus={() => null}
          name="name"
          value={datsContact.name}
          onChange={(e) => handleInputChange(e)}
          placeHolder="Nombre..."
        />
        <Text>Teléfono (ingresa el código del país)</Text>
        <ContainerInput
          name="mainNumber"
          value={idChannel !== 'Webchat' ? idClient : datsContact.mainNumber}
          setFocus={() => null}
          placeHolder="Teléfono..."
          onChange={(e) => handleInputChange(e)}
        />
        <Text>Teléfono (Otro)</Text>
        <ContainerInput
          name="secondaryNumber"
          value={datsContact.secondaryNumber}
          placeHolder="Telefóno..."
          onChange={(e) => handleInputChange(e)}
        />
        <Text>Email</Text>
        <ContainerInput
          name="email"
          valid={isValid}
          value={datsContact.email}
          onChange={(e) => handleInputChange(e)}
          placeHolder="Email..."
        />
        <Text>Empresa</Text>
        <ContainerInput
          name="contactCompanyName"
          value={datsContact.contactCompanyName}
          onChange={(e) => handleInputChange(e)}
          placeHolder="Empresa..."
        />
        <Text>Propietario</Text>
        <div>{agentName}</div>
        <Text>Status</Text>
        <StyledStatusSelector
          name="status"
          value={datsContact.status}
          onChange={(e) => {
            setDatsContact({
              ...datsContact,
              status: e.target.value,
            });
          }}>
          {contactStatus?.map((status: StatusProps) => (
            <option key={status.name} value={status.name}>
              {status.name}
            </option>
          ))}
        </StyledStatusSelector>
        <ButtonMolecule
          text="Guardar"
          onClick={handleToggle}
          size={Size.MEDIUM}
          state={
            (!datsContact.name && !datsContact.mainNumber) ||
            !datsContact.mainNumber ||
            !isValid
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
      </StyledContactFormContainer>
    </div>
  );
};
