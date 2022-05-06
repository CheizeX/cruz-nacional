/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import {
  planes,
  SubscriptionSectionItems,
  SubscriptionSectionPersonalizedItems,
} from './SubscriptionSection.shared';
import {
  StyledSubscriptionSectionEnterpriseCardBody,
  StyledSubscriptionSectionEnterpriseCardHeader,
  StyledSubscriptionSectionCardHeader,
  StyledSubscriptionSectionCard,
  StyledSubscriptionSectionHeaderInfo,
  StyledSubscriptionSection,
  StyledSubscriptionSectionHeader,
  StyledSubscriptionSectionBody,
  StyledSubscriptionSectionEnterpriseCard,
} from './SubscriptionSection.styled';
import { StripeForm } from './CheckoutStripeForm/CheckoutStripeForm';
import { ButtonMolecule } from '../../../atoms/Button/Button';
import {
  PlanName,
  SubscriptionDataProps,
  SubscriptionSectionProps,
} from './SubscriptionSection.interface';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { useAppSelector } from '../../../../../redux/hook/hooks';
import { Text } from '../../../atoms/Text/Text';
import { PaymentsInfoSection } from './Sections/InvoicesSection';
import { ChangePlan } from './ChangePlan/ChangePlan';

const stripe = loadStripe(
  String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!),
);

export const SubscriptionSection: FC<
  SubscriptionSectionProps & SubscriptionDataProps
> = () => {
  const { plan, endDate } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );

  const [showCard, setShowCard] = useState(false);
  const [changePlan, setChangePlan] = useState(false);
  const [planNameSelected, setPlanNameSelected] = useState('');

  const handlePlanClick = (planName: string) => {
    setPlanNameSelected(planName);
    if (
      plan === PlanName.ENTERPRISE_TRIAL ||
      plan === PlanName.BUSINESS_TRIAL ||
      plan === PlanName.CORPORATE_TRIAL ||
      plan === PlanName.GROWTH_TRIAL ||
      plan === PlanName.START_TRIAL
    ) {
      setShowCard(true);
    } else {
      setChangePlan(true);
    }
  };

  // Fecha de fin de expiración dinámica
  const date = new Date(endDate || '');
  const dateNow = new Date();
  const diff = date.getTime() - dateNow.getTime();
  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  const rtf = new Intl.RelativeTimeFormat('es-ES', {
    numeric: 'auto',
    style: 'long',
  });
  const daysLeft = rtf?.format(
    Math.round(diff / (1000 * 60 * 60 * 24)) || 0,
    'day',
  );

  return (
    <StyledSubscriptionSection>
      <StyledSubscriptionSectionHeader>
        {plan === PlanName.ENTERPRISE_TRIAL ||
        plan === PlanName.BUSINESS_TRIAL ||
        plan === PlanName.CORPORATE_TRIAL ||
        plan === PlanName.GROWTH_TRIAL ||
        plan === PlanName.START_TRIAL ? (
          <StyledSubscriptionSectionHeaderInfo>
            {days >= 0 ? (
              <div>
                <Text>El período de evaluación del producto finalizará</Text>
                {days > 2 ? (
                  <p>{daysLeft}</p>
                ) : (
                  <p
                    style={{
                      backgroundColor: '#fba833f7',
                    }}>
                    {daysLeft}
                  </p>
                )}
              </div>
            ) : (
              <div>
                <Text
                  style={{
                    border: '3px solid white',
                  }}>
                  Período de evaluación del producto
                </Text>
                <p
                  style={{
                    backgroundColor: '#fb333df7',
                  }}>
                  FINALIZADO
                </p>
              </div>
            )}
          </StyledSubscriptionSectionHeaderInfo>
        ) : (
          <Elements stripe={stripe}>
            <PaymentsInfoSection />
          </Elements>
        )}
      </StyledSubscriptionSectionHeader>
      <StyledSubscriptionSectionBody>
        <div>
          {planes.map((planItem, index) => (
            <StyledSubscriptionSectionCard
              key={index.toString()}
              active={plan?.replace('_TRIAL', '') === planItem.name}>
              <StyledSubscriptionSectionCardHeader
                active={plan?.replace('_TRIAL', '') === planItem.name}>
                <h1>
                  <span>{planItem.name}</span>
                </h1>
                {planItem.name !== plan?.replace('_TRIAL', '') &&
                  planItem.price && <h3>${planItem.price},00</h3>}
              </StyledSubscriptionSectionCardHeader>
              {planItem.name !== PlanName.ENTERPRISE &&
                SubscriptionSectionItems?.map(({ id, item }) => (
                  <div key={id}>
                    <SVGIcon iconFile="/icons/success.svg" />
                    <span>
                      {id === 0 && planItem.name === PlanName.START && '2 '}
                      {id === 0 && planItem.name === PlanName.GROWTH && '2 '}
                      {id === 0 && planItem.name === PlanName.BUSINESS && '5 '}
                      {id === 0 &&
                        planItem.name === PlanName.CORPORATE &&
                        '10 '}
                      {item}
                    </span>
                  </div>
                ))}
              {planItem.name !== PlanName.ENTERPRISE &&
                planItem.name !== PlanName.START && (
                  <>
                    <div key="7">
                      <SVGIcon iconFile="/icons/success.svg" />
                      <span
                        style={{
                          fontSize: '14px',
                        }}>
                        {' '}
                        WhatsApp QR
                      </span>
                    </div>
                    {planItem.name === PlanName.CORPORATE && (
                      <div key="8">
                        <SVGIcon iconFile="/icons/success.svg" />
                        <span
                          style={{
                            fontSize: '14px',
                          }}>
                          {' '}
                          WhatsApp Business API
                        </span>
                      </div>
                    )}
                  </>
                )}
              {planItem.name === plan ? null : (
                <ButtonMolecule
                  text={`Contratar${'  '} ${planItem.name}`}
                  onClick={() => handlePlanClick(planItem.name)}
                />
              )}
            </StyledSubscriptionSectionCard>
          ))}

          <div>
            <StyledSubscriptionSectionEnterpriseCard
              active={plan === PlanName.ENTERPRISE}>
              <StyledSubscriptionSectionEnterpriseCardHeader
                active={plan === PlanName.ENTERPRISE}>
                <h1> Enterprise </h1>
              </StyledSubscriptionSectionEnterpriseCardHeader>
              <StyledSubscriptionSectionEnterpriseCardBody
                active={plan === PlanName.ENTERPRISE}>
                <div>
                  {SubscriptionSectionPersonalizedItems.map(({ id, item }) => (
                    <div key={id}>
                      <SVGIcon iconFile="/icons/success.svg" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </StyledSubscriptionSectionEnterpriseCardBody>
              {plan === PlanName.ENTERPRISE ? null : (
                <a
                  href="https://app.elipse.ai/conversemos-elipse-chat-personalizado"
                  target="_blank"
                  rel="noreferrer">
                  Contactar a un asesor para personalizar el plan
                </a>
              )}
            </StyledSubscriptionSectionEnterpriseCard>
          </div>
        </div>
      </StyledSubscriptionSectionBody>
      {showCard && (
        <Elements stripe={stripe}>
          <ModalMolecule isModal={showCard} setModal={setShowCard}>
            <StripeForm
              setShowCard={setShowCard}
              setPlanNameSelected={setPlanNameSelected}
              planNameSelected={planNameSelected}
            />
          </ModalMolecule>
        </Elements>
      )}
      {changePlan && (
        <ModalMolecule isModal={changePlan} setModal={setChangePlan}>
          <ChangePlan
            planNameSelected={planNameSelected}
            setChangePlan={setChangePlan}
          />
        </ModalMolecule>
      )}
    </StyledSubscriptionSection>
  );
};
