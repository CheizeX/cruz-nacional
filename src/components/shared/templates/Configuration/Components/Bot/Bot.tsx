import { FC } from 'react';
import { StyledBot } from './Bot.styled';
import { FinalFlow } from './FinalFlow/FinalFlow';
import { InitialFlow } from './InitialFlow/InitialFlow';

export const Bot: FC = () => {
  return (
    <StyledBot>
      <InitialFlow />
      <FinalFlow />
    </StyledBot>
  );
};
