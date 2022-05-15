import React, { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();

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

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-5 my-12 text-center md:max-w-2xl md:mx-auto">
      <div className="mx-auto mb-6 text-6xl text-moderate_blue max-w-fit">
        <FaRegCommentDots />
      </div>
      <h1 className="mb-4 text-3xl font-bold">Welcome Back!</h1>
      <div className="w-full px-4 py-6 rounded-md shadow-lg bg-very_light_gray">
        <h3 className="mb-4 text-2xl font-medium text-left">Login</h3>
        <form onSubmit={onSubmit} className="w-full">
          <div className="mt-3">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              autoComplete="off"
              className="w-full py-2 pb-3 pl-4 bg-transparent border-b caret-moderate_blue border-dark_blue outline-0 placeholder-grayish_blue"
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
              className="w-full py-2 pb-3 pl-4 bg-transparent border-b caret-moderate_blue border-dark_blue outline-0 placeholder-grayish_blue"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-6 font-medium text-center text-white rounded-md shadow-lg md:max-w-xs bg-moderate_blue hover:bg-light_grayish_blue hover:text-dark_blue hover:scale-95"
          >
            Login to your account
          </button>
        </form>
        <div className="mt-6 ">
          <p className="mb-2">Don't have an account?</p>
          <Link to="/sign-up" className="font-semibold text-moderate_blue">
            Create One
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
