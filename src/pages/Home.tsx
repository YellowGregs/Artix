import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Terminal, Code2, User } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-black relative">
      <div className="absolute inset-0 bg-black">
        <div className="absolute w-[1000px] h-[1000px] -top-[400px] -right-[400px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)] 
          blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute w-[800px] h-[800px] top-[200px] -left-[300px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)] 
          blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] bottom-[100px] right-[100px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)] 
          blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <Hero />
      
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-200 mb-6">
              About Us
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Nothing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Terminal}
              title="Falcon Executor"
              description="A Executor"
              delay={0}
            />
            <FeatureCard
              icon={Code2}
              title="Astralis Scripts"
              description="A Script"
              delay={0.2}
            />
            <FeatureCard
              icon={User}
              title="Community"
              description="Join the Discord server to share ideas, and get support when you need it."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <footer className="relative border-t border-cyan-500/20 bg-black/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="https://files.catbox.moe/ctb0a1.png" alt="Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                  Artix
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                The Descriptions.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-4">Community</h3>
              <div className="space-y-3">
                <a
                  href="https://discord.gg/pJVdNJ7D3e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <FaDiscord className="w-5 h-5" />
                  Falcon Discord
                </a>
                <a
                  href="https://discord.gg/4CuKnsaXPc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <FaDiscord className="w-5 h-5" />
                  Astralis Discord
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-black/50 
        border border-cyan-500/20 p-8 transition-all duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 
              group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300
              shadow-lg shadow-cyan-500/5 group-hover:shadow-cyan-500/10"
          >
            <Icon className="w-6 h-6 text-cyan-400" />
          </motion.div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-cyan-400 to-cyan-200 group-hover:to-cyan-300 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      </div>

      {/* Hover Effect */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300
        bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent blur-xl pointer-events-none"></div>
    </motion.div>
  );
};

export default Home;