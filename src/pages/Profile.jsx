import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="px-5 my-12 text-center md:max-w-2xl md:mx-auto">
      <div className="text-moderate_blue text-6xl mb-6 max-w-fit mx-auto">
        <FaUserCircle />
      </div>
      <h1 className="font-bold text-3xl mb-4">User Not Logged In</h1>
      <h3 className="font-semibold text-xl mb-4">Either Sign In or Create a new account to comment</h3>
      <div className="flex flex-col gap-4">
        <Link
          to="/sign-up"
          className="block w-fit mx-auto text-base px-3 py-2 text-white font-medium bg-moderate_blue rounded-md shadow-md hover:scale-95 hover:bg-light_grayish_blue hover:text-dark_blue"
        >
          Create a new account
        </Link>

        <p className="text-grayish_blue text-base font-semibold">Or</p>

        <Link to="/sign-in" className="font-semibold text-moderate_blue">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Profile;
