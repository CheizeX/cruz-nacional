import { FC } from 'react';
import styled from 'styled-components';
import { Text } from '../../atoms/Text/Text';
import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';

export const StyledContainerWithOutTags = styled.div`
  width: 234px;
  height: 135px;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  border-radius: 10px;
  margin: 0 auto;
  padding: 30px 0;
  & > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    & > div {
      width: 30px;
      height: 30px;
      justify-content: center;
      align-content: center;
      margin: 0 auto;
    }
    & > span {
      color: ${({ theme }) => theme.Colors.grays[6]};
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize[12]};
      font-weight: ${({ theme }) => theme.fontWeight[600]};
      line-height: 14px;
    }
  }
`;

export interface IContainerWithOutTags {
  firstName?: string;
  text?: string;
  icon?: string;
}
export const ContainerWithOutTags: FC<IContainerWithOutTags> = ({
  text,
  firstName,
  icon,
}) => {
  return (
    <StyledContainerWithOutTags>
      <span>
        <SVGIcon
          iconFile={`/icons/${!icon ? 'icon_with_out_tags.svg' : icon}`}
        />
        <Text>
          {!text ? ' No se han asignados etiquetas' : text}
          {firstName && firstName.length > 1 ? `a ${firstName}` : ''}
        </Text>
      </span>
    </StyledContainerWithOutTags>
  );
};
