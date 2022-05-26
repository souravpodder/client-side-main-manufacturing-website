import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let errorElement;
  if (error) {
    errorElement = <p className='text-center text-red-600'>Error: {error && error.message}</p>
  }

  if (loading) {
    return <p>loading...</p>;
  }

  if (user) {
    navigate('/');
  }

  const handleSignUp = event => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;

    createUserWithEmailAndPassword(email, password);
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form onSubmit={handleSignUp}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" name='name' class="input input-bordered" required />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" name='email' class="input input-bordered" required />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" name='password' class="input input-bordered" required />

            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" type='submit'>Sign Up</button>
            </div>
          </form>

          {errorElement}

          <p className='text-center'>Already Registered? <Link to="/login" className='text-primary font-bold'>Login here!</Link></p>

        </div>
      </div>

    </div>
  );
};

export default Register;