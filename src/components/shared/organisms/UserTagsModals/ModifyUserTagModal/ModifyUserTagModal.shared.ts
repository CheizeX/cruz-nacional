export const myTagsSelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);

// export const mapedTagsArray = [
//   { name: 'Planes Médicos', color: '#3AA4FF', id: '0' },
//   { name: 'Soporte Informático', color: '#8BDFD0', id: '1' },
//   { name: 'Insumos Médicos', color: '#F78F28', id: '2' },
//   { name: 'Información Santiago', color: '#4D5ECA', id: '3' },
//   { name: 'Información Valparaíso', color: '#FA5F5F', id: '4' },
//   { name: '5', color: '#439152', id: '5' },
//   { name: '6', color: '#C155F0', id: '6' },
//   { name: '7', color: '#D03AC9', id: '7' },
//   { name: '8', color: '#707070', id: '8' },
//   { name: '9', color: '#24C3A7', id: '9' },
// ];
