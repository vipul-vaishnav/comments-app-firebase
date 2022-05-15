import React from 'react';
import HomeIllustration from '../images/illustration-home.svg';

const Home = () => {
  return (
    <div className="px-5 mt-12 text-center md:max-w-2xl md:mx-auto">
      <div className="max-w-md h-auto">
        <img src={HomeIllustration} className="w-full h-full" alt="no-data" />
      </div>
      <div className="mt-4">
        <h1 className="font-bold text-3xl mb-4">There is nothing here.</h1>
        <p className="text-sm font-medium text-grayish_blue mb-2">
          You need to log in first to view comments and to post comments
        </p>
      </div>
    </div>
  );
};

export default Home;
