export interface ITagTransferProps {
  name: string;
  color: string;
}
export interface IAgentToTransferProps {
  color?: string;
  name?: string;
  isConversation?: number;
  isTransfer?: number;
  isPause?: number;
  isAverages: number | string;
  tag?: TagTransferType;
}
export type TagTransferType = ITagTransferProps[];
