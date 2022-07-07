import { KeyboardEvent } from 'react';

export interface ITextarea {
  onKeyPress?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}
