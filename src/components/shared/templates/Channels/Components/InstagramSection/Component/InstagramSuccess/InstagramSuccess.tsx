import { FC } from 'react';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../../atoms/Text/Text';
import { WrapperInstagramSuccess } from './InstagramSuccess.istyled';

export const InstagramSuccess: FC = () => {
  return (
    <WrapperInstagramSuccess>
      <div>
        <SVGIcon iconFile="/icons/success.svg" />
      </div>
      <div>
        <Text>Se ha añadido tu canal de Instagram satisfactoriamente.</Text>
        <Text>
          Ya puedes disfrutar de todos los beneficios que ofrece Instagram.
        </Text>
      </div>
    </WrapperInstagramSuccess>
  );
};
