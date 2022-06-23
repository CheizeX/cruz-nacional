/* eslint-disable no-nested-ternary */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { MdOutlineCreditCardOff } from 'react-icons/md';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { Checkbox } from '../../../../../atoms/Checkbox/Checkbox';
import {
  StyledCancelSubscritionInfo,
  StyledCardContainer,
  StyledDeletePaymentMethodConfirmation,
  StyledMethodFooterCancelSubscription,
  StyledMethodFooterDeletePaymentMethod,
  StyledMethodFooterSaveChanges,
  StyledMethodsSection,
} from './MethodsList.styled';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
} from '../../../../../atoms/Button/Button';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../redux/hook/hooks';
import { StripeForm } from '../../CheckoutStripeForm/CheckoutStripeForm';
import { baseRestApi } from '../../../../../../../api/base';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { getSubscriptionsData } from '../../../../../../../redux/slices/subscriptions/subscriptions-info';
import { PlanName } from '../../SubscriptionSection.interface';

interface Props {
  setActiveSection: Dispatch<SetStateAction<string>>;
}
export const MethodsList: FC<Props> = ({ setActiveSection }) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();

  const { paymentMethods } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );
  const { subscriptionsData } = useAppSelector(
    (state) => state.subscriptionsInfo,
  );

  const [activeOverModal, setActiveOverModal] = useState('');
  const [checked, setChecked] = useState(subscriptionsData.mainPaymentMethod);
  const [loading, setLoading] = useState(false);
  const [stripeIdSelected, setStripeIdSelected] = useState('');

  const handleAddNewPaymentMethod = async () => {
    setActiveOverModal('addNewPaymentMethod');
  };

  const handleAcceptDeletePaymentMethod = async (stripeId: string) => {
    if (paymentMethods && paymentMethods.length > 1) {
      if (stripeId !== subscriptionsData.mainPaymentMethod) {
        setActiveOverModal('deletePaymentMethod');
        setStripeIdSelected(stripeId);
      } else {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ATENCION',
          message: `Primero debes elegir otro método de pago como principal`,
        });
      }
    } else {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ATENCION',
        message: `No puedes eliminar el último método de pago`,
      });
    }
  };
  const handleDeletePaymentMethod = async () => {
    setLoading(true);
    try {
      await baseRestApi.delete(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/general/paymentMethod/${stripeIdSelected}`,
      );
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'ATENCION',
        message: `Se ha eliminado el método de pago seleccionado`,
      });
      dispatch(getSubscriptionsData());
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ATENCION',
        message: `Ha ocurrido un error al eliminar el método de pago`,
      });
    }
    setLoading(false);
    setActiveOverModal('');
    setStripeIdSelected('');
  };

  const handleCheckboxClick = (stripeId: string) => {
    setChecked(stripeId);
    setStripeIdSelected(stripeId);
  };
  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/general/establishMainPaymentMethod`,
        { mainPaymentMethod: stripeIdSelected },
      );
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'ATENCION',
        message: `Se ha establecido el método de pago seleccionado`,
      });
      dispatch(getSubscriptionsData());
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ATENCION',
        message: `Ha ocurrido un error al cambiar de método de pago`,
      });
    }
    setLoading(false);
  };

  const handleCancelSubscriptionModal = () => {
    setActiveOverModal('cancelSubscription');
  };
  const handleAcceptCancelSubscription = async () => {
    setLoading(true);
    try {
      await baseRestApi.delete(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/stripe/cancelSubscription`,
      );
      showAlert?.addToast({
        alert: Toast.WARNING,
        title: 'NUEVO PLAN',
        message: `Has cambiado tu plan`,
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
    setActiveSection('');
  };

  const handleRecoverPlan = async () => {
    setLoading(true);
    try {
      await baseRestApi.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/stripe/recoverPlan`,
        {},
      );
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'ATENCION',
        message: `Has recuperado tu plan START nuevamente!!`,
      });
      dispatch(getSubscriptionsData());
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ATENCION',
        message: `Ha ocurrido un error al recuperar el plan`,
      });
    }
    setLoading(false);
  };

  return (
    <StyledMethodsSection>
      <div>
        <Text>Mis métodos de pago</Text>
        <button type="button" onClick={() => setActiveSection('')}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </div>
      <div>
        <div>
          <Text>Tarjeta</Text>
          <Text>Tipo</Text>
          <Text>Número</Text>
          <Text>Expiración</Text>
          <Text>Opciones</Text>
        </div>
      </div>
      <section>
        {paymentMethods?.map(
          ({ stripeId, brand, funding, last4, expMonth, expYear }) => (
            <div key={stripeId}>
              <div>{brand.toUpperCase()}</div>
              <div>{funding === 'debit' ? 'Débito' : 'Crédito'}</div>
              <div>--- {last4}</div>
              <div>
                {expMonth}/{expYear}
              </div>
              <div>
                <Checkbox
                  isTransparent
                  checked={stripeId === checked}
                  onClick={() => handleCheckboxClick(stripeId)}
                />
                <MdOutlineCreditCardOff
                  onClick={() => handleAcceptDeletePaymentMethod(stripeId)}
                />
              </div>
            </div>
          ),
        )}
      </section>

      {subscriptionsData.mainPaymentMethod !== checked && (
        <StyledMethodFooterSaveChanges>
          <ButtonMolecule
            text="Cancelar"
            onClick={() => setActiveSection('')}
            variant={ButtonVariant.OUTLINED}
          />
          <ButtonMolecule
            text="Guardar Cambios"
            onClick={handleSaveChanges}
            state={loading ? ButtonState.LOADING : ButtonState.NORMAL}
          />
        </StyledMethodFooterSaveChanges>
      )}
      {subscriptionsData.mainPaymentMethod === checked && (
        <StyledMethodFooterCancelSubscription>
          <ButtonMolecule
            text="Añadir método de pago"
            onClick={handleAddNewPaymentMethod}
          />
          {subscriptionsData.plan === PlanName.START &&
            !subscriptionsData.generalPlan.downgrade && (
              <span>
                <ButtonMolecule
                  variant={ButtonVariant.OUTLINED}
                  text="Cancelar mi plan START"
                  onClick={handleCancelSubscriptionModal}
                />
              </span>
            )}
          {subscriptionsData.plan === PlanName.START &&
            subscriptionsData.generalPlan.downgrade && (
              <div>
                <ButtonMolecule
                  variant={ButtonVariant.OUTLINED}
                  text="Quiero recuperar mi plan START !"
                  onClick={handleRecoverPlan}
                />
              </div>
            )}
        </StyledMethodFooterCancelSubscription>
      )}
      {activeOverModal === 'addNewPaymentMethod' && (
        <StyledCardContainer>
          <StripeForm
            setShowCard={() => {}}
            setPlanNameSelected={() => {}}
            title="Crear método de pago"
            buttonTitle="Aceptar y añadir el nuevo método"
            onClose={() => setActiveOverModal('')}
            setNumberOfAgentsToAdd={() => {}}
          />
        </StyledCardContainer>
      )}
      {activeOverModal === 'deletePaymentMethod' && (
        <StyledCardContainer>
          <StyledDeletePaymentMethodConfirmation>
            <div>
              <Text>Eliminar método de pago</Text>
              <button type="button" onClick={() => setActiveOverModal('')}>
                <SVGIcon iconFile="/icons/close.svg" />
              </button>
            </div>
            <div>
              <SVGIcon iconFile="/icons/warning.svg" />
              <p>
                Estás seguro que deseas eliminar el método de pago seleccionado?
              </p>
            </div>
            <StyledMethodFooterDeletePaymentMethod>
              <ButtonMolecule
                text="Cancelar"
                onClick={() => setActiveOverModal('')}
                variant={ButtonVariant.OUTLINED}
              />
              <ButtonMolecule
                text="Eliminar"
                onClick={handleDeletePaymentMethod}
                state={loading ? ButtonState.LOADING : ButtonState.NORMAL}
              />
            </StyledMethodFooterDeletePaymentMethod>
          </StyledDeletePaymentMethodConfirmation>
        </StyledCardContainer>
      )}
      {activeOverModal === 'cancelSubscription' && (
        <StyledCardContainer>
          <StyledCancelSubscritionInfo>
            <div>
              <Text>Regrasar al plan FREE</Text>
              <button type="button" onClick={() => setActiveOverModal('')}>
                <SVGIcon iconFile="/icons/close.svg" />
              </button>
            </div>
            <div>
              <span>ATENCION</span>
              <p>
                Al cancelar la suscripción a START, el sistema continuará
                funcionando normalmente hasta que finalicen los días alcanzados
                por el período pactado al momento de suscribirse.
              </p>
              <p>
                El sistema solicitará realizar algunas intervenciones para
                elegir lo que se quiere conservar al momento de llegar la fecha
                de finalización.
              </p>
            </div>
            <StyledMethodFooterCancelSubscription>
              <ButtonMolecule
                text="No! no quiero cancelar la suscripción a START"
                onClick={() => setActiveOverModal('')}
              />
              <ButtonMolecule
                variant={ButtonVariant.OUTLINED}
                text="Si, he decidido cancelar "
                onClick={handleAcceptCancelSubscription}
              />
            </StyledMethodFooterCancelSubscription>
          </StyledCancelSubscritionInfo>
        </StyledCardContainer>
      )}
    </StyledMethodsSection>
  );
};
