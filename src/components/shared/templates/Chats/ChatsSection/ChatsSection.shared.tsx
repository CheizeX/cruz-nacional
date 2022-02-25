/* eslint-disable no-restricted-syntax */
export const labelSelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000;
const getUnitAndValueDate = (secondsElapsed: number) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit };
    }
  }
  return {};
};

export const getTimeAgo = (timestamp: number) => {
  const rtf = new Intl.RelativeTimeFormat();
  const secondsElapsed = getSecondsDiff(timestamp);
  const { value, unit } = getUnitAndValueDate(secondsElapsed) as any;
  return rtf.format(value, unit);
};

export const preDefinedTextsObject = [
  {
    id: '1',
    text: 'Buenos días, en qué puedo ayudarle?',
  },
  {
    id: '2',
    text: 'Hola, buenas tardes, en qué puedo ayudarle?',
  },
  {
    id: '3',
    text: 'Si lo desea puede consultar con un supervisor',
  },
  {
    id: '4',
    text: 'Ya le comunico con mi supervisor',
  },
  {
    id: '5',
    text: 'Muchas gracias, que tenga buen día',
  },
];
