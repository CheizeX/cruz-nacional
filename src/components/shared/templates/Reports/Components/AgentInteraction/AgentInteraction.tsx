import { FC } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledHeaderAgentInteraction,
  WrapperAgentInteraction,
} from './AgentInteraction.styled';

export const IntearctionAagent: FC = () => {
  const options = [
    'Agente',
    'Sucursal',
    'Int. Horas',
    'Cant. chats',
    'Fecha',
    'Opciones',
  ];
  return (
    <WrapperAgentInteraction>
      <StyledHeaderAgentInteraction>
        {options.map((option, index) => (
          <Text key={index.toString()}>{option}</Text>
        ))}
      </StyledHeaderAgentInteraction>
    </WrapperAgentInteraction>
  );
};
