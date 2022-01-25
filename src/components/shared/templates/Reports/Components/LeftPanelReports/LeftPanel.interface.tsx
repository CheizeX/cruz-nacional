export enum IType {
  CHATBOT = 'CHATBOT',
  AGENTS = 'AGENTS',
  TODOS = 'TODOS',
}

export interface IPropsLeftPanel {
  types: string;
  focused?: boolean;
}
export interface ILeftPanel {
  onClick?: React.MouseEventHandler;
  setTypes: React.Dispatch<React.SetStateAction<IType>>;
  filterState: number[];
  filterByState: (arg: number) => void;
  filterChannel: number[];
  filterByChannel: (arg: number) => void;
  filtersAsignation: string[];
  filterByAsignation: (arg: string) => void;
  dateStart: Date | null;
  dateEnd: Date | null;
  onChangeStart: (arg: Date | null) => void;
  onChangeEnd: (arg: Date | null) => void;
  handleToggle: () => void | Promise<void>;
  handleReset: () => void;
}
