import React from 'react';

const MyPortfolio = () => {
  return (
    <div>
      <div class="hero h-screen bg-base-100">
        <div class="hero-content ">
          <div class="max-w-lg">
            <p className='font-semibold text-xl'><span className='font-bold'>Name: </span> Sourav Podder  </p>
            <p className='font-semibold text-xl'><span className='font-bold'> Email address: </span> spodder37@gmail.com  </p>
            <p className='font-semibold text-xl'><span className='font-bold'> Education: </span>Graduated from Daffodil International University in Bsc. in CSE . Completed my hsc in 2014 and ssc in 2012.  </p>
            <p className='font-semibold text-xl mt-4'><span className='font-bold'> Skills I have learned: </span> <br />  1.HTML, CSS for basic website designs.<br />
              2.Javascript, es6 features.<br />
              3.Usage and application of Git and Github. <br />
              4.React JS, React router, Firebase Authentication. <br />
              5.Backend languages: Node js , express js <br />
              6.Mongo DB  for database storage.     </p>

            <p className='font-bold text-xl mt-5'>These are the links of my three recent projets:</p>
            <p>1.<a href="https://sports-gear-inventory-a38bb.web.app/" target="_blank" className='font-semibold text-blue-600'>Sports Gear Inventory Management Website</a></p>
            <p>2.<a href="https://indepentent-service-providerme.web.app/" target="_blank" className='font-semibold text-blue-600'>Travellers' Point Website</a></p>
            <p>3.<a href="https://food-website-bootstrap5-new.netlify.app/" target="_blank" className='font-semibold text-blue-600'>Foodies Website</a></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;