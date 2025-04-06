import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const Astralis = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)] 
          blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-[100px] -left-[100px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)] 
          blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-lg font-medium border border-yellow-500/20 mb-6"
        >
          <AlertTriangle className="w-5 h-5" />
          Work in Progress
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Coming Soon
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg"
        >
          We're working hard to bring you something amazing.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Astralis;
