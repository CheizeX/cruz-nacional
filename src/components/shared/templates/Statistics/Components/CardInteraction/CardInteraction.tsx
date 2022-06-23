import { FC } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { IPropsCard } from './CardInteraction.interface';
import { WrapperCardInteraction } from './CardsInteraction.styled';

export const CardInteraction: FC<IPropsCard> = ({
  quantity,
  name,
  cardType,
  icon,
}) => {
  return (
    <>
      <WrapperCardInteraction cardType={cardType}>
        <div>
          <Text>{name ?? 'Promedio'}</Text>
          <SVGIcon iconFile={icon ?? '/icons/user_question.svg'} />
        </div>
        <Text>{quantity ?? 5}</Text>
      </WrapperCardInteraction>
    </>
  );
};
