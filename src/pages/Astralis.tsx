import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, CheckCircle } from 'lucide-react';

const Astralis = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-6xl w-full py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 flex items-center gap-2">
                <CheckCircle size={16} />
                W.I.P
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">
                Unreleased
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Astralis Scripts</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Nothing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Code2}
            title="Title"
            description="Descriptions"
          />
          <FeatureCard
            icon={Sparkles}
            title="Title"
            description="Descriptions"
          />
          <FeatureCard
            icon={Zap}
            title="Title"
            description="Descriptions"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 
      hover:border-cyan-500/30 transition-all duration-300 group"
  >
    <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-0 
      group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 
      group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 
          group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300
          shadow-lg shadow-cyan-500/5 group-hover:shadow-cyan-500/10">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-50 transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
    </div>
  </motion.div>
);

export default Astralis;