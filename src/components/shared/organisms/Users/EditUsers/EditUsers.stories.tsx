import { storiesOf } from '@storybook/react';
import { EditUsers } from './EditUsers';

storiesOf('Ailalia/Organisms/Users/EditUsers', module).add('Default', () => {
  return (
    <EditUsers
      setCheckedModifyUser={() => null}
      firstName="Editar"
      setUserModal={() => null}
      setOpenNewSection={() => null}
      setUserActive={() => null}
      setUsers={() => null}
    />
  );
});
