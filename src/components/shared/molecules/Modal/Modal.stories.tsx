/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { ModalMolecule, ModalBackgroundProps } from './Modal';

export default {
  title: 'Ailalia/Molecules/Modal',
  component: ModalMolecule,
} as Meta;

const Fondo = styled.div`
  align-items: flex-start;
  background-color: #dddcda;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  .boton,
  .abrir {
    cursor: pointer;
    background-color: #24b130;
    border: 7px solid #4c3b5c;
    border-radius: 9999px;
    color: #e2cd11;
    font-weight: 800;
    height: 100px;
    position: absolute;
    text-align: center;
    width: 100px;
  }
`;

const Cajita = styled.div`
  transition: ease all 1s;
  background-color: #32cd80;
  height: 200px;
  width: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  padding: 50px;
  margin: 0 auto;
  z-index: 9999;
  border-radius: 2px;
  box-shadow: 0px 0px 50px 10px rgb(94, 253, 219);

  .boton,
  .cerrar {
    width: 100px;
    height: 100px;
    background-color: #181517;
    box-shadow: 0px 0px 5px 10px rgb(253, 105, 94);
  }
`;

const Template: Story<ModalBackgroundProps> = () => {
  const [modal, setModal] = useState(false);

  return (
    <Fondo>
      <button
        onClick={() => setModal(true)}
        className="boton abrir"
        type="button">
        OPEN
      </button>
      <ModalMolecule isModal={modal} setModal={setModal}>
        <Cajita>
          <button
            onClick={() => setModal(false)}
            className="boton cerrar"
            type="button">
            CLOSE
          </button>
        </Cajita>
      </ModalMolecule>
    </Fondo>
  );
};

export const Default = Template.bind({});
