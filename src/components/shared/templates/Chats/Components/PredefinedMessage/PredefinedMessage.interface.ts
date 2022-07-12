import React from 'react';

export interface IPredefinedMessage {
  showPredefinedTexts: boolean;
  setShowPredefinedTexts: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSecionNext: React.Dispatch<React.SetStateAction<boolean>>;
  sectionNext: boolean;
  handleClickToSendPredefinidedTexts: (message: string) => Promise<void>;
  setChatInputDialogue: React.Dispatch<React.SetStateAction<string>>;
  agent: string;
  focusRef: React.MutableRefObject<HTMLElement | null>;
}
export interface IContainerBox {
  showPredefinedTexts: boolean;
}
export interface IContainerFooter {
  longText?: boolean;
}
