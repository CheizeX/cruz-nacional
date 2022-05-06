import { FC, useState } from 'react';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import {
  StyledWrapperChatApi,
  StyledHeaderChatApi,
  StyledBodyChatApi,
  StyledFooterChatApi,
} from './ChatApiSection.styled';
import {
  IPropsChatApi,
  ITypeUnOfficialWhatsapp,
} from './ChatApiSection.interface';
import { ConfirmationQR } from '../../Wassenger/Components/ConfirmationQR/ConfirmationQR';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../../../atoms/Button/Button';
import { UnOfficialWhatsappNotExist } from '../Components/UnOfficialWhatsappNotExist/UnOfficialWhatsappNotExist';
import { RequestInProcess } from '../Components/RequestInProcess/RequestInProcess';
import { WhatsappExists } from '../../Wassenger/Components/WhatsappExists/WhatsappExists';
import {
  readQrCode,
  requestInstanceChatApi,
  resetPhoneChatApi,
  savePhoneChatApi,
} from '../../../../../../../../api/channels';
import { QRSection } from '../Components/QRSection/QRSection';
import { OfficialWhatsAppSuccess } from '../../Components/OfficialWhatsappSuccess/OfficialWhatsappSuccess';
import { OfficialWhatsappRejected } from '../../Components/OfficialWhatsappRejected/OfficialWhatsappRejected';
import { Toast } from '../../../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../../../molecules/Toast/useToast';
import { useAppDispatch } from '../../../../../../../../redux/hook/hooks';
import { setQrCodeChatApi } from '../../../../../../../../redux/slices/channels/integration-with-qr';

const dataChatApi = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Vincula tu número de teléfono móvil',
  },
  {
    num: 3,
    message: '¡Listo!',
  },
];
// Failed scan
export const ChatApiSession: FC<IPropsChatApi> = ({
  seletedByComponentChatApi,
  setByComponentChatApi,
  setIsSectionWebChat,
  getChannelList,
  whatsappStatus,
}) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
  let timer: NodeJS.Timeout;

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [verifiedRequest, setVerifiedRequest] = useState<boolean>(false);
  const [verifiedReset, setVerifiedReset] = useState<boolean>(true);
  const [loandingChatApi, setLoandingChatApi] = useState<boolean>(false);

  const handlePrevComponent = () => {
    setByComponentChatApi(seletedByComponentChatApi - 1);
  };
  const handleNextComponent = () => {
    setByComponentChatApi(seletedByComponentChatApi + 1);
  };

  const handleRequessInstance = async () => {
    try {
      const response = await requestInstanceChatApi();
      if (response.success !== false) {
        setTimeout(() => {
          setIsSectionWebChat(false);
        }, 1000);
      } else {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `Presentamosun error al enviar la solicitud`,
        });
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleQRCode = async () => {
    try {
      const response = await readQrCode();
      if (response.success !== false) {
        dispatch(setQrCodeChatApi(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  const handleResetPhone = async () => {
    try {
      const response = await resetPhoneChatApi();
      if (response === 'Successful logout') {
        timer = setInterval(async () => {
          const result = await readQrCode();
          if (result.success === false) {
            setLoandingChatApi(true);
          } else if (result) {
            dispatch(setQrCodeChatApi(result));
            setLoandingChatApi(false);
            handleNextComponent();
            clearInterval(timer);
          }
        }, 5000);
      } else {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `El dipositivo no se puedo resetear intentelo nuevamente`,
        });
        // setByComponentChatApi(1);
        // setIsSectionWebChat(false);
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleSaveInfo = async () => {
    try {
      const response = await savePhoneChatApi();
      if (response === 'Saved data') {
        setLoandingChatApi(true);
        await getChannelList();
        setByComponentChatApi(3);
        setLoandingChatApi(false);
      } else if (
        response.success === false &&
        response.message === 'Failed scan'
      ) {
        setByComponentChatApi(2);
        setLoandingChatApi(false);
      } else {
        setByComponentChatApi(4);
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const textButton = () => {
    if (whatsappStatus === ITypeUnOfficialWhatsapp.NOT_EXIST) {
      return 'Confirmar';
    }
    if (whatsappStatus === ITypeUnOfficialWhatsapp.IN_REVIEW) {
      return 'Finalizar';
    }
    if (whatsappStatus === ITypeUnOfficialWhatsapp.APPROVED) {
      if (seletedByComponentChatApi >= 3) {
        return 'Finalizar';
      }
      return 'Siguiente';
    }
    if (whatsappStatus === ITypeUnOfficialWhatsapp.RESET) {
      if (seletedByComponentChatApi >= 3) {
        return 'Finalizar';
      }
      return 'Siguiente';
    }
    return 'Siguiente';
  };

  const handleClosed = () => {
    setIsSectionWebChat(false);
    setByComponentChatApi(1);
  };
  const handleExecute = async () => {
    if (whatsappStatus === ITypeUnOfficialWhatsapp.NOT_EXIST) {
      await handleRequessInstance();
    }
    if (whatsappStatus === ITypeUnOfficialWhatsapp.RESET) {
      if (seletedByComponentChatApi === 1) {
        setLoandingChatApi(true);
        await handleResetPhone();
      } else if (seletedByComponentChatApi === 2) {
        setVerifiedReset(true);
        await handleSaveInfo();
      } else if (
        seletedByComponentChatApi === 3 ||
        seletedByComponentChatApi === 4
      ) {
        handleClosed();
      }
    }
    if (whatsappStatus === ITypeUnOfficialWhatsapp.IN_REVIEW) {
      handleClosed();
    }
    if (whatsappStatus === ITypeUnOfficialWhatsapp.APPROVED) {
      if (seletedByComponentChatApi === 1) {
        setLoandingChatApi(true);
        await handleQRCode();
        setLoandingChatApi(false);
        handleNextComponent();
      } else if (seletedByComponentChatApi === 2) {
        setIsChecked(true);
        await handleSaveInfo();
      } else if (
        seletedByComponentChatApi === 3 ||
        seletedByComponentChatApi === 4
      ) {
        handleClosed();
      }
    }
  };

  const handleStatusButton = () => {
    if (loandingChatApi) {
      return ButtonState.LOADING;
    }
    if (whatsappStatus === ITypeUnOfficialWhatsapp.RESET && !verifiedReset) {
      return ButtonState.DISABLED;
    }
    if (whatsappStatus === ITypeUnOfficialWhatsapp.APPROVED && !isChecked) {
      return ButtonState.DISABLED;
    }
    if (
      whatsappStatus === ITypeUnOfficialWhatsapp.NOT_EXIST &&
      !verifiedRequest
    ) {
      return ButtonState.DISABLED;
    }
    return ButtonState.NORMAL;
  };

  return (
    <StyledWrapperChatApi>
      <StyledHeaderChatApi>
        <Text>Añadiendo canal de WhatsApp No Oficial</Text>
        <button type="button" onClick={handleClosed}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderChatApi>
      <StyledBodyChatApi seletedByComponentChatApi={seletedByComponentChatApi}>
        <div>
          <div>
            {dataChatApi.map((item) => (
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
          {seletedByComponentChatApi === 1 &&
            whatsappStatus === ITypeUnOfficialWhatsapp.APPROVED && (
              <ConfirmationQR
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            )}
          {seletedByComponentChatApi === 1 &&
            whatsappStatus === ITypeUnOfficialWhatsapp.NOT_EXIST && (
              <UnOfficialWhatsappNotExist
                setVerifiedRequest={setVerifiedRequest}
                verifiedRequest={verifiedRequest}
              />
            )}
          {seletedByComponentChatApi === 1 &&
            whatsappStatus === ITypeUnOfficialWhatsapp.IN_REVIEW && (
              <RequestInProcess />
            )}
          {seletedByComponentChatApi === 1 &&
            whatsappStatus === ITypeUnOfficialWhatsapp.RESET && (
              <WhatsappExists
                setUnLink={setVerifiedReset}
                unLink={verifiedReset}
              />
            )}
          {seletedByComponentChatApi === 2 && (
            <QRSection handleQRCode={handleQRCode} />
          )}
          {seletedByComponentChatApi === 3 && <OfficialWhatsAppSuccess />}
          {seletedByComponentChatApi === 4 && <OfficialWhatsappRejected />}
        </div>
      </StyledBodyChatApi>
      <StyledFooterChatApi>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
          onClick={handlePrevComponent}
          state={
            seletedByComponentChatApi <= 1
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
        <ButtonMolecule
          text={textButton()}
          size={Size.MEDIUM}
          state={handleStatusButton()}
          onClick={() => handleExecute()}
        />
      </StyledFooterChatApi>
    </StyledWrapperChatApi>
  );
};
