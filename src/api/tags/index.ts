import { Tag } from '../../models/tags/tag';
import { baseRestApi } from '../base';

export const createUserTag = (tagData: Omit<Tag, '_id'>) => {
  return baseRestApi.post<Tag>('/tags', tagData);
};

export const readTags = async () => {
  return baseRestApi.get<Tag[]>('/tags');
};

export const updateTag = (
  tagId: string,
  tagData: Partial<Omit<Tag, '_id'>>,
) => {
  return baseRestApi.patch<Tag>(`/tags/${tagId}`, tagData);
};

export const deleteTag = (tagId: string) => {
  return baseRestApi.delete<boolean>(`/tags/${tagId}`);
};
