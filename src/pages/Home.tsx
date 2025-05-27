import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Terminal, Search, Code2, Github, Disc as Discord, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <div className="absolute w-[1200px] h-[1200px] -top-[400px] -right-[400px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_70%)] 
            blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute w-[1000px] h-[1000px] top-[300px] -left-[300px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)] 
            blur-3xl opacity-60 animate-pulse animation-delay-2000"></div>
          <div className="absolute w-[800px] h-[800px] bottom-[200px] right-[200px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_70%)] 
            blur-3xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2322D3EE%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      </div>

      <div className="relative z-10">
        <Hero />
        
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-white via-cyan-200 to-white mb-6">
                Falcon Executor
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A executor that can execute scripts.
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto max-w-4xl perspective-1000"
              >
                <motion.div
                  initial={{ rotateX: 20 }}
                  animate={{ 
                    rotateX: [20, 22, 20],
                    rotateY: [-5, 5, -5],
                    y: [-10, 10, -10]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                  }}
                  className="relative transform-gpu"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-white/30 to-cyan-500/30 rounded-2xl blur-xl opacity-50"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-cyan-500/20 rounded-2xl"></div>
                  <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-3 border border-white/10">
                    <img
                      src="https://files.catbox.moe/tnu5fv.webp"
                      alt="Executor UI"
                      className="w-full h-auto rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-[10px] bg-cyan-500/20 blur-2xl"></div>
                </motion.div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-12">
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/falcon')}
                className="relative px-8 py-3 rounded-xl font-semibold overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-400 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-2 text-white">
                  <Terminal className="w-5 h-5" />
                  <span>Try Falcon</span>
                </div>
              </motion.button>
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-white via-cyan-200 to-white mb-6">
                Astralis
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Find and execute your favorite scripts with ease
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto perspective-1000"
            >
              <motion.div
                animate={{ 
                  rotateX: [2, -2, 2],
                  rotateY: [-1, 1, -1]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
                className="relative transform-gpu"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-cyan-500/10 border border-white/10">
                          <Search className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Find Scripts</h3>
                          <p className="text-gray-300">Browse through our extensive collection of verified scripts.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-cyan-500/10 border border-white/10">
                          <Code2 className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Execute Scripts</h3>
                          <p className="text-gray-300">Run scripts directly with just one click.</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02, translateY: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/astralis')}
                        className="relative px-8 py-3 rounded-xl font-semibold overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-400 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
                        <div className="relative z-10 flex items-center gap-2 text-white">
                          <Code2 className="w-5 h-5" />
                          <span>Explore Scripts</span>
                        </div>
                      </motion.button>
                    </div>
                    <div className="flex-1">
                      <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        src="https://files.catbox.moe/oxij8p.png"
                        alt="Astralis Interface"
                        className="w-full rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <footer className="relative py-16 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute w-[800px] h-[800px] bottom-[-400px] right-[-200px] rounded-full 
              bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_70%)] 
              blur-3xl opacity-70"></div>
          </div>
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <motion.img 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    src="https://files.catbox.moe/ytpkvk.webp" 
                    alt="Logo" 
                    className="w-10 h-10"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                    Artix
                  </span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                Artix : The Future Of Game Cheats
                </p>
                <div className="flex gap-4">
                  <SocialButton href="https://discord.gg/pJVdNJ7D3e" icon={FaDiscord} />
                  <SocialButton href="https://discord.gg/4CuKnsaXPc" icon={FaDiscord} />
                  {/* <SocialButton href="#" icon={FaTwitter} />
                  <SocialButton href="#" icon={FaGithub} /> */}
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-6">Product</h4>
                <ul className="space-y-4">
                  <FooterLink href="/falcon">Falcon</FooterLink>
                  <FooterLink href="/astralis">Astralis</FooterLink>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6">Links</h4>
                <ul className="space-y-4">
                  <FooterLink href="/developers">Developers</FooterLink>
                    {/* <FooterLink href="https://discord.gg/pJVdNJ7D3e">Falcon Discord Server</FooterLink>
                    <FooterLink href="https://discord.gg/4CuKnsaXPc">Astralis Discord Server</FooterLink> */}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-gray-400 text-sm text-center">
                &copy; {new Date().getFullYear()} Artix. All rights reserved.
              </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const SocialButton = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-cyan-500/10 border border-white/10 
      hover:border-cyan-500/20 transition-all duration-300 group"
  >
    <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
  </motion.a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href}
      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors"></span>
      {children}
    </a>
  </li>
);

export default Home;
