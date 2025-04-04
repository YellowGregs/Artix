import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Terminal, Code2, User } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-black relative">
      <div className="absolute inset-0 bg-black"></div>
      <Hero />
      
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600">About Us</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Nothing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Terminal}
              title="Falcon Executor"
              description="A Executor"
              glowColor="cyan"
            />
            <FeatureCard
              icon={Code2}
              title="Astralis Scripts"
              description="A Script"
              glowColor="cyan"
            />
            <FeatureCard
              icon={(props: React.SVGProps<SVGSVGElement>) => <User {...props} className="text-white" />}
              title="Community"
              description="Join the Discord server to share ideas, and get support when you need it."
              glowColor="cyan"
            />
          </div>
        </div>
      </section>

      <footer className="relative border-t border-gray-800 bg-black backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="https://files.catbox.moe/ctb0a1.png" alt="Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold text-white">Artix</span>
              </div>
              <p className="text-gray-400 text-sm">
                The Descriptions.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <div className="space-y-3">
                <a
                  href="https://discord.gg/pJVdNJ7D3e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaDiscord className="w-5 h-5" />
                  Falcon Discord
                </a>
                <a
                  href="https://discord.gg/4CuKnsaXPc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaDiscord className="w-5 h-5" />
                  Astralis Discord
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Credits</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Made by Artix Team</li>
                <li>© 2025 Artix. All rights reserved.</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, glowColor }: { icon: any; title: string; description: string; glowColor: string }) => {
  const glowStyles = {
    cyan: 'hover:shadow-cyan-500/20 hover:border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`relative overflow-hidden rounded-2xl p-8 border border-gray-800 transition-all duration-300 hover:shadow-2xl bg-black backdrop-blur-sm ${glowStyles[glowColor]}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <Icon className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

export default Home;