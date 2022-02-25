/* eslint-disable no-nested-ternary */

export const weekdaysForBusinessTimeObject = {
  lunes: {
    id: 1,
    name: 'Lunes',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  martes: {
    id: 2,
    name: 'Martes',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  miercoles: {
    id: 3,
    name: 'Miércoles',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  jueves: {
    id: 4,
    name: 'Jueves',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  viernes: {
    id: 5,
    name: 'Viernes',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  sábado: {
    id: 6,
    name: 'Sábado',
    isActive: true,
    secondTime: false,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '00',
      minute: '00',
    },
    reEnd: {
      hour: '00',
      minute: '00',
    },
  },
  domingo: {
    id: 7,
    name: 'Domingo',
    isActive: false,
    secondTime: false,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '00',
      minute: '00',
    },
    reEnd: {
      hour: '00',
      minute: '00',
    },
  },
};

// make a string with a date format of 2 june 1981

export const restrictinosFromTheBackend = [
  {
    id: 1,
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    startTime: {
      hour: '12',
      minute: '00',
    },
    endTime: {
      hour: '20',
      minute: '00',
    },
    isActive: true,
  },
  {
    id: 2,
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
    startTime: {
      hour: '14',
      minute: '00',
    },
    endTime: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 3,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    startTime: {
      hour: '08',
      minute: '00',
    },
    endTime: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 4,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    startTime: {
      hour: '08',
      minute: '00',
    },
    endTime: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 5,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    startTime: {
      hour: '08',
      minute: '00',
    },
    endTime: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 6,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    startTime: {
      hour: '08',
      minute: '00',
    },
    endTime: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 7,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    startTime: {
      hour: '08',
      minute: '00',
    },
    endTime: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 8,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    startTime: {
      hour: '08',
      minute: '00',
    },
    endTime: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
];

export const setHour = (newTime: { hour: string; minute: string }) => ({
  hour:
    Number(newTime.hour) > 23
      ? '00'
      : Number(newTime.hour) < 0
      ? '23'
      : Number(newTime.hour) < 10 && newTime.hour.length === 1
      ? `0${newTime.hour}`
      : newTime.hour,
  minute: newTime.minute,
});

export const setMinute = (newTime: { hour: string; minute: string }) => ({
  minute:
    Number(newTime.minute) > 55
      ? '00'
      : Number(newTime.minute) < 0
      ? '55'
      : Number(newTime.minute) < 10 && newTime.minute.length === 1
      ? `0${newTime.minute}`
      : newTime.minute,
  hour: newTime.hour,
});
