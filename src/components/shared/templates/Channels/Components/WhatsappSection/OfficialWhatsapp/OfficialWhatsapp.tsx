import { FC, useState } from 'react';
import {
  StyledHeaderOfficialWhatsapp,
  StyledWrapperOfficialWhatsapp,
  StyledBodyOfficialWhatsapp,
  StyledFooterOfficialWhatsapp,
} from './OfficialWhatsapp.styled';
import { IPropsOfficialWhatsapp } from './OfficialWhatsapp.interface';
import { Text } from '../../../../../atoms/Text/Text';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { OfficialWhatsappForm } from '../Components/OfficialWhatsappForm/OfficialWhatsappForm';
import { createOfficialWhatsapp } from '../../../../../../../api/channels';
import { OfficialWhatsAppSuccess } from '../Components/OfficialWhatsappSuccess/OfficialWhatsappSuccess';
import { OfficialWhatsappRejected } from '../Components/OfficialWhatsappRejected/OfficialWhatsappRejected';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';

const dataOfficialWhatsapp = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Ingresa los siguientes campos',
  },
  {
    num: 3,
    message: '¡Listo!',
  },
];

export const OfficialWhatsappComponent: FC<IPropsOfficialWhatsapp> = ({
  setIsSectionWebChat,
  getChannelList,
}) => {
  const [selectedComponent, setSelectedComponent] = useState<number>(2);
  const [isPhone, setIsPhone] = useState<string>('+56');
  const [isApiKey, setIsApiKey] = useState<string>('');
  const [isValidPhone, setIsValidPhone] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean>(true);
  const showAlert = useToastContext();

  const handleComponentPrevious = () => {
    if (selectedComponent === 3) {
      setSelectedComponent(selectedComponent - 1);
    } else {
      setSelectedComponent(selectedComponent - 2);
    }
  };
  // FUNCION PARA INCREMENTAR  LA SECCIÓN DE COMPONENTES
  // const handleComponentNext = () => {
  //   setSelectedComponent(selectedComponent + 1);
  // };
  const handleOnChange = (value: string) => {
    if (value.length <= 4 || value === '') {
      setIsValidPhone(false);
    } else {
      setIsValidPhone(true);
    }
    setIsPhone(value);
  };
  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.target;
    if (targetValue === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setIsApiKey(targetValue);
  };
  const handleToggle = async () => {
    try {
      if (isPhone.length > 4 && isApiKey !== '') {
        const response = await createOfficialWhatsapp({
          providerName: '360',
          apiKey: isApiKey,
          phoneNumber: isPhone,
          isActive: false,
        });
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'SUCCESS',
          message: `${response}`,
        });
        setIsApiKey('');
        setIsPhone('+56');
        setSelectedComponent(3);
        getChannelList();
      } else if (isApiKey === '') {
        setIsValid(false);
      } else if (isPhone === '' || isPhone.length <= 4) {
        setIsValidPhone(false);
      }
    } catch (err) {
      setSelectedComponent(4);
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  const handleOnFinalize = () => {
    setIsSectionWebChat(false);
    setSelectedComponent(2);
  };
  const handleClose = () => {
    setIsApiKey('');
    setIsPhone('+56');
    setIsValid(true);
    setIsValidPhone(true);
    setIsSectionWebChat(false);
  };

  return (
    <StyledWrapperOfficialWhatsapp>
      <StyledHeaderOfficialWhatsapp>
        <Text> Añadiendo canal de Whatsapp Oficial</Text>
        <button onClick={handleClose} type="button">
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderOfficialWhatsapp>
      <StyledBodyOfficialWhatsapp selectedComponent={selectedComponent}>
        <div>
          <div>
            {dataOfficialWhatsapp.map((text) => (
              <div key={text.num}>
                <div>
                  <div>{text.num} </div>
                  <Text>{text.message}</Text>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
        <div>
          {selectedComponent === 2 ? (
            <OfficialWhatsappForm
              setIsPhone={setIsPhone}
              handleOnChange={handleOnChange}
              handleApiKeyChange={handleApiKeyChange}
              isPhone={isPhone}
              isValidPhone={isValidPhone}
              isValid={isValid}
            />
          ) : null}
          {selectedComponent === 3 ? <OfficialWhatsAppSuccess /> : null}
          {selectedComponent === 4 ? <OfficialWhatsappRejected /> : null}
        </div>
      </StyledBodyOfficialWhatsapp>
      <StyledFooterOfficialWhatsapp>
        <ButtonMolecule
          text="Anterior"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          state={
            selectedComponent <= 2 ? ButtonState.DISABLED : ButtonState.NORMAL
          }
          onClick={handleComponentPrevious}
        />
        {selectedComponent >= 3 ? (
          <ButtonMolecule
            text="Finalizar"
            size={Size.MEDIUM}
            onClick={handleOnFinalize}
          />
        ) : (
          <ButtonMolecule
            text="Siguiente"
            size={Size.MEDIUM}
            onClick={handleToggle}
          />
        )}
      </StyledFooterOfficialWhatsapp>
    </StyledWrapperOfficialWhatsapp>
  );
};
