import { Dispatch, SetStateAction } from 'react';

export interface IUsersToSelectProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  nextPlan: {
    plan: string;
    invitationsAvailable: number;
  };
  validateIfAllAgentsAreSelected?: boolean;
}
