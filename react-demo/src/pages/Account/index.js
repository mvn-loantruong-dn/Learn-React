import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
  const auth = useAuth();
  const emailLogined = localStorage.getItem('user');
  const handelLogout = () => {
    auth.logout();
  }
  return (
    <div className="container">
      <p>You are login successfully </p>
      <p>Your account: {emailLogined} </p>
      <button className="btn-transparent link" onClick={handelLogout}>Logout</button>
    </div>
  )
}
export default Account;
