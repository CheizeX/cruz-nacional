import React from 'react';

export interface ISectionFacebook {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmationAccounth: React.Dispatch<React.SetStateAction<boolean>>;
  getChannelList: () => Promise<void>;
}

export interface IContainerFacebook {
  selectedComponent: number;
}
