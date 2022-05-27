import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  //to solve reloading back to login
  if (loading) {
    return <Loading />
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;

};

export default RequireAuth;