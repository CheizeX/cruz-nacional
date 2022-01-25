import { storiesOf } from '@storybook/react';
import { UserCreate } from './UserCreate';
import { NotificationUsers } from '../../../atoms/NotificationUsers/NotificationUsers';

storiesOf('Ailalia/Organisms/Users/UserCreate', module).add('Default', () => {
  return (
    <UserCreate
      setContainerTags={() => null}
      containerTags={[]}
      setUsers={() => null}
      setUserActive={() => null}
      setOpenNewUser={() => null}
      setUserModal={() => null}
      editButton="Crear"
      titleHeader="Crear Usuario"
      NotificationUsers={() => (
        <NotificationUsers
          text="Te quedan 4 usuarios por crear."
          message="Contáctate con nuestro equipo comercial para ampliar el límite de usuarios"
        />
      )}
    />
  );
});
