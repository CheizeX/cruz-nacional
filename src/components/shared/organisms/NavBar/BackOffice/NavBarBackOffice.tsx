import React, { FC, useEffect } from 'react';
import { useJwt } from 'react-jwt';
import { Text } from '../../../atoms/Text/Text';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import {
  StyledNavBarBackOffice,
  Wraper,
  TriggerElement,
  StyledAvatar,
  ArrowIcon,
  BackofficeDropdownContainer,
} from './NavBarBackOffice.styled';
import { IBackOfficeProps } from './NavBarBackOffice.interface';
import { BadgeMolecule } from '../../../molecules/Badge/Badge';
import { useAuth } from '../../../../../hooks/auth/main-auth.hook';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hook/hooks';
import { setUserDataInState } from '../../../../../redux/slices/auth/user-credentials';
import { useToastContext } from '../../../molecules/Toast/useToast';
import { Toast } from '../../../molecules/Toast/Toast.interface';
import { DecodedToken } from '../../../../../models/users/user';
import { MyAccountSidebarOrganism } from '../../MyAccountSidebar/MyAccountSidebar';
import useDisplayElementOrNot from '../../../../../hooks/use-display-element-or-not';
import useLocalStorage from '../../../../../hooks/use-local-storage';

export const BackOffice: FC<IBackOfficeProps> = ({ text }) => {
  const { signOut } = useAuth();

  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);
  const [myAccount, setMyAccount] = React.useState<number>(0);
  const [accessToken] = useLocalStorage('AccessToken', '');
  const { decodedToken }: any = useJwt(accessToken);
  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );
  const handleNavUserDropdown = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const handleMyAccount = (number: number) => {
    setMyAccount(number);
    setIsComponentVisible(false);
  };

  // Manejo de Logout
  const handleCloseSession = async () => {
    try {
      await signOut();
      setIsComponentVisible(false);
      dispatch(setUserDataInState({} as DecodedToken));
    } catch (error) {
      // localStorage.removeItem('AccessToken');
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `signout ${error}`,
      });
    }
  };
  const profilePicture = userDataInState.urlAvatar
    ? `${userDataInState.urlAvatar}?token=${accessToken}`
    : '';
  useEffect(() => {
    if (decodedToken) {
      dispatch(setUserDataInState(decodedToken));
    }
  }, [decodedToken]);

  return (
    <>
      <StyledNavBarBackOffice>
        <Text color="#2A2A2A" size="18px" weight="600">
          {text}
        </Text>
        <Wraper>
          {/* <MessageIcon onClick={onClick ?? (() => {})}>
          {messageIcon && messageIcon()}
        </MessageIcon> */}
          {/* <BellIcon onClick={onClick ?? (() => {})}>
          {bellIcon && bellIcon()}
        </BellIcon>
        <StyledNotificationBackOffice /> */}
          <TriggerElement>
            <StyledAvatar>
              {profilePicture !== '' ? (
                <img src={profilePicture} alt={userDataInState.name} />
              ) : (
                <SVGIcon iconFile="/icons/unknown_user.svg" />
              )}
            </StyledAvatar>
            <ArrowIcon onClick={handleNavUserDropdown}>
              {isComponentVisible ? (
                <SVGIcon iconFile="/icons/chevron-square-up.svg" />
              ) : (
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              )}
            </ArrowIcon>
          </TriggerElement>
          {isComponentVisible && (
            <BackofficeDropdownContainer ref={ref}>
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
            </BackofficeDropdownContainer>
          )}
        </Wraper>
      </StyledNavBarBackOffice>
      <MyAccountSidebarOrganism
        setMyAccount={setMyAccount}
        myAccount={myAccount}
      />
    </>
  );
};
