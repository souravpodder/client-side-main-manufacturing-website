import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // const [currentUser, setCurrentUser] = useState('');


  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    }
  }, [user?.user?.email])

  let errorElement;
  if (error) {
    errorElement = <p className='text-center text-red-600'>Error: {error && error.message}</p>
  }

  if (loading) {
    return <Loading />
  }

  if (user) {
    console.log(user);
    navigate('/');
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    const name = event.target.name?.value;

    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName: name });
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
              <input type="password" placeholder="password" name='password' class="input input-bordered" required />

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