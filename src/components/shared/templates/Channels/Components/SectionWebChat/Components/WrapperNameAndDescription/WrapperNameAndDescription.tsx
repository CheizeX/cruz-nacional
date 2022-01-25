import { FC } from 'react';
import { StyledWrapperModal } from './WrapperNameAndDescription.styled';
import { Text } from '../../../../../../atoms/Text/Text';
import { ContainerInput } from '../../../../../../molecules/Input/ContainerInput';
import { IPropsDescription } from './WrapperNameAndDescription.interface';

export const WrapperNameAndDescription: FC<IPropsDescription> = ({
  setCustomDescription,
  setCustomTitle,
}) => {
  return (
    <StyledWrapperModal>
      <Text>Ingresa un nombre:</Text>
      <ContainerInput
        placeHolder="Nombre..."
        name="name"
        maxLength={16}
        setFocus={() => null}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCustomTitle(event.target.value)
        }
      />
      <Text>Ingresa una descripción: </Text>
      <Text>(ejemplo: Asistente Virtual)</Text>
      <ContainerInput
        placeHolder="Descripción..."
        name="description"
        maxLength={20}
        setFocus={() => null}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCustomDescription(event.target.value)
        }
      />
    </StyledWrapperModal>
  );
};
