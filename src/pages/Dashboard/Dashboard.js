import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className='text-3xl text-center text-violet-500 font-bold'>Welcome to Dashboard</h2>
        <Outlet></Outlet>

      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to="/dashboard">My Orders</Link></li>
          <li><Link to="/dashboard/addReview">Add a Review</Link></li>
          <li><Link to="/dashboard/myProfile">My Profile</Link></li>
          {/* {
          admin && <>
            <li><Link to="/dashboard/users">All Users</Link></li>
            <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
            <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
          </>
        } */}
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;