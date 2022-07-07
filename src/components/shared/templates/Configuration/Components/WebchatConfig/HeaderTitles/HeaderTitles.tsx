/* eslint-disable no-nested-ternary */
import React, { FC } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Text } from '../../../../../atoms/Text/Text';
import {
  StyledTextArea,
  StyledHeaderTitles,
  StyledHeaderTitlesBody,
  StyledHeaderTitlesHeader,
} from './HeaderTitles.styled';
import { Tooltip } from '../../../../../atoms/Tooltip/Tooltip';
import { TooltipTarget } from '../../../../../atoms/Tooltip/tooltip.styled';
import { TooltipPosition } from '../../../../../atoms/Tooltip/tooltip.interface';
import { InputMolecule } from '../../../../../molecules/Input/Input';
import { IWebchatConfigProps } from '../WebchatConfig.interface';

export const HeaderTitles: FC<IWebchatConfigProps> = ({
  initialMessage,
  customTitle,
  customDescription,
  setCustomTitle,
  setCustomDescription,
  setInitialMessage,
}) => {
  return (
    <StyledHeaderTitles>
      <StyledHeaderTitlesHeader>
        <Text>TÍTULO, NOMBRE Y SALUDO</Text>
        <Tooltip
          text="Puedes personalizar el mensaje de saludo inicial, el título que se mostrará en la cabecera del webchat y también el nombre del asistente."
          position={TooltipPosition.bottom}>
          <TooltipTarget>
            <FaInfoCircle />
          </TooltipTarget>
        </Tooltip>
      </StyledHeaderTitlesHeader>
      <StyledHeaderTitlesBody>
        <Text>Título del webchat</Text>
        <InputMolecule
          setFocus={() => {}}
          name="bienvenida"
          maxLength={20}
          value={customTitle}
          onChange={(ev) => setCustomTitle(ev.target.value)}
        />
        <Text>Nombre del asistente</Text>
        <InputMolecule
          maxLength={20}
          setFocus={() => {}}
          value={customDescription}
          onChange={(ev) => setCustomDescription(ev.target.value)}
        />
        <Text>Saludo inicial del asistente</Text>
        <StyledTextArea
          name="bienvenida"
          value={initialMessage}
          onChange={(ev) => setInitialMessage(ev.target.value)}
        />
      </StyledHeaderTitlesBody>
    </StyledHeaderTitles>
  );
};
