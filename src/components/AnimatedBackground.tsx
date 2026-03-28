import { motion } from 'motion/react';
import React from 'react';
import { useTheme } from '../lib/ThemeContext';

export const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[rgb(var(--background))] transition-colors duration-1000" />
      
      {/* Floating Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute -top-20 -left-20 w-96 h-96 rounded-full blur-[100px] opacity-30 ${
          theme === 'dark' ? 'bg-primary-orange' : 'bg-primary-blue'
        }`}
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${
          theme === 'dark' ? 'bg-primary-orange' : 'bg-primary-blue'
        }`}
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] opacity-10 ${
          theme === 'dark' ? 'bg-white' : 'bg-black'
        }`}
      />
    </div>
  );
};
