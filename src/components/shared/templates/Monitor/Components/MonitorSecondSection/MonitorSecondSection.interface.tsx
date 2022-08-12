import { Chat } from '../../../../../../models/chat/chat';
import { User } from '../../../../../../models/users/user';

export interface IMonitorSecondSection {
  agentNotAvailable: User[];
  dateAgent?: User[];
  allAgent?: User[];
  chats?: Chat[];
  countAgent: number;
  stateByAgent: string[];
  byAgentAvailable: string[];
  handleChange: () => void | Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterByAgents: (arg: string) => void;
  filterByState: (arg: string) => void;
  handleStateAgents: () => void | Promise<void>;
  clearSecondSection: () => void;
  setSectionAgent: React.Dispatch<React.SetStateAction<string>>;
  setOptionFilterSecond: React.Dispatch<React.SetStateAction<number>>;
}
