import React from 'react';
import { Terminal, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 w-full">
      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)] 
          blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-[100px] -left-[100px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)] 
          blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          {/* Logo Section */}
          <motion.div 
            className="flex flex-col items-center space-y-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <img 
                  src="https://files.catbox.moe/ytpkvk.webp" 
                  alt="Artix Logo" 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
                />
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full filter blur-2xl 
                  group-hover:blur-3xl transition-all duration-300"></div>
              </motion.div>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Artix
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Just a descriptions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 211, 238, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/falcon')}
              className="group relative px-8 py-4 bg-cyan-500/10 rounded-2xl font-semibold w-full sm:w-auto
                border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                <Terminal className="w-5 h-5" />
                Falcon
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 211, 238, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/astralis')}
              className="group relative px-8 py-4 bg-cyan-500/10 rounded-2xl font-semibold w-full sm:w-auto
                border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                <Code2 className="w-5 h-5" />
                Astralis
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
