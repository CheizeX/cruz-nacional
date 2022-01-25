import { FC } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { StyledCardOnCoversation } from './ChatCardOnConversation.styled';
import { IPropsCardOnConversation } from './ChatCardOnConversation.interface';

export const ChatsCardOnConversation: FC<IPropsCardOnConversation> = ({
  firstName,
  firstNumber,
  secondName,
  secondNumber,
  firstIcon,
  secondIcon,
}) => {
  return (
    <StyledCardOnCoversation>
      <div>
        <div>
          <Text>{firstNumber}</Text>
          <SVGIcon iconFile={firstIcon ?? '/icons/user_question.svg'} />
        </div>
        <Text>{firstName}</Text>
      </div>
      <div>
        <div>
          <Text>{secondNumber}</Text>
          <SVGIcon iconFile={secondIcon ?? '/icons/user_question.svg'} />
        </div>
        <Text>{secondName}</Text>
      </div>
    </StyledCardOnCoversation>
  );
};
