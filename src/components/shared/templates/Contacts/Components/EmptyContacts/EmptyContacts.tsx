import { FC } from 'react';
import { RiContactsBookLine } from 'react-icons/ri';
import { Text } from '../../../../atoms/Text/Text';
import { StyledWrapperEmptyContacts } from './EmptyContacts.styled';

export const EmptyContacts: FC = () => {
  return (
    <StyledWrapperEmptyContacts>
      <div>
        <RiContactsBookLine />
      </div>
      <div>
        <Text>Aún no has creado ningún contacto</Text>
      </div>
    </StyledWrapperEmptyContacts>
  );
};
