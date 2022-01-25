import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export interface SVGIconProps {
  iconFile: string;
  color?: string;
}

const Container = styled.div`
  position: relative;
  height: 100%;
  width: max-content;
`;

const Canvas = styled.canvas`
  display: block;
  height: 100%;
  width: auto;
`;

const StyledReactSVG = styled(ReactSVG)<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & > svg {
    & > path {
      ${({ color }) => color && `fill: ${color}`};
    }
  }
`;

export const SVGIcon: FC<SVGIconProps> = ({ iconFile, color }) => {
  return (
    <Container>
      <Canvas width="1" height="1" />
      <StyledReactSVG color={color} src={iconFile} />
    </Container>
  );
};
