export interface IFilterStateProps {
  checkedState?: boolean;
  position?: string;
}

export interface IFilterStateAgents {
  handleFilterStatus: (arg: string) => void;
  statusAgent: string[];
}
