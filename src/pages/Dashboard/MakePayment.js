import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L2zfAAVOHxdpQcyVc6qWWViya7NNQvDWUHSB6iZ6wHxWLARCvZGBG8W7O6eB5uWGcMQu2Im4gH4Yih3hfPj02mK00tYLcNKnX');

const MakePayment = () => {
  const { id } = useParams();
  const url = `https://floating-sierra-37229.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()))

  // console.log(appointment);

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Pay for: {order.itemName}</h2>
              <p>Please Pay: ${order.totalPrice}</p>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;