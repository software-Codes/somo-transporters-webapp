"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center bg-gray-900 text-white">
      <motion.h1 
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>
      <motion.p 
        className="text-lg sm:text-xl mt-4 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link 
          href="/"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;