/* eslint-disable no-nested-ternary */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledChangePlan,
  StyledChangePlanHeader,
  StyledChangePlanBody,
  StyledChangePlanFooter,
} from './ChangePlan.styled';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { baseRestApi } from '../../../../../../api/base';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { getSubscriptionsData } from '../../../../../../redux/slices/subscriptions/subscriptions-info';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { PlanName } from '../SubscriptionSection.interface';

interface ChangePlanProps {
  planNameSelected: string;
  setChangePlan: Dispatch<SetStateAction<boolean>>;
}

export const ChangePlan: FC<ChangePlanProps> = ({
  planNameSelected,
  setChangePlan,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [loading, setLoading] = useState(false);

  const { plan } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );

  const scalePlan = [PlanName.FREE, PlanName.START];
  const actualPlanPosition = scalePlan.findIndex(
    (planName) => planName === plan,
  );
  const selectedPlanPosition = scalePlan.findIndex(
    (planName) => planName === planNameSelected,
  );

  const handleChangePlan = async () => {
    setLoading(true);
    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/stripe/changePlan`,
        {
          productId: planNameSelected,
        },
      );
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'NUEVO PLAN',
        message: `Ahora su plan es ${planNameSelected}`,
      });
      dispatch(getSubscriptionsData());
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ATENCION',
        message: `Ha ocurrido un error. Intente nuevamente.`,
      });
    }
    setLoading(false);
    setChangePlan(false);
  };

  const handleCloseClick = () => {
    setChangePlan(false);
  };

  return (
    <StyledChangePlan>
      <StyledChangePlanHeader>
        <Text>
          {plan === PlanName.FREE || plan === PlanName.START_TRIAL
            ? 'Iniciar suscripción'
            : 'Comenzar período de prueba'}
        </Text>
        <button type="button" onClick={handleCloseClick}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledChangePlanHeader>
      <StyledChangePlanBody>
        <SVGIcon iconFile="/icons/warning.svg" />
        {plan === PlanName.FREE ? (
          <Text>
            Actualmente estás utilizando nuestro plan <span>FREE</span> y
            escogiste la opción de comenzar a utilizar el período de prueba de
            nuestro plan <span>START</span> durante 14 días.
          </Text>
        ) : (
          <Text>
            Actualmente estás dentro del período de prueba del plan{' '}
            <span>START</span> y has seleccionado la opción de adquirir la
            suscripción del mismo.
          </Text>
        )}
        {selectedPlanPosition < actualPlanPosition ? (
          <Text>
            ¿Estás seguro de que deseas cambiar a un plan inferior y renunciar a
            las funcionalidades del plan actual?
          </Text>
        ) : plan === PlanName.FREE ? (
          <Text>Haz click en Aceptar para comenzar a probarlo</Text>
        ) : (
          <Text>Haz click en Aceptar para iniciar la suscripción</Text>
        )}
      </StyledChangePlanBody>
      <StyledChangePlanFooter>
        <ButtonMolecule
          variant={ButtonVariant.OUTLINED}
          text="Cancelar"
          onClick={handleCloseClick}
        />
        <ButtonMolecule
          text="Aceptar"
          onClick={handleChangePlan}
          state={loading ? ButtonState.LOADING : ButtonState.NORMAL}
        />
      </StyledChangePlanFooter>
    </StyledChangePlan>
  );
};
