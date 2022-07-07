/* eslint-disable no-nested-ternary */
import React, { FC } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Text } from '../../../../../atoms/Text/Text';
import { baseRestApi } from '../../../../../../../api/base';
import {
  StyledTagsConfiguration,
  StyledTagsConfigurationBody,
  StyledTagsConfigurationHeader,
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
} from './TagsConfiguration.styled';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../redux/hook/hooks';
import { getGeneralConfigurationData } from '../../../../../../../redux/slices/configuration/configuration-info';
import { Tooltip } from '../../../../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../../../../atoms/Tooltip/tooltip.interface';
import { TooltipTarget } from '../../../../../atoms/Tooltip/tooltip.styled';

export const TagsConfiguration: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const { filterEnabled } = useAppSelector(
    (state) => state.configurationInfo.generalConfigurationData,
  );

  const handleActive = async (arg: boolean) => {
    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/settings/switchFilterEnabled`,
        {
          filterEnabled: arg,
        },
      );
      dispatch(getGeneralConfigurationData());
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `Inténtelo nuevamente o de lo contrario consulte con el administrador`,
      });
    }
  };

  return (
    <StyledTagsConfiguration>
      <StyledTagsConfigurationHeader>
        <Text>Restricciones a través de Etiquetas</Text>
        <Tooltip
          text="Los SUPERVISORES tienen acceso a diferentes secciones ( Monitor - Dashboard - Estadísticas - Reportes ). Cuando uno de ellos se encuentra vinculado a una Etiqueta, se puede elegir que su acceso se vea limitado por las mismas, o bien que pueda acceder a todo el contenido sin ninguna restricción."
          position={TooltipPosition.bottom}>
          <TooltipTarget>
            <FaInfoCircle />
          </TooltipTarget>
        </Tooltip>
      </StyledTagsConfigurationHeader>
      <StyledTagsConfigurationBody>
        <span>
          {filterEnabled ? (
            <Text color="#50da71">
              Los SUPERVISORES tienen acceso limitado según sus etiquetas
            </Text>
          ) : (
            <Text color="#bec0be">
              Los SUPERVISORES tienen acceso libre a todo el contenido
            </Text>
          )}
          <div>
            {filterEnabled ? (
              <ToogleComponentForMappedRestrictions
                onClick={() => handleActive(false)}>
                <div />
              </ToogleComponentForMappedRestrictions>
            ) : (
              <ToogleComponentForMappedRestrictionsNoSel
                onClick={() => handleActive(true)}>
                <div />
              </ToogleComponentForMappedRestrictionsNoSel>
            )}
          </div>
        </span>
      </StyledTagsConfigurationBody>
    </StyledTagsConfiguration>
  );
};
