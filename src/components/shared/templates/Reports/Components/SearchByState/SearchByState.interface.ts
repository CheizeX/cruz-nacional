export interface ISearchByState {
  filterState: number[];
  filterByState: (arg: number) => void;
}

export interface IFilterStateProps {
  checkedState?: boolean;
  position?: string;
}
