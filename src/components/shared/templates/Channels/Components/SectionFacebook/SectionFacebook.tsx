import { FC, useState } from 'react';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledSectionFacebook,
  StyledSectionFacebookHeader,
  StyledSectionFacebookBody,
  StyledMessengerFooter,
} from './SectionFacebook.styled';
import { ISectionFacebook } from './SectionFacebook.interface';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { setAuthFacebook } from '../../../../../../redux/slices/channels/auth-facebook';
import { useAppDispatch } from '../../../../../../redux/hook/hooks';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { authFacebook, sendAuthFacebook } from '../../../../../../api/channels';
import { LoginFacebook } from './Components/LoginFacebook/LoginFacebook';
import { FacebookAccountSelector } from './Components/FacebookAccountSelector/FacebookAccountSelector';
import { IConfirmAuthFacebook } from '../../../../../../models/channels/channel-auth-facebook';

const dataMessenger = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Vincula tu cuenta de Messenger',
  },
  {
    num: 3,
    message: 'Selecciona una de tus cuenta de facebook',
  },
  {
    num: 4,
    message: '¡Listo!',
  },
];

export const SectionFacebookComponent: FC<ISectionFacebook> = ({
  setIsSectionWebChat,
  setConfirmationAccounth,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [datosAuth, setDatosAuth] = useState<IConfirmAuthFacebook>();
  const [selectedComponent, setSelectedComponent] = useState<number>(1);
  const [isActiveCheckbox, setIsActiveCheckbox] = useState<number>(-1);
  const firebaseConfig = {
    apiKey: 'AIzaSyCo-2GSdU6J7KnCRiVCWBhRw3VMtgvFGWg',
    authDomain: 'social-auth-385e3.firebaseapp.com',
    projectId: 'social-auth-385e3',
    storageBucket: 'social-auth-385e3.appspot.com',
    messagingSenderId: '1087919440019',
    appId: '1:1087919440019:web:1f76928b630385b2fd0d66',
  };

  initializeApp(firebaseConfig);
  const handlePrev = () => {
    setSelectedComponent(selectedComponent - 1);
  };
  const handleNext = () => {
    setSelectedComponent(selectedComponent + 1);
  };
  const handleAuth = async () => {
    const provider = new FacebookAuthProvider();
    provider.addScope('pages_messaging');
    provider.addScope('pages_show_list');
    // provider.addScope('pages_read_engagement');
    // provider.addScope('Page Public Content Access');
    // provider.addScope('Page Public Metadata Access');
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      const data = FacebookAuthProvider.credentialFromResult(result);
      const userToken = data?.accessToken;
      if (userToken) {
        const dataAuthFacebook = await authFacebook(userToken);
        if (dataAuthFacebook.success === false) {
          dispatch(setAuthFacebook([]));
        } else {
          dispatch(setAuthFacebook(dataAuthFacebook));
        }
      }
      handleNext();
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleSubmit = async () => {
    try {
      if (datosAuth) {
        setIsSectionWebChat(false);
        const result = await sendAuthFacebook(datosAuth);
        setConfirmationAccounth(true);
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'Perfecto!',
          message: `Se ha configurado tu cuenta correctamente ${result}`,
        });
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'Error!',
        message: `El usuario o la contraseña no corresponden`,
      });
    }
  };
  const handleClose = () => {
    setIsSectionWebChat(false);
    setSelectedComponent(1);
  };

  return (
    <StyledSectionFacebook>
      <StyledSectionFacebookHeader>
        <Text>Añadir nuevo canal con Messenger</Text>
        <button type="button" onClick={handleClose}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledSectionFacebookHeader>
      <StyledSectionFacebookBody selectedComponent={selectedComponent}>
        <div>
          <div>
            {dataMessenger.map((item) => (
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
          {selectedComponent === 1 ? (
            <LoginFacebook handleAuth={handleAuth} />
          ) : null}
          {selectedComponent === 2 || selectedComponent === 3 ? (
            <FacebookAccountSelector
              setSelectedComponent={setSelectedComponent}
              setDatosAuth={setDatosAuth}
              setIsActiveCheckbox={setIsActiveCheckbox}
              isActiveCheckbox={isActiveCheckbox}
            />
          ) : null}
        </div>
      </StyledSectionFacebookBody>
      <StyledMessengerFooter>
        <ButtonMolecule
          text="Anterior"
          onClick={handlePrev}
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
          state={
            selectedComponent <= 1 ? ButtonState.DISABLED : ButtonState.NORMAL
          }
        />
        {selectedComponent !== 1 ? (
          <ButtonMolecule
            text="Siguiente"
            size={Size.MEDIUM}
            onClick={handleSubmit}
          />
        ) : (
          <ButtonMolecule
            text="Finalizar"
            size={Size.MEDIUM}
            onClick={() => setIsSectionWebChat(false)}
          />
        )}
      </StyledMessengerFooter>
    </StyledSectionFacebook>
  );
};
