// src/components/LandingPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAQp5koh24B-GyS9V5R5qrbZgY82KtubEwg&s")`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to DEEP NET SOFT
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Your gateway to innovative software solutions.
          </motion.p>
          <Link to="/menu">
            <motion.button
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Go to Menu
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
