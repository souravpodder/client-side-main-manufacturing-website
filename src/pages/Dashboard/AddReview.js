import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const handleReview = (event) => {
    event.preventDefault();
    const review = event.target.review?.value;
    const ratings = event.target.ratings?.value;
    const reviewDetails = {
      reviewerName: user.displayName,
      review,
      ratings,
    }

    fetch('http://localhost:5000/addreview', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(reviewDetails)
    })
      .then(res => res.json())
      .then(data => {
        toast('Your Review has been recorded');
      })

  }
  return (
    <div>
      <p className='text-3xl text-center text-secondary'>Please add a review About Us</p>
      <div className='h-90 flex justify-center mt-10'>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={handleReview}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea type="text" placeholder="your review" name='review' class="input input-bordered textarea h-[130px]" required ></textarea>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Ratings</span>
                </label>
                <input type="text" placeholder="Your Ratings" name='ratings' class="input input-bordered" required />

              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary font-bold text-white" type='submit'>Add Review</button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AddReview;