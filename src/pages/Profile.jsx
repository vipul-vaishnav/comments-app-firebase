import React from 'react';
import Loader from '../components/Loader';
import PrivateRoute from '../components/PrivateRoute';
import { useAuthStatus } from '../hooks/useAuthStatus';

const Profile = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Loader />;
  }

  if (!loggedIn) {
    <PrivateRoute />;
  }

  return <h1>Hello</h1>;
};

export default Profile;
