import { baseRestApi } from '../base';

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return baseRestApi.postMultipart<string>('/uploads', formData);
};

export const uploadFilePicture = async (formData: FormData) => {
  try {
    return await baseRestApi.patch<string>('/users/photo', formData);
  } catch (err) {
    throw new Error('error uploading file');
  }
};
