/* eslint-disable no-nested-ternary */
import React, { Dispatch, FC, SetStateAction } from 'react';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { ButtonMolecule, ButtonState } from '../../../../atoms/Button/Button';
import { Text } from '../../../../atoms/Text/Text';
import {
  GeneralPlanDataProps,
  PlanName,
} from '../SubscriptionSection.interface';
import { prices } from '../SubscriptionSection.shared';
import {
  StyledInputTypeNumber,
  StyledAddAgents,
  StyledAddAgentsBody,
  StyledAddAgentsHeader,
  StyledTotalAgentsPrice,
  StyledTotalAgents,
  StyledTotalPriceContainer,
} from './AddAgents.styled';

interface AddAgentsProps {
  setNumberOfAgentsToAdd: Dispatch<SetStateAction<string>>;
  setShowAddAgents: Dispatch<SetStateAction<boolean>>;
  numberOfAgentsToAdd: string;
  generalPlan: GeneralPlanDataProps;
  setShowCard: Dispatch<SetStateAction<boolean>>;
  handlePlanClick: (plan: PlanName) => void;
  setPlanNameSelected: Dispatch<SetStateAction<string>>;
}

export const AddAgents: FC<AddAgentsProps> = ({
  setNumberOfAgentsToAdd,
  numberOfAgentsToAdd,
  generalPlan,
  handlePlanClick,
  setPlanNameSelected,
}) => {
  const handleClick = (plan: PlanName) => {
    setPlanNameSelected(plan);
    handlePlanClick(plan);
  };
  return (
    <StyledAddAgents>
      <StyledAddAgentsHeader>
        <Text>Agentes extra</Text>
        <Text>${prices.agent},00</Text>
      </StyledAddAgentsHeader>
      <StyledAddAgentsBody>
        <MdOutlineSupportAgent size={40} />
        <StyledTotalAgents>
          <Text>
            Agentes por registrar{' '}
            <Text>
              {generalPlan.agentes +
                generalPlan.agentes_extra -
                generalPlan.agentes_registrados}
            </Text>
          </Text>
          <Text>
            Agentes registrados <Text>{generalPlan.agentes_registrados}</Text>
          </Text>
          <Text>
            Invitaciones por enviar{' '}
            <Text>{generalPlan.invitaciones_disponibles_agente}</Text>
          </Text>
          <Text>
            Invitaciones enviadas{' '}
            <Text>{generalPlan.invitaciones_enviadas_agente}</Text>
          </Text>
        </StyledTotalAgents>
        <StyledTotalPriceContainer>
          <Text color="red">Agregar agentes</Text>
          <StyledInputTypeNumber
            type="number"
            name="max-conve"
            min="0"
            value={numberOfAgentsToAdd}
            onChange={(ev) => setNumberOfAgentsToAdd(ev.target.value)}
          />
        </StyledTotalPriceContainer>
        {Number(numberOfAgentsToAdd) > 0 && (
          <StyledTotalAgentsPrice>
            Total:
            <Text>
              ${Number(numberOfAgentsToAdd) * Number(prices.agent)},00
            </Text>
          </StyledTotalAgentsPrice>
        )}
        <ButtonMolecule
          type="button"
          onClick={() => handleClick(PlanName.AGENT)}
          text="Contratar"
          state={
            numberOfAgentsToAdd === '0' || numberOfAgentsToAdd === ''
              ? ButtonState.DISABLED
              : ButtonState.NORMAL
          }
        />
      </StyledAddAgentsBody>
    </StyledAddAgents>
  );
};
