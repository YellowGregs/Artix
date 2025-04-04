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
      className="fixed w-full z-50 flex justify-center pt-6 px-4"
    >
      <nav 
        className={`relative flex items-center justify-between w-full max-w-4xl rounded-2xl transition-all duration-500 px-8 py-4
          ${scrolled 
            ? 'bg-black/80 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_-15px_rgba(34,211,238,0.3)]' 
            : 'bg-black/50 backdrop-blur-md border border-cyan-500/10'
          }`}
      >
        <Link to="/" className="flex items-center group">
          <motion.img 
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="https://files.catbox.moe/ctb0a1.png" 
            alt="Logo" 
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" current={location.pathname === "/"} icon={Home}>
            Home
          </NavLink>
          <NavLink to="/falcon" current={location.pathname === "/falcon"} icon={Terminal}>
            Falcon
          </NavLink>
          <NavLink to="/astralis" current={location.pathname === "/astralis"} icon={Code2}>
            Astralis
          </NavLink>
          <NavLink to="/developers" current={location.pathname === "/developers"} icon={Users}>
            Developers
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <DiscordButton
            href="https://discord.gg/pJVdNJ7D3e"
            title="Join Falcon Discord"
            className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/30"
          />
          <DiscordButton
            href="https://discord.gg/4CuKnsaXPc"
            title="Join Astralis Discord"
            className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/30"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl bg-cyan-500/10 
            hover:bg-cyan-500/20 transition-colors duration-200 border border-cyan-500/20"
        >
          {isMenuOpen ? <X size={20} className="text-cyan-400" /> : <Menu size={20} className="text-cyan-400" />}
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
              <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-4 mx-4 border border-cyan-500/20 
                shadow-[0_0_30px_-15px_rgba(34,211,238,0.3)]">
                <div className="space-y-3">
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/"} icon={Home}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink to="/falcon" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/falcon"} icon={Terminal}>
                    Falcon
                  </MobileNavLink>
                  <MobileNavLink to="/astralis" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/astralis"} icon={Code2}>
                    Astralis
                  </MobileNavLink>
                  <MobileNavLink to="/developers" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/developers"} icon={Users}>
                    Developers
                  </MobileNavLink>
                  <div className="flex justify-center gap-4 pt-4 border-t border-cyan-500/20">
                    <MobileDiscordButton
                      href="https://discord.gg/pJVdNJ7D3e"
                      title="Join Falcon Discord"
                      className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20"
                    />
                    <MobileDiscordButton
                      href="https://discord.gg/4CuKnsaXPc"
                      title="Join Astralis Discord"
                      className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20"
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
    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-cyan-400 group 
      flex items-center gap-2 ${current ? 'text-cyan-400' : 'text-gray-300'}`}
  >
    <Icon size={16} />
    {children}
    <motion.div
      initial={false}
      animate={current ? { opacity: 1, width: '100%' } : { opacity: 0, width: '0%' }}
      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 to-cyan-400"
      style={{
        boxShadow: '0 0 10px rgba(34,211,238,0.5)',
      }}
    />
    <motion.div
      className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-left bg-gradient-to-r 
        from-cyan-500 to-cyan-400 group-hover:scale-x-100 transition-transform duration-300"
      style={{
        boxShadow: '0 0 10px rgba(34,211,238,0.5)',
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
        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
        : 'bg-cyan-500/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 border border-cyan-500/20'
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
    <FaDiscord className="w-5 h-5 text-cyan-400" />
    <span className="absolute -bottom-12 scale-0 transition-all duration-200 group-hover:scale-100 
      px-3 py-1 rounded-lg text-sm bg-black/90 border border-cyan-500/20 text-cyan-400 whitespace-nowrap
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
    <FaDiscord className="w-5 h-5 text-cyan-400" />
  </motion.a>
);

export default Navbar;