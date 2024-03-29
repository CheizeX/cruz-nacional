import { FC } from 'react';
import {
  StyledEndChatConfirmation,
  StyledEndChatConfirmationIcon,
  StyledEndChatInformationConfirmation,
  StyledFooterEndChatConfirmation,
} from './EndChatConfirmation.styled';
import { IEndChatConfirmationProps } from './EndChatConfirmation.interface';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';

export const EndChatConfirmation: FC<IEndChatConfirmationProps> = ({
  setOpenEndChat,
  handleFinishedChat,
  isLoanding,
}) => {
  return (
    <StyledEndChatConfirmation>
      <StyledEndChatConfirmationIcon>
        <SVGIcon iconFile="/icons/warning.svg" />
      </StyledEndChatConfirmationIcon>
      <StyledEndChatInformationConfirmation>
        <Text>¿Estás seguro de finalizar este chat?</Text>
        <Text>
          Este chat será eliminado de tus chats asignados de forma irreversible.
        </Text>
      </StyledEndChatInformationConfirmation>
      <StyledFooterEndChatConfirmation>
        <ButtonMolecule
          text="Cancelar"
          size={Size.MEDIUM}
          variant={ButtonVariant.OUTLINED}
          onClick={() => setOpenEndChat(false)}
        />
        <ButtonMolecule
          text="Finalizar"
          size={Size.MEDIUM}
          state={isLoanding ? ButtonState.DISABLED : ButtonState.NORMAL}
          onClick={handleFinishedChat}
        />
      </StyledFooterEndChatConfirmation>
    </StyledEndChatConfirmation>
  );
};
