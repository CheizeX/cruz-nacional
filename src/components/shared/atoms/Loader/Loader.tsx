import { FC } from 'react';
import { SpinnerDotted } from 'spinners-react';
import styled from 'styled-components';

const StyledLoaderContainer = styled.div`
  max-height: 100vh;
  height: 100vh;
  max-width: 100%;
  padding: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.Colors.purples[1]};
`;

export const Loader: FC = () => {
  return (
    <StyledLoaderContainer>
      <SpinnerDotted
        color="#FFFFFF"
        size="100%"
        style={{ maxHeight: '5rem' }}
      />
    </StyledLoaderContainer>
  );
};
