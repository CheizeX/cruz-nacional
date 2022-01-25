export interface IUserFilterProps {
  isClose?: boolean;
  handleReset: () => void | Promise<void>;
}
export interface IPropsRole {
  roles?: string;
  active?: boolean;
}

export interface IPropsAsignamentTags {
  handleToggleTags: (arg: string) => void;
  checkedAsignationTags: string[];
  filterRole: string;
  setFilterRole: React.Dispatch<React.SetStateAction<string>>;
  handleFilterData: () => void | Promise<void>;
  setCheckedAsignationTags: React.Dispatch<React.SetStateAction<string[]>>;
}
