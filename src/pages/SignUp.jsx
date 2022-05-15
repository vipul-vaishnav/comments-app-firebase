import React, { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [fromData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const { email, password, name } = fromData;

  const onChange = (e) => {
    const newData = {
      [e.target.id]: e.target.value,
    };

    setFormData((prev) => {
      return {
        ...prev,
        ...newData,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(fromData);
  };
  return (
    <div className="px-5 my-12 text-center">
      <div className="text-moderate_blue text-6xl mb-6 max-w-fit mx-auto">
        <FaRegCommentDots />
      </div>
      <h1 className="font-bold text-3xl mb-4">Welcome!</h1>
      <div className="bg-very_light_gray py-6 w-full px-4 shadow-lg rounded-md">
        <h3 className="text-left mb-4 font-medium text-2xl">Create a new account</h3>
        <form onSubmit={onSubmit} className="w-full">
          <div className="mt-3">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
              autoComplete="off"
              className="w-full bg-transparent pl-4 py-2 pb-3 border-b caret-moderate_blue border-dark_blue outline-0 placeholder-grayish_blue"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-3">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              autoComplete="off"
              className="w-full bg-transparent pl-4 py-2 pb-3 border-b caret-moderate_blue border-dark_blue outline-0 placeholder-grayish_blue"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-3">
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              onChange={onChange}
              autoComplete="off"
              className="w-full bg-transparent pl-4 py-2 pb-3 border-b caret-moderate_blue border-dark_blue outline-0 placeholder-grayish_blue"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="mt-6 py-2 text-center w-full bg-moderate_blue text-white font-medium rounded-md shadow-lg hover:bg-light_grayish_blue hover:text-dark_blue hover:scale-95"
          >
            Create your new account
          </button>
        </form>
        <div className="mt-6 ">
          <p className="mb-2">Already have an account?</p>
          <Link to="/sign-in" className="text-moderate_blue font-semibold">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
