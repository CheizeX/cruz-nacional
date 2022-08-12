/* eslint-disable sonarjs/cognitive-complexity */
// eslint-disable-next-line sonarjs/cognitive-complexity
import { FC, useState } from 'react';
import {
  StyledCardChannel,
  StyledPicture,
  DropdownContainerCard,
  StyledWhatsApp360,
  StyledFacebookService,
  StyledLogoInstagram,
  StyledLogoWebChat,
  ToogleComponentForMappedRestrictionsNoSel,
  ToogleComponentForMappedRestrictions,
  LogoChatAPI,
} from './CardChannel.styled';
import { IPropsCardChannel } from './CardChannel.interface';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';
import useDisplayElementOrNot from '../../../../../../hooks/use-display-element-or-not';
import { dataAvatar } from '../WebChatSection/Components/AvatarContainer/AvatarContainer';
import {
  setIdChannel,
  setStatusChannel,
} from '../../../../../../redux/slices/channels/list-channel';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { Scripts } from '../Scripts/Scripts';
import { Channels } from '../../../../../../models/chat/chat';
import { ITypeUnOfficialWhatsapp } from '../WhatsappSection/ChatApi/ChatApiSection/ChatApiSection.interface';

export const CardChannel: FC<IPropsCardChannel> = ({
  name,
  icon,
  service,
  isActive,
  image,
  _idChannel,
  providerName,
  handleToggle,
  setIsSectionWebChat,
  setSeletedComponent,
  handleStatusUnOfficial,
}) => {
  const dispatch = useAppDispatch();
  const { webchat } = useAppSelector(
    (state) => state.channel.listChannelState.listChannel,
  );

  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);

  const [scripts, setScripts] = useState<boolean>(false);
  const [isError, setIsError] = useState<string[]>([]);

  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const statusunofficialWhatsApp = handleStatusUnOfficial();

  const handleStatusChannel = () => {
    if (providerName === Channels.CHAT_API) {
      if (statusunofficialWhatsApp === ITypeUnOfficialWhatsapp.IN_REVIEW) {
        return 'En proceso...';
      }
      if (statusunofficialWhatsApp === ITypeUnOfficialWhatsapp.APPROVED) {
        return (
          <button
            type="button"
            onClick={() => handleToggle('unofficialWhatsApp')}>
            Escanear código QR
          </button>
        );
      }
    }
    return name;
  };

  const handleActiveSwitch = (id: string) => {
    setSeletedComponent('switch');
    dispatch(setIdChannel(id));
    dispatch(setStatusChannel(isActive));
    setIsSectionWebChat(true);
  };

  const handleClickCard = (arg: string) => {
    setSeletedComponent('DeleteChannel');
    dispatch(setIdChannel(arg));
    setIsSectionWebChat(true);
  };
  return (
    <>
      <StyledCardChannel isNotAvailable={!isActive}>
        <div>
          <StyledPicture>
            <div>
              {service === 'Web Chat' &&
              dataAvatar.filter((item) =>
                item.name.includes(image.slice(0, image.length - 4)),
              ) ? (
                <SVGIcon iconFile={`/avatars/${image}.svg`} />
              ) : (
                <div>
                  {!image || isError.includes(image) ? (
                    // <SVGIcon iconFile="/icons/user.svg" />
                    <SVGIcon
                      iconFile={`/icons/${icon.toLocaleLowerCase()}.svg`}
                    />
                  ) : (
                    <img
                      src={image}
                      alt="No se encontro la imagen"
                      onError={() => {
                        setIsError([...isError, image]);
                      }}
                    />
                  )}
                </div>
              )}
            </div>
            {!isError.includes(image) && (
              <SVGIcon iconFile={`/icons/${icon.toLocaleLowerCase()}.svg`} />
            )}
          </StyledPicture>
          <div>
            <span>{handleStatusChannel()}</span>
            <Text>Servicio al Cliente</Text>
          </div>
          <div>
            <div>
              {isActive ? (
                <ToogleComponentForMappedRestrictions
                  onClick={() => handleActiveSwitch(_idChannel || '')}>
                  <div />
                </ToogleComponentForMappedRestrictions>
              ) : (
                <ToogleComponentForMappedRestrictionsNoSel
                  disabled={
                    (providerName === Channels.CHAT_API &&
                      statusunofficialWhatsApp ===
                        ITypeUnOfficialWhatsapp.APPROVED) ||
                    (providerName === Channels.CHAT_API &&
                      statusunofficialWhatsApp ===
                        ITypeUnOfficialWhatsapp.IN_REVIEW)
                  }
                  onClick={() => handleActiveSwitch(_idChannel || '')}>
                  <div />
                </ToogleComponentForMappedRestrictionsNoSel>
              )}
              <button type="button" onClick={handleClick}>
                {isComponentVisible ? (
                  <SVGIcon iconFile="/icons/user_options.svg" />
                ) : (
                  <SVGIcon color="#8520D0" iconFile="/icons/user_options.svg" />
                )}
              </button>
              {isComponentVisible ? (
                <div ref={ref}>
                  <DropdownContainerCard>
                    {service === 'Web Chat' && webchat.scripts && (
                      <BadgeMolecule
                        bgColor="transparent"
                        leftIcon={() => <SVGIcon iconFile="/icons/eye.svg" />}>
                        <button type="button" onClick={() => setScripts(true)}>
                          <Text>Scripts</Text>
                        </button>
                      </BadgeMolecule>
                    )}
                    {(providerName === Channels.CHAT_API &&
                      statusunofficialWhatsApp ===
                        ITypeUnOfficialWhatsapp.IN_REVIEW) ||
                    (providerName === Channels.CHAT_API &&
                      statusunofficialWhatsApp ===
                        ITypeUnOfficialWhatsapp.APPROVED) ? (
                      <button
                        type="button"
                        onClick={() => handleToggle('unofficialWhatsApp')}>
                        <BadgeMolecule
                          bgColor="transparent"
                          leftIcon={() => (
                            <SVGIcon iconFile="/icons/sidebar_configuracion.svg" />
                          )}>
                          <Text>Estado</Text>
                        </BadgeMolecule>
                      </button>
                    ) : (
                      <BadgeMolecule
                        bgColor="transparent"
                        leftIcon={() => (
                          <SVGIcon iconFile="/icons/delete.svg" />
                        )}>
                        <button
                          type="button"
                          onClick={() => handleClickCard(_idChannel || '')}>
                          <Text>Eliminar </Text>
                        </button>
                      </BadgeMolecule>
                    )}
                  </DropdownContainerCard>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div>
          {providerName === 'Chat-API' && service === 'WhatsApp' ? (
            <LogoChatAPI>
              <div>
                <span>Chat API</span>
              </div>
            </LogoChatAPI>
          ) : null}
          {providerName === '360' && service === 'WhatsApp' ? (
            <StyledWhatsApp360>
              <img src="/images/dialog.png" alt="" />
            </StyledWhatsApp360>
          ) : null}
          {!providerName && service === 'Messenger' ? (
            <StyledFacebookService>
              <div>
                <span>facebook</span>
              </div>
            </StyledFacebookService>
          ) : null}
          {service === 'Instagram' ? (
            <StyledLogoInstagram>
              <img
                src="/images/instagram_logo.png"
                alt="No se encontro la imagen"
              />
            </StyledLogoInstagram>
          ) : null}
          {service === 'Web Chat' ? (
            <StyledLogoWebChat>
              <img src="/images/Elipse-chat-redondo-azul-oscuro.png" alt="" />
            </StyledLogoWebChat>
          ) : null}
          <div>
            <Text>{service}</Text>
          </div>
        </div>
      </StyledCardChannel>
      {scripts && <Scripts setScripts={setScripts} />}
    </>
  );
};
