import { motion } from 'motion/react';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-xs aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white/10 glass"
      >
        <img
          src="https://www.youtube.com/c/WACofficiel/about"
          alt="Bilal Nainia"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </motion.div>

      <div className="mt-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter uppercase"
        >
          BILAL NAINIA
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-1 w-24 bg-primary-orange mx-auto my-4 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl font-light tracking-widest opacity-70"
        >
          Frontend Web Developer | Management Student
        </motion.p>
      </div>


    </div>
  );
};
