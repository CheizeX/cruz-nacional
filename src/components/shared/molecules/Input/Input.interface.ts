export interface IInputMoleculeProps {
  name?: string;
  placeHolder?: string;
  type?: string;
  disabled?: boolean;
  valid?: boolean;
  forwardRef?: React.RefObject<HTMLInputElement> | null;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  foco?: boolean;
  value?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  maxLength?: number;
}
export interface IInputProps {
  disabled?: boolean;
  foco?: boolean;
  name?: string;
  value?: string;
  maxLength?: number;
}
