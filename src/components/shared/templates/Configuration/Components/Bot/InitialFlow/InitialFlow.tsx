import { FC } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Text } from '../../../../../atoms/Text/Text';
import { Tooltip } from '../../../../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../../../../atoms/Tooltip/tooltip.interface';
import { TooltipTarget } from '../../../../../atoms/Tooltip/tooltip.styled';
import { StyledContactsCreatorHeader } from '../../ContactsConfig/ContactsCreator/ContactsCreator.styled';
import { StyledInitialFlow, StyledNode } from './InitialFlow.styled';

export const InitialFlow: FC = () => {
  const objPrueba = [
    {
      contentType: 'text',
      position: 0,
      text: 'Hola',
      options: [
        {
          contentType: 'text',
          position: 0.0,
          text: 'SI',
          response: 'SI',
          tag: 'GENERAL',
        },
        {
          contentType: 'text',
          position: 0.1,
          text: 'NO',
          response: 'NO',
          tag: 'GENERAL',
        },
      ],
    },
    {
      contentType: 'text',
      position: 1,
      text: 'chau',
      options: [
        {
          contentType: 'text',
          position: 1.0,
          text: 'SI',
          response: 'SI',
          tag: 'GENERAL',
        },
        {
          contentType: 'text',
          position: 1.1,
          text: 'NO',
          response: 'NO',
          tag: 'GENERAL',
        },
      ],
    },
  ];

  return (
    <StyledInitialFlow>
      <StyledContactsCreatorHeader>
        <Text color="red">Flujo inicial</Text>
        <Tooltip
          text="El flujo inicial es el flujo que se ejecuta al iniciar el chat con el usuario."
          position={TooltipPosition.bottom}>
          <TooltipTarget title="">
            <FaInfoCircle />
          </TooltipTarget>
        </Tooltip>
      </StyledContactsCreatorHeader>
      <div>
        <>
          {objPrueba.map((item) => (
            <StyledNode key={item.position}>{item.text}</StyledNode>
          ))}
        </>
      </div>
    </StyledInitialFlow>
  );
};
