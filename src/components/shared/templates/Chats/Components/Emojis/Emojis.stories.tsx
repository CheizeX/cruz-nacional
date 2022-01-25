import { storiesOf } from '@storybook/react';
import { StyledEmojisContainer } from './Emojis.styled';

storiesOf('Ailalia/Templates/Chats/Components', module).add('Emojis', () => {
  return (
    <StyledEmojisContainer
      setEmojisDisplayed={() => null}
      emojisDisplayed={false}
    />
  );
});
