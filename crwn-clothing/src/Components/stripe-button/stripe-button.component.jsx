import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JSzQhSHiv0i8ZVwxzh3yCuWKD0bNF1Gd5osMAZRO49bKCPN2fRP3nn0edSrHv1lYd1uCHkiFr9K1L2GRoMia10a00boZ2AG4O';

  const onToken = token => {
    console.log(token);
    alert('Payment Succcessfull');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${priceForStripe}`}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;