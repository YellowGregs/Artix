import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative border-t border-cyan-500/20 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <img src="https://files.catbox.moe/ytpkvk.webp" alt="Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Artix
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              The Descriptions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-cyan-400 font-semibold mb-4">Community</h3>
            <div className="space-y-3">
              <motion.a
                whileHover={{ x: 5 }}
                href="https://discord.gg/pJVdNJ7D3e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <FaDiscord className="w-5 h-5" />
                Falcon Discord
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="https://discord.gg/4CuKnsaXPc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <FaDiscord className="w-5 h-5" />
                Astralis Discord
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-cyan-400 font-semibold mb-4">Credits</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Made by Artix Team</li>
              <li>© 2025 Artix. All rights reserved.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
