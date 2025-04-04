import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, Zap, Terminal, CheckCircle, Key, Code2 } from 'lucide-react';

const Falcon = () => {
  const [showPassword, setShowPassword] = useState(false);

  const downloadExecutor = () => {
    // In a real implementation, this would handle the download
    alert('Download is still in development');
  };

  return (
    <div className="pt-32 px-4 min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium flex items-center gap-2">
                <CheckCircle size={16} />
                Working
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                Version 1.0.0
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Falcon Executor</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Nothing
          </p>
          <div className="flex flex-col items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPassword(!showPassword)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-xl font-medium
                hover:bg-gray-900 border border-gray-700 hover:border-gray-600
                transition-colors duration-300"
            >
              <Key className="w-4 h-4" />
              {showPassword ? 'Hide Password' : 'Show Password'}
            </motion.button>
            {showPassword && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-300 mb-4"
              >
                Password: <span className="font-mono bg-gray-800 px-2 py-1 rounded">urdad</span>
              </motion.div>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadExecutor}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-semibold 
                hover:bg-gray-900 border border-gray-700 hover:border-gray-600
                transition-colors duration-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Falcon
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Shield}
            title="Title"
            description="Description."
          />
          <FeatureCard
            icon={Zap}
            title="Title"
            description="Description."
          />
          <FeatureCard
            icon={Code2}
            title="Title"
            description="Description."
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
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-xl bg-blue-500/10">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default Falcon;