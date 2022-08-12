import { FC, useState } from 'react';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { CreateMessage } from '../Components/CreateMessage/CreateMessage';
import { LibraryBox } from '../Components/LibraryBox/LibraryBox';
import { LibraryHeader } from '../Components/LibraryHeader/LibraryHeader';
import { StyledWrapperLibrary } from './LibrarySection.styled';

export const LibrarySection: FC = () => {
  const [isLibraryModal, setIsLibraryModal] = useState<boolean>(false);

  return (
    <StyledWrapperLibrary>
      <LibraryHeader setIsLibraryModal={setIsLibraryModal} />
      <LibraryBox />
      <ModalMolecule isModal={isLibraryModal}>
        <CreateMessage setIsLibraryModal={setIsLibraryModal} />
      </ModalMolecule>
    </StyledWrapperLibrary>
  );
};
