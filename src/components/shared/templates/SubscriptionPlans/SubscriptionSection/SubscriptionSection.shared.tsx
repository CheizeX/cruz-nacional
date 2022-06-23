export interface SubscriptionSectionInterface {
  pagepath?: string;
  color?: string;
}

export const SubscriptionSectionItems = [
  {
    id: 0,
    item: 'Agentes',
  },
  {
    id: 1,
    item: '1 Supervisor',
  },
  {
    id: 2,
    item: 'Soporte vía email',
  },
  {
    id: 3,
    item: 'Webchat',
  },
];

export const SubscriptionStartPlanItems = [
  {
    id: 4,
    item: 'Bot ',
  },
  {
    id: 5,
    item: 'Facebook Messenger',
  },
  {
    id: 6,
    item: 'Instagram',
  },
  {
    id: 7,
    item: ' Conversaciones proactivas por WhatsApp',
  },
  // {
  //   id: 8,
  //   item: ' WhatsApp QR',
  // },
];

export const planes = [
  {
    name: 'START',
    price: '99',
    link: 'https://buy.stripe.com/dR6cOa1Zf9si98IaEK',
  },
];

export const prices = {
  START: '99',
  agent: '29',
};
