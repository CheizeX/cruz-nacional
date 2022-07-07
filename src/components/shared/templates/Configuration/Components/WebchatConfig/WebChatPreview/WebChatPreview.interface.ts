export interface IWebChatPreview {
  title?: string;
  description?: string;
  primaryColor?: string;
  avatar?: string;
  customizeMyAvatar?: boolean;
  secondaryColor?: string;
  isCustomColor?: boolean;
  setIsCustomColor?: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimated?: boolean;
  initialMessage?: string;
  // webchatPropsObject?: any;
}

export interface IWebChatPreviewProps {
  primaryColor?: string;
  setIsCustomColor?: React.Dispatch<React.SetStateAction<boolean>>;
  secondaryColor?: string;
  isCustomColor?: boolean;
  isAnimated?: boolean;
  initialMessage?: string;
  // webchatPropsObject?: any;
}
