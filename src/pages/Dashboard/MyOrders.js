import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [removingOrder, setRemovingOrder] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`https://floating-sierra-37229.herokuapp.com/myorders?email=${user.email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        console.log(res);
        if (res.status === 403 || res.status === 401) {
          navigate('/');
        }
        return res.json();
      })

      .then(data => {
        // console.log(data);
        setMyOrders(data)
      })
  }, [user.email, navigate])


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
                  {(order.totalPrice && !order.paid) && <label for="delete-confirm-modal" class="btn btn-sm btn-error" onClick={() => setRemovingOrder(order)}>Cancel</label>}


                </td>

                <td>
                  {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-secondary font-bold text-xl'>Pay</button></Link>}
                  {(order.totalPrice && order.paid) && <>
                    <p><span className='text-success font-semibold'>Paid</span></p>
                    <p >Transaction Id:  <span className='font-bold'>{order.transactionId}</span>  </p>
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