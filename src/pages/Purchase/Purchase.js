import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
  const { itemId } = useParams();
  const [user, loading] = useAuthState(auth);

  return (
    <div className='h-screen flex justify-center items-center'>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" placeholder={user.displayName} name='name' class="input input-bordered text-xl font-semibold" readOnly />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder={user.email} name='email' class="input input-bordered text-xl font-semibold" readOnly />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input type="text" placeholder="Your Address" name='address' class="input input-bordered" required />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Mobile No:</span>
              </label>
              <input type="text" placeholder="Phone No" name='phone' class="input input-bordered" required />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Steet No.</span>
              </label>
              <input type="text" placeholder="Street No" name='street' class="input input-bordered" />

            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary font-bold text-white" type='submit'>Place Order</button>
            </div>
          </form>

        </div>
      </div>

    </div>
  );
};

export default Purchase;