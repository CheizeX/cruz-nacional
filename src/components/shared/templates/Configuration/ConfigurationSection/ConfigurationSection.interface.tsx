import { MouseEventHandler } from '@nivo/pie';
import { Dispatch, SetStateAction } from 'react';

export interface ConfigSectionInterface {
  setSortedRestrictions?: Dispatch<SetStateAction<boolean>>;
  sortedRestrictions?: boolean;
  numberOfRestrictions?: number;
  businessHours?: number;
  datePickerDate?: boolean;
  selectedRestrictionDate?: Date | null;
  startTimeController?: boolean;
  endTimeController?: boolean;
  startTimeDayController?: boolean;
  endTimeDayController?: boolean;
  activeRestrictionWhenCreate?: boolean;
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
