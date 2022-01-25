export interface UserTagModalProps {
  openNewTag?: string;
  tagModal?: boolean;
  tags?: string;
  setOpenNewTag: React.Dispatch<React.SetStateAction<string>>;
  setTagModal: React.Dispatch<React.SetStateAction<boolean>>;
}
