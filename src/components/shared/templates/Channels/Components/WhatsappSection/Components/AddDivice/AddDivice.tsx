import { FC } from 'react';
import { SpinnerDotted } from 'spinners-react';
import { Text } from '../../../../../../atoms/Text/Text';
import { StyledAddDivice } from './AddDivice.styled';

export const AddDivice: FC = () => {
  return (
    <StyledAddDivice>
      <div>
        <SpinnerDotted
          color="#8769FF"
          size="100%"
          style={{ maxHeight: '5rem' }}
        />
      </div>
      <Text>Estamos creando tu dispositivo.</Text>
      <br />
      <Text>Tardará entre 2 a 5 minutos.</Text>
      <br />
      <Text>Te informaremos cuando el dispositivo este creado.</Text>
    </StyledAddDivice>
  );
};
