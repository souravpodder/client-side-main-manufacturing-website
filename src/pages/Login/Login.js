import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';


const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [token] = useToken(user || googleUser);
  // handle error 
  let errorElement;
  if (error) {
    errorElement = <p className='text-center text-red-600 fw-bold'>Error: {error && error.message}</p>
  }

  let googleErrorElement;
  if (googleError) {
    googleErrorElement = <p className='text-red-600 text-center fw-bold'>{googleError?.message}</p>
  }


  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])

  if (loading || googleLoading) {
    return <Loading />;
  }



  const googleSignIn = async () => {
    signInWithGoogle();
  }


  // get the email and passewor 
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleLogin = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }


  return (

    <div className='h-screen flex justify-center items-center'>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form onSubmit={handleLogin}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" name='email' class="input input-bordered" onBlur={handleEmailBlur} required />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' onBlur={handlePasswordBlur} class="input input-bordered" required />

            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary font-bold text-white" type='submit'>Login</button>
            </div>
          </form>
          {errorElement}

          <p className='text-center'>Not Registered Yet? <Link to="/register" className='font-bold text-primary'>Register Now!</Link></p>
          <div class="divider">OR</div>
          <div class="form-control">
            <button class="btn btn-secondary font-bold text-white" onClick={googleSignIn} >Continue with google</button>
          </div>
          {googleErrorElement}
        </div>
      </div>

    </div>

  );
};

export default Login;