export interface FilterAgentsStateProps {
  checkedAgents?: boolean;
  position?: string;
}
export interface FilterByState {
  stateByAgent: string[];
  filterByState: (arg: string) => void;
}
