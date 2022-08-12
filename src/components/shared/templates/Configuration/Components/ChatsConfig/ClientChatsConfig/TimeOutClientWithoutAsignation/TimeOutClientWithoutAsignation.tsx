/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
// import {
//   useAppDispatch,
//   useAppSelector,
// } from '../../../../../../../../redux/hook/hooks';
// import { useToastContext } from '../../../../../../molecules/Toast/useToast';
import {
  StyledTextArea,
  StyledTimeOutClientWithoutAsignation,
  StyledTimeOutClientWithoutAsignationBody,
  StyledTimeOutClientWithoutAsignationHeader,
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
} from './TimeOutClientWithoutAsignation.styled';
import { Text } from '../../../../../../atoms/Text/Text';
import { Tooltip } from '../../../../../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../../../../../atoms/Tooltip/tooltip.interface';
import { TooltipTarget } from '../../../../../../atoms/Tooltip/tooltip.styled';
import {
  ButtonMolecule,
  // ButtonState,
  Size,
} from '../../../../../../atoms/Button/Button';

export const TimeOutClientWithoutAsignation: FC = () => {
  // const dispatch = useAppDispatch();
  // const showAlert = useToastContext();

  // const { contactStatus } = useAppSelector(
  //   (state) => state.configurationInfo.generalConfigurationData,
  // );

  const [settings, setSettings] = useState({
    adviceMessage: false,
    adviceIn: 0,
    adviceRepeat: 0,
    adviceTimes: 0,
    adviceText:
      'Todos nuestros agentes se encuentran ocupados. Aguarde un instante por favor.',
    closeMessage: false,
    closeMinutes: 0,
    closetext:
      'En este momento no podemos atenderlo. Por favor, inténtelo de nuevo más tarde.',
  });

  return (
    <StyledTimeOutClientWithoutAsignation>
      <StyledTimeOutClientWithoutAsignationHeader>
        <Text>Mensajes a clientes sin atender</Text>
        <Tooltip
          text={`Cuando un cliente intenta contactarse con un agente y aún no hay agentes disponibles, se puede enviar un mensaje de aviso de demora, el cual se puede repetir fijando un intervalo de tiempo y elegir también la cantidad de veces a repetirse. También se puede definir un mensaje de cierre de la conversación en caso de transcurrir determinado tiempo. Cuando el valor de cada tiempo en minutos es '0' significa que se encuentra desactivado. `}
          position={TooltipPosition.bottom}>
          <TooltipTarget title="">
            <FaInfoCircle />
          </TooltipTarget>
        </Tooltip>
      </StyledTimeOutClientWithoutAsignationHeader>
      <StyledTimeOutClientWithoutAsignationBody>
        <div>
          <span>
            {settings.adviceMessage ? (
              <Text color="#50da71">Mensaje de aviso de demora</Text>
            ) : (
              <Text color="#bec0be">Mensaje de aviso de demora</Text>
            )}
            <div>
              {settings.adviceMessage ? (
                <ToogleComponentForMappedRestrictions
                  onClick={() =>
                    setSettings({ ...settings, adviceMessage: false })
                  }>
                  <div />
                </ToogleComponentForMappedRestrictions>
              ) : (
                <ToogleComponentForMappedRestrictionsNoSel
                  onClick={() =>
                    setSettings({ ...settings, adviceMessage: true })
                  }>
                  <div />
                </ToogleComponentForMappedRestrictionsNoSel>
              )}
            </div>
          </span>
          <div>
            Enviar a partir de los primeros
            <span>
              <input
                type="number"
                min="0"
                max="480"
                value={settings.adviceIn}
                disabled={!settings.adviceMessage}
                onChange={(e) =>
                  setSettings({ ...settings, adviceIn: Number(e.target.value) })
                }
              />
              minutos.
            </span>
          </div>
          <div>
            Luego repetirlo cada
            <span>
              <input
                type="number"
                min="0"
                max="480"
                value={settings.adviceRepeat}
                disabled={!settings.adviceMessage}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    adviceRepeat: Number(e.target.value),
                  })
                }
              />
              minutos.
            </span>
          </div>
          <div>
            Hasta llegar a las
            <span>
              <input
                type="number"
                min="0"
                max="480"
                value={settings.adviceTimes}
                disabled={!settings.adviceMessage}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    adviceTimes: Number(e.target.value),
                  })
                }
              />
              repeticiones.
            </span>
          </div>
          <StyledTextArea
            value={settings.adviceText}
            onChange={(ev) =>
              setSettings({ ...settings, adviceText: ev.target.value })
            }
          />
        </div>
        <div>
          <span>
            {settings.closeMessage ? (
              <Text color="#50da71">Saludo y cierre por demora</Text>
            ) : (
              <Text color="#bec0be">Saludo y cierre por demora</Text>
            )}
            <div>
              {settings.closeMessage ? (
                <ToogleComponentForMappedRestrictions
                  onClick={() =>
                    setSettings({ ...settings, closeMessage: false })
                  }>
                  <div />
                </ToogleComponentForMappedRestrictions>
              ) : (
                <ToogleComponentForMappedRestrictionsNoSel
                  onClick={() =>
                    setSettings({ ...settings, closeMessage: true })
                  }>
                  <div />
                </ToogleComponentForMappedRestrictionsNoSel>
              )}
            </div>
          </span>
          <div>
            Enviar luego de{' '}
            <span>
              <input
                type="number"
                min="0"
                max="60"
                disabled={!settings.closeMessage}
                value={settings.closeMinutes}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    closeMinutes: Number(e.target.value),
                  })
                }
              />{' '}
              minutos
            </span>
          </div>
          <StyledTextArea
            value={settings.closetext}
            onChange={(ev) =>
              setSettings({ ...settings, closetext: ev.target.value })
            }
          />
        </div>
        <ButtonMolecule
          text="Guardar"
          size={Size.MEDIUM}
          onClick={() => console.log('botón')}
        />
      </StyledTimeOutClientWithoutAsignationBody>
    </StyledTimeOutClientWithoutAsignation>
  );
};
