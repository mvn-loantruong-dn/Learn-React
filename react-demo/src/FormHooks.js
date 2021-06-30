import React, { useState } from 'react'

let id = 0;
const FormHooks = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    country: '',
    gender: '0',
    other: ''
  });
  const [users, setsUsers] = useState([]);

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    id += 1;
    const newUser = { ...form, id};
    setsUsers([...users, newUser ]);
  }

  function handleRemove(id) {
    const newUsers = users.filter(item => item.id !== id);
    setsUsers(newUsers);
  }

  return (

    <div className="d-flex">
      <form className="resgister-form" onSubmit={handleSubmit}>
        <div className="heading">
          <h2 className="text-uppercase">Register
              <span className="color-green"> Form</span>
          </h2>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
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
        <div className="form-group">
          <label className="form-label">Your country</label>
          <div className="form-select">
            <select name="country" value={form.country} onChange={handleChange}>
              <option value="">Please choose your country</option>
              <option value="Vietnam">Viet Nam</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Gender</label>
          <div className="form-radio">
            <input
              type="radio"
              name="gender"
              id="male"
              value="0"
              checked={form.gender === '0'}
              onChange={handleChange} />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form-radio">
            <input
              type="radio"
              name="gender"
              id="female"
              value="1"
              checked={form.gender === '1'}
              onChange={handleChange} />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Other information</label>
          <textarea name="other" onChange={handleChange}></textarea>
        </div>
        <div className="buttons-set">
          <button className="btn">Submit</button>
        </div>
      </form>
      <div className="list-users">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Email</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Other information</th>
              <th className="txt-center">Action</th>
            </tr>
          </thead>
          <tbody>
            { users.length ? users.map((user) =>
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.gender === '0' ? 'Male' : 'Female'}</td>
                <td>{user.other}</td>
                <td className="txt-center">
                  <button className="btn-transparent" onClick={() => handleRemove(user.id)}><i className="fa fa-trash"></i></button>
                </td>
              </tr>
              ): <tr><td className="txt-center" colSpan="5">No user found</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FormHooks;
