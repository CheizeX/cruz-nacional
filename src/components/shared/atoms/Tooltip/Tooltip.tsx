import { FC, useRef, useState } from 'react';
import { ITooltipProps } from './tooltip.interface';
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox,
} from './tooltip.styled';

export const Tooltip: FC<ITooltipProps> = ({
  position,
  text,
  children,
  background,
  styleMe,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null) as any;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        styleMe={styleMe}
        showOnFocus={isFocused}>
        {children}
      </TooltipTarget>
      {(isHovered || isFocused) && (
        <CenterContainer position={position} background={background}>
          <TooltipBox background={background} position={position}>
            {text}
          </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
};
