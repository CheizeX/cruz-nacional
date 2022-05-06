export interface IPropsChatApi {
  seletedByComponentChatApi: number;
  setByComponentChatApi: React.Dispatch<React.SetStateAction<number>>;
  setIsSectionWebChat: React.Dispatch<React.SetStateAction<boolean>>;
  haveUnOfficialWhatsapp?: boolean;
  whatsappStatus: ITypeUnOfficialWhatsapp;
  getChannelList: () => Promise<void>;
}

export enum ITypeUnOfficialWhatsapp {
  NOT_EXIST = 'NOT_EXIST',
  IN_REVIEW = 'IN_REVIEW',
  APPROVED = 'APPROVED',
  RESET = 'RESET',
}

export interface IContainerChatApi {
  seletedByComponentChatApi: number;
}
