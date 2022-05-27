import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [])
  return (
    <>
      <h3 className='text-3xl text-center text-violet-700 mt-10'> Customer Reviews</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-4 w-full'>
        {
          reviews.map(singlereview => <Review key={singlereview._id} singlereview={singlereview}></Review>)
        }
      </div>
    </>

  );
};

export default Reviews;