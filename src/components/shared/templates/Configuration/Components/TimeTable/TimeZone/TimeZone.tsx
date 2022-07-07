/* eslint-disable no-nested-ternary */
import { FC, useState } from 'react';
import TimezoneSelect, { allTimezones } from 'react-timezone-select';
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
import { Text } from '../../../../../atoms/Text/Text';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import {
  StyledTimeZone,
  StyledTimeZoneBody,
  StyledTimeZoneHeader,
} from './TimeZone.styled';

export const TimeZone: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { timezone } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData,
  );

  const [loading, setLoading] = useState(false);

  const [selectedTimezone, setSelectedTimezone] = useState<any>({
    value: timezone,
  });

  const colourStyles = {
    control: (styles: any, { isFocused, isSelected }: any) => {
      return {
        ...styles,
        ...((isFocused || isSelected) && {
          color: '#FFF',
          outline: '1px solid #8520D0',
          border: '1px solid #8520D0',
          '&:hover': {
            outline: '1px solid #8520D0',
            border: '1px solid #8520D0',
            boxShadow: 'none',
          },
        }),
      };
    },
    option: (styles: any, { isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        color: 'black',
        fontSize: '12px',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ...(isSelected && {
          backgroundColor: '#8520D0',
          color: '#FFF',
        }),
        ...(isFocused && {
          backgroundColor: '#876CD0',
          color: '#FFF',
        }),
      };
    },
  };

  const handleSaveTimeZone = async () => {
    setLoading(true);
    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/saveTimezone`,
        {
          newTimezone: selectedTimezone.value,
        },
      );
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'NUEVA ZONA HORARIA',
        message: `Se ha seteado la nueva zona horaria`,
      });
      dispatch(getGeneralConfigurationData());
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR AL ACTUALIZAR',
        message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
      });
    }
    setLoading(false);
  };

  return (
    <StyledTimeZone title="">
      <StyledTimeZoneHeader>
        <Text>Zona Horaria</Text>
        {/* <Tooltip
          text="Setea tu zona horaria para que los horarios definidos funcionen correctamente"
          position={TooltipPosition.left}>
          <TooltipTarget>
            <FaInfoCircle />
          </TooltipTarget>
        </Tooltip> */}
      </StyledTimeZoneHeader>
      <StyledTimeZoneBody>
        <TimezoneSelect
          styles={colourStyles}
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          timezones={{
            ...allTimezones,
          }}
          labelStyle="abbrev"
        />
      </StyledTimeZoneBody>
      <ButtonMolecule
        text="Establecer Zona Horaria"
        onClick={() => handleSaveTimeZone()}
        state={
          loading
            ? ButtonState.LOADING
            : timezone === selectedTimezone.value
            ? ButtonState.DISABLED
            : ButtonState.NORMAL
        }
      />
    </StyledTimeZone>
  );
};
