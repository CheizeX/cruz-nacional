/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import styled from 'styled-components';

export interface ModalBackgroundProps {
  isModal?: boolean;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledModalMolecule = styled.article<ModalBackgroundProps>`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: center;
  display: flex;
  left: 0;
  margin: 0;
  height: 100vh;
  padding: 0;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 2;
  visibility: ${({ isModal }) => (isModal === true ? 'visible' : 'hidden')};
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalMolecule: FC<ModalBackgroundProps> = ({
  children,
  isModal,
  setModal,
}) => {
  return (
    <StyledModalMolecule isModal={isModal} setModal={setModal}>
      {children}
    </StyledModalMolecule>
  );
};
