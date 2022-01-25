/* eslint-disable import/no-cycle */
/* eslint-disable no-nested-ternary */
import { FC } from 'react';

import { ButtonMolecule } from '../../../atoms/Button/Button';
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

export interface SubscriptionSectionProps {
  userName?: string;
  plan?: string;
  trial?: boolean;
  trialEnd?: 'string';
  active?: boolean;
}

export const userData = {
  userName: 'Felipe',
  plan: 'Business',
  trial: false,
  trialEnd: '',
};

export const SubscriptionSection: FC = () => {
  return (
    <StyledSubscriptionSection>
      <StyledSubscriptionSectionHeader>
        {userData.trial ? (
          <StyledSubscriptionSectionHeaderInfo>
            <>
              <div>
                <h2>Período de evaluación del producto</h2>
              </div>
              <div>
                <p> 20 </p>
                <h1>días restantes</h1>
              </div>
            </>
          </StyledSubscriptionSectionHeaderInfo>
        ) : (
          <StyledSelectedPlanHeader>
            <h2>
              <span>{userData.plan.toLocaleUpperCase()}</span> ES EL PLAN QUE
              ELEGISTE
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
                  <span> {plan.name}</span>
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
                      {id === 0 && plan.name === 'Start' && '3 '}
                      {id === 0 && plan.name === 'Business' && '5 '}
                      {id === 0 && plan.name === 'Corporate' && '10 '}
                      {item}
                    </span>
                  </div>
                ))}
              {plan.name !== 'Enterprise' && plan.name !== 'Start' && (
                <div key="7">
                  <SVGIcon iconFile="/icons/success.svg" />
                  <span
                    style={{
                      fontSize: '14px',
                    }}>
                    {' '}
                    WhatsApp Business API (costo de sesión a cargo del cliente)
                  </span>
                </div>
              )}
              {plan.name === userData.plan ? null : (
                <ButtonMolecule
                  type="button"
                  onClick={() => {
                    console.log(plan.name);
                  }}
                  text={`Contratar${'  '} ${plan.name}`}
                />
              )}
            </StyledSubscriptionSectionCard>
          ))}
        </div>
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
              <ButtonMolecule
                type="button"
                onClick={() => {
                  console.log('Enterprise');
                }}
                text="Contactar a un asesor para personalizar el plan"
              />
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
      </StyledSubscriptionSectionBody>
    </StyledSubscriptionSection>
  );
};
