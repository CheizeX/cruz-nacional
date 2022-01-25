export const tagsColorsArrayCreate = [
  { name: '0', color: '#3AA4FF' },
  { name: '1', color: '#8BDFD0' },
  { name: '2', color: '#F78F28' },
  { name: '3', color: '#4D5ECA' },
  { name: '4', color: '#FA5F5F' },
  { name: '5', color: '#439152' },
  { name: '6', color: '#C155F0' },
  { name: '7', color: '#D03AC9' },
  { name: '8', color: '#707070' },
  { name: '9', color: '#24C3A7' },
];

export const myTagColorSelector = (
  condition: boolean,
  then: string,
  otherwise: string | null,
) => (condition ? then : otherwise);
