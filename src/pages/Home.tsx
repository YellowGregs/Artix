import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Terminal, Code2, User } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Hero />
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Nothing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Terminal}
              title="Falcon Executor"
              description="A Executor"
            />
            <FeatureCard
              icon={Code2}
              title="Astralis Scripts"
              description="A Script"
            />
            <FeatureCard
              icon={User}
              title="Community"
              description="Join the Discord server to share ideas, and get support when you need it."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="bg-gray-800 rounded-2xl p-6 border border-gray-700/50"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-xl bg-gray-700">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default Home;