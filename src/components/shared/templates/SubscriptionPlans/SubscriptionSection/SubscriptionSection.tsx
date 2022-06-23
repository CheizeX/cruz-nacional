/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-nested-ternary */
import { FC, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import {
  planes,
  SubscriptionSectionItems,
  SubscriptionStartPlanItems,
} from './SubscriptionSection.shared';
import {
  StyledSubscriptionSectionCardHeader,
  StyledSubscriptionSectionCard,
  StyledSubscriptionSectionHeaderInfo,
  StyledSubscriptionSection,
  StyledSubscriptionSectionHeader,
  StyledSubscriptionSectionBody,
  StyledInformationButtonContainer,
} from './SubscriptionSection.styled';
import { StripeForm } from './CheckoutStripeForm/CheckoutStripeForm';
import { ButtonMolecule } from '../../../atoms/Button/Button';
import { PlanName } from './SubscriptionSection.interface';
import { ModalMolecule } from '../../../molecules/Modal/Modal';
import { useAppSelector } from '../../../../../redux/hook/hooks';
import { Text } from '../../../atoms/Text/Text';
import { PaymentsInfoSection } from './Sections/InvoicesSection';
import { ChangePlan } from './ChangePlan/ChangePlan';
import { AddAgents } from './AddAgents/AddAgents';
import { AddAgentsConfirm } from './AddAgents/AddAgentsConfirmation/AddAgentsConfirm';
import { SubscriptionInformation } from './Information/Information';

const stripe = loadStripe(
  String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY),
);

export const SubscriptionSection: FC = () => {
  const { plan, trialEndDate, generalPlan, paymentMethods } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );

  const [showCard, setShowCard] = useState(false);
  const [changePlan, setChangePlan] = useState(false);
  const [showAddAgents, setShowAddAgents] = useState(false);
  const [planNameSelected, setPlanNameSelected] = useState('');
  const [numberOfAgentsToAdd, setNumberOfAgentsToAdd] = useState('0');
  const [showInfo, setShowInfo] = useState(false);

  const handlePlanClick = (planName: string) => {
    setPlanNameSelected(planName);

    if (paymentMethods?.length === 0) {
      if (planName === PlanName.START && plan === PlanName.START_TRIAL) {
        setShowCard(true);
      }
      if (planName === PlanName.AGENT) {
        setShowCard(true);
      }
      if (plan === PlanName.FREE && planName === PlanName.START) {
        setChangePlan(true);
      }
    } else {
      if (
        (plan === PlanName.START_TRIAL || plan === PlanName.FREE) &&
        planName === PlanName.START
      ) {
        setChangePlan(true);
      }
      if (planName === PlanName.AGENT) {
        setNumberOfAgentsToAdd(numberOfAgentsToAdd);
        setShowAddAgents(true);
      }
    }
  };

  // Fecha de fin de expiración dinámica
  const date = new Date(trialEndDate || '');
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
      {plan === PlanName.START_TRIAL && (
        <StyledSubscriptionSectionHeaderInfo>
          {days >= 0 ? (
            <div>
              <Text>El período de prueba del plan START finalizará</Text>
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
      )}
      <StyledSubscriptionSectionHeader>
        <Elements stripe={stripe}>
          <PaymentsInfoSection />
        </Elements>
        {paymentMethods?.length !== 0 && (
          <StyledInformationButtonContainer>
            <ButtonMolecule
              text="INFORMACION"
              onClick={() => setShowInfo(true)}
            />
          </StyledInformationButtonContainer>
        )}
      </StyledSubscriptionSectionHeader>
      <StyledSubscriptionSectionBody>
        <div>
          {planes.map((planItem) => (
            <StyledSubscriptionSectionCard
              key={planItem.name}
              active={plan?.replace('_TRIAL', '') === planItem.name}>
              <StyledSubscriptionSectionCardHeader
                active={plan?.replace('_TRIAL', '') === planItem.name}>
                <h1>
                  <span>{planItem.name}</span>
                </h1>
                {planItem.name !== plan?.replace('_TRIAL', '') &&
                  planItem.price && <h3>${planItem.price},00</h3>}
              </StyledSubscriptionSectionCardHeader>
              {SubscriptionSectionItems?.map(({ id, item }) => (
                <div key={item}>
                  <SVGIcon iconFile="/icons/success.svg" />
                  <span>
                    {id === 0 && planItem.name === PlanName.START && '3 '}
                    {item}
                  </span>
                </div>
              ))}
              {planItem.name === PlanName.START &&
                SubscriptionStartPlanItems.map(({ item }) => (
                  <div key={item}>
                    <SVGIcon iconFile="/icons/success.svg" />
                    <span
                      style={{
                        fontSize: '14px',
                      }}>
                      {' '}
                      {item}
                    </span>
                  </div>
                ))}

              {planItem.name === plan ? null : plan?.includes(
                  `${planItem}_TRIAL`,
                ) ? (
                <ButtonMolecule
                  text={`Contratar${'  '} ${planItem.name}`}
                  onClick={() => handlePlanClick(planItem.name)}
                />
              ) : plan === PlanName.START_TRIAL ? (
                <ButtonMolecule
                  text={`Contratar${'  '} ${planItem.name}`}
                  onClick={() => handlePlanClick(planItem.name)}
                />
              ) : (
                <ButtonMolecule
                  text="Probar gratis por 14 días"
                  onClick={() => handlePlanClick(planItem.name)}
                />
              )}
            </StyledSubscriptionSectionCard>
          ))}
          <AddAgents
            handlePlanClick={handlePlanClick}
            setShowCard={setShowCard}
            setNumberOfAgentsToAdd={setNumberOfAgentsToAdd}
            numberOfAgentsToAdd={numberOfAgentsToAdd}
            setShowAddAgents={setShowAddAgents}
            generalPlan={generalPlan}
            setPlanNameSelected={setPlanNameSelected}
          />
        </div>
      </StyledSubscriptionSectionBody>
      {showCard && (
        <Elements stripe={stripe}>
          <ModalMolecule isModal={showCard} setModal={setShowCard}>
            <StripeForm
              setShowCard={setShowCard}
              setPlanNameSelected={setPlanNameSelected}
              planNameSelected={planNameSelected}
              numberOfAgentsToAdd={numberOfAgentsToAdd}
              setNumberOfAgentsToAdd={setNumberOfAgentsToAdd}
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
      {showAddAgents && (
        <ModalMolecule isModal={showAddAgents} setModal={setShowAddAgents}>
          <AddAgentsConfirm
            setShowAddAgents={setShowAddAgents}
            numberOfAgentsToAdd={numberOfAgentsToAdd}
            setNumberOfAgentsToAdd={setNumberOfAgentsToAdd}
            generalPlan={generalPlan}
            setPlanNameSelected={setPlanNameSelected}
          />
        </ModalMolecule>
      )}
      {showInfo && (
        <ModalMolecule isModal={showInfo} setModal={setShowInfo}>
          <SubscriptionInformation setShowInfo={setShowInfo} />
        </ModalMolecule>
      )}
    </StyledSubscriptionSection>
  );
};
