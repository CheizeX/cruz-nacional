export interface FilterChannelsProps {
  checked?: boolean;
}
export interface FilterChannel {
  handleFilterChannels: (arg: string) => void;
  channel: string[];
}
