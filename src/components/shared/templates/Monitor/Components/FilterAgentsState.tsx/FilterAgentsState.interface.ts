export interface FilterAgentsStateProps {
  checkedAgents?: boolean;
  position?: string;
}
export interface FilterByState {
  stateByAgent: number[];
  filterByState: (arg: number) => void;
}
