import { BackofficeSection } from '../../../../config/backoffice';

export interface StyledSideBarProps {
  leftIcon?: () => JSX.Element;
  rightIcon?: () => JSX.Element;
  collapseArrow?: boolean;
  backofficeSections: BackofficeSection[];
}
export interface SideBarContainersProps {
  collapseArrow?: boolean;
  focused?: boolean;
}
