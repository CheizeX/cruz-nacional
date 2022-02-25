/* eslint-disable no-nested-ternary */
import { FC, useState } from 'react';
import { BiMessageAltX } from 'react-icons/bi';
import { baseRestApi } from '../../../../../../../api/base';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../redux/hook/hooks';
import { getGeneralConfigurationData } from '../../../../../../../redux/slices/configuration/configuration-info';
import {
  ButtonMolecule,
  ButtonState,
} from '../../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { ConfigSectionInterface } from '../../../ConfigurationSection/ConfigurationSection.interface';
import {
  StyledOutOfHourMessage,
  StyledOutOfHourMessageBodySetted,
  StyledOutOfHourMessageBodyWithoutSet,
  StyledOutOfHourMessageHeader,
  StyledOutOfHourTextarea,
} from './OutOfHourMessage.styled';

export const OutOfHourMessage: FC<ConfigSectionInterface> = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { generalConfigurationData } = useAppSelector(
    (state) => state.configurationInfo,
  );
  const { outOfTimeMessage } = generalConfigurationData;

  const [loading, setLoading] = useState(false);
  const [validateEmptyMessage, setValidateEmptyMessage] =
    useState(outOfTimeMessage);

  const [enabledEditMessage, setEnabledEditMessage] = useState(false);
  const [text, setText] = useState(validateEmptyMessage || '');

  const handleSaveMessage = async () => {
    setLoading(true);
    setValidateEmptyMessage(text.trim());
    try {
      await baseRestApi.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/saveOutOfTimeMessage`,
        {
          outOfTimeMessage: text,
        },
      );
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'MÁXIMO ACTUALIZADO',
        message: `Se ha seteado el nuevo mensaje`,
      });
      dispatch(getGeneralConfigurationData());
      setEnabledEditMessage(false);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR AL ACTUALIZAR',
        message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
      });
      setText(validateEmptyMessage);
    }
    setLoading(false);
  };

  return (
    <>
      <StyledOutOfHourMessage>
        <StyledOutOfHourMessageHeader>
          <Text>Mensaje fuera de horario</Text>
          {validateEmptyMessage !== '' && !enabledEditMessage && (
            <button type="button" onClick={() => setEnabledEditMessage(true)}>
              <SVGIcon iconFile="/icons/pen.svg" />
            </button>
          )}
          {enabledEditMessage && (
            <button type="button" onClick={() => setEnabledEditMessage(false)}>
              <SVGIcon iconFile="/icons/collapse-left.svg" />
            </button>
          )}
        </StyledOutOfHourMessageHeader>
        {validateEmptyMessage === '' && !enabledEditMessage ? (
          <>
            <StyledOutOfHourMessageBodyWithoutSet>
              <BiMessageAltX />
              <Text color="#B2B2B2">
                No has establecido un mensaje predeterminado.
              </Text>
            </StyledOutOfHourMessageBodyWithoutSet>
            <ButtonMolecule
              text="Establecer"
              onClick={() => setEnabledEditMessage(true)}
            />
          </>
        ) : (
          <>
            <StyledOutOfHourMessageBodySetted>
              <StyledOutOfHourTextarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={!enabledEditMessage}
                placeholder="Escribe aquí un mensaje personalizado para los usuarios que quieran comunicarse fuera del horario de atención establecido..."
              />
              {enabledEditMessage && (
                <ButtonMolecule
                  text="Guardar nuevo mensaje"
                  onClick={handleSaveMessage}
                  state={
                    loading
                      ? ButtonState.LOADING
                      : validateEmptyMessage === text
                      ? ButtonState.DISABLED
                      : ButtonState.NORMAL
                  }
                />
              )}
            </StyledOutOfHourMessageBodySetted>
          </>
        )}
      </StyledOutOfHourMessage>
    </>
  );
};
