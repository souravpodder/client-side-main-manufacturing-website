import React from 'react';
// import chair from '../../assets/images/chair.png';
// import PrimaryButton from '../Shared/Navbar/PrimaryButton';
import make from '../../../assets/images/make.jpg';
import './Banner.css';

const Banner = () => {
  return (

    <div className='hero hero-banner bg-no-repeat bg-cover bg-blue-500 bg-opacity-100'>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={make} className="max-w-sm banner-img rounded-lg shadow-2xl" alt='banner-img' />
        <div className='mr-10'>
          <h1 className="text-5xl font-bold pr-5">Your New Smile Starts here</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className='btn btn-primary' >Get Started</button>
        </div>
      </div>
    </div>

  );
};

export default Banner;