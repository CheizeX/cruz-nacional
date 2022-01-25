export interface IContainerTagAsignament {
  color?: string;
}
export interface ITagsProps {
  id?: number;
  name: string;
  color: string;
}

export interface IAsignationProps {
  handleToggleTags: (arg: string) => void;
  checkedAsignationTags: string[];
}
