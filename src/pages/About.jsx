import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="px-5 my-12 text-center md:max-w-2xl md:mx-auto">
      <div className="text-moderate_blue text-6xl mb-6 max-w-fit mx-auto">
        <FaInfoCircle />
      </div>
      <h1 className="font-bold text-3xl mb-4">About Us</h1>
      <h3 className="font-semibold text-2xl mb-4">Best Comments Section</h3>
      <p className="text-sm font-medium text-grayish_blue mb-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur adipisci culpa eos doloremque laborum
        molestias inventore dolores voluptatem voluptas recusandae. Laborum quae libero odio iste.
      </p>
      <div>
        <Link
          to="/sign-in"
          className="block w-fit mx-auto text-base px-3 py-2 text-white font-medium bg-moderate_blue rounded-md shadow-md hover:scale-95 hover:bg-light_grayish_blue hover:text-dark_blue"
        >
          Want to comment?
        </Link>
      </div>
    </div>
  );
};

export default About;
