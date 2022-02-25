import { FC, useState } from 'react';
// import { useAppSelector } from '../../../../../../../../redux/hook/hooks';
import { SpinnerDotted } from 'spinners-react';
import { Text } from '../../../../../../atoms/Text/Text';
import { LinkToMolecule } from '../../../../../../molecules/LinkTo/LinkTo';
import { StyledQR, StyledLink, StyledViewQr } from './ViewQR.styled';
import { IViewQR } from './ViewOR.interface';
import { useAppSelector } from '../../../../../../../../redux/hook/hooks';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../../../atoms/Button/Button';

export const ViewQR: FC<IViewQR> = ({ handleClickQR }) => {
  const [loadQR, setLoadQr] = useState<boolean>(false);
  const { imageQR } = useAppSelector(
    (state) => state.channel.chatIntegrationQRState,
  );
  const handleLoadQr = async () => {
    setLoadQr(true);
    await handleClickQR();
    setLoadQr(false);
  };

  return (
    <StyledViewQr>
      <div>
        <StyledLink>
          <Text>Escanea este código QR desde tu aplicación de Whatsapp.</Text>
          <Text>Al escanear este código QR estás aceptando</Text>
          <div>
            <p>nuestros</p>
            <LinkToMolecule
              href="https://elipse.ai/politicas-de-privacidad/"
              color="#2477ff"
              text="terminos y condiciones"
            />
          </div>
        </StyledLink>
        <StyledQR>
          {imageQR ? (
            <iframe
              src={imageQR}
              frameBorder="0"
              height="260px"
              width="100%"
              title="qr"
            />
          ) : (
            <div>
              <SVGIcon iconFile="/icons/sad-face-2691.svg" />
              <Text>
                Ups el código QR no se cargo correctamente intentalo nuevamente.
              </Text>
              <div>
                {loadQR ? (
                  <SpinnerDotted
                    color="#8769FF"
                    size="100%"
                    style={{ maxHeight: '5rem' }}
                  />
                ) : (
                  <ButtonMolecule
                    text="Cargar"
                    size={Size.MEDIUM}
                    variant={ButtonVariant.OUTLINED}
                    onClick={handleLoadQr}
                  />
                )}
              </div>
            </div>
          )}
        </StyledQR>
        <div>
          <StyledLink>
            <div>
              <p>Asegúrate de seguir</p>
              <LinkToMolecule
                href="https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out?lang=es"
                color="#2477ff"
                text="esta guia"
              />
              <p>para asegurar</p>
            </div>
            <p>una correcta integración de whatsapp.</p>
          </StyledLink>
        </div>
      </div>
    </StyledViewQr>
  );
};
