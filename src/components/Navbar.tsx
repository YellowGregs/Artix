import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
            ? 'bg-gray-800/90 backdrop-blur-md border border-gray-700/50 shadow-lg' 
            : 'bg-gray-800/50 backdrop-blur-sm'
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
          <NavLink to="/" current={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/falcon" current={location.pathname === "/falcon"}>
            Falcon
          </NavLink>
          <NavLink to="/astralis" current={location.pathname === "/astralis"}>
            Astralis
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <DiscordButton
            href="https://discord.gg/pJVdNJ7D3e"
            title="Join Falcon Discord"
            className="bg-blue-600 hover:bg-blue-700"
          />
          <DiscordButton
            href="https://discord.gg/4CuKnsaXPc"
            title="Join Astralis Discord"
            className="bg-purple-600 hover:bg-purple-700"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl bg-gray-700/80 hover:bg-gray-600/80 
            transition-colors duration-200 border border-gray-600/50"
        >
          {isMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute top-full right-0 left-0 mt-4"
            >
              <div className="bg-gray-800/95 backdrop-blur-lg rounded-2xl p-4 mx-4 border border-gray-700/50 shadow-xl">
                <div className="space-y-3">
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/"}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink to="/falcon" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/falcon"}>
                    Falcon
                  </MobileNavLink>
                  <MobileNavLink to="/astralis" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/astralis"}>
                    Astralis
                  </MobileNavLink>
                  <div className="flex justify-center gap-4 pt-4 border-t border-gray-700">
                    <MobileDiscordButton
                      href="https://discord.gg/pJVdNJ7D3e"
                      title="Join Falcon Discord"
                      className="bg-blue-600 hover:bg-blue-700"
                    />
                    <MobileDiscordButton
                      href="https://discord.gg/4CuKnsaXPc"
                      title="Join Astralis Discord"
                      className="bg-purple-600 hover:bg-purple-700"
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

const NavLink = ({ to, children, current }: { to: string; children: React.ReactNode; current: boolean }) => (
  <Link
    to={to}
    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-white group ${
      current ? 'text-white' : 'text-gray-300'
    }`}
  >
    {children}
    <motion.span
      initial={false}
      animate={current ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-center"
    />
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </Link>
);

const MobileNavLink = ({ to, children, onClick, current }: { to: string; children: React.ReactNode; onClick: () => void; current: boolean }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-4 py-3 rounded-xl transition-colors duration-200 text-center ${
      current
        ? 'bg-blue-600/20 text-white'
        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {children}
  </Link>
);

const DiscordButton = ({ href, title, className }: { href: string; title: string; className: string }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex items-center justify-center w-10 h-10 rounded-xl ${className} 
      transition-colors duration-300`}
    title={title}
  >
    <FaDiscord className="w-5 h-5 text-white" />
    <span className="absolute -bottom-10 scale-0 transition-all duration-200 group-hover:scale-100 
      px-3 py-1 rounded-lg text-sm bg-gray-800 border border-gray-700 text-white whitespace-nowrap">
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
    <FaDiscord className="w-5 h-5 text-white" />
  </motion.a>
);

export default Navbar;