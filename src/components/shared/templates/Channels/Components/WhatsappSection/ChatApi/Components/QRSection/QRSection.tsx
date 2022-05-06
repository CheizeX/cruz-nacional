import { FC, useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import { SpinnerDotted } from 'spinners-react';
import {
  StyledWrapperQRSection,
  StyledLinkQR,
  StyledBodyQR,
  StyledFailedImage,
} from './QRSection.styled';
import { IQRSection } from './QRSection.interface';
import { Text } from '../../../../../../../atoms/Text/Text';
import { LinkToMolecule } from '../../../../../../../molecules/LinkTo/LinkTo';
import { useAppSelector } from '../../../../../../../../../redux/hook/hooks';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../../../../atoms/SVGIcon/SVGIcon';

export const QRSection: FC<IQRSection> = ({ handleQRCode }) => {
  const [isLoandingQrCode, setIsLoandingQrCode] = useState<boolean>(false);
  const { qrCodeChatApi } = useAppSelector(
    (state) => state.channel.chatIntegrationQRState,
  );

  const handleFailedQRCode = async () => {
    setIsLoandingQrCode(true);
    await handleQRCode();
    setIsLoandingQrCode(false);
  };
  return (
    <StyledWrapperQRSection>
      <div>
        <StyledLinkQR>
          <Text>Escanea este código QR desde tu aplicación de Whatsapp.</Text>
          <Text>Al escanear este código QR estás aceptando</Text>
          <div>
            <p>nuestros</p>
            <LinkToMolecule
              href="https://elipse.ai/politicas-de-privacidad/"
              color="#2477ff"
              text="términos y condiciones"
            />
          </div>
        </StyledLinkQR>
        <StyledBodyQR>
          {qrCodeChatApi ? (
            <>
              {isLoandingQrCode ? (
                <SpinnerDotted
                  color="#8769FF"
                  size="100%"
                  style={{ maxHeight: '5rem' }}
                />
              ) : (
                <>
                  <img
                    src={`${qrCodeChatApi}`}
                    alt="¡Error al cargar el QR! Recuerda desvincular el dispositivo anterior"
                  />
                  <button type="button" onClick={handleFailedQRCode}>
                    <MdRefresh />
                  </button>
                </>
              )}
            </>
          ) : (
            <StyledFailedImage>
              <SVGIcon iconFile="/icons/sad-face-2691.svg" />
              <Text>
                Ups el código QR no se cargó correctamente inténtalo nuevamente.
              </Text>
              {isLoandingQrCode ? (
                <SpinnerDotted
                  color="#8769FF"
                  size="100%"
                  style={{ maxHeight: '3rem' }}
                />
              ) : (
                <ButtonMolecule
                  text="Cargar"
                  size={Size.MEDIUM}
                  variant={ButtonVariant.OUTLINED}
                  onClick={handleFailedQRCode}
                />
              )}
            </StyledFailedImage>
          )}
        </StyledBodyQR>
        <StyledLinkQR>
          <div>
            <p>Asegúrate de seguir</p>
            <LinkToMolecule
              href="https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out?lang=es"
              color="#2477ff"
              text="esta guía"
            />
            <p>para asegurar</p>
          </div>
          <p>una correcta integración de whatsapp.</p>
        </StyledLinkQR>
      </div>
    </StyledWrapperQRSection>
  );
};
