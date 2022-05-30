import React from 'react';

import make from '../../../assets/images/make.jpg';
import './Banner.css';
import cameraparts from '../../../assets/images/cameraparts.jpg';

const Banner = () => {
  return (

    <div className='hero hero-banner bg-no-repeat bg-cover bg-blue-500 bg-opacity-100'>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={cameraparts} className=" banner-img rounded-lg shadow-2xl shrink-0" alt='banner-img' />
        <div className='mr-10 px-10'>
          <h1 className="text-5xl font-bold text-secondary">Get All the Neccessary camera parts in one place</h1>
          <p className="py-6 font-semibold">We manufacture all the useful parts of different variations of cameras. While the parts of a camera will vary from model to model, basic parts are found on virtually every camera. Our parts are used to make almost every variations of cameras you encounter. These parts can benefit the distributors by making many high capacity with a highly profitable cost. </p>
          <button className='btn btn-primary' >Contact Us</button>
        </div>
      </div>
    </div>

  );
};

export default Banner;