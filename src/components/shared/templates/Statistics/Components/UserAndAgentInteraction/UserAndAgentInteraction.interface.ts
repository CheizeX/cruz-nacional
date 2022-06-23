import React from 'react';

export type ICustomRange = {
  isCustomRange: boolean;
  startDate: Date | null;
  endDate: Date | null;
};
export interface IPropsUserAnAgentInteraction {
  handleInformationByAgent: (arg: string) => void;
  setInteractioFilterDay: React.Dispatch<React.SetStateAction<string>>;
  setInteractionFilterChannel: React.Dispatch<React.SetStateAction<string>>;
  interactionFilterDay: string;
  customRange: ICustomRange;
  loandingChart: boolean;
  setCustomRange: React.Dispatch<React.SetStateAction<ICustomRange>>;
  handleClickFilterByInteraction: () => void;
}
