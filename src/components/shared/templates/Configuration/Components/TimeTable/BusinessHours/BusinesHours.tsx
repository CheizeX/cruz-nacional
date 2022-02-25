/* eslint-disable no-plusplus */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-nested-ternary */
import { FC, useCallback, useMemo, useState } from 'react';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
} from '../../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { ModalMolecule } from '../../../../../molecules/Modal/Modal';
import { Checkbox } from '../../../../../atoms/Checkbox/Checkbox';
import {
  setHour,
  setMinute,
} from '../../../ConfigurationSection/ConfigurationSection.shared';
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
  StyledSecondTimeControllerEnd,
  StyledSecondTimeControllerStart,
  StyledBusinessHoursBodySetted,
  StyledBusinessHoursBodySettedGroupedDays,
} from './BusinesHours.styled';
import { IconButtonMolecule } from '../../../../../atoms/IconButton/IconButton';
import { ContainerInput } from '../../../../../molecules/Input/ContainerInput';
import { TimeController } from '../../../../../molecules/TimeController/TimeController';
import { ConfigSectionInterface } from '../../../ConfigurationSection/ConfigurationSection.interface';
import { baseRestApi } from '../../../../../../../api/base';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../redux/hook/hooks';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { getConfigurationData } from '../../../../../../../redux/slices/configuration/configuration-info';

export const BusinessHours: FC<ConfigSectionInterface> = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [modalBusinessTime, setModalBusinessTime] = useState(false);

  const [startTimeController, setStartTimeController] = useState(false);
  const [endTimeController, setEndTimeController] = useState(false);
  const [startSecondTimeController, setStartSecondTimeController] =
    useState(false);
  const [endSecondTimeController, setEndSecondTimeController] = useState(false);
  const [dayActive, setDayActive] = useState('');
  const [loading, setLoading] = useState(false);

  const { businessHoursData } = useAppSelector(
    (state) => state.configurationInfo,
  );

  const [timeRestrictions, setTimeRestrictions] = useState({
    ...businessHoursData,
  } as any);

  const businessHoursSetted = !Object.keys(timeRestrictions).every(
    (key: any) => businessHoursData[key]?.isActive === false,
  );

  // --- LOGICA DE LOS HORARIOS ----------------------------------------------------------------------------------
  // Filtro los dias con horarios activos
  const filteredActiveDays = useMemo(
    () =>
      Object.keys(timeRestrictions)
        .map((day) => timeRestrictions[day])
        .filter((day) => day.isActive),
    [timeRestrictions],
  );

  // Acomodo la estructura del objeto para que sea mas facil de manejar
  const filteredActiveDaysGroupedDiferent = useMemo(
    () =>
      filteredActiveDays.reduce((acc, curr) => {
        const { day, start, end, reEnd, reStart, secondTime, name, id } = curr;
        if (!acc[day]) {
          acc[id - 1] = [
            name,
            {
              start: `${start.hour}:${start.minute}`,
              end: `${end.hour}:${end.minute}`,
              reStart: `${reStart.hour}:${reStart.minute}`,
              reEnd: `${reEnd.hour}:${reEnd.minute}`,
              secondTime,
              id,
            },
          ];
        }
        return acc;
      }, []),
    [filteredActiveDays],
  );

  // 1) si es el primer elemento del array le deja la propiedad group igual a 1.
  // 2) si no es el primer elemento del array, se fija que los valores de las propiedades start, end, reStart, reEnd, secondTime sean iguales a los del elemento anterior, y
  // si es asi, le asigna la propiedad group igual al valor de la propiedad group del elemento anterior.
  // 3) si los valores de las propiedades start, end, reStart, reEnd, secondTime no son iguales a los del elemento anterior,
  // le asigna la propiedad group igual al valor de la propiedad group del elemento anterior mas 1.
  const grouped = useMemo(
    () =>
      filteredActiveDaysGroupedDiferent.reduce((acc: any[], curr: any[]) => {
        const { group, ...rest } = curr[1];
        const name = curr[0];

        if (acc.length === 0) {
          acc.push({
            group: 1,
            name,
            ...rest,
          });
        } else {
          const last = acc[acc.length - 1];
          const { start, end, reStart, reEnd, secondTime, id } = last;
          if (
            start === rest.start &&
            end === rest.end &&
            reStart === rest.reStart &&
            reEnd === rest.reEnd &&
            secondTime === rest.secondTime &&
            id + 1 === rest.id
          ) {
            acc.push({
              group: last.group,
              name,
              ...rest,
            });
          } else {
            acc.push({
              group: last.group + 1,
              name,
              ...rest,
            });
          }
        }
        return acc;
      }, []),
    [filteredActiveDaysGroupedDiferent],
  );

  // separo en diferentes arrays segun el grupo que tengan asignado
  const groupedDaysDivided = useMemo(
    () =>
      grouped
        .reduce((acc: { [x: string]: any[] }, curr: { group: any }) => {
          const { group } = curr;
          if (!acc[group]) {
            acc[group] = [];
          }
          acc[group].push(curr);
          return acc;
        }, [])
        .filter((divided: any) => divided),
    [grouped],
  );
  // FIN LOGICA DE LOS HORARIOS ----------------------------------------------------------------------------------

  const handleSendActualizedInfoToBackend = async () => {
    setLoading(true);
    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/business-time/time`,
        timeRestrictions,
      );
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'NUEVO HORARIO DEFINIDO',
        message: `El nuevo horario se ha definido correctamente`,
      });
      setLoading(false);
      dispatch(getConfigurationData());
      setModalBusinessTime(false);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR DE HORARIO',
        message:
          'No se pudo definir el nuevo horario. Verifica que los datos sean correctos.',
      });
    }
    setLoading(false);
  };

  const handleStartTimeController = (startDay: string) => {
    setEndTimeController(false);
    setStartSecondTimeController(false);
    setEndSecondTimeController(false);
    setStartTimeController(!startTimeController);
    setDayActive(startDay);
  };

  const handleEndTimeController = (endDay: string) => {
    setStartTimeController(false);
    setStartSecondTimeController(false);
    setEndSecondTimeController(false);
    setEndTimeController(!endTimeController);
    setDayActive(endDay);
  };

  const handleStartSecondTimeController = (startDay: string) => {
    setEndTimeController(false);
    setStartTimeController(false);
    setEndSecondTimeController(false);
    setStartSecondTimeController(!startSecondTimeController);
    setDayActive(startDay);
  };

  const handleEndSecondTimeController = (endDay: string) => {
    setEndTimeController(false);
    setStartTimeController(false);
    setStartSecondTimeController(false);
    setEndSecondTimeController(!endSecondTimeController);
    setDayActive(endDay);
  };

  const onChangeHour = useCallback(
    (newTime: { hour: string; minute: string }, startOrFinish: string) => {
      if (startOrFinish === 'Start') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            start: setHour(newTime),
            end: setHour(newTime),
          },
        });
      }

      if (startOrFinish === 'End') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            end: setHour(newTime),
          },
        });
      }
      if (startOrFinish === 'Start' && startSecondTimeController) {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            reStart: setHour(newTime),
            reEnd: setHour(newTime),
          },
        });
      }

      if (startOrFinish === 'End' && endSecondTimeController) {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            reEnd: setHour(newTime),
          },
        });
      }
    },
    [
      timeRestrictions,
      dayActive,
      endSecondTimeController,
      startSecondTimeController,
    ],
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
            ...timeRestrictions[dayActive],
            start: setMinute(newTime),
            end: setMinute(newTime),
          },
        });
      }
      if (indicator === 'End') {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            end: setMinute(newTime),
          },
        });
      }
      if (indicator === 'Start' && startSecondTimeController) {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            reStart: setMinute(newTime),
            reEnd: setMinute(newTime),
          },
        });
      }
      if (indicator === 'End' && endSecondTimeController) {
        setTimeRestrictions({
          ...timeRestrictions,
          [dayActive]: {
            ...timeRestrictions[dayActive],
            reEnd: setMinute(newTime),
          },
        });
      }
    },
    [
      timeRestrictions,
      dayActive,
      startSecondTimeController,
      endSecondTimeController,
    ],
  );

  return (
    <>
      <StyledBusinessHours>
        <StyledBusinessHoursHeader>
          <Text>Horario de atención</Text>
          {businessHoursSetted && (
            <button type="button" onClick={() => setModalBusinessTime(true)}>
              <SVGIcon iconFile="/icons/pen.svg" />
            </button>
          )}
        </StyledBusinessHoursHeader>
        {!businessHoursSetted ? (
          <StyledBusinessHoursBodyWithoutSet key="123">
            <SVGIcon iconFile="/icons/business-time-not.svg" />
            <Text color="#B2B2B2">
              No has establecido un Horario de atención.
            </Text>
          </StyledBusinessHoursBodyWithoutSet>
        ) : (
          <StyledBusinessHoursBodySetted>
            <StyledBusinessHoursBodySettedGroupedDays>
              {groupedDaysDivided &&
                groupedDaysDivided.map((day: any) => (
                  <>
                    <Text color="red" key={`${`${day[0].name}a`}`}>
                      {day.length === 1 && day[0].name}
                      {day.length === 2 && `${day[0].name} y ${day[1].name}`}
                      {day.length > 2 &&
                        `${day[0].name} a ${day[day.length - 1].name}`}
                    </Text>
                    <div>
                      <div />
                      <Text>
                        Desde <Text color="black">{day[0].start} hrs. </Text>
                        hasta <Text color="black">{day[0].end} hrs.</Text>
                      </Text>
                    </div>
                    {day[0].secondTime && (
                      <div key={day[0].id}>
                        <span />
                        <Text color="gray">
                          Desde{' '}
                          <Text color="black">{day[0].reStart} hrs. </Text>
                          hasta <Text color="black">{day[0].reEnd} hrs.</Text>
                        </Text>
                      </div>
                    )}
                  </>
                ))}
            </StyledBusinessHoursBodySettedGroupedDays>
          </StyledBusinessHoursBodySetted>
        )}

        {!businessHoursSetted && (
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
              {Object.keys(timeRestrictions).map((day, index) => (
                <StyledSetBusinessTimeSetDayItem key={day + index.toString()}>
                  <div>
                    <Checkbox
                      key={timeRestrictions[day].name}
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
                    <Text color="#b2b2b2">{timeRestrictions[day].name}</Text>
                  </div>

                  <StyledSetBusinessTimeSetHourStartAndFinish
                    selected={day}
                    dayActive={dayActive}
                    startTimeController={startTimeController}
                    endTimeController={endTimeController}>
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
                    <StyledSetSecondBusinessTimeSetHourStartAndFinish
                      selected={day}
                      dayActive={dayActive}
                      startSecondTimeController={startSecondTimeController}
                      endSecondTimeController={endSecondTimeController}>
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
                      {startSecondTimeController && dayActive === day && (
                        <StyledSecondTimeControllerStart>
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
                        </StyledSecondTimeControllerStart>
                      )}
                      {endSecondTimeController && dayActive === day && (
                        <StyledSecondTimeControllerEnd>
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
                        </StyledSecondTimeControllerEnd>
                      )}
                    </StyledSetSecondBusinessTimeSetHourStartAndFinish>
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
              <ButtonMolecule
                text="Establecer"
                onClick={handleSendActualizedInfoToBackend}
                state={
                  loading
                    ? ButtonState.DISABLED && ButtonState.LOADING
                    : ButtonState.NORMAL
                }
              />
            </StyledSetBusinessTimeDateAndHoursFooter>
          </StyledSetBusinessTimeDateAndHours>
        </ModalMolecule>
      )}
    </>
  );
};
