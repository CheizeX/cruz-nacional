import { User } from '../../../../../../models/users/user';

export interface IFilterByAgentProps {
  checkedAgent?: boolean;
}
export interface IFilterAgent {
  handleFilterAgents: (arg: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  byAgents: string[];
  dateAgent: User[];
}
