import { User } from '../../../../../../models/users/user';

export interface IFilterStatus {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dateAgent?: User[];
  filterStatus: (arg: string) => void;
  filterChannels: (arg: string) => void;
  filterAgents: (arg: string) => void;
  statusAgent: string[];
  byChannels: string[];
  IDAgents: string[];
  resetHandle: () => void | Promise<void>;
  setOptionFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterChat: React.Dispatch<React.SetStateAction<string>>;
}
