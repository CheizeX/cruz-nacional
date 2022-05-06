export enum IDivice {
  CREATING = 'CREATING',
  CREATED = 'CREATED',
  NEUTRO = 'NEUTRO',
}

export type IPropsShow = {
  show: boolean;
  status?: IDivice.CREATING;
};

export type INotificationProps = {
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDivice: React.Dispatch<React.SetStateAction<boolean>>;
  setSeletedComponent: React.Dispatch<React.SetStateAction<string>>;
  handleClickQR: () => Promise<void>;
  setSelectedByComponentUnOfficialWhatsapp: React.Dispatch<
    React.SetStateAction<number>
  >;
  diviceStatus: string;
};

export interface IContainerNotification {
  diviceStatus: boolean;
  isMinimized: boolean;
}
