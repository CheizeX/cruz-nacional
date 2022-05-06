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

export const CardChannel: FC<IPropsCardChannel> = ({
  name,
  icon,
  service,
  isActive,
  image,
  _idChannel,
  providerName,
  setIsSectionWebChat,
  setSeletedComponent,
}) => {
  const dispatch = useAppDispatch();
  const { webchat } = useAppSelector(
    (state) => state.channel.listChannelState.listChannel,
  );

  const { ref, isComponentVisible, setIsComponentVisible } =
    useDisplayElementOrNot(false);
  const [scripts, setScripts] = useState<boolean>(false);

  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
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
                  {!image ? (
                    <SVGIcon iconFile="/icons/user.svg" />
                  ) : (
                    <img src={image} alt="No se encontro la imagen" />
                  )}
                </div>
              )}
            </div>
            <SVGIcon iconFile={`/icons/${icon.toLocaleLowerCase()}.svg`} />
          </StyledPicture>
          <div>
            <span>{name}</span>
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
                  disabled={name === 'En proceso...'}
                  onClick={() => handleActiveSwitch(_idChannel || '')}>
                  <div />
                </ToogleComponentForMappedRestrictionsNoSel>
              )}
              <button
                type="button"
                disabled={name === 'En proceso...'}
                onClick={handleClick}>
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
                    <BadgeMolecule
                      bgColor="transparent"
                      leftIcon={() => <SVGIcon iconFile="/icons/delete.svg" />}>
                      <button
                        type="button"
                        onClick={() => handleClickCard(_idChannel || '')}>
                        <Text>Eliminar </Text>
                      </button>
                    </BadgeMolecule>
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
