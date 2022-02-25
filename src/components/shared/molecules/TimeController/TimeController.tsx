/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import {
  TimeControllerInterface,
  ConfigSectionInterface,
} from '../../templates/Configuration/ConfigurationSection/ConfigurationSection.interface';

import { SVGIcon } from '../../atoms/SVGIcon/SVGIcon';
import {
  StyledCounterContainer,
  StyledCounterController,
  StyledCounterControllerButton,
  StyledSeparator,
  StyledTimeController,
} from './TimeController.styled';

export const TimeController: FC<
  TimeControllerInterface & ConfigSectionInterface
> = ({
  onChangeHour,
  onChangeMinute,
  selectedRestrictionStartTime,
  selectedRestrictionEndTime,
  startTimeController,
  endTimeController,
}) => {
  const startOrEnd = startTimeController
    ? 'Start'
    : endTimeController
    ? 'End'
    : '';

  const increaseHourOrMinute = (hourOrMinute: string) =>
    hourOrMinute === 'hour' && startTimeController
      ? {
          hour: String(Number(selectedRestrictionStartTime.hour) + 1),
          minute: selectedRestrictionStartTime.minute,
        }
      : hourOrMinute === 'minute' && startTimeController
      ? {
          minute: String(Number(selectedRestrictionStartTime.minute) + 5),
          hour: selectedRestrictionStartTime.hour,
        }
      : hourOrMinute === 'hour' &&
        endTimeController &&
        selectedRestrictionEndTime.hour >= selectedRestrictionStartTime.hour
      ? {
          hour: String(Number(selectedRestrictionEndTime.hour) + 1),
          minute: selectedRestrictionEndTime.minute,
        }
      : hourOrMinute === 'minute' &&
        endTimeController &&
        selectedRestrictionEndTime.hour !== selectedRestrictionStartTime.hour &&
        (selectedRestrictionStartTime.minute === '00' ||
          selectedRestrictionStartTime.minute === '05')
      ? {
          minute: String(Number(selectedRestrictionEndTime.minute) + 5),
          hour: selectedRestrictionEndTime.hour,
        }
      : hourOrMinute === 'minute' &&
        endTimeController &&
        selectedRestrictionEndTime.hour === selectedRestrictionStartTime.hour
      ? {
          minute:
            selectedRestrictionStartTime.minute >
            selectedRestrictionEndTime.minute
              ? selectedRestrictionStartTime.minute
              : selectedRestrictionEndTime.minute === '55'
              ? selectedRestrictionStartTime.minute
              : String(Number(selectedRestrictionEndTime.minute) + 5),
          hour: selectedRestrictionEndTime.hour,
        }
      : {
          hour: endTimeController
            ? selectedRestrictionEndTime.hour
            : selectedRestrictionStartTime.hour,
          minute: endTimeController
            ? selectedRestrictionEndTime.minute
            : selectedRestrictionStartTime.minute,
        };

  const decreaseHourOrMinute = (hourOrMinute: string) =>
    hourOrMinute === 'hour' && startTimeController
      ? {
          hour: String(Number(selectedRestrictionStartTime.hour) - 1),
          minute: selectedRestrictionStartTime.minute,
        }
      : hourOrMinute === 'minute' && startTimeController
      ? {
          minute: String(Number(selectedRestrictionStartTime.minute) - 5),
          hour: selectedRestrictionStartTime.hour,
        }
      : hourOrMinute === 'hour' &&
        endTimeController &&
        selectedRestrictionEndTime.hour > selectedRestrictionStartTime.hour
      ? {
          hour: String(Number(selectedRestrictionEndTime.hour) - 1),
          minute: selectedRestrictionEndTime.minute,
        }
      : hourOrMinute === 'minute' &&
        endTimeController &&
        selectedRestrictionEndTime.hour !== selectedRestrictionStartTime.hour
      ? {
          minute: String(Number(selectedRestrictionEndTime.minute) - 5),
          hour: selectedRestrictionEndTime.hour,
        }
      : hourOrMinute === 'minute' &&
        endTimeController &&
        selectedRestrictionEndTime.hour === selectedRestrictionStartTime.hour
      ? {
          minute:
            selectedRestrictionStartTime.minute >=
            selectedRestrictionEndTime.minute
              ? selectedRestrictionStartTime.minute
              : String(Number(selectedRestrictionEndTime.minute) - 5),
          hour: selectedRestrictionEndTime.hour,
        }
      : {
          hour: endTimeController
            ? selectedRestrictionEndTime.hour
            : selectedRestrictionStartTime.hour,
          minute: endTimeController
            ? selectedRestrictionEndTime.minute
            : selectedRestrictionStartTime.minute,
        };

  return (
    <StyledTimeController>
      <StyledCounterContainer>
        <StyledCounterControllerButton
          onClick={() => {
            onChangeHour(increaseHourOrMinute('hour'), startOrEnd);
          }}>
          <SVGIcon iconFile="/icons/chevron-square-up.svg" />
        </StyledCounterControllerButton>

        <StyledCounterController
          type="number"
          value={
            startTimeController
              ? selectedRestrictionStartTime.hour
              : endTimeController
              ? selectedRestrictionEndTime?.hour
              : ''
          }
          onChange={() => {}}
          readOnly
        />

        <StyledCounterControllerButton
          onClick={() => {
            onChangeHour(decreaseHourOrMinute('hour'), startOrEnd);
          }}>
          <SVGIcon iconFile="/icons/chevron-square-down.svg" />
        </StyledCounterControllerButton>
      </StyledCounterContainer>

      <StyledSeparator>:</StyledSeparator>

      <StyledCounterContainer>
        <StyledCounterControllerButton
          onClick={() => {
            onChangeMinute(increaseHourOrMinute('minute'), startOrEnd);
          }}>
          <SVGIcon iconFile="/icons/chevron-square-up.svg" />
        </StyledCounterControllerButton>

        <StyledCounterController
          type="number"
          value={
            startTimeController
              ? selectedRestrictionStartTime.minute
              : endTimeController
              ? selectedRestrictionEndTime?.minute
              : '00'
          }
          onChange={() => null}
          readOnly
        />

        <StyledCounterControllerButton
          onClick={() => {
            onChangeMinute(decreaseHourOrMinute('minute'), startOrEnd);
          }}>
          <SVGIcon iconFile="/icons/chevron-square-down.svg" />
        </StyledCounterControllerButton>
      </StyledCounterContainer>
    </StyledTimeController>
  );
};
