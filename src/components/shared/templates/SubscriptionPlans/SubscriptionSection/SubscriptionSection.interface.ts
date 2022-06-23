import { Dispatch, SetStateAction } from 'react';

export interface SubscriptionSectionProps {
  userName?: string;
  plan?: string;
  trial?: boolean;
  trialEnd?: 'string';
  active?: boolean;
}

export enum PlanName {
  FREE = 'FREE',
  START = 'START',
  GROWTH = 'GROWTH',
  BUSINESS = 'BUSINESS',
  CORPORATE = 'CORPORATE',
  ENTERPRISE = 'ENTERPRISE',
  START_TRIAL = 'START_TRIAL',
  GROWTH_TRIAL = 'GROWTH_TRIAL',
  BUSINESS_TRIAL = 'BUSINESS_TRIAL',
  CORPORATE_TRIAL = 'CORPORATE_TRIAL',
  ENTERPRISE_TRIAL = 'ENTERPRISE_TRIAL',
  AGENT = 'AGENT',
}
export enum PlanStatus {
  ACTIVE = 'ACTIVE',
  WARNING = 'WARNING',
  INACTIVE = 'INACTIVE',
  EXTENDED = 'EXTENDED_PERIOD',
}
export interface PaymentMethodsProps {
  stripeId: string;
  expMonth: number;
  expYear: number;
  last4: string;
  brand: string;
  funding: string;
}
export interface SubscriptionDataProps {
  initDate?: string;
  endDate?: string;
  trialEndDate?: string;
  plan?: PlanName | string;
  planStatus?: PlanStatus | string;
  _id?: string;
  paymentMethods?: PaymentMethodsProps[];
  mainPaymentMethod?: string;
  generalPlan: GeneralPlanDataProps;
  trial?: boolean;
  persistentAgentsCount: number;
}

export interface GeneralPlanDataProps {
  agentes: number;
  agentes_a_eliminar: number;
  agentes_extra: number;
  agentes_registrados: number;
  supervisores: number;
  supervisores_registrados: number;
  administradores: number;
  webchat: boolean;
  bot: boolean;
  bot_personalizado: boolean;
  messenger: boolean;
  instagram: boolean;
  unofficialWhatsApp: boolean;
  officialWhatsApp: boolean;
  conversaciones_proactivas: boolean;
  soporte_via_email: boolean;
  soporte_personalizado: boolean;
  invitaciones_enviadas: number;
  invitaciones_disponibles: number;
  stripe_end_date: string;
  stripe_init_date: string;
  downgrade: boolean;
  persistentAgentsCount: number;
}
export interface InvoicesDataProps {
  id: string;
  date?: number;
  planName?: PlanName | string;
  price?: number;
  link?: string;
}
export interface SubscriptionSectionItemsProps {
  setShowCard: Dispatch<SetStateAction<boolean>>;
  planNameSelected?: string;
  setPlanNameSelected: Dispatch<SetStateAction<string>>;
  onClose?: () => void;
  title?: string;
  buttonTitle?: string;
  stripeId?: string;
  numberOfAgentsToAdd?: string;
  setNumberOfAgentsToAdd: Dispatch<SetStateAction<string>>;
  paymentMethods?: any[];
}
