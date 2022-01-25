/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import {
  TimeControllerInterface,
  ConfigSectionInterface,
} from '../../ConfigurationSection/ConfigurationSection.interface';

import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
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
      : hourOrMinute === 'minute' && startOrEnd === 'Start'
      ? {
          minute: String(Number(selectedRestrictionStartTime.minute) + 5),
          hour: selectedRestrictionStartTime.hour,
        }
      : hourOrMinute === 'hour' && startOrEnd === 'End'
      ? {
          hour: String(Number(selectedRestrictionEndTime.hour) + 1),
          minute: selectedRestrictionEndTime.minute,
        }
      : hourOrMinute === 'minute' && startOrEnd === 'End'
      ? {
          minute: String(Number(selectedRestrictionEndTime.minute) + 5),
          hour: selectedRestrictionEndTime.hour,
        }
      : {
          hour: selectedRestrictionStartTime.hour,
          minute: selectedRestrictionStartTime.minute,
        };

  const decreaseHourOrMinute = (hourOrMinute: string) =>
    hourOrMinute === 'hour' && startOrEnd === 'Start'
      ? {
          hour: String(Number(selectedRestrictionStartTime.hour) - 1),
          minute: selectedRestrictionStartTime.minute,
        }
      : hourOrMinute === 'minute' && startOrEnd === 'Start'
      ? {
          minute: String(Number(selectedRestrictionStartTime.minute) - 5),
          hour: selectedRestrictionStartTime.hour,
        }
      : hourOrMinute === 'hour' && startOrEnd === 'End'
      ? {
          hour: String(Number(selectedRestrictionEndTime.hour) - 1),
          minute: selectedRestrictionEndTime.minute,
        }
      : hourOrMinute === 'minute' && startOrEnd === 'End'
      ? {
          minute: String(Number(selectedRestrictionEndTime.minute) - 5),
          hour: selectedRestrictionEndTime.hour,
        }
      : {
          hour: selectedRestrictionStartTime.hour,
          minute: selectedRestrictionStartTime.minute,
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
