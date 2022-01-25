/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-nested-ternary */
import { FC, useCallback, useState } from 'react';
import { ButtonMolecule, ButtonVariant } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { ModalMolecule } from '../../../../molecules/Modal/Modal';
import { ConfigSectionInterface } from '../../ConfigurationSection/ConfigurationSection.interface';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import {
  setHour,
  setMinute,
  weekdaysForBusinessTimeObject,
} from '../../ConfigurationSection/ConfigurationSection.shared';
import {
  StyledSetBusinessTimeSetDayItem,
  StyledSetBusinessTimeDateAndHoursBody,
  StyledSetBusinessTimeDateAndHoursFooter,
  StyledSetBusinessTimeDateAndHoursHeader,
  StyledSetBusinessTimeDateAndHours,
  StyledBusinessHoursBodyWithoutSet,
  StyledBusinessHours,
  StyledBusinessHoursHeader,
  StyledSetBusinessTimeSetHourStartAndFinish,
  StyledSetSecondBusinessTimeSetHourStartAndFinish,
  StyledTimeControllerStart,
  StyledTimeControllerEnd,
} from './BusinesHours.styled';
import { IconButtonMolecule } from '../../../../atoms/IconButton/IconButton';
import { ContainerInput } from '../../../../molecules/Input/ContainerInput';
import { TimeController } from '../Shared/TimeController';

export const BusinessHours: FC<ConfigSectionInterface> = ({
  businessHours,
}) => {
  const [modalBusinessTime, setModalBusinessTime] = useState(false);

  const [startTimeController, setStartTimeController] = useState(false);
  const [endTimeController, setEndTimeController] = useState(false);
  const [startSecondTimeController, setStartSecondTimeController] =
    useState(false);
  const [endSecondTimeController, setEndSecondTimeController] = useState(false);
  const [dayActive, setDayActive] = useState('');

  const [timeRestrictions, setTimeRestrictions] = useState({
    ...weekdaysForBusinessTimeObject,
  } as any);

  console.log(startTimeController, 'startTimeController');
  console.log(endTimeController, 'endTimeController');

  const handleStartTimeController = useCallback(
    (startDay: string) => {
      setEndTimeController(false);
      setStartSecondTimeController(false);
      setEndSecondTimeController(false);
      setStartTimeController(!startTimeController);
      setDayActive(startDay);
    },
    [
      startTimeController,
      setEndTimeController,
      setStartTimeController,
      setEndSecondTimeController,
      setStartSecondTimeController,
    ],
  );

  const handleEndTimeController = useCallback(
    (endDay: string) => {
      setStartTimeController(false);
      setStartSecondTimeController(false);
      setEndSecondTimeController(false);
      setEndTimeController(!endTimeController);
      setDayActive(endDay);
    },
    [
      endTimeController,
      setEndTimeController,
      setStartTimeController,
      setEndSecondTimeController,
      setStartSecondTimeController,
    ],
  );

  const handleStartSecondTimeController = useCallback(
    (startDay: string) => {
      setEndTimeController(false);
      setStartTimeController(false);
      setEndSecondTimeController(false);
      setStartSecondTimeController(!startSecondTimeController);
      setDayActive(startDay);
    },
    [
      startSecondTimeController,
      setEndTimeController,
      setStartTimeController,
      setEndSecondTimeController,
      setStartSecondTimeController,
    ],
  );

  const handleEndSecondTimeController = useCallback(
    (endDay: string) => {
      setEndTimeController(false);
      setStartTimeController(false);
      setStartSecondTimeController(false);
      setEndSecondTimeController(!endSecondTimeController);
      setDayActive(endDay);
    },
    [
      endSecondTimeController,
      setEndTimeController,
      setStartTimeController,
      setStartSecondTimeController,
    ],
  );

  const onChangeHour = useCallback(
    (newTime: { hour: string; minute: string }, startOrFinish: string) => {
      if (startOrFinish === 'Start') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions.dayActive,
            start: setHour(newTime),
          },
        });
      }

      if (startOrFinish === 'End') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions.dayActive,
            end: setHour(newTime),
          },
        });
      }
    },
    [timeRestrictions, dayActive],
  );

  const onChangeMinute = useCallback(
    (
      newTime: {
        hour: string;
        minute: string;
      },
      indicator: string,
    ) => {
      if (indicator === 'Start') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions.dayActive,
            start: setMinute(newTime),
          },
        });
      }
      if (indicator === 'End') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions.dayActive,
            end: setMinute(newTime),
          },
        });
      }
    },
    [timeRestrictions, dayActive],
  );

  return (
    <>
      <StyledBusinessHours>
        <StyledBusinessHoursHeader>
          <Text>Horario de atención</Text>

          {businessHours !== 0 && (
            <button type="button">
              <SVGIcon iconFile="/icons/pen.svg" />
            </button>
          )}
        </StyledBusinessHoursHeader>
        <StyledBusinessHoursBodyWithoutSet>
          <SVGIcon iconFile="/icons/business-time-not.svg" />
          <Text color="#B2B2B2">
            No has establecido un Horario de atención.
          </Text>
        </StyledBusinessHoursBodyWithoutSet>

        {businessHours === 0 && (
          <ButtonMolecule
            text="Establecer"
            onClick={() => setModalBusinessTime(true)}
          />
        )}
      </StyledBusinessHours>

      {modalBusinessTime && (
        <ModalMolecule
          isModal={modalBusinessTime}
          setModal={setModalBusinessTime}>
          <StyledSetBusinessTimeDateAndHours>
            <StyledSetBusinessTimeDateAndHoursHeader>
              <Text>Establecer horario de atención</Text>
              <button type="button" onClick={() => setModalBusinessTime(false)}>
                <SVGIcon iconFile="/icons/close.svg" />
              </button>
            </StyledSetBusinessTimeDateAndHoursHeader>
            <StyledSetBusinessTimeDateAndHoursBody>
              {Object.keys(weekdaysForBusinessTimeObject).map((day) => (
                <StyledSetBusinessTimeSetDayItem key={day}>
                  <div>
                    <Checkbox
                      checked={timeRestrictions[day].isActive}
                      onClick={() => {
                        setTimeRestrictions({
                          ...timeRestrictions,
                          [day]: {
                            ...timeRestrictions[day],
                            isActive: !timeRestrictions[day].isActive,
                          },
                        });
                      }}
                    />
                    <Text color="#b2b2b2">{day}</Text>
                  </div>

                  <StyledSetBusinessTimeSetHourStartAndFinish>
                    <div>
                      <Text color="#2A2A2A">
                        Hora inicio <Text color="#B2B2B2">(hh:mm)</Text>
                      </Text>
                      <ContainerInput
                        onClick={() => handleStartTimeController(day)}
                        onChange={() => null}
                        value={
                          timeRestrictions[day]?.start?.hour &&
                          `${timeRestrictions[day].start.hour}:${timeRestrictions[day].start.minute}`
                        }
                        LeftIcon={() => <SVGIcon iconFile="/icons/watch.svg" />}
                      />
                    </div>

                    {startTimeController && dayActive === day && (
                      <StyledTimeControllerStart>
                        <TimeController
                          onChangeHour={onChangeHour}
                          onChangeMinute={onChangeMinute}
                          selectedRestrictionStartTime={
                            timeRestrictions[day]?.start || {
                              hour: '00',
                              minute: '00',
                            }
                          }
                          selectedRestrictionEndTime={
                            timeRestrictions[day]?.end || {
                              hour: '00',
                              minute: '00',
                            }
                          }
                          startTimeController={startTimeController}
                          endTimeController={endTimeController}
                        />
                      </StyledTimeControllerStart>
                    )}

                    <div>
                      <Text color="#2A2A2A">
                        Hora fin
                        <Text color="#B2B2B2">(hh:mm)</Text>
                      </Text>
                      <ContainerInput
                        onClick={() => handleEndTimeController(day)}
                        onChange={() => {}}
                        value={
                          timeRestrictions[day]?.end?.hour &&
                          `${timeRestrictions[day].end.hour}:${timeRestrictions[day].end.minute}`
                        }
                        LeftIcon={() => <SVGIcon iconFile="/icons/watch.svg" />}
                      />
                    </div>

                    {endTimeController && dayActive === day && (
                      <StyledTimeControllerEnd>
                        <TimeController
                          onChangeHour={onChangeHour}
                          onChangeMinute={onChangeMinute}
                          selectedRestrictionStartTime={
                            timeRestrictions[day]?.start || {
                              hour: '00',
                              minute: '00',
                            }
                          }
                          selectedRestrictionEndTime={
                            timeRestrictions[day]?.end || {
                              hour: '00',
                              minute: '00',
                            }
                          }
                          startTimeController={startTimeController}
                          endTimeController={endTimeController}
                        />
                      </StyledTimeControllerEnd>
                    )}

                    <IconButtonMolecule
                      Icon={() => (
                        <SVGIcon iconFile="/icons/create-tag-button.svg" />
                      )}
                      color="#fafafa"
                      bgColor="transparent"
                      onClick={() =>
                        setTimeRestrictions({
                          ...timeRestrictions,
                          [day]: {
                            ...timeRestrictions[day],
                            secondTime: true,
                          },
                        })
                      }
                    />
                  </StyledSetBusinessTimeSetHourStartAndFinish>

                  {timeRestrictions[day].secondTime && (
                    <StyledSetSecondBusinessTimeSetHourStartAndFinish>
                      <div>
                        <Text color="#2A2A2A">
                          Hora inicio <Text color="#B2B2B2">(hh:mm)</Text>
                        </Text>
                        <ContainerInput
                          required
                          onClick={() => handleStartSecondTimeController(day)}
                          onChange={() => {}}
                          value={
                            timeRestrictions[day]?.reStart?.hour &&
                            `${timeRestrictions[day].reStart.hour}:${timeRestrictions[day].reStart.minute}`
                          }
                          LeftIcon={() => (
                            <SVGIcon iconFile="/icons/watch.svg" />
                          )}
                        />
                      </div>

                      <div>
                        <Text color="#2A2A2A">
                          Hora fin <Text color="#B2B2B2">(hh:mm)</Text>
                        </Text>
                        <ContainerInput
                          required
                          onClick={() => handleEndSecondTimeController(day)}
                          onChange={() => {}}
                          value={
                            timeRestrictions[day]?.reEnd?.hour &&
                            `${timeRestrictions[day].reEnd.hour}:${timeRestrictions[day].reEnd.minute}`
                          }
                          LeftIcon={() => (
                            <SVGIcon iconFile="/icons/watch.svg" />
                          )}
                        />

                        <SVGIcon color="red" iconFile="/icons/times.svg" />
                      </div>

                      <IconButtonMolecule
                        Icon={() => <SVGIcon iconFile="/icons/delete.svg" />}
                        color="#fafafa"
                        bgColor="transparent"
                        onClick={() =>
                          setTimeRestrictions({
                            ...timeRestrictions,
                            [day]: {
                              ...timeRestrictions[day],
                              secondTime: false,
                            },
                          })
                        }
                      />
                    </StyledSetSecondBusinessTimeSetHourStartAndFinish>
                  )}
                  {endSecondTimeController && dayActive === day && (
                    <StyledTimeControllerEnd>
                      <TimeController
                        onChangeHour={onChangeHour}
                        onChangeMinute={onChangeMinute}
                        selectedRestrictionStartTime={
                          timeRestrictions[day]?.reStart || {
                            hour: '00',
                            minute: '00',
                          }
                        }
                        selectedRestrictionEndTime={
                          timeRestrictions[day]?.reEnd || {
                            hour: '00',
                            minute: '00',
                          }
                        }
                        startTimeController={startSecondTimeController}
                        endTimeController={endSecondTimeController}
                      />
                    </StyledTimeControllerEnd>
                  )}
                  {startSecondTimeController && dayActive === day && (
                    <StyledTimeControllerStart>
                      <TimeController
                        onChangeHour={onChangeHour}
                        onChangeMinute={onChangeMinute}
                        selectedRestrictionStartTime={
                          timeRestrictions[day]?.reStart || {
                            hour: '00',
                            minute: '00',
                          }
                        }
                        selectedRestrictionEndTime={
                          timeRestrictions[day]?.reEnd || {
                            hour: '00',
                            minute: '00',
                          }
                        }
                        startTimeController={startSecondTimeController}
                        endTimeController={endSecondTimeController}
                      />
                    </StyledTimeControllerStart>
                  )}
                </StyledSetBusinessTimeSetDayItem>
              ))}
            </StyledSetBusinessTimeDateAndHoursBody>

            <StyledSetBusinessTimeDateAndHoursFooter>
              <ButtonMolecule
                text="Cancelar"
                variant={ButtonVariant.OUTLINED}
                onClick={() => setModalBusinessTime(false)}
              />
              <ButtonMolecule text="Establecer" />
            </StyledSetBusinessTimeDateAndHoursFooter>
          </StyledSetBusinessTimeDateAndHours>
        </ModalMolecule>
      )}
    </>
  );
};
