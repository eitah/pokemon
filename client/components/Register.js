/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';
import { browserHistory } from 'react-router';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.create = this.create.bind(this);
  }

  create(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.pass.value;
    const body = JSON.stringify({ email, password });
    console.log('body', body);

    fetch('/api/register', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    // .then(r => r.json())
    .then(() => console.log('post finished'))
    .then((err2) => {
      console.log('err2', err2);
      browserHistory.push('/login');
    })
    .catch((err) => {
      console.log('error is', err);
    });
  }

  render() {
    return (
      <div>
        <form>
          <div className='form-group'>
            <label>Email</label>
            <input className='form-control' ref='email' type='text' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input className='form-control' ref='pass' type='text' />
          </div>
          <button className='btn btn-primary' onClick={this.create}>Register</button>
        </form>
      </div>
   );
  }
}

export default Register;
