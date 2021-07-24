import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

  const [form, setForm] = useState({email: '', password: ''});
  const auth = useAuth();

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setForm({...form, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(form.email, form.password);
  }

  return (
    <div className="container">
      <div className="heading">
        <h2 className="text-uppercase">Login
              <span className="txt-secondary"> Form</span>
        </h2>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <form className="resgister-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email address</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange} />
        </div>
        <div className="buttons-set">
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Login;
