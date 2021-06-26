import React, { Component } from 'react'
import UserRow from './UserRow';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        country: '',
        gender: '0',
        other: ''
      },
      listUser: [
      ],
    }
    this.id = 0;
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState(prev => ({
      form: {
        ...prev.form,
        [name]: value
      }
    }));
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.id = this.id + 1;
    const user = { ...this.state.form, id: this.id };
    this.setState(prev => ({
      listUser: [
          ...prev.listUser,
          user
        ]
    }))
  }
  handleRemoveUser = (e) => {
    this.setState(prev => ({
      listUser: prev.listUser.filter(item => item.id !== e)
    }));
  }

  render() {
    const form = this.state.form;
    const users = this.state.listUser;
    return (
      <div className="d-flex">
        <form className="resgister-form" onSubmit={this.handleSubmit}>
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
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Your country</label>
            <div className="form-select">
              <select name="country" value={form.country} onChange={this.handleChange}>
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
                  onChange={this.handleChange} />
              <label htmlFor="male">Male</label>
            </div>
            <div className="form-radio">
              <input 
                  type="radio"
                  name="gender"
                  id="female"
                  value="1" 
                  checked={form.gender === '1'}
                  onChange={this.handleChange} />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Other information</label>
            <textarea name="other" onChange={this.handleChange}></textarea>
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
            {users.length ? users.map((user) =>
              <UserRow key={user.id} user={user} onRemoveUser={this.handleRemoveUser}/>)
            : <tr><td className="txt-center" colSpan="5">No user found</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
