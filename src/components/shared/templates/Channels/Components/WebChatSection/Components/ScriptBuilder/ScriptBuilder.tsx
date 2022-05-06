import { FC, useCallback } from 'react';
import { SpinnerDiamond } from 'spinners-react';
import { DiJavascript1, DiCss3, DiHtml5 } from 'react-icons/di';
import { GrCopy } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { Text } from '../../../../../../atoms/Text/Text';
import {
  StyledScriptWrapper,
  StyledScriptVisualizatorHeader,
  StyledWrapperBodyScripts,
  StyledPayload,
} from './ScriptBuilder.styled';
import { IScriptsBuilder } from './ScriptBuilder.interface';
import { RootState } from '../../../../../../../../redux';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';
import { Toast } from '../../../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../../../molecules/Toast/useToast';

export const ScriptBuilder: FC<IScriptsBuilder> = ({ setIsSectionWebChat }) => {
  const toasts = useToastContext();
  const { scriptsBuilder } = useSelector(
    (state: RootState) => state.channel.listChannelState,
  );

  const handleCopyTextToClipboard = useCallback(
    (arg: string, arg2: string) => {
      navigator.clipboard.writeText(arg);
      toasts?.addToast({
        alert: Toast.SUCCESS,
        title: '¡Perfecto!',
        message: `${arg2} copiado`,
      });
    },
    [toasts],
  );
  return (
    <StyledScriptWrapper
      isCreated={
        !scriptsBuilder.js && !scriptsBuilder.css && !scriptsBuilder.div
      }>
      <StyledScriptVisualizatorHeader>
        <Text>Scripts de Webchat</Text>
        <button type="button" onClick={() => setIsSectionWebChat(false)}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledScriptVisualizatorHeader>
      {!scriptsBuilder.js && !scriptsBuilder.css && !scriptsBuilder.div ? (
        <>
          <Text>Estamos construyendo tu canal de Webchat</Text>
          <Text>
            Tardará unos minutos. Una vez que esté construido tu canal se
            mostraran los scripts o podrás ver los scripts desde la sesión
            principal de canales
          </Text>
        </>
      ) : (
        <>
          <Text>¡Hemos creado tu canal satisfactoriamente!</Text>
          <Text>¡Copia todos los códigos y pégalos en tu sitio web o app!</Text>
        </>
      )}
      <StyledPayload>
        {!scriptsBuilder.js && !scriptsBuilder.css && !scriptsBuilder.div ? (
          <SpinnerDiamond
            color="#8769FF"
            size="100%"
            style={{ maxHeight: '5rem' }}
          />
        ) : (
          <StyledWrapperBodyScripts>
            {Object.entries(scriptsBuilder).map((key) => (
              <div key={key[0]}>
                {key[0] === 'scriptJS' ? <DiJavascript1 /> : null}
                {key[0] === 'scriptCSS' ? <DiCss3 /> : null}
                {key[0] === 'div' ? <DiHtml5 /> : null}
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
            ))}
          </StyledWrapperBodyScripts>
        )}
        <div>
          <img src="/images/capwebchat.png" alt="" />
        </div>
      </StyledPayload>
    </StyledScriptWrapper>
  );
};
