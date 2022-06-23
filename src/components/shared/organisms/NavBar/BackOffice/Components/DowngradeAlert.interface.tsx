import { Dispatch, SetStateAction } from 'react';

export interface IUsersToSelectProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  validateIfAllAgentsAreSelected?: boolean;
}
