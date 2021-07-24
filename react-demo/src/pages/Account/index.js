import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
  const auth = useAuth();
  const handelLogout = () => {
    auth.logout();
  }
  return (
    <div className="container">
      <span>You are login successfully </span>
      <button className="btn-transparent link" onClick={handelLogout}>Logout</button>
    </div>
  )
}
export default Account;
