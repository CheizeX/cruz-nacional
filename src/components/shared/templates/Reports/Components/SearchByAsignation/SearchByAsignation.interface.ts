export interface ISearchByAsignation {
  checkedAgent?: boolean;
}
export interface IPropsSearchAsignation {
  filterByAsignation: (arg: string) => void;
  filtersAsignation: string[];
}
