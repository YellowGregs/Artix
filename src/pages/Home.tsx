import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-black relative">
      {/* <div className="absolute inset-0 bg-black">
        <div className="absolute w-[1000px] h-[1000px] -top-[400px] -right-[400px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)] 
          blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute w-[800px] h-[800px] top-[200px] -left-[300px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)] 
          blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div> */}
      
      <Hero />
      
      <section className="relative py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-200 mb-6">
              About Artix
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover what makes Artix special
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={Terminal}
              title="Title"
              description="Descriptions."
              delay={0}
            />
            <FeatureCard
              icon={Shield}
              title="Title"
              description="Descriptions."
              delay={0.2}
            />
            <FeatureCard
              icon={Zap}
              title="Title"
              description="Descriptions."
              delay={0.4}
            />
          </div>
        </div>
      </section>
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
        border border-cyan-500/20 p-6 md:p-8 transition-all duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4 md:mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-3 md:p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 
              group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300
              shadow-lg shadow-cyan-500/5 group-hover:shadow-cyan-500/10"
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-cyan-400 to-cyan-200 group-hover:to-cyan-300 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-sm md:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Hover Effect */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300
        bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent blur-xl pointer-events-none"></div>
    </motion.div>
  );
};

export default Home;
