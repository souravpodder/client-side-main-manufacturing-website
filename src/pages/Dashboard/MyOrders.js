import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [removingOrder, setRemovingOrder] = useState(false);


  // useEffect(() => {
  //   fetch(`http://localhost:5000/payment/${order._id}`)
  //     .then(res => res.json)
  //     .then(data => {
  //       setPayment(data)
  //     })
  // }, [order._id])

  useEffect(() => {
    fetch(`http://localhost:5000/myorders?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMyOrders(data)
      })
  }, [user.email])
  if (loading) {
    return <Loading />
  }



  return (
    <div>

      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">

          <thead>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th>Total Price</th>
              <th>Cancel Order</th>
              <th>Pay Here</th>
            </tr>
          </thead>
          <tbody>

            {
              myOrders.map((order, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.itemName}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {/* <button className='btn btn-xs btn-error font-bold' onClick={() => setRemovingOrder(order)}>Cancel</button> */}
                  <label for="delete-confirm-modal" class="btn btn-sm btn-error" onClick={() => setRemovingOrder(order)}>Cancel</label>
                </td>

                <td>
                  {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-secondary font-bold text-xl'>Pay</button></Link>}
                  {(order.totalPrice && order.paid) && <>
                    <p><span className='text-success'>Paid</span></p>
                    <p>Transaction Id: {order.transactionId}</p>
                  </>}
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {removingOrder && <DeleteOrderModal removingOrder={removingOrder} setRemovingOrder={setRemovingOrder} myOrders={myOrders} setMyOrders={setMyOrders}></DeleteOrderModal>}
    </div>
  );
};

export default MyOrders;