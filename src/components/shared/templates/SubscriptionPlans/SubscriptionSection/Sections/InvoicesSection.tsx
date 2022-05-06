/* eslint-disable no-nested-ternary */
import { FC, useState } from 'react';
import { StyledSelectedPlanHeader } from './InvoicesSection.styled';
import { ButtonMolecule } from '../../../../atoms/Button/Button';
import { ModalMolecule } from '../../../../molecules/Modal/Modal';
import { InvoicesList } from './InvoicesList/InvoicesList';
import { MethodsList } from './MethodsList/MethodsList';

export const PaymentsInfoSection: FC = () => {
  const [modal, setModal] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleButton = (arg: string) => {
    setModal(true);
    setActiveSection(arg);
  };

  return (
    <StyledSelectedPlanHeader>
      <ButtonMolecule
        text="COMPROBANTES"
        onClick={() => handleButton('invoices')}
      />
      <ButtonMolecule
        text="METODOS DE PAGO"
        onClick={() => handleButton('methods')}
      />
      {activeSection !== '' && (
        <ModalMolecule isModal={modal} setModal={setModal}>
          {activeSection === 'invoices' && (
            <InvoicesList setActiveSection={setActiveSection} />
          )}
          {activeSection === 'methods' && (
            <MethodsList setActiveSection={setActiveSection} />
          )}
        </ModalMolecule>
      )}
    </StyledSelectedPlanHeader>
  );
};
