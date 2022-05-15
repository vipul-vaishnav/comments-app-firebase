import React from 'react';
import { FaHome, FaInfoCircle, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white w-full shadow-md px-5 py-4 flex justify-between items-center">
      <div className="flex justify-start items-center gap-6">
        <Link to="/" className="text-moderate_blue hover:text-grayish_blue text-2xl">
          <FaHome />
        </Link>
        <Link to="/about" className="text-moderate_blue hover:text-grayish_blue text-2xl">
          <FaInfoCircle />
        </Link>
      </div>
      <div>
        <Link to="/profile" className="text-moderate_blue hover:text-grayish_blue text-2xl">
          <FaUserCircle />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
