import { FC, useRef } from 'react';
import {
  StyledWrapperModal,
  StyledBoxWrapperAnimation,
  ChackboxLabelAnimation,
  CheckBoxAnimation,
} from './WrapperNameAndDescription.styled';
import { Text } from '../../../../../../atoms/Text/Text';
import { ContainerInput } from '../../../../../../molecules/Input/ContainerInput';
import { IPropsDescription } from './WrapperNameAndDescription.interface';

export const WrapperNameAndDescription: FC<IPropsDescription> = ({
  setCustomDescription,
  setCustomTitle,
  handleAnimation,
  setGreetingMessage,
  isAnimation,
}) => {
  const inputRef = useRef(null);

  return (
    <StyledWrapperModal>
      <div>
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
      </div>
      <div>
        <div>
          <Text>Ingresa una descripción: </Text>
          <Text>(ejemplo: Asistente Virtual)</Text>
        </div>
        <ContainerInput
          placeHolder="Descripción..."
          name="description"
          maxLength={20}
          setFocus={() => null}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCustomDescription(event.target.value)
          }
        />
      </div>
      <div>
        <Text>Ingresa un mensaje de bienvenida</Text>
        <textarea
          placeholder="Mensaje de bienvenida..."
          name="message"
          onChange={(event) => setGreetingMessage(event.target.value)}
        />
      </div>
      <div>
        <Text>Animación</Text>
        <StyledBoxWrapperAnimation>
          <CheckBoxAnimation type="checkbox" />
          <ChackboxLabelAnimation
            isChecked={isAnimation}
            ref={inputRef}
            onClick={handleAnimation}
          />
        </StyledBoxWrapperAnimation>
      </div>
    </StyledWrapperModal>
  );
};
