import { Chat } from '../../../../../../models/chat/chat';
import { User } from '../../../../../../models/users/user';

export interface IMonitorSecondSection {
  agentNotAvailable: User[];
  dateAgent?: User[];
  allAgent?: User[];
  chats?: Chat[];
  countAgent: number;
  stateByAgent: number[];
  byAgentAvailable: string[];
  handleChange: () => void | Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterByAgents: (arg: string) => void;
  filterByState: (arg: number) => void;
  handleClear: () => void | Promise<void>;
  handleStateAgents: () => void | Promise<void>;
}
