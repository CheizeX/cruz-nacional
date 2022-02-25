import React from 'react';

export interface IPropsOfficialForm {
  setIsPhone: React.Dispatch<React.SetStateAction<string>>;
  handleOnChange: (arg: string) => void;
  handleApiKeyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValidPhone: boolean;
  isPhone: string;
  isValid: boolean;
}
export interface IPropsWrapperForm {
  isValid: boolean;
}
