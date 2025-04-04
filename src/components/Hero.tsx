import React from 'react';
import { Terminal, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center space-y-12"
      >
        <div className="flex flex-col items-center space-y-6">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img 
              src="https://files.catbox.moe/ctb0a1.png" 
              alt="Artix Logo" 
              className="w-32 h-32 object-contain"
            />
            <div className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-xl animate-pulse"></div>
          </motion.div>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Artix
          </motion.h1>
        </div>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Nothing
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/falcon')}
            className="group relative px-8 py-3 bg-black text-white rounded-xl font-semibold 
              transform transition-all duration-300 hover:bg-gray-900
              border border-gray-700 hover:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Falcon Executor
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/astralis')}
            className="group relative px-8 py-3 bg-black text-white rounded-xl font-semibold 
              transform transition-all duration-300 hover:bg-gray-900
              border border-gray-700 hover:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Astralis Scripts
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;