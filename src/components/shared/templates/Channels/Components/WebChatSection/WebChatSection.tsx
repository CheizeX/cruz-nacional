import { FC, useState } from 'react';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import {
  StyledWebChat,
  StyledHeaderSectionWebChat,
  StyledBodyWebChat,
  StyledFooterWebChat,
} from './WebChatSection.styled';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { IPropsWebChat } from './WebChatSection.interface';
import { CustomWebChat } from './Components/CustomWebChat/CustomWebChat';
import { AvatarContainer } from './Components/AvatarContainer/AvatarContainer';
import { WrapperNameAndDescription } from './Components/WrapperNameAndDescription/WrapperNameAndDescription';
import { ColorPaletteWrap } from './Components/ColorPaletteWrap/ColorPaletteWrap';
import { createWebChat } from '../../../../../../api/channels';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { setScript } from '../../../../../../redux/slices/channels/list-channel';
import { useAppDispatch } from '../../../../../../redux/hook/hooks';
import { IPropsScripts } from '../../../../../../models/channels/channel';
import { CustomSound } from './Components/CustomSound/CustomSound';
import { IListSounds } from '../../../Configuration/Components/WebchatConfig/WebchatSoundsConfig/WebchatSounds.interface';

const data = [
  {
    num: 1,
    message: 'Ingresa un nombre',
  },
  {
    num: 2,
    message: 'Seleciona un color',
  },
  {
    num: 3,
    message: 'Selecciona un avatar',
  },
  {
    num: 4,
    message: 'Selecciona un sonido',
  },
  {
    num: 5,
    message: '¡Listo!',
  },
];

export const WebChatSection: FC<IPropsWebChat> = ({
  setIsSectionWebChat,
  setSeletedComponent,
  getChannelList,
}) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
  const [isSection, setIsSection] = useState<number>(1);
  const [primaryColor, setPrimaryColor] = useState<string>('#6e28bf');
  const [secondaryColor, setSecundaryColor] = useState<string>('#65edfa');
  const [customTitle, setCustomTitle] = useState<string>('Elipse Chat');
  const [customDescription, setCustomDescription] =
    useState<string>('Asistente Virtual');
  const [greetingMessage, setGreetingMessage] = useState<string>(
    'Hola soy tu asistente virtual mi función es responder tus preguntas. ¿En qué pudo ayudarte?',
  );
  const [customAvatar, setCustomAvatar] = useState<string>('Robot_1');
  const [customizeMyAvatar, setCustomizeMyAvatar] = useState<boolean>(false);
  const [customIsColor, setCustomIsColor] = useState<boolean>(false);
  const [customizeByColor, setCustomizeByColor] = useState<string>('');
  const [isAnimation, setIsAnimation] = useState(false);
  const [activeSound, setIsActiveSound] = useState<boolean>(false);
  const [notificationSound, setNotificationSound] = useState('');

  // animation: 'yes'

  // byColors, byGradient
  const handleToggle = () => {
    setIsSection(isSection + 1);
  };
  const prevToggle = () => {
    setIsSection(isSection - 1);
  };
  const onCloseModal = () => {
    setIsSectionWebChat(false);
    setIsSection(1);
  };
  // funcion para setaar la animación
  const handleAnimation = () => {
    setIsAnimation(!isAnimation);
  };

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
  // funcion que envia los datos para crear el webChat
  const handleSubmit = async () => {
    // dispatch(setScript({}));
    try {
      const response = await createWebChat({
        name: customTitle,
        description: customDescription,
        animation: isAnimation,
        greetingMessage,
        avatar: customAvatar,
        primaryColor,
        secondaryColor,
        activeSound,
        notificationSound,
      });

      if (response === 'Creating webchat') {
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: '¡Perfecto!',
          message: `Se creo el Web Chat satisfactoriamente`,
        });
      }
      setTimeout(() => {
        setIsSectionWebChat(false);
        setSeletedComponent('script');
        setIsSectionWebChat(true);
      }, 1000);
      dispatch(setScript({} as IPropsScripts));
      getChannelList();
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${error}`,
      });
    }
  };

  return (
    <StyledWebChat>
      <StyledHeaderSectionWebChat>
        <Text>Añadir nuevo Web Chat</Text>
        <button type="button" onClick={onCloseModal}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderSectionWebChat>
      <StyledBodyWebChat isSection={isSection}>
        <div>
          <div>
            {data.map((item) => (
              <div key={item.num}>
                <div>
                  <div>{item.num}</div>
                  <Text>{item.message}</Text>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
        <div>
          {isSection === 1 ? (
            <>
              <Text>Ingresa nombre y descripción</Text>
              <WrapperNameAndDescription
                setCustomDescription={setCustomDescription}
                setCustomTitle={setCustomTitle}
                handleAnimation={handleAnimation}
                setGreetingMessage={setGreetingMessage}
                isAnimation={isAnimation}
              />
            </>
          ) : null}
          {isSection === 2 ? (
            <ColorPaletteWrap
              handleToggle={handleToggle}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              setSecundaryColor={setSecundaryColor}
              setPrimaryColor={setPrimaryColor}
              customIsColor={customIsColor}
              setCustomIsColor={setCustomIsColor}
              setCustomizeByColor={setCustomizeByColor}
              customizeByColor={customizeByColor}
            />
          ) : null}
          {isSection === 3 ? (
            <>
              <Text>Selecciona un avatar</Text>
              <AvatarContainer
                setCustomAvatar={setCustomAvatar}
                setIsSection={setIsSection}
                setCustomizeMyAvatar={setCustomizeMyAvatar}
                customAvatar={customAvatar}
                customizeMyAvatar={customizeMyAvatar}
              />
            </>
          ) : null}
          {isSection === 4 || isSection === 5 ? (
            <CustomSound
              soundList={soundList}
              notificationSound={notificationSound}
              setNotificationSound={setNotificationSound}
              setIsActiveSound={setIsActiveSound}
              activeSound={activeSound}
            />
          ) : null}
        </div>
        <div>
          <div>
            <CustomWebChat
              avatar={customAvatar}
              title={customTitle}
              description={customDescription}
              customizeMyAvatar={customizeMyAvatar}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              customIsColor={customIsColor}
              greetingMessage={greetingMessage}
              isAnimation={isAnimation}
            />
          </div>
        </div>
      </StyledBodyWebChat>
      <StyledFooterWebChat>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
          onClick={prevToggle}
          state={isSection <= 1 ? ButtonState.DISABLED : ButtonState.NORMAL}
        />
        <ButtonMolecule
          text={isSection === 5 ? 'Confirmar' : 'Siguiente'}
          onClick={isSection === 5 ? handleSubmit : handleToggle}
          size={Size.MEDIUM}
        />
      </StyledFooterWebChat>
    </StyledWebChat>
  );
};
