/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';
import { browserHistory } from 'react-router';

class Login extends React.Component {
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

    fetch('/api/login', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    // .then(r => r.json())
    // .then(() => console.log('post finished'))
    .then((req) => {
      console.log('req.data.token', req.data.token);
      localStorage.clear();
      localStorage.setItem('token', req.data.token);
      browserHistory.push('/pokemon');
    })
    .catch((err) => {
      // login failed
      console.log('error is', err);
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div className='form-group'>
            <label>Email</label>
            <input className='form-control' ref='email' type='text' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input className='form-control' ref='pass' type='password' />
          </div>
          <button className='btn btn-primary' onClick={this.create}>Catch</button>
        </form>
      </div>
   );
  }
}

export default Login;
