import { FC } from 'react';
import {
  WrapperPedefinedMessage,
  ContainerMessage,
  StyledBoxContainer,
} from './PredefinedMessage.styled';
import { IPredefinedMessage } from './PredefinedMessage.interface';
// import { NestedMessage } from '../../ChatsSection/ChatsSection.shared';
import { Text } from '../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';

export const PredefinedMessage: FC<IPredefinedMessage> = ({
  focusRef,
  setShowPredefinedTexts,
  setChatInputDialogue,
  showPredefinedTexts,
  sectionNext,
  agent,
  setIsSecionNext,
}) => {
  const NestedMessage = [
    {
      id: 1,
      message: `Notificación de asignación de agente `,
      content: `Hola soy ${agent} y tendre el gusto de atender tu solicitud`,
    },
    {
      id: 2,
      message: 'Actualización de datos',
      content: '1. Tipo y Número de Documento (sin punto ni espacios)',
    },
    {
      id: 3,
      message:
        'La solicitud la realiza el COTIZANTE, el agente o asesor debe realizar las siguientes preguntas de seguridad',
      content: `  1. Confirmar la fecha de nacimiento (Verificando en aplicativo Estados) 
  2. Confirmar el número de beneficiarios activos en su contrato
  3. Confirmar si tiene beneficiarios afiliados mayores de 60 años. Si las respuestas son correctas, se actualizarán los datos básicos Si las respuestas son incorrectas, se le agendará cita Presencial (Centros de Soluciones en salud), debe llevar su documento de identidad Nota: El cotizante podrá actualizar los datos de los beneficiarios menores a 18 años con los que cuente en su grupo familiar`,
    },
    {
      id: 4,
      message:
        'Si la solicitud la realiza el BENEFICIARIO, el analista o asesor debe realizar las siguientes preguntas de seguridad',
      content: `  1.Confirmar la fecha de nacimiento (Verificando en aplicativo Estados) 
  2.Confirmar la dirección de residencia registrada actualmente 
  3.Confirman número de cédula del Cotizante Si las respuestas son correctas, se actualizarán los datos básicos Si las respuestas son incorrectas, se le agendará cita Presencial (Centros de Soluciones en salud), debe llevar su documento de identidad Nota El beneficiario podrá actualizar únicamente sus datos si es mayor de edad, y no podrá actualizar los datos de ningún otro miembro del grupo Familiar`,
    },
    {
      id: 5,
      message: 'Solicitud de identificación',
      content:
        'Me permites tipo y número de documento (el número sin puntos, ni espacios), por favor.',
    },
    {
      id: 5,
      message: 'Otras respuestas',
      content: [
        '¿Continuas en línea?',
        'Muchas gracias por tu  información.',
        'Fue un gusto atenderte, que tengas buen día.',
        'Esperamos que la respuesta allá sido de tu entera satisfacción y responda a las necesidades planteadas, que tengas buen día.',
        '¿Algo más en lo que te pueda colaborar?',
        'Muy amable por tu espera en línea,',
        'Me confirmas por favor número de documento para verificar la información.',
        'Sigo validando tu solicitud, permíteme unos minutos más por favor.',
      ],
    },
    {
      id: 6,
      message: 'Radicar Queja',
      content: `Le informamos que todas sus opiniones, sugerencias, felicitaciones y quejas las recibimos a través de los siguientes canales: 
        • Página web www.saludtotal.com.co: A través de Te Escuchamos 
        • Línea Total y de Atención al Protegido. 
        • Buzones ubicados en Unidades Propias y de red externa. 
        • Oficinas de Atención al Usuario`,
    },
    {
      id: 7,
      message: 'Despedida',
      content: '¿Te puedo colaborar en algo más?',
    },
  ];

  const handleShowComponent = () => {
    setIsSecionNext(!sectionNext);
  };
  const handleSetInputDialogue = (text: string) => {
    setShowPredefinedTexts(false);
    setChatInputDialogue(text);
    if (focusRef && focusRef.current) {
      focusRef.current.focus();
    }
  };

  return (
    <WrapperPedefinedMessage>
      <ContainerMessage showPredefinedTexts={showPredefinedTexts}>
        {NestedMessage &&
          NestedMessage.map((text, index) => (
            <div key={index.toString()}>
              <button
                type="button"
                onClick={() =>
                  !Array.isArray(text.content)
                    ? handleSetInputDialogue(text.content)
                    : handleShowComponent()
                }>
                <Text color="gray" size="12px" key={text.message}>
                  {text.message}
                </Text>
                {Array.isArray(text.content) &&
                  (sectionNext ? (
                    <SVGIcon iconFile="/icons/collapse-left.svg" />
                  ) : (
                    <SVGIcon iconFile="/icons/collapse-right.svg" />
                  ))}
              </button>
              <div>
                {sectionNext && Array.isArray(text.content) && (
                  <StyledBoxContainer showPredefinedTexts={showPredefinedTexts}>
                    <div>
                      {text.content.map((item, i) => (
                        <div key={i.toString()}>
                          <button
                            type="button"
                            onClick={() => handleSetInputDialogue(item)}>
                            <Text color="gray" size="12px">
                              {item}
                            </Text>
                          </button>
                        </div>
                      ))}
                    </div>
                  </StyledBoxContainer>
                )}
              </div>
            </div>
          ))}
      </ContainerMessage>
    </WrapperPedefinedMessage>
  );
};
