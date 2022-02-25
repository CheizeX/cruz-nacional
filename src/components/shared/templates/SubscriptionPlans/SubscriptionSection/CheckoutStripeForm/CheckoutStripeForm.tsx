/* eslint-disable no-nested-ternary */
import { FC, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { Text } from '../../../../atoms/Text/Text';
import { StyledStripePaymentMethod } from './CheckoutStripeForm.styled';
import { ButtonMolecule, ButtonState } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { SubscriptionSectionItemsProps } from '../SubscriptionSection.interface';
import { baseRestApi } from '../../../../../../api/base';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

export const StripeForm: FC<SubscriptionSectionItemsProps> = ({
  setShowCard,
  setPlanNameSelected,
  planNameSelected,
}) => {
  const showAlert = useToastContext();
  // const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

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
      setLoading(true);
      try {
        await baseRestApi.post(
          `${process.env.NEXT_PUBLIC_REST_API_URL}/stripe/payFirstSubscription`,
          {
            paymentMethodId: paymentMethod?.id,
            planName: planNameSelected,
          },
        );
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'SUSCRIPCIÓN ACEPTADA',
          message: `Gracias por elegir el plan ${planNameSelected}`,
        });
      } catch (err) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'SUSCRIPCIÓN NO ACEPTADA',
          message: `Acepta nuevamente o intenta con otra tarjeta. Muchas gracias.`,
        });
      }
      setLoading(false);
    }
  };

  const handleCloseClick = () => {
    setShowCard(false);
    setPlanNameSelected('');
  };

  return (
    <StyledStripePaymentMethod id="payment-form" onSubmit={handleSubmit}>
      <button type="button" onClick={handleCloseClick}>
        <SVGIcon iconFile="/icons/close.svg" />
      </button>
      <Text>Completar suscripción</Text>
      <CardElement id="payment-element" />
      <ButtonMolecule
        type="submit"
        text={`Aceptar y suscribirme al plan ${planNameSelected}`}
        state={
          !stripe || !elements
            ? ButtonState.DISABLED
            : loading
            ? ButtonState.LOADING
            : ButtonState.NORMAL
        }
      />
      <img
        src="https://stripe.com/about/logos/powered-by-stripe"
        alt="Powered by Stripe"
      />
    </StyledStripePaymentMethod>
  );
};
