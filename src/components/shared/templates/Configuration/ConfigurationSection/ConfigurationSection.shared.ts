/* eslint-disable no-nested-ternary */
export const weekdaysForBusinessTimeObject = {
  Lunes: {
    id: 1,
    name: 'Lunes',
    isActive: false,
    secondTime: false,
    start: {
      hour: '00',
      minute: '00',
    },
    end: {
      hour: '00',
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
  Martes: {
    id: 2,
    name: 'Martes',
    isActive: false,
    secondTime: false,
    start: {
      hour: '00',
      minute: '00',
    },
    end: {
      hour: '00',
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
  Miercoles: {
    id: 3,
    name: 'Miércoles',
    isActive: false,
    secondTime: false,
    start: {
      hour: '00',
      minute: '00',
    },
    end: {
      hour: '00',
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
  Jueves: {
    id: 4,
    name: 'Jueves',
    isActive: false,
    secondTime: false,
    start: {
      hour: '00',
      minute: '00',
    },
    end: {
      hour: '00',
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
  Viernes: {
    id: 5,
    name: 'Viernes',
    isActive: false,
    secondTime: false,
    start: {
      hour: '00',
      minute: '00',
    },
    end: {
      hour: '00',
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
  Sábado: {
    id: 6,
    name: 'Sábado',
    isActive: false,
    secondTime: false,
    start: {
      hour: '00',
      minute: '00',
    },
    end: {
      hour: '00',
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
  Domingo: {
    id: 7,
    name: 'Domingo',
    isActive: false,
    secondTime: false,
    start: {
      hour: '00',
      minute: '00',
    },
    end: {
      hour: '00',
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

export const setHour = (newTime: { hour: string; minute: string }) => ({
  hour:
    Number(newTime.hour) > 23
      ? '00'
      : Number(newTime.hour) < 0
      ? '23'
      : Number(newTime.hour) < 10
      ? `0${newTime.hour}`
      : newTime.hour,
  minute: newTime.minute,
});

export const setMinute = (newTime: { hour: string; minute: string }) => ({
  minute:
    Number(newTime.minute) > 59
      ? '00'
      : Number(newTime.minute) < 0
      ? '55'
      : Number(newTime.minute) < 10
      ? `0${newTime.minute}`
      : newTime.minute,
  hour: newTime.hour,
});
