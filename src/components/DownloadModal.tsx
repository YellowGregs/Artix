import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, CheckCircle, AlertTriangle, Smartphone, Monitor } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: (platform: 'windows' | 'mobile') => void;
}

const DownloadModal = ({ isOpen, onClose, onDownload }: DownloadModalProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState<'windows' | 'mobile' | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-black/80 border border-gray-800 rounded-2xl p-6 max-w-md w-full backdrop-blur-sm"
          >
            <div className="absolute top-4 right-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4"
              >
                <Download className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Download Falcon</h3>
              <p className="text-gray-400">Select your platform to download Falcon Executor</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPlatform('windows')}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-200
                  ${selectedPlatform === 'windows' 
                    ? 'bg-blue-500/20 border-blue-500/30 text-blue-400' 
                    : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:text-white hover:border-gray-600'}`}
              >
                <Monitor className="w-8 h-8" />
                <span className="font-medium">Windows</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPlatform('mobile')}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-200
                  ${selectedPlatform === 'mobile' 
                    ? 'bg-blue-500/20 border-blue-500/30 text-blue-400' 
                    : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:text-white hover:border-gray-600'}`}
              >
                <Smartphone className="w-8 h-8" />
                <span className="font-medium">Mobile</span>
              </motion.button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-green-400">Latest version: 1.0.0</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-yellow-400">Some anti-virus software may flag this file</span>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 px-4 py-2 rounded-xl bg-gray-800/50 text-gray-300 hover:text-white border border-gray-700 transition-all duration-200"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (selectedPlatform) {
                    onDownload(selectedPlatform);
                    onClose();
                  }
                }}
                disabled={!selectedPlatform}
                className={`flex-1 px-4 py-2 rounded-xl transition-all duration-200
                  ${selectedPlatform 
                    ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30' 
                    : 'bg-gray-800/50 text-gray-500 border border-gray-700 cursor-not-allowed'}`}
              >
                Download
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DownloadModal;
