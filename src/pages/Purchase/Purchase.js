import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
  const { itemId } = useParams();
  const [user, loading] = useAuthState(auth);

  const [part, setPart] = useState('');
  const [action, setAction] = useState(false);

  useEffect(() => {
    const url = `https://floating-sierra-37229.herokuapp.com/part/${itemId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPart(data);
      })
  }, [itemId])

  const { minimum_order, description, available, name, price, _id } = part;
  console.log(part);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const orderQuantity = event.target.order_quantity?.value;
    const orderInfo = {
      itemId: _id,
      itemName: name,
      name: user?.displayName,
      email: user.email,
      phone: event.target.phone?.value,
      address: event.target.address?.value,
      orderQuantity: orderQuantity,
      totalPrice: price * orderQuantity
    }

    if (orderQuantity < minimum_order) {
      toast.error(`You can not order less than minimum ${minimum_order}pcs`);
      setAction(true);
    } else if (available < orderQuantity) {
      toast.error(`sorry, we have only ${available}pcs available`);
      setAction(true);
    } else {
      toast('order successful');
      fetch('https://floating-sierra-37229.herokuapp.com/order', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(orderInfo)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })

      setAction(false);
    }



  }

  const handleOrder = () => {
    setAction(false);
  }

  return (
    <>
      <div className='flex justify-center items-center mt-10'>
        <div class="card w-96 bg-base-100 shadow-2xl ">
          <div class="card-body">
            <p><span className='font-semibold text-xl'>Item Name:</span> {name}</p>
            <p><span className='font-semibold text-xl'>Description:</span>  {description}</p>
            <p><span className='font-semibold text-xl'>In Stock:</span>  {available}pcs</p>
            <p><span className='font-semibold text-xl'>Minimum Order Quantity: </span>  {minimum_order}pcs</p>
          </div>
        </div>
      </div>
      <div className='h-screen flex justify-center items-center mt-[-50px]'>

        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={handlePlaceOrder}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Customer Name</span>
                </label>
                <input type="text" placeholder={user.displayName} name='name' class="input input-bordered text-xl font-semibold" readOnly />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder={user.email} name='email' class="input input-bordered text-xl font-semibold" readOnly />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input type="text" placeholder="Your Address" name='address' class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Mobile No:</span>
                </label>
                <input type="text" placeholder="Phone No" name='phone' class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Steet No.</span>
                </label>
                <input type="text" placeholder="Street No" name='street' class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Order Quantity</span>
                </label>
                <input type="number" placeholder={minimum_order} name='order_quantity' class="input input-bordered" onBlur={handleOrder} />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary font-bold text-white" type='submit' disabled={action}>Place Order</button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </>
  );
};

export default Purchase;