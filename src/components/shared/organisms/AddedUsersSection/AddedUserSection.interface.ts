export interface IAddedUserSectionProps {
  onSubmit?: (
    name: string,
    email: string,
    role: string,
  ) => void | Promise<void>;
}

export interface IPropsTags {
  _id: string;
  name: string;
  color: string;
  status: boolean;
}
