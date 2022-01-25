import { User } from '../../../../../../models/users/user';

export interface IFilterAvailableProps {
  checkedAgent?: boolean;
}
export interface IFilterByAgent {
  handleFilterAgents: (arg: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  byAgents: string[];
  dateAgent: User[];
}
