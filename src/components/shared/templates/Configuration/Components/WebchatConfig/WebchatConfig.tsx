import { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { IoIosConstruct } from 'react-icons/io';
import { Text } from '../../../../atoms/Text/Text';
import { Tooltip } from '../../../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../../../atoms/Tooltip/tooltip.interface';
import { TooltipTarget } from '../../../../atoms/Tooltip/tooltip.styled';
import { HeaderTitles } from './HeaderTitles/HeaderTitles';
import { WebchatColorPicker } from './WebchatColorPicker/WebchatColorPicker';
import {
  StyledBlocksLoader,
  StyledGlassModalWebchatInConstruction,
  StyledUnderConstructionWebchatAdvice,
  StyledWebchatConfigSection,
} from './WebchatConfig.styled';
import { WebChatPreview } from './WebChatPreview/WebChatPreview';
import { StyledWebChatPreview } from './WebChatPreview/WebChatPreview.styled';
import {
  StyledColorPickerContainer,
  StyledWebchatColorPickerHeader,
} from './WebchatColorPicker/WebchatColorPicker.styled';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { WebchatSounds } from './WebchatSoundsConfig/WebchatSounds';
import { IListSounds } from './WebchatSoundsConfig/WebchatSounds.interface';
import { WebchatAvatarContainer } from './WebchatAvatar/WebchatAvatar';
import { baseRestApi } from '../../../../../../api/base';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import {
  getGeneralConfigurationData,
  setConstructingWebchat,
} from '../../../../../../redux/slices/configuration/configuration-info';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { ButtonMolecule, ButtonState } from '../../../../atoms/Button/Button';

export const WebchatConfig: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [soundList] = useState<IListSounds>({
    notification_sound_1: new Audio(
      'https://rest-ailalia.ngrok.io/rest/v1/api/settings/notificationSounds?sound=1',
    ),
    notification_sound_2: new Audio(
      'https://rest-ailalia.ngrok.io/rest/v1/api/settings/notificationSounds?sound=2',
    ),
    notification_sound_3: new Audio(
      'https://rest-ailalia.ngrok.io/rest/v1/api/settings/notificationSounds?sound=3',
    ),
    notification_sound_4: new Audio(
      'https://rest-ailalia.ngrok.io/rest/v1/api/settings/notificationSounds?sound=4',
    ),
    notification_sound_5: new Audio(
      'https://rest-ailalia.ngrok.io/rest/v1/api/settings/notificationSounds?sound=5',
    ),
    notification_sound_6: new Audio(
      'https://rest-ailalia.ngrok.io/rest/v1/api/settings/notificationSounds?sound=6',
    ),
    notification_sound_7: new Audio(
      'https://rest-ailalia.ngrok.io/rest/v1/api/settings/notificationSounds?sound=7',
    ),
    notification_sound_8: new Audio(
      'https://rest-ailalia.ngrok.io/rest/v1/api/settings/notificationSounds?sound=8',
    ),
    notification_sound_9: new Audio(
      'https://rest-ailalia.ngrok.io/rest/v1/api/settings/notificationSounds?sound=9',
    ),
  });
  const {
    animation,
    primaryColor: primaryColorDb,
    secondaryColor: secondaryColorDb,
    avatar,
    description,
    name,
    greetingMessage,
    notificationSound,
    activeSound,
  } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData.webchatConfig,
  );
  const { constructingWebchat } = useAppSelector(
    (state) => state.configurationInfo,
  );
  // COLORES:
  const [isCustomColor, setIsCustomColor] = useState<boolean>(false);
  const [colorName, setColorName] = useState<string>('');
  const [primaryColor, setPrimaryColor] = useState<string>(primaryColorDb);
  const [secondaryColor, setSecondaryColor] =
    useState<string>(secondaryColorDb);
  // HEADER, DESCRIPCION Y MENSAJE BIENVENIDA:
  const [customTitle, setCustomTitle] = useState<string>(name);
  const [customDescription, setCustomDescription] =
    useState<string>(description);
  const [initialMessage, setInitialMessage] = useState<string>(greetingMessage);
  // ANIMACION:
  const [isAnimated, setIsAnimated] = useState(animation);
  // AVATAR:
  const [customAvatar, setCustomAvatar] = useState<string>(avatar);
  // SONIDOS:
  const [isSoundActive, setIsSoundActive] = useState(activeSound);
  const [customNotificationSound, setCustomNotificationSound] =
    useState<string>(
      Object.entries(soundList).find(
        ([key]) => soundList[key].src === notificationSound,
      )?.[0] || '',
    );
  // const [radioCheckedInCoversation, setRadioCheckedInConversation] =
  //   useState<string>('');

  const handleSendDataToBackend = async () => {
    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/webchat`,
        {
          name: customTitle,
          description: customDescription,
          avatar: customAvatar,
          greetingMessage: initialMessage,
          primaryColor,
          secondaryColor,
          animation: isAnimated,
          activeSound: isSoundActive,
          notificationSound: customNotificationSound,
        },
      );
      dispatch(setConstructingWebchat(true));
      dispatch(getGeneralConfigurationData());
    } catch (error) {
      dispatch(setConstructingWebchat(false));
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
      });
    }
  };

  return (
    <StyledWebchatConfigSection>
      <main>
        <HeaderTitles
          customTitle={customTitle}
          setCustomTitle={setCustomTitle}
          customDescription={customDescription}
          setCustomDescription={setCustomDescription}
          initialMessage={initialMessage}
          setInitialMessage={setInitialMessage}
        />
        <WebchatAvatarContainer
          customAvatar={customAvatar}
          setCustomAvatar={setCustomAvatar}
        />
      </main>
      <main>
        <StyledWebChatPreview>
          <WebChatPreview
            initialMessage={initialMessage}
            avatar={customAvatar}
            title={customTitle}
            description={customDescription}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            isCustomColor={false}
            isAnimated={isAnimated}
          />
        </StyledWebChatPreview>
        <ButtonMolecule
          text="Reconstruir Webchat"
          onClick={handleSendDataToBackend}
          state={
            animation === isAnimated &&
            primaryColor === primaryColorDb &&
            secondaryColor === secondaryColorDb &&
            avatar === customAvatar &&
            description === customDescription &&
            name === customTitle &&
            greetingMessage === initialMessage &&
            (notificationSound === soundList[customNotificationSound]?.src ||
              customNotificationSound === '') &&
            activeSound === isSoundActive
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
      </main>
      <main>
        <StyledColorPickerContainer>
          <StyledWebchatColorPickerHeader>
            <Text>ESTILOS</Text>
            <Tooltip
              text="Podrás activar o desactivar la animación del Webchat. Si lo que deseas es cambiar el color tienes la posibilidad de seleccionar un gradiente en nuestra paleta de colores sugeridos, crear uno propio, o seleccionar un color uniforme para todo el componente."
              position={TooltipPosition.left}>
              <TooltipTarget>
                <FaInfoCircle />
              </TooltipTarget>
            </Tooltip>
          </StyledWebchatColorPickerHeader>
          <WebchatColorPicker
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            setSecondaryColor={setSecondaryColor}
            setPrimaryColor={setPrimaryColor}
            isCustomColor={isCustomColor}
            setIsCustomColor={setIsCustomColor}
            colorName={colorName}
            setColorName={setColorName}
            isAnimated={isAnimated}
            setIsAnimated={setIsAnimated}
          />
        </StyledColorPickerContainer>
        <WebchatSounds
          soundList={soundList}
          customNotificationSound={customNotificationSound}
          setCustomNotificationSound={setCustomNotificationSound}
          isSoundActive={isSoundActive}
          setIsSoundActive={setIsSoundActive}
          // radioCheckedInCoversation={radioCheckedInCoversation}
          // setRadioCheckedInConversation={setRadioCheckedInConversation}
        />
      </main>
      {constructingWebchat && (
        <StyledGlassModalWebchatInConstruction>
          <StyledUnderConstructionWebchatAdvice>
            <IoIosConstruct size={300} />
            <h1>WEBCHAT EN RECONSTRUCCIÓN</h1>
            <h2>
              Aguarde unos instantes hasta que finalice el proceso de
              reconstrucción del Webchat
            </h2>
            <h2>Muchas gracias.</h2>
          </StyledUnderConstructionWebchatAdvice>
          <StyledBlocksLoader />
        </StyledGlassModalWebchatInConstruction>
      )}
    </StyledWebchatConfigSection>
  );
};
