export interface IAddedUserSectionProps {
  onSubmit?: (
    name: string,
    email: string,
    role: string,
  ) => void | Promise<void>;
}

export interface IPropsTags {
  name: string;
  color: string;
  status: boolean;
}
