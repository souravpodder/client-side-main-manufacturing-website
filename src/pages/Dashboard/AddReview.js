import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

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
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(reviewDetails)
    })
      .then(res => {
        console.log(res);
        if (res.status === 403 || res.status === 401) {
          navigate('/');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        if (data.message !== "Forbidden Access") {

          toast('Your Review has been recorded');
        }
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