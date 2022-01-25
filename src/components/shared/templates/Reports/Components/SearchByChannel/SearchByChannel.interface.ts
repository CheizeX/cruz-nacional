export interface ISearchByChannel {
  filterChannel: number[];
  filterByChannel: (arg: number) => void;
}

export interface IFilterChannelProps {
  checked?: boolean;
}
