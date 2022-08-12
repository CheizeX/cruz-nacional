export interface ICardContainer {
  position: string;
}
export interface ICardProps {
  number?: number;
  name: string;
  icon: string;
  setFilterChat: (arg: string) => void;
}
