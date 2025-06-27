
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleRegister = () => {
    axios.post('http://localhost:5000/api/auth/register', user)
      .then(res => alert('Registered successfully'))
      .catch(err => alert('Registration failed'));
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setUser({ ...user, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
