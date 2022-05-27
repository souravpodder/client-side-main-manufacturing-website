import React from 'react';

const Review = ({ singlereview }) => {
  const { reviewerName, review, ratings } = singlereview;
  return (
    <div>
      <div class="card w-96 h-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{reviewerName}</h2>
          <p>""{review}""</p>
          <p><span className='font-bold'>Ratings:</span> {ratings} stars</p>
        </div>
      </div>
    </div>
  );
};

export default Review;