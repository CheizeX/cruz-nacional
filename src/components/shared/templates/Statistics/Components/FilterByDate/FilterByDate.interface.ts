import { ICustomRange } from '../UserAndAgentInteraction/UserAndAgentInteraction.interface';

export interface IFilterDay {
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setCustomRange: React.Dispatch<React.SetStateAction<ICustomRange>>;
  customRange: ICustomRange;
  loandingChart: boolean;
  handleClickFilterByInteraction: () => void;
}

export type IRagerDate = {
  [key: string]: string;
  today: string;
  yesterday: string;
  currentWeek: string;
  currentMonth: string;
  lastMonth: string;
};
