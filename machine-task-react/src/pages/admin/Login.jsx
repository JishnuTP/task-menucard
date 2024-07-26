// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('authToken', 'your-auth-token');
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 border border-gray-300 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
