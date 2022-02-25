import { MouseEventHandler } from 'react';

export interface ConfigSectionInterface {
  datePickerDate?: boolean;
  selectedRestrictionDate?: Date | null;
  startTimeController?: boolean;
  endTimeController?: boolean;
  startSecondTimeController?: boolean;
  endSecondTimeController?: boolean;
  startTimeDayController?: boolean;
  endTimeDayController?: boolean;
  activeRestrictionWhenCreate?: boolean;
  dayActive?: string;
  selected?: string;
  restrictions?: any[];
}

export interface TimeControllerInterface {
  onChangeHour: (
    newTime: { hour: string; minute: string },
    startOrFinish: string,
  ) => void;
  onChangeMinute: (
    newTime: { hour: string; minute: string },
    startOrFinish: string,
  ) => void;
  selectedRestrictionStartTime: {
    hour: string;
    minute: string;
  };
  selectedRestrictionEndTime: {
    hour: string;
    minute: string;
  };
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
