import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, CheckCircle } from 'lucide-react';

const Astralis = () => {
  return (
    <div className="pt-32 px-4 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium flex items-center gap-2">
                <CheckCircle size={16} />
                W.I.P
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
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
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-xl bg-purple-500/10">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default Astralis;