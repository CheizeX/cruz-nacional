import { User } from '../../../../../../models/users/user';

export interface IFilterStatus {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dateAgent?: User[];
  filterStatus: (arg: number) => void;
  filterChannels: (arg: number) => void;
  filterAgents: (arg: string) => void;
  statusAgent: number[];
  byChannels: number[];
  IDAgents: string[];
  onHandleToggle: () => void | Promise<void>;
  resetHandle: () => void | Promise<void>;
}
