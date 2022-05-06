import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  StyledDeleteContact,
  StyledIcon,
  StyledInformationContact,
  StyledFooterContact,
} from './DeleteContact.styled';
import { Text } from '../../../../atoms/Text/Text';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { IPropsDeleteContact } from './DeleteContact.interface';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { deleteContact } from '../../../../../../api/contacts';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

export const DeleteContact: FC<IPropsDeleteContact> = ({
  setIsOpenModal,
  readListContacts,
}) => {
  const showAlert = useToastContext();
  const { contactById } = useAppSelector(
    (state) => state.contacts.contactsInfoState,
  );

  const handleDelete = async () => {
    try {
      const response = await deleteContact(contactById);
      if (response !== 'Deleted contact') {
        showAlert?.addToast({
          alert: Toast.WARNING,
          title: 'Upps!',
          message: `Ocurrio un error ${response}`,
        });
      } else {
        await readListContacts();
        setIsOpenModal(false);
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'Upps!',
        message: `${err}`,
      });
    }
  };
  return (
    <StyledDeleteContact>
      <StyledIcon>
        <SVGIcon iconFile="/icons/warning.svg" />
      </StyledIcon>
      <StyledInformationContact>
        <Text>¿Estás seguro de querer eliminar este contacto?</Text>
        <Text>
          Toda la información asociada a este contacto dejará de estar
          disponible
        </Text>
      </StyledInformationContact>
      <StyledFooterContact>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={() => setIsOpenModal(false)}
        />
        <ButtonMolecule
          text="Eliminar"
          size={Size.MEDIUM}
          onClick={handleDelete}
        />
      </StyledFooterContact>
    </StyledDeleteContact>
  );
};
