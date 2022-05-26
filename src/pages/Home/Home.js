import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Parts from './Parts/Parts';

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummary />
    </div>
  );
};

export default Home;