import { Dispatch, SetStateAction } from 'react';

export interface IWebchatConfigProps {
  initialMessage: string;
  customTitle: string;
  customDescription: string;
  setCustomTitle: Dispatch<SetStateAction<string>>;
  setCustomDescription: Dispatch<SetStateAction<string>>;
  setInitialMessage: Dispatch<SetStateAction<string>>;
}
