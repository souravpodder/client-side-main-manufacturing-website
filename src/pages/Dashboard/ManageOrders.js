import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ManageOrders = () => {
  const navigate = useNavigate();

  const { data: orders, isLoading, refetch } = useQuery('orders', () =>
    fetch('http://localhost:5000/orders', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        console.log(res);
        if (res.status === 403 || res.status === 401) {
          navigate('/');
          return;
        }
        return res.json();
      })
  )

  if (isLoading) {
    return <Loading />
  }

  const handleShipment = (id) => {
    const statusInfo = {
      status: 'shipped'
    }
    fetch(`http://localhost:5000/order/shipment/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(statusInfo)
    })
      .then(res => res.json())
      .then(data => {
        refetch();
      })

  }

  const handleCancelOrder = (id) => {
    const proceed = window.confirm('Are You sure to delete this order?');
    if (proceed) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          refetch();
        })
    }


  }

  return (
    <div>
      <h2 className='text-3xl text-center text-violet-500 font-bold'>Manage Orders</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">

          <thead>
            <tr>
              <th></th>
              <th>Customer Email</th>
              <th>Total Price</th>
              <th></th>
              <th>Status</th>
              <th>Ship Now</th>
              <th>Cancel Order</th>

            </tr>
          </thead>
          <tbody>

            {
              orders?.map((order, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.email}</td>
                <td>{order.totalPrice}</td>
                <td>{!order.paid && <button className='btn btn-primary btn-xs font-bold text-white'>unpaid</button>}</td>
                <td className='font-bold text-violet-700'>{order.status}</td>
                <td>{order.paid && <button className='btn btn-secondary btn-sm' onClick={() => handleShipment(order._id)}>Ship Now</button>}</td>

                <td>
                  {/* <button className='btn btn-xs btn-error font-bold' onClick={() => setRemovingOrder(order)}>Cancel</button> */}
                  {(!order.paid) && <button className='btn btn-warning btn-sm font-bold text-black' onClick={() => handleCancelOrder(order._id)}>Cancel</button>}


                </td>

                <td>

                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;