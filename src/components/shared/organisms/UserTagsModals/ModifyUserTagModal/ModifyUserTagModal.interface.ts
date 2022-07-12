import { FC } from 'react';

export interface StyledColorCheckboxProps {
  checked?: boolean;
  name?: string;
  info?: string;
  mode?: string;
  isWhite?: boolean;
  openNewTag?: string;
  setTagModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNewTag: React.Dispatch<React.SetStateAction<string>>;
  InconArrow?: FC;
  tagModal?: boolean;
  text?: string;
  users?: string;
  setTags: React.Dispatch<React.SetStateAction<string>>;
  tags?: string;
  setContainerTags: React.Dispatch<React.SetStateAction<IPropsTags[]>>;
  containerTags: IPropsTags[];
  handleChecked: (arg: string) => void;
  arrayHelpers?: any;
  checkedModifyUser: string[];
  setCheckedModifyUser: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface IPropsTags {
  _id: string;
  name: string;
  color: string;
  status: boolean;
}
export type Tagsprops = {
  tagsUser: IPropsTags[];
};
