import { FC } from 'react';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ButtonMolecule, Size } from '../../../atoms/Button/Button';
import {
  StyledUserDetails,
  StyledIconUserDetails,
  StyledInformationUserDetails,
  StyledFooterUserDetails,
} from './UserDetails.styled';

export const UserDetails: FC = () => {
  return (
    <StyledUserDetails>
      <StyledIconUserDetails>
        <SVGIcon iconFile="/icons/information.svg" />
      </StyledIconUserDetails>
      <StyledInformationUserDetails>
        <Text>¡Ha alcanzado el número máximo de usuarios permitidos!</Text>
        <Text>
          Si desea crear más usuarios, por favor contáctate con nuestro equipo
          administrativo.
        </Text>
      </StyledInformationUserDetails>
      <StyledFooterUserDetails>
        <ButtonMolecule text="Entendido" size={Size.MEDIUM} />
      </StyledFooterUserDetails>
    </StyledUserDetails>
  );
};
