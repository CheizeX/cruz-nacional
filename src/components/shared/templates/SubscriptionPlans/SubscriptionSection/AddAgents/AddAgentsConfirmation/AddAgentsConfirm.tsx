import { Dispatch, FC, SetStateAction, useState } from 'react';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { baseRestApi } from '../../../../../../../api/base';
import { useAppDispatch } from '../../../../../../../redux/hook/hooks';
import { getSubscriptionsData } from '../../../../../../../redux/slices/subscriptions/subscriptions-info';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
} from '../../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import {
  StyledAddAgentsConfirm,
  StyledAddAgentsConfirmHeader,
  StyledAddAgentsConfirmBody,
  StyledAddAgentsConfirmFooter,
} from './AddAgentsConfirm.styled';
import { GeneralPlanDataProps } from '../../SubscriptionSection.interface';

interface AddAgentsConfirmProps {
  numberOfAgentsToAdd: string;
  setNumberOfAgentsToAdd: Dispatch<SetStateAction<string>>;
  setShowAddAgents: Dispatch<SetStateAction<boolean>>;
  generalPlan: GeneralPlanDataProps;
  setPlanNameSelected: Dispatch<SetStateAction<string>>;
}

export const AddAgentsConfirm: FC<AddAgentsConfirmProps> = ({
  setShowAddAgents,
  numberOfAgentsToAdd,
  setNumberOfAgentsToAdd,
  generalPlan,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [loading, setLoading] = useState(false);

  const handleAddAgentsConfirm = async () => {
    setLoading(true);
    try {
      await baseRestApi.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/stripe/addAgents`,
        {
          quantity: Number(numberOfAgentsToAdd),
        },
      );
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'AGENTES EXTRA',
        message: `Perfecto, has sumado ${numberOfAgentsToAdd}`,
      });
      setNumberOfAgentsToAdd('0');
      dispatch(getSubscriptionsData());
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ATENCION',
        message: `Ha ocurrido un error. Intente nuevamente.`,
      });
    }
    setLoading(false);
    setShowAddAgents(false);
  };

  const handleCloseClick = () => {
    setShowAddAgents(false);
  };

  return (
    <StyledAddAgentsConfirm>
      <StyledAddAgentsConfirmHeader>
        <Text>Completar adquisición de nuevos agentes</Text>
        <button type="button" onClick={handleCloseClick}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledAddAgentsConfirmHeader>
      <StyledAddAgentsConfirmBody>
        <MdOutlineSupportAgent size={40} />
        <Text>
          Actualmente tu suscripción{' '}
          {generalPlan.agentes + generalPlan.agentes_extra}{' '}
          {generalPlan.agentes + generalPlan.agentes_extra > 1
            ? ' agentes'
            : ' agente'}
          .
        </Text>
        {generalPlan.agentes_registrados > 0 && (
          <Text>
            Ya se han registrado {generalPlan.agentes_registrados}{' '}
            {generalPlan.agentes_registrados > 1 ? 'agentes' : 'agente'}.
          </Text>
        )}
        {Number(
          generalPlan.agentes_extra +
            generalPlan.agentes +
            generalPlan.supervisores -
            generalPlan.invitaciones_enviadas,
        ) > 0 && (
          <Text>
            Aún dispones de{' '}
            {generalPlan.agentes_extra +
              generalPlan.agentes +
              generalPlan.supervisores -
              generalPlan.invitaciones_enviadas}{' '}
            {generalPlan.agentes_extra +
              generalPlan.agentes +
              generalPlan.supervisores -
              generalPlan.invitaciones_enviadas >
            1
              ? 'invitaciones'
              : 'invitación'}{' '}
            para enviar.
          </Text>
        )}
        <Text>
          ¿Estás seguro de que quieres agregar {numberOfAgentsToAdd}{' '}
          {Number(numberOfAgentsToAdd) > 1 ? 'agentes' : 'agente'} extra?
        </Text>
      </StyledAddAgentsConfirmBody>
      <StyledAddAgentsConfirmFooter>
        <ButtonMolecule
          variant={ButtonVariant.OUTLINED}
          text="Cancelar"
          onClick={handleCloseClick}
        />
        <ButtonMolecule
          text="Aceptar"
          onClick={handleAddAgentsConfirm}
          state={loading ? ButtonState.LOADING : ButtonState.NORMAL}
        />
      </StyledAddAgentsConfirmFooter>
    </StyledAddAgentsConfirm>
  );
};
