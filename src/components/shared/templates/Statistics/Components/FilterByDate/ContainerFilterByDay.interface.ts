import { ICustomRange } from '../UserAndAgentInteraction/UserAndAgentInteraction.interface';

export interface IContainerFilter {
  setDay: React.Dispatch<React.SetStateAction<string>>;
  day: string;
  customRangeText: string;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomRange: React.Dispatch<React.SetStateAction<ICustomRange>>;
  setCustomRangeText: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICustomRangeFilter {
  setCustomRange: React.Dispatch<React.SetStateAction<ICustomRange>>;
  handleClickFilterByInteraction: () => void;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  loandingChart: boolean;
  setSeletedComponent: React.Dispatch<React.SetStateAction<number>>;
  seletedComponent: number;
}
