import { FC } from 'react';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import {
  StyledModalAuth,
  StyledAuthBody,
  StyledFooterAuth,
  StyledLink,
} from './ConfirmationAuth.styled';
import { IPropsConfirmationAuth } from './ConfirmationAuth.interface';
import { ButtonMolecule } from '../../../../../../atoms/Button/Button';
import { LinkToMolecule } from '../../../../../../molecules/LinkTo/LinkTo';
import { useAppSelector } from '../../../../../../../../redux/hook/hooks';

export const ConfirmationAuth: FC<IPropsConfirmationAuth> = ({
  setConfirmationAccounth,
}) => {
  const { dataInfoFacebook } = useAppSelector(
    (state) => state.channel.chatContainerAuthFacebookState,
  );
  return (
    <StyledModalAuth>
      <StyledAuthBody>
        <div>
          <SVGIcon iconFile="/icons/success.svg" />
        </div>
        <div>
          <Text>
            ¡Has creado un nuevo canal de Facebook satisfactoriamente!
          </Text>
          <Text>
            Ingresa con el siguiente link a tu pagina de Facebook donde puedes
            disfrutar de todos los servicios que ofrece Messenger.
          </Text>
        </div>
      </StyledAuthBody>
      <StyledLink>
        <div>
          <LinkToMolecule
            color="#2477ff"
            href={`https://www.facebook.com/${dataInfoFacebook[0]?.name}-${dataInfoFacebook[0]?.id}/settings/?tab=messenger_platform`}
            text="Configuración facebook"
          />
        </div>
      </StyledLink>
      <StyledFooterAuth>
        <ButtonMolecule
          onClick={() => setConfirmationAccounth(false)}
          text="Cerrar"
        />
      </StyledFooterAuth>
    </StyledModalAuth>
  );
};
