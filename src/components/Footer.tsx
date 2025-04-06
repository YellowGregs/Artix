import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/20 bg-gradient-to-b from-black/80 to-black backdrop-blur-sm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] -top-[300px] -right-[200px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] 
          blur-3xl opacity-30"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-[200px] -left-[100px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)] 
          blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="relative group">
                <img src="https://files.catbox.moe/ytpkvk.webp" alt="Logo" className="h-10 w-auto relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-cyan-500/20 rounded-full blur-xl 
                  opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold text-white">
                Artix
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Artix : The Furture Of Game Cheats.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">Community</h3>
            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 5, scale: 1.02 }}
                href="https://discord.gg/pJVdNJ7D3e"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-white/5 to-cyan-500/10 border border-white/10 
                  group-hover:border-cyan-500/30 transition-all duration-300">
                  <FaDiscord className="w-5 h-5" />
                </div>
                <span className="font-medium">Falcon Discord</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5, scale: 1.02 }}
                href="https://discord.gg/4CuKnsaXPc"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-white/5 to-cyan-500/10 border border-white/10 
                  group-hover:border-cyan-500/30 transition-all duration-300">
                  <FaDiscord className="w-5 h-5" />
                </div>
                <span className="font-medium">Astralis Discord</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">Credits</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                Made by Artix Team
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                © 2025 Artix. All rights reserved.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
