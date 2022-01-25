export interface IChatFilterProps {
  filterOnClose?: boolean;
}

export interface FilterChannelsProps {
  checked?: boolean;
}
export interface FilterChannel {
  checkedTags: number[];
  setCheckedTags: React.Dispatch<React.SetStateAction<number[]>>;
  selectedChannels?: number[];
  setSelectedChannels?: React.Dispatch<React.SetStateAction<number[]>>;
  handleCleanChannels?: (arg: string) => void;
  channel?: number[];
}
