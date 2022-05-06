/* eslint-disable no-nested-ternary */

export const setHour = (newTime: { hour: string; minute: string }) => ({
  hour:
    Number(newTime.hour) > 23
      ? '23'
      : Number(newTime.hour) < 0
      ? '00'
      : Number(newTime.hour) < 10 && newTime.hour.length === 1
      ? `0${newTime.hour}`
      : newTime.hour,
  minute: newTime.minute,
});

export const setMinute = (newTime: { hour: string; minute: string }) => ({
  minute:
    Number(newTime.minute) > 55
      ? '55'
      : Number(newTime.minute) < 0
      ? '00'
      : Number(newTime.minute) < 10 && newTime.minute.length === 1
      ? `0${newTime.minute}`
      : newTime.minute,
  hour: newTime.hour,
});
