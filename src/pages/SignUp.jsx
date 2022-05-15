import React, { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase.config';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const { email, password, name } = formData;

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
      const userCredential = createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      // updateProfile(auth.currentUser, {
      //   displayName: name,
      // });

      // const formDataCopy = { ...formData };
      // delete formDataCopy.password;
      // formDataCopy.created_at = serverTimestamp();

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-5 my-12 text-center md:max-w-2xl md:mx-auto">
      <div className="mx-auto mb-6 text-6xl text-moderate_blue max-w-fit">
        <FaRegCommentDots />
      </div>
      <h1 className="mb-4 text-3xl font-bold">Welcome!</h1>
      <div className="w-full px-4 py-6 rounded-md shadow-lg bg-very_light_gray">
        <h3 className="mb-4 text-2xl font-medium text-left">Create a new account</h3>
        <form onSubmit={onSubmit} className="w-full">
          <div className="mt-3">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
              autoComplete="off"
              className="w-full py-2 pb-3 pl-4 bg-transparent border-b caret-moderate_blue border-dark_blue outline-0 placeholder-grayish_blue"
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
            className="w-full py-2 mt-6 font-medium text-center text-white rounded-md shadow-lg md:max-w-sm bg-moderate_blue hover:bg-light_grayish_blue hover:text-dark_blue hover:scale-95"
          >
            Create your new account
          </button>
        </form>
        <div className="mt-6 ">
          <p className="mb-2">Already have an account?</p>
          <Link to="/sign-in" className="font-semibold text-moderate_blue">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
