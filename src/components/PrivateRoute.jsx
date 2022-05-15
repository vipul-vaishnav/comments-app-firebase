import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const PrivateRoute = () => {
  return (
    <div className="px-5 my-12 text-center md:max-w-2xl md:mx-auto">
      <div className="mx-auto mb-6 text-6xl text-moderate_blue max-w-fit">
        <FaUserCircle />
      </div>
      <h1 className="mb-4 text-3xl font-bold">User Not Logged In</h1>
      <h3 className="mb-4 text-xl font-semibold">Either Sign In or Create a new account to comment</h3>
      <div className="flex flex-col gap-4">
        <Link
          to="/sign-up"
          className="block px-3 py-2 mx-auto text-base font-medium text-white rounded-md shadow-md w-fit bg-moderate_blue hover:scale-95 hover:bg-light_grayish_blue hover:text-dark_blue"
        >
          Create a new account
        </Link>

        <p className="text-base font-semibold text-grayish_blue">Or</p>

        <Link to="/sign-in" className="font-semibold text-moderate_blue">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default PrivateRoute;
