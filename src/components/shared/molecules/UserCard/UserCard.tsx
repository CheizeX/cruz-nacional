import React, { FC } from 'react';
import { MdSupportAgent } from 'react-icons/md';
import { FaUserShield } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import { useAppDispatch } from '../../../../redux/hook/hooks';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../atoms/Text/Text';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { BadgeMolecule } from '../Badge/Badge';
import {
  setObserveChange,
  setUpdateContainerTag,
} from '../../../../redux/slices/users/user-update-container-tags';
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
  StyledTag,
} from './UserCard.styled';
import { IUserCardMoleculeProps } from './UseCard.interface';
import useLocalStorage from '../../../../hooks/use-local-storage';
import { UserRole } from '../../../../models/users/role';
import { Tooltip } from '../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../atoms/Tooltip/tooltip.interface';

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
  invitation,
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
    dispatch(setObserveChange(containerTags || []));
  };
  return (
    <StyledUserCardMolecule isAdmin={isAdmin} invitation={invitation}>
      <StyledCardHeader isAdmin={isAdmin} invitation={invitation}>
        <span>
          {isAdmin && <GrUserAdmin />}
          {invitation && infoUserRole === UserRole.AGENT && <MdSupportAgent />}
          {invitation && infoUserRole === UserRole.SUPERVISOR && (
            <FaUserShield />
          )}
          {!invitation && (
            <Tooltip
              text="Invitación en proceso."
              position={TooltipPosition.right}>
              <SVGIcon iconFile="/icons/watch.svg" />
            </Tooltip>
          )}
        </span>
        {infoUserRole !== UserRole.ADMIN && (
          <Dropdown
            triggerElement={() => (
              <TriggerElement>
                <SVGIcon iconFile="/icons/user_options.svg" />
              </TriggerElement>
            )}>
            <DropdownContainer>
              {invitation && (
                <BadgeMolecule
                  bgColor="transparent"
                  leftIcon={() => <SVGIcon iconFile="/icons/pen.svg" />}>
                  <button
                    type="button"
                    onClick={() =>
                      handleCardClick('Editar', userID, byNameUser)
                    }>
                    <Text>Editar</Text>
                  </button>
                </BadgeMolecule>
              )}
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
        )}
      </StyledCardHeader>
      <StyledAvatar>
        {avatar && avatar !== '' ? (
          <img src={`${avatar}?token=${accessToken}`} alt={byNameUser} />
        ) : (
          <SVGIcon iconFile="/icons/unknown_user.svg" />
        )}
      </StyledAvatar>
      <StyledUsernameEmail>{children}</StyledUsernameEmail>
      <span>
        {containerTags
          ?.map((tag) => (
            <Tooltip
              key={tag._id}
              text={tag.name}
              position={TooltipPosition.top}>
              <StyledTag colorTag={tag.color}>{tag.name.slice(0, 1)}</StyledTag>
            </Tooltip>
          ))
          .reverse()}
      </span>
    </StyledUserCardMolecule>
  );
};
// habilitar para eliminar usuario
