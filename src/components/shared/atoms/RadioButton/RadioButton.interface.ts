export interface IRadioMolecule {
  disabled?: boolean;
  name?: string;
  value: string;
  checked: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  forwardRef?: React.RefObject<HTMLInputElement> | null;
}
export interface IRadioButtonProps {
  disabled?: boolean;
  name?: string;
  value: string;
  focus?: boolean;
}
