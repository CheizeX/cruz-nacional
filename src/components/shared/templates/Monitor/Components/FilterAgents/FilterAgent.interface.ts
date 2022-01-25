import { User } from '../../../../../../models/users/user';

export interface IFilterContainer {
  id?: number;
  name?: string;
  color?: string;
}
export interface IFilterAgentsProps {
  dateAgent: User[];
  stateByAgent: number[];
  byAgentAvailable: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterByAgents: (arg: string) => void;
  filterByState: (arg: number) => void;
  handleChange: () => void | Promise<void>;
  handleClear: () => void | Promise<void>;
  handleStateAgents: () => void | Promise<void>;
}
