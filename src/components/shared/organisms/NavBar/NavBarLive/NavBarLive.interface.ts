import { FC, MouseEventHandler } from 'react';

export interface INavBarLiveProps {
  focusCheck?: boolean;
  statusChecked?: string;
  avatar?: FC;
  position?: string;
  messageIcon?: () => JSX.Element;
  bellIcon?: () => JSX.Element;
  elipsis?: () => JSX.Element;
  onClick?: MouseEventHandler;
}

export interface INavBarContainer {
  isFocus: boolean;
}
export interface INavBar {
  componentsSection: string;
}

// export interface IPropsSoundLiveChat {
//   audioConversation: React.MutableRefObject<HTMLAudioElement | null>;
//   audioPending: React.MutableRefObject<HTMLAudioElement | null>;
// }
