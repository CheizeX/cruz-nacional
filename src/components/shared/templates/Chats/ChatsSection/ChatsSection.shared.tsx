export const labelSelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

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
    text: 'Para poder agendar, necesitamos los siguientes datos: NOMBRE COMPLETO / RUT / CORREO / TELÉFONO / FECHA DE NACIMIENTO',
  },
  {
    id: '4',
    text: 'Por el momento no contamos con la especialidad, tenemos Servicio de Urgencia Ambulatoria con atención inmediata.',
  },
  {
    id: '5',
    text: 'Las horas para toma de muestra son agendadas con anticipación de acuerdo con lo disponible en la agenda. PCR Fonasa: $12.500 - PCR Particular: $25.000 -   Antígeno Covid-19: $19.000',
  },
  {
    id: '6',
    text: `Actualmente nos van quedando horas por Consulta de Urgencia.
    Consulta Urgencia + PCR Fonasa: $34.500
    Consulta Urgencia + PCR Particular: $46.990`,
  },
  {
    id: '7',
    text: 'El Valor de la Urgencia es de forma Particular $21.990. Además, tenemos descuentos si tiene algún convenio con cajas de compensación, municipalidades y farmacia Cruz Verde.',
  },
  {
    id: '8',
    text: 'Estimado/a esperando se encuentre bien y habiendo terminado su cuarentena obligatoria, queremos saber cómo se ha sentido para poder enviarle su Certificado de Alta COVID-19, y culminar el proceso de Atención.',
  },
  {
    id: '9',
    text: 'Horario de atención. Clínica: Lunes a Sábado: 8:00 - 19:30 hrs. Domingos y Festivos: 9:00 - 19:30 hrs. Urgencia: Lunes a Domingo y Festivos: 9:30 a 19:30 hrs',
  },
  {
    id: '10',
    text: 'Para poder emitir la Licencia Médica necesito los siguientes datos, NOMBRE Y RUT de su empleador (tener en cuenta que la licencia puede demorar hasta 72 horas en la entrega de su copia).',
  },
];
