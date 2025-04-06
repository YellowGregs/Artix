import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, CheckCircle, Lock, Shield, AlertTriangle } from 'lucide-react';

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

      <div className="max-w-7xl w-full py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-medium border border-yellow-500/20 flex items-center gap-2"
              >
                <AlertTriangle size={16} />
                Work in Progress
              </motion.span>
{/*               <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20"
              >
                Version 1.0.0
              </motion.span> */}
            </div>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-200 mb-6"
          >
            Astralis Scripts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto mb-8"
          >
            A Script?
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Code2}
            title="Title"
            description="Descriptions."
            delay={0.2}
          />
          <FeatureCard
            icon={Shield}
            title="Title"
            description="Descriptions."
            delay={0.4}
          />
          <FeatureCard
            icon={Lock}
            title="Title"
            description="Descriptions."
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative overflow-hidden bg-gradient-to-br from-black to-black/50 rounded-2xl p-8 
      border border-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-0 
      group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 
      group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative z-10">
      <motion.div 
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: delay + 0.2 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 
          group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300
          shadow-lg shadow-cyan-500/5 group-hover:shadow-cyan-500/10"
        >
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-cyan-400 to-cyan-200 group-hover:to-cyan-300 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
    </div>

    <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300
      bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent blur-xl pointer-events-none"></div>
  </motion.div>
);

export default Astralis;
