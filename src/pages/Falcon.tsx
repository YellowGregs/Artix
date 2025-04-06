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

  const download_executor = (platform: 'windows' | 'mobile') => {
    if (platform === 'mobile') {
      window.location.href = 'https://easyupload.io/a78rxq';
    } else {
      setNotification({
        show: true,
        message: 'Windows download coming soon!',
        type: 'warning',
      });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] 
            blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute w-[600px] h-[600px] -bottom-[100px] -left-[100px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_70%)] 
            blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201h2v2H1V1zm4%200h2v2H5V1zm4%200h2v2H9V1zm4%200h2v2h-2V1zm4%200h2v2h-2V1z%22%20fill%3D%22rgba(255%2C255%2C255%2C0.03)%22%2F%3E%3C%2Fsvg%3E')] opacity-20">
          </div>
        </div>

        <div className="max-w-6xl w-full py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-24 h-24 mx-auto mb-8"
              >
                <img
                  src="https://files.catbox.moe/ctb0a1.png"
                  alt="Falcon Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20 flex items-center gap-2">
                  <CheckCircle size={16} />
                  Working
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Falcon Executor</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Nothing
            </p>
            <div className="flex flex-col items-center gap-4">
{/*               <motion.button
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
              )} */}
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
        </div>
      </div>

{/*       <section className="py-20 bg-black/80 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover what makes Falcon special
            </p>
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
      </section> */}

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
    </>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
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
