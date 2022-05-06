import React, { FC } from 'react';
import { GiClick } from 'react-icons/gi';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { IUsersToSelectProps } from './DowngradeAlert.interface';
import {
  StyledDowngradeUsersSelect,
  StyledDowngradeUsersSelectContainer,
} from './DowngradeAlert.styled';

export const DowngradeAlert: FC<IUsersToSelectProps> = ({
  setModal,
  nextPlan,
  validateIfAllAgentsAreSelected,
}) => {
  return (
    <StyledDowngradeUsersSelectContainer>
      <StyledDowngradeUsersSelect
        validateIfAllAgentsAreSelected={validateIfAllAgentsAreSelected}
        setModal={setModal}
        nextPlan={nextPlan}>
        {!validateIfAllAgentsAreSelected ? (
          <Text size="12px" weight="600">
            <SVGIcon iconFile="/icons/warning.svg" />
            Acción requerida para el traspaso al plan{' '}
            {nextPlan.plan.toUpperCase()}
          </Text>
        ) : (
          <Text size="12px" weight="600">
            <SVGIcon iconFile="/icons/watch.svg" />
            Tienes tiempo para intercambiar agentes hasta que finalice el
            período de tu plan actual !
          </Text>
        )}
        <button type="button" onClick={() => setModal(true)}>
          <Text size="12px" weight="600">
            CLICK AQUÍ
          </Text>
          <GiClick size="32px" color="white" />
        </button>
      </StyledDowngradeUsersSelect>
    </StyledDowngradeUsersSelectContainer>
  );
};
