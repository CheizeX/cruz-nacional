import { FC } from 'react';
import { StyledGralConfig } from './GralConfig.styled';
import { TagsConfiguration } from './TagsConfiguration/TagsConfiguration';

export const GralConfig: FC = () => {
  return (
    <StyledGralConfig>
      <TagsConfiguration />
    </StyledGralConfig>
  );
};
