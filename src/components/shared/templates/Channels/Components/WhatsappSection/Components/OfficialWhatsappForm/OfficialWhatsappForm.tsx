import { FC } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Text } from '../../../../../../atoms/Text/Text';
import { ContainerInput } from '../../../../../../molecules/Input/ContainerInput';
import {
  StyledWrapperWhatsappForm,
  StyledOfficialWhatsappPhone,
  StyledErrorForm,
} from './OfficialWhatsappFomr.styled';
import 'react-phone-input-2/lib/style.css';
import { IPropsOfficialForm } from './OfficialWhatsappForm.interface';

export const OfficialWhatsappForm: FC<IPropsOfficialForm> = ({
  isPhone,
  isValid,
  isValidPhone,
  handleOnChange,
  handleApiKeyChange,
}) => {
  return (
    <StyledWrapperWhatsappForm isValid={isValid}>
      <Text>
        Para continuar con la integración de Whatsapp debes completar los
        siguientes campos.
      </Text>
      <div>
        <div>
          <StyledOfficialWhatsappPhone>
            <Text>Ingresa el número de teléfono</Text>
            <PhoneInput
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
              }}
              value={isPhone}
              onChange={handleOnChange}
            />
            {!isValidPhone ? (
              <StyledErrorForm>
                <Text>Debes ingresar un número de teléfono</Text>
              </StyledErrorForm>
            ) : null}
          </StyledOfficialWhatsappPhone>
          <div>
            <Text>Ingresa el apiKey</Text>
            <ContainerInput valid={isValid} onChange={handleApiKeyChange} />
            {!isValid ? (
              <StyledErrorForm>
                <Text>Debes ingresar un apiKey</Text>
              </StyledErrorForm>
            ) : null}
          </div>
        </div>
      </div>
    </StyledWrapperWhatsappForm>
  );
};
