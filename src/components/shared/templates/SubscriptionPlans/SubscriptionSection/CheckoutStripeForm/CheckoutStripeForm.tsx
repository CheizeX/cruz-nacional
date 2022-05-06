/* eslint-disable no-nested-ternary */
import { FC, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { Text } from '../../../../atoms/Text/Text';
import { StyledStripePaymentMethod } from './CheckoutStripeForm.styled';
import { ButtonMolecule, ButtonState } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import {
  SubscriptionSectionItemsProps,
  PlanName,
} from '../SubscriptionSection.interface';
import { baseRestApi } from '../../../../../../api/base';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { getSubscriptionsData } from '../../../../../../redux/slices/subscriptions/subscriptions-info';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';

export const StripeForm: FC<SubscriptionSectionItemsProps> = ({
  setShowCard,
  setPlanNameSelected,
  planNameSelected,
  onClose,
  title,
  buttonTitle,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const { plan } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement) as StripeCardElement,
    });

    if (!error) {
      const stripeDataToBack = {
        stripeId: paymentMethod?.id,
        brand: paymentMethod?.card?.brand,
        expMonth: paymentMethod?.card?.exp_month,
        expYear: paymentMethod?.card?.exp_year,
        funding: paymentMethod?.card?.funding,
        last4: paymentMethod?.card?.last4,
      };
      setLoading(true);

      try {
        if (
          plan === PlanName.ENTERPRISE_TRIAL ||
          plan === PlanName.BUSINESS_TRIAL ||
          plan === PlanName.CORPORATE_TRIAL ||
          plan === PlanName.GROWTH_TRIAL ||
          plan === PlanName.START_TRIAL
        ) {
          await baseRestApi.post(
            `${process.env.NEXT_PUBLIC_REST_API_URL}/stripe/payFirstSubscription`,
            {
              planName: planNameSelected?.replace('_TRIAL', ''),
              paymentMethodData: stripeDataToBack,
            },
          );
        } else {
          await baseRestApi.post(
            `${process.env.NEXT_PUBLIC_REST_API_URL}/general/paymentMethod`,
            stripeDataToBack,
          );
        }

        title
          ? showAlert?.addToast({
              alert: Toast.SUCCESS,
              message: `METODO DE PAGO AGREGADO`,
              title: '',
            })
          : showAlert?.addToast({
              alert: Toast.SUCCESS,
              title: 'SUSCRIPCIÓN ACEPTADA',
              message: `Gracias por elegir el plan ${planNameSelected?.replace(
                '_TRIAL',
                '',
              )}`,
            });
      } catch (err) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'SUSCRIPCIÓN NO ACEPTADA',
          message: `Prueba nuevamente o intenta con otra tarjeta. Muchas gracias.`,
        });
      }
      setLoading(false);
      dispatch(getSubscriptionsData());
      setShowCard(false);
      onClose && onClose();
    } else {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `Intenta nuevamente o prueba con una diferente.`,
      });
    }
  };

  const handleCloseClick = () => {
    setShowCard(false);
    setPlanNameSelected('');
  };

  return (
    <StyledStripePaymentMethod id="payment-form" onSubmit={handleSubmit}>
      <button type="button" onClick={onClose || handleCloseClick}>
        <SVGIcon iconFile="/icons/close.svg" />
      </button>
      <Text>{title || 'Completar suscripción'}</Text>
      <CardElement id="payment-element" />
      <ButtonMolecule
        type="submit"
        text={
          buttonTitle ||
          `Aceptar y suscribirme al plan ${planNameSelected?.replace(
            '_TRIAL',
            '',
          )}`
        }
        state={
          !stripe || !elements
            ? ButtonState.DISABLED
            : loading
            ? ButtonState.LOADING
            : ButtonState.NORMAL
        }
      />
    </StyledStripePaymentMethod>
  );
};
