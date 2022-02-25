import { Dispatch, SetStateAction } from 'react';

export interface SubscriptionSectionProps {
  userName?: string;
  plan?: string;
  trial?: boolean;
  trialEnd?: 'string';
  active?: boolean;
}
export interface SubscriptionSectionItemsProps {
  setShowCard: Dispatch<SetStateAction<boolean>>;
  planNameSelected?: string;
  setPlanNameSelected: Dispatch<SetStateAction<string>>;
}
