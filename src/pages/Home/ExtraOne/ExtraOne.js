import React from 'react';
import partmake from '../../../assets/images/partmake.jpg';

const ExtraOne = () => {
  return (
    <div>
      <div class="hero h-[100vh] lg:h-[70vh] bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={partmake} class="rounded-lg shadow-2xl w-[700px] " alt='' />
          <div className='pr-6 pl-12'>
            <h1 class="text-4xl font-bold text-secondary">We Manufacture with great Care</h1>
            <p class="py-6  font-semibold">A camera module is a set of components working together, so choosing the right set of parts is crucial for every module. We work with some of the most well-known component suppliers in the world including Realtek, Sony, Aptina and the rest, ensuring the outstanding price/performance ratio to each module. We always try to maintain the build quality of each and every parts. Maintainig the quality is always a challenge to us. We are by far successful in the process because of the support of our customers and our team management.  </p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ExtraOne;