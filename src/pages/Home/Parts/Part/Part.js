import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
  const { _id, name, img, description, minimum_order, price, available } = part;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="part-img" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p className='font-semibold'>Price: ${price}/pcs</p>
          <p className='font-semibold'>Available: {available}pcs</p>
          <p className='font-semibold'>Minimum Order: {minimum_order}pcs</p>

          <div class="card-actions">
            <Link to={`/purchase/${_id}`}><button class="btn btn-primary font-bold text-white">Buy Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;