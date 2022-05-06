/* eslint-disable no-nested-ternary */
import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';
import { StyledInvoicesSection } from '../InvoicesSection.styled';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { useAppSelector } from '../../../../../../../redux/hook/hooks';

interface Props {
  setActiveSection: Dispatch<SetStateAction<string>>;
}

export const InvoicesList: FC<Props> = ({ setActiveSection }) => {
  const { invoicesData } = useAppSelector((state) => state.invoices);

  return (
    <StyledInvoicesSection>
      <div>
        <Text>Mis Comprobantes</Text>
        <button type="button" onClick={() => setActiveSection('')}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </div>
      <div>
        <div>
          <Text>Fecha</Text>
          <Text>Plan</Text>
          <Text>Importe</Text>
          <Text>Descargar</Text>
        </div>
      </div>
      <section>
        {invoicesData.map(({ date, planName, price, link, id }) => (
          <div key={id}>
            <div>
              {new Intl.DateTimeFormat('es-CL', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              }).format(new Date(date || ''))}
            </div>
            <div>{planName?.split(' ').pop()}</div>
            <div>
              {new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'USD',
              }).format(
                Number(String(price).substring(0, String(price).length - 2)),
              )}
            </div>
            <Link href={link || ''}>
              <a>
                <SVGIcon iconFile="/icons/download_arc.svg" />
              </a>
            </Link>
          </div>
        ))}
      </section>
    </StyledInvoicesSection>
  );
};
