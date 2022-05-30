import React from 'react';
import notFound from '../../assets/images/NotFound.jpg';

const NotFound = () => {
  return (
    <div className='bg-white'>
      <img className='w-screen h-[800px] bg-white' src={notFound} alt="" />
    </div>
  );
};

export default NotFound;