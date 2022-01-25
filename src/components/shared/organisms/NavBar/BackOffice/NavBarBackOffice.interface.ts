import { FC, MouseEventHandler } from 'react';

export interface IBackOfficeProps {
  text?: string;
  avatar?: FC;
  messageIcon?: () => JSX.Element;
  bellIcon?: () => JSX.Element;
  onClick?: MouseEventHandler;
  myAccount?: number;
  setMyAccount: React.Dispatch<React.SetStateAction<number>>;
}

// export interface BackofficeDropdownProps {
//   visible: boolean;
// }
