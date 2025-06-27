
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = () => {
    axios.post('http://localhost:5000/api/auth/login', credentials)
      .then(res => {
        alert('Logged in!');
        localStorage.setItem('token', res.data.token);
      }).catch(err => {
        alert('Login failed');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
