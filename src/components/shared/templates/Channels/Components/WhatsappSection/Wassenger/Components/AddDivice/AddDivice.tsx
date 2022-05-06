import { FC } from 'react';
import { SpinnerDotted } from 'spinners-react';
import { Text } from '../../../../../../../atoms/Text/Text';
import { StyledAddDivice } from './AddDivice.styled';
import { IPropsAddDivice } from './addDivice.interface';

export const AddDivice: FC<IPropsAddDivice> = ({ whatsappUnOfficial }) => {
  return (
    <StyledAddDivice>
      <div>
        <SpinnerDotted
          color="#8769FF"
          size="100%"
          style={{ maxHeight: '5rem' }}
        />
      </div>
      {whatsappUnOfficial ? (
        <Text>Estamos desvinculando tu número de teléfono anterior</Text>
      ) : (
        <Text>Estamos creando tu dispositivo.</Text>
      )}
      <br />
      <Text>Tardará entre 2 a 5 minutos.</Text>
      <br />
      {whatsappUnOfficial ? (
        <Text>
          Una vez que este desvinculado el dispositivo se mostrara el código QR
          para escanear podrás generarlo nuevamente en caso de no poder
          vincularlo.
        </Text>
      ) : (
        <Text>
          Una vez creado tú nuevo dispositivo, te informaremos para poder
          escanear el código QR y puedas vincular tu número de teléfono
        </Text>
      )}
    </StyledAddDivice>
  );
};
