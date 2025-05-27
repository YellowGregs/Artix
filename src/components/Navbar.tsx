import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Terminal, Code2, Users } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full z-50 flex justify-center pt-4 px-4"
    >
      <nav 
        className={`relative flex items-center justify-between w-full max-w-6xl rounded-2xl transition-all duration-500 px-6 py-4
          ${scrolled 
            ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-black/20 backdrop-blur-sm border border-white/5'
          }`}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <motion.img 
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="https://files.catbox.moe/ytpkvk.webp" 
            alt="Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-white">
            Artix
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" current={location.pathname === "/"} icon={Home}>
            Home
          </NavLink>
          <NavLink to="/falcon" current={location.pathname === "/falcon"} icon={Terminal}>
            Falcon
          </NavLink>
          <NavLink to="/astralis" current={location.pathname === "/astralis"} icon={Code2}>
            Dex Hub
          </NavLink>
          <NavLink to="/developers" current={location.pathname === "/developers"} icon={Users}>
            Developers
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <DiscordButton
            href="https://discord.gg/pJVdNJ7D3e"
            title="Join Falcon Discord"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
          />
          <DiscordButton
            href=""
            title="Join DexHub Discord"
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl bg-white/5 
            hover:bg-white/10 transition-colors duration-200 border border-white/10"
        >
          {isMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-full right-0 left-0 mt-4"
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 mx-4 border border-white/10 
                shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="space-y-3">
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/"} icon={Home}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink to="/falcon" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/falcon"} icon={Terminal}>
                    Falcon
                  </MobileNavLink>
                  <MobileNavLink to="/astralis" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/astralis"} icon={Code2}>
                    Dex Hub
                  </MobileNavLink>
                  <MobileNavLink to="/developers" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/developers"} icon={Users}>
                    Developers
                  </MobileNavLink>
                  <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
                    <MobileDiscordButton
                      href="https://discord.gg/pJVdNJ7D3e"
                      title="Join Falcon Discord"
                      className="bg-white/5 hover:bg-white/10 border border-white/10"
                    />
                    <MobileDiscordButton
                      href="https://discord.gg/4CuKnsaXPc"
                      title="Join DexHub Discord"
                      className="bg-white/5 hover:bg-white/10 border border-white/10"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

const NavLink = ({ to, children, current, icon: Icon }: { to: string; children: React.ReactNode; current: boolean; icon: any }) => (
  <Link
    to={to}
    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white group 
      flex items-center gap-2 ${current ? 'text-white' : 'text-gray-400'}`}
  >
    <Icon size={16} />
    {children}
    <motion.div
      initial={false}
      animate={current ? { opacity: 1, width: '100%' } : { opacity: 0, width: '0%' }}
      className="absolute -bottom-[18px] left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
      style={{
        boxShadow: '0 0 10px rgba(255,255,255,0.3)',
      }}
    />
    <motion.div
      className="absolute -bottom-[18px] left-0 h-[2px] w-full scale-x-0 origin-left bg-gradient-to-r 
        from-cyan-400 via-purple-400 to-pink-400 group-hover:scale-x-100 transition-transform duration-300"
      style={{
        boxShadow: '0 0 10px rgba(255,255,255,0.3)',
      }}
    />
  </Link>
);

const MobileNavLink = ({ to, children, onClick, current, icon: Icon }: { to: string; children: React.ReactNode; onClick: () => void; current: boolean; icon: any }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-4 py-3 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2 ${
      current
        ? 'bg-white/10 text-white border border-white/20'
        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
    }`}
  >
    <Icon size={16} />
    {children}
  </Link>
);

const DiscordButton = ({ href, title, className }: { href: string; title: string; className: string }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex items-center justify-center w-10 h-10 rounded-xl ${className} 
      transition-all duration-300`}
    title={title}
  >
    <FaDiscord className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
    <span className="absolute -bottom-12 scale-0 transition-all duration-200 group-hover:scale-100 
      px-3 py-1 rounded-lg text-sm bg-black/90 border border-white/10 text-white whitespace-nowrap
      backdrop-blur-xl">
      {title}
    </span>
  </motion.a>
);

const MobileDiscordButton = ({ href, title, className }: { href: string; title: string; className: string }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center p-3 rounded-xl ${className} 
      transition-colors duration-300`}
  >
    <FaDiscord className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
  </motion.a>
);

export default Navbar;
