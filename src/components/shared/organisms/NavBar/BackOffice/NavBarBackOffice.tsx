/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useJwt } from 'react-jwt';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { SpinnerDotted } from 'spinners-react';
import { Text } from '../../../atoms/Text/Text';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import {
  StyledNavBarBackOffice,
  Wraper,
  TriggerElement,
  StyledAvatar,
  ArrowIcon,
  BackofficeDropdownContainer,
  StyledAdminTagsFilterSelector,
  StyledAdminTagsFilterSelectorDropdown,
  StyledTagToFilter,
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
  setConstructingWebchat,
} from '../../../../../redux/slices/configuration/configuration-info';
import { getSubscriptionsData } from '../../../../../redux/slices/subscriptions/subscriptions-info';
import { getAllInvoices } from '../../../../../redux/slices/subscriptions/invoices';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { UsersToSelect } from './Components/UsersToSelect';
import { DowngradeAlert } from './Components/DowngradeAlert';
import { readingUsers, readUser } from '../../../../../api/users';
import { UserStatus } from '../../../../../models/users/status';
import { UserRole } from '../../../../../models/users/role';
import { websocketContext } from '../../../../../chat';
import {
  IPropsScripts,
  ListChannel,
} from '../../../../../models/channels/channel';
import {
  setlistChannel,
  setScript,
} from '../../../../../redux/slices/channels/list-channel';
import { getAllChannel } from '../../../../../api/channels';
import { readTags } from '../../../../../api/tags';
import { setDataTag } from '../../../../../redux/slices/tags/tag-management';
import { Tag } from '../../../../../models/tags/tag';
import { baseRestApi } from '../../../../../api/base';
import { setDataUser } from '../../../../../redux/slices/users/user-management';

export const BackOffice: FC<IBackOfficeProps> = ({ text }) => {
  const socket: any = useContext(websocketContext);
  const { signOut } = useAuth();

  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const [accessToken] = useLocalStorage('AccessToken', '');
  const { decodedToken }: any = useJwt(accessToken);

  const {
    tagFilter,
    role,
    urlAvatar,
    name: userName,
    _id: userId,
    companyId,
  } = useAppSelector((state) => state.userAuthCredentials.userDataInState);
  const { filterEnabled: filterEn } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData,
  );
  const { configurationData, loadingConfigData } = useAppSelector(
    (state) => state.configurationInfo,
  );
  const { generalPlan, ...rest } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );
  const { tagsData } = useAppSelector((state) => state.tags.tagsQueryState);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const refTags = useRef<HTMLDivElement | null>(null);

  const [myAccount, setMyAccount] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectedUsersBuffer, setSelectedUsersBuffer] = useState<string[]>([]);
  const [adminTagName, setAdminTagName] = useState<any>('');
  const [adminTagColor, setAdminTagColor] = useState<any>('');
  const [openAdminTag, setOpenAdminTag] = useState<boolean>(false);
  const [loadingChangeAdminTag, setLoadingChangeAdminTag] =
    useState<boolean>(false);
  const [filterEnabled, setFilterEnabled] = useState<boolean>(filterEn);

  const validateIfAllAgentsAreSelected =
    selectedUsers.length === rest.persistentAgentsCount;
  const validateIfAllAgentsAreSelectedBuffer =
    selectedUsersBuffer.length === rest.persistentAgentsCount;

  const handleClickOutside = (event: any) => {
    if (refTags.current && !refTags.current.contains(event.target)) {
      event.stopPropagation();
      setOpenAdminTag(false);
    }
  };

  const dataApi = useCallback(async () => {
    try {
      const data = await readingUsers(UserStatus.ALL);
      if (data.success === false) {
        setUsers([]);
        dispatch(setDataUser([]));
      } else {
        setUsers(data);
        dispatch(setDataUser(data));
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
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `Error usuarios`,
      });
    }
  }, [dispatch, showAlert]);

  const handleNavUserDropdown = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleMyAccount = (number: number) => {
    setMyAccount(number);
    setIsComponentVisible(false);
  };

  const getDataTag = async () => {
    try {
      const response = await readTags();
      if (response.success === false) {
        dispatch(setDataTag([]));
      } else {
        dispatch(setDataTag(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
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

  const getChannelList = useCallback(async () => {
    try {
      const response = await getAllChannel();
      if (response.success === false) {
        dispatch(setlistChannel({} as ListChannel));
      } else {
        dispatch(setlistChannel(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  }, []);

  const profilePicture = urlAvatar ? `${urlAvatar}?token=${accessToken}` : '';

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

  const handleChangeAdminTag = async (name: string, color: string) => {
    setLoadingChangeAdminTag(true);
    setAdminTagName(name === 'TODOS' ? 'ALL' : name);
    setAdminTagColor(color);
    setOpenAdminTag(false);
    try {
      const response = await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/setCurrentTagFilter`,
        {
          newFilter: name === 'TODOS' ? 'ALL' : name,
        },
      );
      socket?.emit('leaveOldRoom', {
        oldTag: adminTagName === 'TODOS' ? 'ALL' : adminTagName,
        userId,
      });
      socket?.emit('joinBackofficeRooms', {
        companyId,
        userId,
      });
      setAdminTagName(response);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `Error al cambiar filtro por etiqueta`,
      });
    }
    setLoadingChangeAdminTag(false);
  };

  useEffect(() => {
    dataApi();
  }, [adminTagName]);

  useEffect(() => {
    readByAdmin();
  }, [decodedToken, adminTagName]);

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

  useEffect(() => {
    getChannelList();
  }, []);

  useEffect(() => {
    socket?.on('webchatScriptDone', (script: IPropsScripts) => {
      dispatch(setConstructingWebchat(false));
      dispatch(setScript(script));
      dispatch(getGeneralConfigurationData());
    });
  }, [dispatch, socket]);

  useEffect(() => {
    socket?.on('newFilterEnabledValue', (value: boolean) => {
      setFilterEnabled(value);
    });
  }, [socket]);

  useEffect(() => {
    getDataTag();
  }, []);

  useEffect(() => {
    if (typeof tagFilter === 'string' && tagsData.length > 0) {
      setAdminTagName(tagFilter === 'ALL' ? 'TODOS' : tagFilter);
      setAdminTagColor(
        tagFilter === 'ALL'
          ? '#2A2A2A'
          : tagsData.find((tag) => tag.name === tagFilter)?.color,
      );
    }
  }, [tagFilter, tagsData]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <>
      <StyledNavBarBackOffice>
        {adminTagName !== '' && (
          <StyledAdminTagsFilterSelector
            colorTag={adminTagColor}
            openAdminTag={openAdminTag}>
            <Text color="#2A2A2A" size="18px" weight="600">
              {text}
            </Text>
            {(role === UserRole.ADMIN ||
              (role === UserRole.SUPERVISOR && !filterEnabled)) && (
              <>
                <button
                  type="button"
                  onClick={() => setOpenAdminTag(!openAdminTag)}>
                  {openAdminTag ? <ImMenu4 size={24} /> : <ImMenu3 size={24} />}
                  {loadingChangeAdminTag ? (
                    <SpinnerDotted color="#fafafa" size="20px" />
                  ) : (
                    <Text color="#2A2A2A" size="18px" weight="600">
                      {adminTagName === 'ALL' ? 'TODOS' : adminTagName}
                    </Text>
                  )}
                </button>
                {openAdminTag && (
                  <StyledAdminTagsFilterSelectorDropdown
                    ref={refTags}
                    colorTag={adminTagColor}>
                    <div>
                      {adminTagName !== 'TODOS' && (
                        <StyledTagToFilter
                          key="TODOS"
                          colorTag="#2A2A2A"
                          onClick={() => {
                            handleChangeAdminTag('TODOS', '#2A2A2A');
                          }}>
                          TODOS
                        </StyledTagToFilter>
                      )}
                      {tagsData
                        ?.filter((item: Tag) => item.name !== adminTagName)
                        .map((tag: Tag) => (
                          <StyledTagToFilter
                            key={tag._id}
                            colorTag={tag.color}
                            onClick={() => {
                              handleChangeAdminTag(tag.name, tag.color);
                            }}>
                            {tag.name}
                          </StyledTagToFilter>
                        ))}
                    </div>
                  </StyledAdminTagsFilterSelectorDropdown>
                )}
              </>
            )}
          </StyledAdminTagsFilterSelector>
        )}
        {rest.persistentAgentsCount > 0 &&
          generalPlan.agentes_registrados > rest.persistentAgentsCount && (
            <DowngradeAlert
              setModal={setModal}
              validateIfAllAgentsAreSelected={validateIfAllAgentsAreSelected}
            />
          )}
        <Wraper>
          <TriggerElement>
            <StyledAvatar>
              {profilePicture !== '' ? (
                <img src={profilePicture} alt={userName} />
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
