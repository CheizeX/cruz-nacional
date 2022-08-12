export interface IAddedUserSectionProps {
  onSubmit?: (
    name: string,
    email: string,
    role: string,
  ) => void | Promise<void>;
}

export enum SectionUser {
  EDITAR = 'Editar',
  CREAR_USUARIO = 'Crear Usuario',
}

export interface IPropsTags {
  _id: string;
  name: string;
  color: string;
  status: boolean;
}
