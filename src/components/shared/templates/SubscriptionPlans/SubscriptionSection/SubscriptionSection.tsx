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
  StyledSubscriptionSectionWebchatBody,
  StyledSubscriptionSectionWebchatHeader,
  StyledSubscriptionSectionWebchat,
  StyledSubscriptionSectionEnterpriseCardBody,
  StyledSubscriptionSectionEnterpriseCardHeader,
  StyledSubscriptionSectionCardHeader,
  StyledSubscriptionSectionCard,
  StyledSubscriptionSectionHeaderInfo,
  StyledSubscriptionSection,
  StyledSubscriptionSectionHeader,
  StyledSubscriptionSectionBody,
  StyledSubscriptionSectionEnterpriseCard,
  StyledSelectedPlanHeader,
} from './SubscriptionSection.styled';
import { StripeForm } from './CheckoutStripeForm/CheckoutStripeForm';
import { ButtonMolecule } from '../../../atoms/Button/Button';
import { SubscriptionSectionProps } from './SubscriptionSection.interface';
import { ModalMolecule } from '../../../molecules/Modal/Modal';

export const userData = {
  userName: 'Felipe',
  plan: 'Start',
  trial: false,
  trialEnd: '',
};

const stripe = loadStripe(
  String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!),
);

export const SubscriptionSection: FC<SubscriptionSectionProps> = () => {
  const [showCard, setShowCard] = useState(false);
  const [planNameSelected, setPlanNameSelected] = useState('');

  const handlePlanClick = (planName: string) => {
    setPlanNameSelected(planName);
    setShowCard(true);
  };

  return (
    <StyledSubscriptionSection>
      <StyledSubscriptionSectionHeader>
        {userData.trial ? (
          <StyledSubscriptionSectionHeaderInfo>
            <div>
              <h2>Período de evaluación del producto</h2>
            </div>
            <div>
              <p> 20 </p>
              <h1>días restantes</h1>
            </div>
          </StyledSubscriptionSectionHeaderInfo>
        ) : (
          <StyledSelectedPlanHeader>
            <h2>
              <span>{userData.plan.toLocaleUpperCase()}</span>
            </h2>
          </StyledSelectedPlanHeader>
        )}
      </StyledSubscriptionSectionHeader>
      <StyledSubscriptionSectionBody>
        <div>
          {planes.map((plan, index) => (
            <StyledSubscriptionSectionCard
              key={index.toString()}
              active={userData.plan === plan.name}>
              <StyledSubscriptionSectionCardHeader
                active={userData.plan === plan.name}>
                <h1>
                  <span>{plan.name}</span>
                </h1>
                {plan.name !== userData.plan && plan.price && (
                  <h3>${plan.price},00</h3>
                )}
              </StyledSubscriptionSectionCardHeader>
              {plan.name !== 'Enterprise' &&
                SubscriptionSectionItems?.map(({ id, item }) => (
                  <div key={id}>
                    <SVGIcon iconFile="/icons/success.svg" />
                    <span>
                      {id === 0 && plan.name === 'Start' && '2 '}
                      {id === 0 && plan.name === 'Growth' && '2 '}
                      {id === 0 && plan.name === 'Business' && '5 '}
                      {id === 0 && plan.name === 'Corporate' && '10 '}
                      {item}
                    </span>
                  </div>
                ))}
              {plan.name !== 'Enterprise' && plan.name !== 'Start' && (
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
                </>
              )}
              {plan.name === userData.plan ? null : (
                <ButtonMolecule
                  text={`Contratar${'  '} ${plan.name}`}
                  onClick={() => handlePlanClick(plan.name)}
                />
              )}
            </StyledSubscriptionSectionCard>
          ))}

          <div>
            <StyledSubscriptionSectionEnterpriseCard
              active={userData.plan === 'Enterprise'}>
              <StyledSubscriptionSectionEnterpriseCardHeader
                active={userData.plan === 'Enterprise'}>
                <h1> Enterprise </h1>
              </StyledSubscriptionSectionEnterpriseCardHeader>
              <StyledSubscriptionSectionEnterpriseCardBody
                active={userData.plan === 'Enterprise'}>
                <div>
                  {SubscriptionSectionPersonalizedItems.map(({ id, item }) => (
                    <div key={id}>
                      <SVGIcon iconFile="/icons/success.svg" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </StyledSubscriptionSectionEnterpriseCardBody>
              {userData.plan === 'Enterprise' ? null : (
                <a
                  href="https://app.elipse.ai/conversemos-elipse-chat-personalizado"
                  target="_blank"
                  rel="noreferrer">
                  Contactar a un asesor para personalizar el plan
                </a>
              )}
            </StyledSubscriptionSectionEnterpriseCard>
            {userData.plan === 'Webchat' ? (
              <StyledSubscriptionSectionWebchat
                active={userData.plan === 'Webchat'}>
                <StyledSubscriptionSectionWebchatHeader>
                  <h1>Webchat</h1>
                  <h3>Gratuito!</h3>
                </StyledSubscriptionSectionWebchatHeader>
                <StyledSubscriptionSectionWebchatBody
                  active={userData.plan === 'Webchat'}>
                  <div>
                    <SVGIcon iconFile="/icons/success.svg" />
                    <span>Webchat</span>
                  </div>
                  <div>
                    <SVGIcon iconFile="/icons/success.svg" />
                    <span>2 Agentes</span>
                  </div>
                  <div>
                    <SVGIcon iconFile="/icons/success.svg" />
                    <span>1 Supervisor</span>
                  </div>
                </StyledSubscriptionSectionWebchatBody>
              </StyledSubscriptionSectionWebchat>
            ) : null}
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
    </StyledSubscriptionSection>
  );
};
