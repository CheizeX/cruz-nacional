/* eslint-disable no-nested-ternary */
import { FC, useCallback } from 'react';
import { GrCopy } from 'react-icons/gr';
import { DiJavascript1, DiCss3, DiHtml5 } from 'react-icons/di';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { ScriptsProps } from './Scripts.interface';
import { IPropsScripts } from '../../../../../../models/channels/channel';
import {
  StyledScriptVisualizator,
  StyledScriptVisualizatorBody,
  StyledScriptVisualizatorContainer,
  StyledScriptVisualizatorHeader,
} from './Scripts.styled';

export const Scripts: FC<ScriptsProps> = ({ setScripts }) => {
  const toasts = useToastContext();

  const { scripts } = useAppSelector(
    (state) => state.channel.listChannelState.listChannel?.webchat,
  );

  const handleCopyTextToClipboard = useCallback(
    (arg: string, arg2: string) => {
      navigator.clipboard.writeText(arg);
      toasts?.addToast({
        alert: Toast.SUCCESS,
        title: 'MUY BIEN',
        message: `${arg2} COPIADO AL PORTAPAPELES`,
      });
    },
    [toasts],
  );

  return (
    <StyledScriptVisualizatorContainer>
      <StyledScriptVisualizator>
        <StyledScriptVisualizatorHeader>
          <Text>Scripts de Webchat</Text>
          <button type="button" onClick={() => setScripts(false)}>
            <SVGIcon iconFile="/icons/close.svg" />
          </button>
        </StyledScriptVisualizatorHeader>
        <Text>Copia todos los códigos y pégalos en tu sitio web o app!</Text>
        <StyledScriptVisualizatorBody>
          {scripts
            ? Object.entries(scripts as IPropsScripts).map((key) => (
                <div key={key[0]}>
                  {key[0] === 'js' ? (
                    <DiJavascript1 />
                  ) : key[0] === 'css' ? (
                    <DiCss3 />
                  ) : (
                    <DiHtml5 />
                  )}
                  <GrCopy
                    onClick={() =>
                      handleCopyTextToClipboard(
                        key[1],
                        key[0] === 'div' ? 'HTML' : key[0].toUpperCase(),
                      )
                    }
                  />
                  <p key={key[1]}>{key[1]}</p>
                </div>
              ))
            : null}
        </StyledScriptVisualizatorBody>
      </StyledScriptVisualizator>
    </StyledScriptVisualizatorContainer>
  );
};
