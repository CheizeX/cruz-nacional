/* eslint-disable no-nested-ternary */
import React, { FC, useState, useEffect, useCallback } from 'react';
import { IoIosWarning } from 'react-icons/io';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BadgeMolecule } from '../../../molecules/Badge/Badge';
import { Text } from '../../../atoms/Text/Text';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import {
  StyledNavBarLive,
  Wrapper,
  Logo,
  Letter,
  LiveNavDropdownContainer,
  LiveTriggerElement,
  LiveStyledAvatar,
  LiveArrowIcon,
  ButtonSelectedComponent,
  BellIcon,
  StyledWarning,
  StyledClose,
} from './NavBarLive.styled';
import { INavBar, INavBarLiveProps } from './NavBarLive.interface';
import { useAuth } from '../../../../../hooks/auth';
import { changeStatus } from '../../../../../api/users';
import { StatusAgent, UserStatus } from '../../../../../models/users/status';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hook/hooks';
import { DropdownStatus } from '../../DropdownStatus/DropdownStatus';
import { setUserDataInState } from '../../../../../redux/slices/auth/user-credentials';
import { DecodedToken } from '../../../../../models/users/user';
import { MyAccountSidebarOrganism } from '../../MyAccountSidebar/MyAccountSidebar';
import useDisplayElementOrNot from '../../../../../hooks/use-display-element-or-not';
import { IBackOfficeProps } from '../BackOffice/NavBarBackOffice.interface';
import useLocalStorage from '../../../../../hooks/use-local-storage';
import { setComponentSection } from '../../../../../redux/slices/section/live-chat-section';
import { ITrafficLight } from '../../../../../models/chat/chat';
import { Tooltip } from '../../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../../atoms/Tooltip/tooltip.interface';

export const NavBarLive: FC<INavBarLiveProps & IBackOfficeProps & INavBar> = ({
  componentsSection,
}) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
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

  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );

  // Manejo de semaforo

  const chatNeutro = chatsOnConversation?.filter(
    (item) => item.trafficLight === ITrafficLight.NEUTRO,
  ).length;
  const chatYellow = chatsOnConversation?.filter(
    (item) => item.trafficLight === ITrafficLight.YELLOW,
  ).length;
  const chatRed = chatsOnConversation?.filter(
    (item) => item.trafficLight === ITrafficLight.RED,
  ).length;
  // Manejo del dropdown de disponibilidad
  const [statusChecked, setStatusChecked] = useState<string>('');
  const [activoCheck, setActivoChecked] = useState<number>(0);
  const [myAccount, setMyAccount] = React.useState<number>(0);

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

  // const getSettingSound = useCallback(async () => {
  //   try {
  //     const response = await readSetting();
  //     dispatch(setInfoSounds(response));
  //   } catch (err) {
  //     showAlert?.addToast({
  //       alert: Toast.ERROR,
  //       title: 'ERROR',
  //       message: `No se puede establecer la conexión con el servidor`,
  //     });
  //   }
  // }, [dispatch, showAlert]);

  const profilePicture =
    userDataInState?.urlAvatar && userDataInState?.urlAvatar !== undefined
      ? `${userDataInState.urlAvatar}?token=${accessToken}`
      : '';

  const handleCloseSession = useCallback(async () => {
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
  }, []);

  const handleMyAccount = (number: number) => {
    setMyAccount(number);
    setIsComponentVisible(false);
  };

  const handleComponentsSection = (component: string) => {
    dispatch(setComponentSection(component));
  };

  useEffect(() => {
    const statusAgent =
      userDataInState.status === UserStatus.CALL
        ? 'En Pausa - En llamado'
        : userDataInState.status === UserStatus.BATHROOM
        ? 'En Pausa - Baño'
        : userDataInState.status === UserStatus.LUNCH
        ? 'En Pausa - Almuerzo'
        : 'Disponible';

    const numberStatus =
      userDataInState.status === UserStatus.CALL
        ? 3
        : userDataInState.status === UserStatus.BATHROOM
        ? 1
        : userDataInState.status === UserStatus.LUNCH
        ? 2
        : 0;
    setStatusChecked(statusAgent);
    setActivoChecked(numberStatus);
  }, [userDataInState.status]);

  useEffect(() => {
    if (!localStorage.getItem('AccessToken')) {
      handleCloseSession();
    }
  }, [accessToken]);
  // useEffect(() => {
  //   getSettingSound();
  // }, [getSettingSound]);

  return (
    <>
      <StyledNavBarLive>
        <Wrapper>
          <Logo>
            <img src="/images/elipse-chat-blanco.png" alt="sidebar-1" />
          </Logo>
          <Letter>
            <ButtonSelectedComponent
              isFocus={componentsSection === 'Chat'}
              onClick={() => handleComponentsSection('Chat')}>
              <BadgeMolecule>
                <Text>Chats</Text>
              </BadgeMolecule>
            </ButtonSelectedComponent>
            {/* <button type="button">
                <BadgeMolecule>
                  <Text>Monitor</Text>
                  {elipsis && elipsis()}
                </BadgeMolecule>
              </button> */}
            <ButtonSelectedComponent
              isFocus={componentsSection === 'Contactos'}
              onClick={() => handleComponentsSection('Contactos')}>
              <BadgeMolecule>
                <Text>Contactos</Text>
              </BadgeMolecule>
            </ButtonSelectedComponent>
          </Letter>
        </Wrapper>
        <Wrapper>
          {/* <MessageIcon onClick={onClick ?? (() => {})}>
          {messageIcon && messageIcon()}
        </MessageIcon> */}
          <div>
            <div>
              {chatNeutro !== 0 ? (
                <Tooltip text="Chats activos" position={TooltipPosition.left}>
                  <BellIcon>
                    <div>{chatNeutro}</div>
                    <SVGIcon iconFile="/icons/message_icons.svg" />
                  </BellIcon>
                </Tooltip>
              ) : null}
              {chatYellow !== 0 ? (
                <Tooltip
                  text="Advertencia de chats por finalizar"
                  position={TooltipPosition.bottom}>
                  <StyledWarning>
                    <div>{chatYellow}</div>
                    <IoIosWarning />
                  </StyledWarning>
                </Tooltip>
              ) : null}
              {chatRed !== 0 ? (
                <Tooltip
                  text="Chats en proceso de finalizar por inactividad"
                  position={TooltipPosition.bottom}>
                  <StyledClose>
                    <div>{chatRed}</div>
                    <AiFillCloseCircle />
                  </StyledClose>
                </Tooltip>
              ) : null}
            </div>

            <DropdownStatus
              statusChecked={statusChecked}
              activoCheck={activoCheck}
              handleClickStatus={handleClickStatus}
            />
          </div>
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
