import { storiesOf } from '@storybook/react';
import { DeleteUser } from './DeleteUser';

storiesOf('Ailalia/Organisms/Users/DeleteUser', module).add('Default', () => {
  return <DeleteUser setDeleteModal={() => null} />;
});
