import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useAdmin from './useAdmin';


const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);

  if (loading) {
    return <Loading />
  }
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>

      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {
            (!admin && user) && <>
              <li><Link to="/dashboard/myorders">My Orders</Link></li>
              <li><Link to="/dashboard/addReview">Add a Review</Link></li>
            </>
          }

          {
            (user || admin) && <li><Link to="/dashboard/myProfile">My Profile</Link></li>
          }
          {
            admin && <>
              <li><Link to="/dashboard/manageorder">Manage Orders</Link></li>
              <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
              <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
              <li><Link to="/dashboard/manageparts">Manage Parts</Link></li>
            </>
          }
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;