import { IConfirmAuthFacebook } from '../../../../../../../../models/channels/channel-auth-facebook';

export interface IPropsSelector {
  children?: React.ReactNode;
  isFocused?: boolean;
}
export interface IPropsAuthFacebook {
  setDatosAuth: React.Dispatch<
    React.SetStateAction<IConfirmAuthFacebook | undefined>
  >;
  setSelectedComponent: React.Dispatch<React.SetStateAction<number>>;
  isActiveCheckbox: number;
  setIsActiveCheckbox: React.Dispatch<React.SetStateAction<number>>;
}
