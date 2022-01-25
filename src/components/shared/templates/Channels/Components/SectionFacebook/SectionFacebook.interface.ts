import React from 'react';

export interface ISectionFacebook {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmationAccounth: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IContainerFacebook {
  selectedComponent: number;
}
