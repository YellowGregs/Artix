import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, Zap, Terminal, CheckCircle, Key, Code2 } from 'lucide-react';
import DownloadModal from '../components/DownloadModal';
import NotificationToast from '../components/NotificationToast';

const Falcon = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success' as const,
  });

  const download_executor = () => {
    setNotification({
      show: true,
      message: 'Download W.I.P.',
      type: 'warning',
    });
  };

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
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20 flex items-center gap-2">
                <CheckCircle size={16} />
                Working
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">
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
                hover:bg-gray-900 border border-gray-800 hover:border-gray-700
                transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
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
                Password: <span className="font-mono bg-black px-2 py-1 rounded border border-gray-800">urdad</span>
              </motion.div>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-semibold 
                hover:bg-gray-900 border border-gray-800 hover:border-gray-700
                transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
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

      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownload={download_executor}
      />

      <NotificationToast
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, show: false })}
      />
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

export default Falcon;
