import React from 'react';
import { User } from '../../../../../../models/users/user';

export interface IFilterContainer {
  id?: number;
  name?: string;
  color?: string;
}
export interface IFilterAgentsProps {
  dateAgent: User[];
  stateByAgent: string[];
  byAgentAvailable: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterByAgents: (arg: string) => void;
  filterByState: (arg: string) => void;
  handleChange: () => void | Promise<void>;
  handleStateAgents: () => void | Promise<void>;
  clearSecondSection: () => void;
}
