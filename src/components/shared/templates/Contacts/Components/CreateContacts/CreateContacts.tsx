import { FC, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  StyledCreateContacts,
  StyledHeaderCreateContact,
  StyledBodyCreateContacts,
  StyledFooterCreateContacts,
  StyledStatusSelector,
} from './CreateContacts.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { IPropsCreateContacts } from './CreateContacts.interface';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { RootState } from '../../../../../../redux';
import { createContacts } from '../../../../../../api/contacts';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { StatusProps } from '../../../Configuration/Components/ContactsConfig/ContactsCreator/ContactsCreator.interface';
import { Channels } from '../../../../../../models/chat/chat';

export const CreateContacts: FC<IPropsCreateContacts> = ({
  setIsOpenModal,
  readListContacts,
}) => {
  const showAlert = useToastContext();

  const { contactStatus } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData,
  );
  const { userDataInState } = useSelector(
    (state: RootState) => state.userAuthCredentials,
  );

  const owner = userDataInState?.name;
  const [isValid, setIsValid] = useState<boolean>(true);
  const [createContact, setCreateContact] = useState({
    name: '',
    mainNumber: '',
    secondaryNumber: '',
    email: '',
    contactCompanyName: '',
    channel: {
      name: 'Whatsapp',
      clientId: '',
    },
    status: 'Activo',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (e.target.name === 'email') {
      if (emailRegex.test(e.target.value)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
    if (e.target.value.slice(0, 1) === '+') {
      setCreateContact({
        ...createContact,
        [e.target.name]: e.target.value.slice(1, e.target.value.length),
        channel: {
          name: Channels.CHAT_API,
          clientId: createContact.mainNumber,
        },
      });
    } else {
      setCreateContact({
        ...createContact,
        [e.target.name]: e.target.value,
        channel: {
          name: Channels.CHAT_API,
          clientId: createContact.mainNumber,
        },
      });
    }
  };

  const handleClick = useCallback(async () => {
    try {
      const response = await createContacts(createContact);
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
      await readListContacts();
      setIsOpenModal(false);
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [createContact, readListContacts, setIsOpenModal, showAlert]);

  const handleClose = () => {
    setCreateContact({
      name: '',
      mainNumber: '',
      secondaryNumber: '',
      email: '',
      contactCompanyName: '',
      channel: {
        name: Channels.CHAT_API,
        clientId: '',
      },
      status: '',
    });
    setIsOpenModal(false);
  };

  return (
    <StyledCreateContacts>
      <StyledHeaderCreateContact>
        <Text>Crear Contacto</Text>
        <button type="button" onClick={handleClose}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderCreateContact>
      <StyledBodyCreateContacts>
        <div>
          <Text>Nombre</Text>
          <ContainerInput
            name="name"
            value={createContact.name}
            setFocus={() => null}
            onChange={(e) => handleInputChange(e)}
          />
          <Text>Teléfono</Text>
          <ContainerInput
            name="mainNumber"
            value={createContact.mainNumber}
            setFocus={() => null}
            onChange={(e) => handleInputChange(e)}
          />
          <Text>Teléfono (otro)</Text>
          <ContainerInput
            name="secondaryNumber"
            value={createContact.secondaryNumber}
            setFocus={() => null}
            onChange={(e) => handleInputChange(e)}
          />
          <Text>Email</Text>
          <ContainerInput
            name="email"
            value={createContact.email}
            valid={isValid}
            setFocus={() => null}
            onChange={(e) => handleInputChange(e)}
          />
          <Text>Empresa</Text>
          <ContainerInput
            name="contactCompanyName"
            value={createContact.contactCompanyName}
            setFocus={() => null}
            onChange={(e) => handleInputChange(e)}
          />
          <Text>Propietario</Text>
          <div>{owner}</div>
          <Text>Status</Text>
          <StyledStatusSelector
            name="status"
            value={createContact.status}
            onChange={(e) => {
              setCreateContact({
                ...createContact,
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
      </StyledBodyCreateContacts>
      <StyledFooterCreateContacts>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={handleClose}
        />
        <ButtonMolecule
          text="Guardar"
          size={Size.MEDIUM}
          onClick={handleClick}
          state={
            createContact.mainNumber === '' ||
            createContact.name === '' ||
            !isValid
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
      </StyledFooterCreateContacts>
    </StyledCreateContacts>
  );
};
