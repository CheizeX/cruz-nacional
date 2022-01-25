export interface IFilterStateProps {
  checkedState?: boolean;
  position?: string;
}

export interface IFilterStateAgents {
  handleFilterStatus: (arg: number) => void;
  statusAgent: number[];
}
