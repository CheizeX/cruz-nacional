import { FC } from 'react';
import { Radio } from '../../../../../../atoms/RadioButton/RadioButton';
import { Text } from '../../../../../../atoms/Text/Text';
import { IHasApiKey } from './HasApiKey.interface';
import { WrapperHasApiKey } from './HasApiKey.styled';

export const HasApiKey: FC<IHasApiKey> = ({
  radioChecked,
  setRadioChecked,
  handleRadioChange,
}) => {
  return (
    <WrapperHasApiKey>
      <Text>
        Selecciona si ya tienes un apiKey para el canal de WhatsApp Oficial.
      </Text>
      <div>
        <div>
          <a
            href="https://hub.360dialog.com/lp/whatsapp/SvAiK8PA"
            target="_blank"
            rel="noreferrer">
            <div>
              <div />
            </div>
            <Text color="black">Aun no tengo apiAkey</Text>
          </a>
          <button type="button" onClick={() => setRadioChecked('APIKEY')}>
            <Radio
              value="APIKEY"
              checked={radioChecked}
              onChange={handleRadioChange}
            />
            <Text>Ya tengo apiKey</Text>
          </button>
          <div>
            {/* <Text>
              Recuerda que en caso de no tener un apiKey seleciona la opción
              (Aún no tengo apiKey) y podras generar una.
            </Text>
            <br /> */}
            {/* <Text>Para continuar deberas tener un apiKey</Text> */}
          </div>
        </div>
      </div>
    </WrapperHasApiKey>
  );
};
