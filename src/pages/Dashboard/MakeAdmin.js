import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const MakeAdmin = () => {
  // const [users, setUsers] = useState('');
  const navigate = useNavigate();

  const { data: users, isLoading, refetch } = useQuery('users', () =>
    fetch('https://floating-sierra-37229.herokuapp.com/users', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => {
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

  const appointAdmin = (email) => {
    fetch(`https://floating-sierra-37229.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
    })
      .then(res =>
        res.json()
      )
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success('Successfully Made an admin!');
        }
      })
  }


  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users?.map(user => <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.role !== 'admin' && <button class="btn btn-active btn-secondary font-bold text-white" onClick={() => appointAdmin(user.email)}>Make Admin</button>}</td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;