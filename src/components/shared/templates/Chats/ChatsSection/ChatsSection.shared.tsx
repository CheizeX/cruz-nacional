export const labelSelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

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
