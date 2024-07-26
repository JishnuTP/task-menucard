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
    <div className="min-h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/02/00/75/30/1000_F_200753079_09314G3klkuaK1RJIsUKOpcjcxeo3tyt.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-3 mb-6 w-full"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
