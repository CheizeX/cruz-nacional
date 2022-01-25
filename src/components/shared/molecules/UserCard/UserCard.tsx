import React, { FC } from 'react';
import { useAppDispatch } from '../../../../redux/hook/hooks';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../atoms/Text/Text';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { BadgeMolecule } from '../Badge/Badge';
import { setUpdateContainerTag } from '../../../../redux/slices/users/user-update-container-tags';
import { setUserByInfoEmail } from '../../../../redux/slices/users/user-seleted-email';
import { setUserByIdEdit } from '../../../../redux/slices/users/user-seleted-edit';
import { setByUserFirstName } from '../../../../redux/slices/users/user-seleted-name';
import { setByUserSeletedRole } from '../../../../redux/slices/users/user-seleted-role';
import { setUserByIdDelete } from '../../../../redux/slices/users/user-seleted-delete';
import {
  StyledUserCardMolecule,
  StyledCardHeader,
  DropdownContainer,
  TriggerElement,
  StyledAvatar,
  StyledUsernameEmail,
} from './UserCard.styled';
import { IUserCardMoleculeProps } from './UseCard.interface';
import useLocalStorage from '../../../../hooks/use-local-storage';

export const UserCardMolecule: FC<IUserCardMoleculeProps> = ({
  isAdmin,
  children,
  setOpenNewSection,
  setSectionModal,
  userID,
  byNameUser,
  containerTags,
  infoUserEmail,
  infoUserRole,
  avatar,
}) => {
  // Redux
  const dispatch = useAppDispatch();
  const [accessToken] = useLocalStorage('AccessToken', '');

  const handleCardClick = (
    arg: string,
    currentID: string,
    currentName: string,
  ) => {
    setSectionModal(true);
    dispatch(setUpdateContainerTag(containerTags || []));
    setOpenNewSection(arg);
    dispatch(setUserByIdEdit(currentID));
    dispatch(setUserByIdDelete(currentID));
    dispatch(setByUserFirstName(currentName));
    dispatch(setByUserSeletedRole(infoUserRole));
    dispatch(setUserByInfoEmail(infoUserEmail));
  };
  return (
    <StyledUserCardMolecule isAdmin={isAdmin}>
      <StyledCardHeader>
        <span>
          {isAdmin && <SVGIcon iconFile="/icons/user_card_admin.svg" />}
        </span>
        <Dropdown
          triggerElement={() => (
            <TriggerElement>
              <SVGIcon iconFile="/icons/user_options.svg" />
            </TriggerElement>
          )}>
          <DropdownContainer>
            <BadgeMolecule
              bgColor="transparent"
              leftIcon={() => <SVGIcon iconFile="/icons/pen.svg" />}>
              <button
                type="button"
                onClick={() => handleCardClick('Editar', userID, byNameUser)}>
                <Text>Editar</Text>
              </button>
            </BadgeMolecule>
            <BadgeMolecule
              bgColor="transparent"
              leftIcon={() => <SVGIcon iconFile="/icons/delete.svg" />}>
              <button
                type="button"
                onClick={() =>
                  handleCardClick('deleteUser', userID, byNameUser)
                }>
                <Text>Eliminar </Text>
              </button>
            </BadgeMolecule>
          </DropdownContainer>
        </Dropdown>
      </StyledCardHeader>
      <StyledAvatar>
        {avatar && avatar !== '' ? (
          <img src={`${avatar}?token=${accessToken}`} alt={byNameUser} />
        ) : (
          <SVGIcon iconFile="/icons/unknown_user.svg" />
        )}
      </StyledAvatar>
      <StyledUsernameEmail>{children}</StyledUsernameEmail>
    </StyledUserCardMolecule>
  );
};
