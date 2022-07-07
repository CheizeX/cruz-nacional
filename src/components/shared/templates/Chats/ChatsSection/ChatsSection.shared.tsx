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

export const NestedMessage = [
  // {
  //   id: 1,
  //   message: 'Notificación de asignación de agente',
  //   content: `Hola soy # y tendre el gusto de atender tu solicitud`,
  // },
  // {
  //   id: 2,
  //   message: 'Actualización de datos',
  //   content: '1. Tipo y Número de Documento (sin punto ni espacios)',
  // },
  // {
  //   id: 3,
  //   message:
  //     'La solicitud la realiza el COTIZANTE, el agente o asesor debe realizar las siguientes preguntas de seguridad',
  //   content:
  //     '1. Confirmar la fecha de nacimiento (Verificando en aplicativo Estados) 2. Confirmar el número de beneficiarios activos en su contrato 3. Confirmar si tiene beneficiarios afiliados mayores de 60 años. Si las respuestas son correctas, se actualizarán los datos básicos Si las respuestas son incorrectas, se le agendará cita Presencial (Centros de Soluciones en salud), debe llevar su documento de identidad Nota: El cotizante podrá actualizar los datos de los beneficiarios menores a 18 años con los que cuente en su grupo familiar',
  // },
  // {
  //   id: 4,
  //   message:
  //     'Si la solicitud la realiza el BENEFICIARIO, el analista o asesor debe realizar las siguientes preguntas de seguridad',
  //   content:
  //     '1.Confirmar la fecha de nacimiento (Verificando en aplicativo Estados) 2.Confirmar la dirección de residencia registrada actualmente 3.Confirman número de cédula del Cotizante Si las respuestas son correctas, se actualizarán los datos básicos Si las respuestas son incorrectas, se le agendará cita Presencial (Centros de Soluciones en salud), debe llevar su documento de identidad Nota El beneficiario podrá actualizar únicamente sus datos si es mayor de edad, y no podrá actualizar los datos de ningún otro miembro del grupo Familiar',
  // },
  // {
  //   id: 5,
  //   message: 'Solicitud de identificación',
  //   content:
  //     'Me permites tipo y número de documento ( el número sin puntos, ni espacios), por favor.',
  // },
  // {
  //   id: 5,
  //   message: 'Otras respuestas',
  //   content: [
  //     '¿Continuas en línea?',
  //     'Muchas gracias por tu  información.',
  //     'Fue un gusto atenderte, que tengas buen día.',
  //     'Esperamos que la respuesta allá sido de tu entera satisfacción y responda a las necesidades planteadas, que tengas buen día.',
  //     '¿Algo más en lo que te pueda colaborar?',
  //     'Muy amable por tu espera en línea,',
  //     'Me confirmas por favor número de documento para verificar la información.',
  //     'Sigo validando tu solicitud, permíteme unos minutos más por favor.',
  //   ],
  // },
  // {
  //   id: 6,
  //   message: 'Radicar Queja',
  //   content:
  //     'Le informamos que todas sus opiniones, sugerencias, felicitaciones y quejas las recibimos a través de los siguientes canales: • Página web www.saludtotal.com.co: A través de Te Escuchamos • Línea Total y de Atención al Protegido. • Buzones ubicados en Unidades Propias y de red externa. • Oficinas de Atención al Usuario',
  // },
  // {
  //   id: 7,
  //   message: 'Despedida',
  //   content: '¿Te puedo colaborar en algo más?',
  // },
];
