import React, { FC, useCallback, useEffect, useState } from 'react';
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
import { DecodedToken, User } from '../../../../../models/users/user';
import { MyAccountSidebarOrganism } from '../../MyAccountSidebar/MyAccountSidebar';
import useDisplayElementOrNot from '../../../../../hooks/use-display-element-or-not';
import useLocalStorage from '../../../../../hooks/use-local-storage';
import {
  getBusinessHoursData,
  getConfigurationData,
  getGeneralConfigurationData,
  getListOfRestrictions,
} from '../../../../../redux/slices/configuration/configuration-info';
import { getSubscriptionsData } from '../../../../../redux/slices/subscriptions/subscriptions-info';
import { getAllInvoices } from '../../../../../redux/slices/subscriptions/invoices';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { UsersToSelect } from './Components/UsersToSelect';
import { DowngradeAlert } from './Components/DowngradeAlert';
import { readingUsers, readUser } from '../../../../../api/users';
import { UserStatus } from '../../../../../models/users/status';
import { UserRole } from '../../../../../models/users/role';

export const BackOffice: FC<IBackOfficeProps> = ({ text }) => {
  const { signOut } = useAuth();

  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const [accessToken] = useLocalStorage('AccessToken', '');
  const { decodedToken }: any = useJwt(accessToken);

  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );
  const { configurationData, loadingConfigData } = useAppSelector(
    (state) => state.configurationInfo,
  );
  const { generalPlan, ...rest } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );

  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const [myAccount, setMyAccount] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectedUsersBuffer, setSelectedUsersBuffer] = useState<string[]>([]);

  const dataApi = useCallback(async () => {
    try {
      const data = await readingUsers(UserStatus.ALL);
      if (data.success === false) {
        setUsers([]);
      } else {
        setUsers(data);
      }

      setSelectedUsers(
        data
          ?.filter(
            (user: User) =>
              user.role === UserRole.AGENT && user.persistent === true,
          )
          .map((user: User) => user._id),
      );
      setSelectedUsersBuffer(
        data
          ?.filter(
            (user: User) =>
              user.role === UserRole.AGENT && user.persistent === true,
          )
          .map((user: User) => user._id),
      );
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, [dispatch, showAlert]);

  const validateIfAllAgentsAreSelected =
    selectedUsers.length === rest.persistentAgentsCount;
  const validateIfAllAgentsAreSelectedBuffer =
    selectedUsersBuffer.length === rest.persistentAgentsCount;

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

  const readByAdmin = async () => {
    try {
      if (decodedToken) {
        const dataUser = decodedToken as DecodedToken;
        const response = await readUser(dataUser._id);
        dispatch(setUserDataInState(response as DecodedToken));
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'Token Expirado',
        message: `${error}`,
      });
    }
  };

  useEffect(() => {
    dataApi();
  }, [dataApi]);

  useEffect(() => {
    readByAdmin();
  }, [decodedToken, dispatch]);

  useEffect(() => {
    dispatch(getConfigurationData());
    dispatch(getGeneralConfigurationData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSubscriptionsData());
    dispatch(getAllInvoices());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getListOfRestrictions(configurationData));
    dispatch(getBusinessHoursData(configurationData));
  }, [configurationData, dispatch, loadingConfigData]);

  return (
    <>
      <StyledNavBarBackOffice>
        <Text color="#2A2A2A" size="18px" weight="600">
          {text}
        </Text>
        {rest.persistentAgentsCount > 0 && (
          <DowngradeAlert
            setModal={setModal}
            validateIfAllAgentsAreSelected={validateIfAllAgentsAreSelected}
          />
        )}
        <Wraper>
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

      <ModalMolecule isModal={modal} setModal={setModal}>
        <UsersToSelect
          validateIfAllAgentsAreSelectedBuffer={
            validateIfAllAgentsAreSelectedBuffer
          }
          setModal={setModal}
          setSelectedUsersBuffer={setSelectedUsersBuffer}
          selectedUsersBuffer={selectedUsersBuffer}
          usersData={users}
        />
      </ModalMolecule>
    </>
  );
};
