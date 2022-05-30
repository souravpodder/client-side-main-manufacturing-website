import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import ExtraOne from './ExtraOne/ExtraOne';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <ExtraOne />
      <BusinessSummary />
      <Reviews />
    </div>
  );
};

export default Home;