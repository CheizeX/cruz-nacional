import { IPropsInstagram } from '../../../../../../../../models/channels/channel';

export interface ILinkInstagramAccount {
  dataInfoIntagram: IPropsInstagram;
  isActiveCheckbox: boolean;
  setIsActiveCheckbox: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ISelectorInstagramAccount {
  isActiveCheckbox: boolean;
}
