import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="px-5 my-12 text-center md:max-w-2xl md:mx-auto">
      <h1 className="font-bold text-3xl mb-4">404 Not Found</h1>
      <p className="text-sm font-medium text-grayish_blue mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis omnis iusto praesentium, accusantium
        quibusdam!
      </p>
      <div>
        <Link
          to="/"
          className="block w-fit mx-auto text-base px-3 py-2 text-white font-medium bg-moderate_blue rounded-md shadow-md hover:scale-95 hover:bg-light_grayish_blue hover:text-dark_blue"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
