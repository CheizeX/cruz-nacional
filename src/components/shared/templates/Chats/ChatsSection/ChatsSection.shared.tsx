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
    text: 'Gusto en saludar, en que lo podemos ayudar?',
  },
  {
    id: '2',
    text: 'Estamos ubicados en: Av. Independencia 908, Independencia - Av. Concha y Toro 546, Puente Alto',
  },
  {
    id: '3',
    text: 'Para poder agendar su hora, necesitamos que complete sus datos en https://bit.ly/3rbbpRl para agilizar el proceso. Agradecería su confirmación una vez realizado el mismo.',
  },
  {
    id: '4',
    text: 'El precio del PCR es de Fonasa $11.000 y de $25.000 Particular , puede agendar por la web o por este medio , resultados de 24 a 48hrs máximo',
  },
  {
    id: '5',
    text: 'El valor de la Consulta de urgencia es de 21.990$, tenemos muchos dsctos para los vecinos de la comuna en 19.990$ y con todas las cajas de compensación.',
  },
  {
    id: '6',
    text: `*Horario de Atención Clínica* - Lunes a Sábado: 8:00 a 19:30 hrs, Domingos y Festivos: 9:00 a 19:30 hrs *Urgencia*: Lunes a Domingo y Festivos : 9:30 a 19:30`,
  },
  {
    id: '7',
    text: 'Estimado(a), muchas gracias a usted, le agradecería muchísimo si pudiera ayudarnos calificando nuestra atención entrando siguiente al link ⭐⭐⭐⭐⭐  https://es.surveymonkey.com/r/7ZRQWTQ ⭐⭐⭐⭐⭐ ',
  },
  {
    id: '8',
    text: 'Estimado(a), muchas gracias a usted, le agradecería muchísimo si pudiera ayudarnos calificando nuestra atención entrando siguiente al link ⭐⭐⭐⭐⭐  https://goo.gl/maps/hftQRFkbKisUKUMc6 ⭐⭐⭐⭐⭐ ',
  },
  {
    id: '9',
    text: 'Horario de atención. Clínica: Lunes a Sábado: 8:00 - 19:30 hrs. Domingos y Festivos: 9:00 - 19:30 hrs. Urgencia: Lunes a Domingo y Festivos: 9:30 a 19:30 hrs',
  },
  {
    id: '10',
    text: 'Me podría indicar sus datos para agendarlo: NOMBRE, RUT, CELULAR, CORREO, DIRECCION, COMUNA, PREVISION Y FECHA DE NACIMIENTO.',
  },
];
