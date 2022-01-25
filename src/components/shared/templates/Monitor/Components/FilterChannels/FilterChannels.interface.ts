export interface FilterChannelsProps {
  checked?: boolean;
}
export interface FilterChannel {
  handleFilterChannels: (arg: number) => void;
  channel: number[];
}
