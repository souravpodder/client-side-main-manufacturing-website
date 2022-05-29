import React, { useEffect, useState } from 'react';
import Part from './Part/Part';

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch('https://floating-sierra-37229.herokuapp.com/parts')
      .then(res => res.json())
      .then(data => setParts(data))
  }, [])
  return (
    <div className='w-11/12 m-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4'>
        {
          parts.map(part => <Part key={part._id} part={part} />)
        }
      </div>
    </div>
  );
};

export default Parts;