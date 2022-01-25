import React, { FC, useState } from 'react';
import { BadgeMolecule } from '../../../molecules/Badge/Badge';
import { Text } from '../../../atoms/Text/Text';
import { Dropdown } from '../../../atoms/Dropdown/Dropdown';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import {
  StyledNavBarLive,
  Wrapper,
  Logo,
  Ailalia,
  Letter,
  TriggerElement,
  WrapperChackedAgent,
  StyledButton,
  StyledRadio,
  LiveNavDropdownContainer,
  LiveTriggerElement,
  LiveStyledAvatar,
  LiveArrowIcon,
  StyledAgentStatusSropdown,
} from './NavBarLive.styled';
import { INavBarLiveProps } from './NavBarLive.interface';
import { useAuth } from '../../../../../hooks/auth';
import { changeStatus } from '../../../../../api/users';
import { StatusAgent } from '../../../../../models/users/status';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hook/hooks';
import { setUserDataInState } from '../../../../../redux/slices/auth/user-credentials';
import { DecodedToken } from '../../../../../models/users/user';
import { MyAccountSidebarOrganism } from '../../MyAccountSidebar/MyAccountSidebar';
import useDisplayElementOrNot from '../../../../../hooks/use-display-element-or-not';
import { IBackOfficeProps } from '../BackOffice/NavBarBackOffice.interface';
import useLocalStorage from '../../../../../hooks/use-local-storage';

export const NavBarLive: FC<INavBarLiveProps & IBackOfficeProps> = ({
  elipsis,
}) => {
  // Manejo del dropdown de disponibilidad
  const [statusChecked, setStatusChecked] = useState<string>('Disponible');
  const [activoCheck, setActivoChecked] = useState<number>(0);
  const [myAccount, setMyAccount] = React.useState<number>(0);

  const showAlert = useToastContext();
  const dispatch = useAppDispatch();

  const handleClickStatus = async (
    arg: string,
    index: number,
    data: string,
  ) => {
    setStatusChecked(arg);
    setActivoChecked(index);
    try {
      await changeStatus({ status: data as StatusAgent });
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: '¡Upps!',
        message: `${error}`,
      });
    }
  };

  // Manejo del dropdown de agentes
  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const handleNavUserDropdown = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  // Manejo de Logout
  const { signOut } = useAuth();
  const [accessToken] = useLocalStorage('AccessToken', '');
  const { userDataInState }: any = useAppSelector(
    (state) => state.userAuthCredentials,
  );
  const profilePicture = userDataInState?.urlAvatar
    ? `${userDataInState.urlAvatar}?token=${accessToken}`
    : '';
  const handleCloseSession = async () => {
    try {
      await signOut();
      setIsComponentVisible(false);
      dispatch(setUserDataInState({} as DecodedToken));
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: '¡Upps!',
        message: `${error}`,
      });
    }
  };

  const handleMyAccount = (number: number) => {
    setMyAccount(number);
    setIsComponentVisible(false);
  };
  return (
    <>
      <StyledNavBarLive>
        <Wrapper>
          <Logo>
            <img src="/images/elipse-chat-blanco.png" alt="sidebar-1" />
            {/* <SVGIcon iconFile="/icons/Trazado_ailalia.svg" /> */}
          </Logo>
          <Ailalia>
            {/* <SVGIcon iconFile="/icons/Trazado_ailalia.svg" /> */}
          </Ailalia>
          <Letter>
            <span>
              <BadgeMolecule>
                <Text>Chats</Text>
              </BadgeMolecule>
            </span>
            <span>
              <BadgeMolecule>
                <Text>Monitor</Text>
                {elipsis && elipsis()}
              </BadgeMolecule>
            </span>
            <span>
              <BadgeMolecule>
                <Text>Biblioteca</Text>
              </BadgeMolecule>
            </span>
          </Letter>
        </Wrapper>
        <Wrapper>
          {/* <MessageIcon onClick={onClick ?? (() => {})}>
          {messageIcon && messageIcon()}
        </MessageIcon> */}
          {/* <BellIcon onClick={onClick ?? (() => {})}>
          {bellIcon && bellIcon()}
        </BellIcon> */}
          {/* <NotificationStyledNavBar /> */}
          <Dropdown
            triggerElement={() => (
              <TriggerElement statusChecked={statusChecked}>
                <Text>{statusChecked}</Text>
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              </TriggerElement>
            )}>
            <StyledAgentStatusSropdown>
              <WrapperChackedAgent
                position="one"
                onClick={() => handleClickStatus('Disponible', 0, 'AVAILABLE')}>
                <StyledButton focusCheck={activoCheck === 0}>
                  <StyledRadio focusCheck={activoCheck === 0} />
                </StyledButton>
                <SVGIcon iconFile="/icons/user_question.svg" />
                <Text color="black">Disponible</Text>
              </WrapperChackedAgent>
              <WrapperChackedAgent
                position="two"
                onClick={() =>
                  handleClickStatus('En Pausa - Almuerzo', 1, 'LUNCH')
                }>
                <StyledButton focusCheck={activoCheck === 1}>
                  <StyledRadio focusCheck={activoCheck === 1} />
                </StyledButton>
                <SVGIcon iconFile="/icons/utensils.svg" />
                <Text color="black">En Pausa - Almuerzo</Text>
              </WrapperChackedAgent>
              <WrapperChackedAgent
                position="three"
                onClick={() =>
                  handleClickStatus('En Pausa - Baño', 2, 'BATHROOM')
                }>
                <StyledButton focusCheck={activoCheck === 2}>
                  <StyledRadio focusCheck={activoCheck === 2} />
                </StyledButton>
                <SVGIcon iconFile="/icons/toile.svg" />
                <Text color="black">En Pausa - Baño</Text>
              </WrapperChackedAgent>
            </StyledAgentStatusSropdown>
          </Dropdown>
          <LiveTriggerElement>
            <LiveStyledAvatar>
              {profilePicture && profilePicture !== '' ? (
                <img src={profilePicture} alt={userDataInState.name} />
              ) : (
                <SVGIcon iconFile="/icons/unknown_user.svg" />
              )}
            </LiveStyledAvatar>
            <LiveArrowIcon onClick={handleNavUserDropdown}>
              {isComponentVisible ? (
                <SVGIcon iconFile="/icons/chevron-square-up.svg" />
              ) : (
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              )}
            </LiveArrowIcon>
          </LiveTriggerElement>
          {isComponentVisible && (
            <LiveNavDropdownContainer ref={ref}>
              <button type="button" onClick={() => handleMyAccount(1)}>
                <BadgeMolecule>
                  <SVGIcon iconFile="/icons/mi-cuenta.svg" />
                  <Text size="12px" weight="600">
                    Mi cuenta
                  </Text>
                </BadgeMolecule>
              </button>
              <button type="button" onClick={handleCloseSession}>
                <BadgeMolecule>
                  <SVGIcon iconFile="/icons/cerrar-sesion.svg" />
                  <Text size="12px" weight="600">
                    Cerrar sesión
                  </Text>
                </BadgeMolecule>
              </button>
            </LiveNavDropdownContainer>
          )}
        </Wrapper>
      </StyledNavBarLive>
      <MyAccountSidebarOrganism
        setMyAccount={setMyAccount}
        myAccount={myAccount}
      />
    </>
  );
};
