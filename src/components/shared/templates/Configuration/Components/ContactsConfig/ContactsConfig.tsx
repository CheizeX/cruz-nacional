import { FC } from 'react';
import { StyledContactsConfigSection } from './ContactsConfig.styled';
import { ContactsCreator } from './ContactsCreator/ContactsCreator';

export const ContactsConfig: FC = () => {
  return (
    <StyledContactsConfigSection>
      <ContactsCreator />
    </StyledContactsConfigSection>
  );
};
