import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');


  const { _id, totalPrice, email, name } = order;

  useEffect(() => {
    fetch('https://floating-sierra-37229.herokuapp.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ totalPrice })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      })

  }, [totalPrice])

  const handleSubmit = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message)
    } else {
      setCardError('');

    }

    setSuccess('');
    setProcessing(true);
    // create payment intent 
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email
          },
        },
      },
    );

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError('');
      setTransactionId(paymentIntent.id);
      setSuccess('Congrats! You payment is successful!');

      // store payment data 
      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
        status: 'pending'
      }
      //update paymentinfo
      fetch(`https://floating-sierra-37229.herokuapp.com/order/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)

      }).then(res => res.json()).then(data => {
        setProcessing(false);
        console.log(data);
      })

    }




  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-secondary font-bold btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>

      {
        cardError && <p className='text-red-600'>{cardError}</p>
      }

      {
        success && <div className='text-primary-600 font-semibold'>
          <p> {success}</p>
          <p> Your Tansaction Id: <span className='text-violet-500 font-bold'>{transactionId}</span></p>
        </div>
      }
    </div>
  );
};

export default CheckoutForm;