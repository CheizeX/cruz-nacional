export interface CollapseSidebar {
  collapseArrow?: boolean;
  setCollapseArrow: React.Dispatch<React.SetStateAction<boolean>>;
  selectedSection?: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}
