import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { GrLike } from 'react-icons/gr';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';
import './BusinessSummary.css';

const BusinessSummary = () => {
  return (
    <div className=''>
      <h3 className='text-center py-5 text-4xl font-bold text-primary uppercase'>Our Business is Growing on Trust</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 py-16 gap-5 summary-section'>

        <div class="card w-79  bg-base-100 shadow-xl">
          <div class=" card-body text-center">
            <p className='w-50 mx-auto text-center text-4xl'><BsPeopleFill /></p>
            <p className='text-3xl font-bold'>340+</p>
            <p className='font-semibold text-orange-600'>Happy Customers</p>
          </div>
        </div>

        <div class="card  w-79 bg-base-100 shadow-xl">
          <div class=" card-body text-center">
            <p className='w-50 mx-auto text-center text-4xl'><GrLike /></p>
            <p className='text-3xl font-bold'>1020+</p>
            <p className='font-semibold text-orange-600'>Feedbacks</p>
          </div>
        </div>
        <div class="card  w-79  bg-base-100 shadow-xl">
          <div class=" card-body text-center">
            <p className='w-50 mx-auto text-center text-4xl'><GiReceiveMoney /></p>
            <p className='text-3xl font-bold'>80M+</p>
            <p className='font-semibold text-orange-600'>Annual Revenue</p>
          </div>
        </div>
        <div class="card  w-79  bg-base-100 shadow-xl">
          <div class=" card-body text-center">
            <p className='w-50 mx-auto text-center text-4xl'><FaTools /></p>
            <p className='text-3xl font-bold'>45+</p>
            <p className='font-semibold text-orange-600'>Parts</p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default BusinessSummary;