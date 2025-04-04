import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Terminal, Code2, Users } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

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
    <div className="fixed w-full z-50 flex justify-center pt-6 px-4">
      <nav
        className={`relative flex items-center justify-between w-full max-w-4xl mx-auto rounded-xl px-4 md:px-8 py-4 
          ${scrolled 
            ? 'bg-black border border-gray-800 shadow-md' 
            : 'bg-black border border-gray-800/30'
          }`}
      >
        <Link to="/" className="flex items-center">
          <img 
            src="https://files.catbox.moe/ctb0a1.png" 
            alt="Logo" 
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" current={location.pathname === "/"} icon={Home}>Home</NavLink>
          <NavLink to="/falcon" current={location.pathname === "/falcon"} icon={Terminal}>Falcon</NavLink>
          <NavLink to="/astralis" current={location.pathname === "/astralis"} icon={Code2}>Astralis</NavLink>
          <NavLink to="/developers" current={location.pathname === "/developers"} icon={Users}>Developers</NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <DiscordButton
            href="https://discord.gg/pJVdNJ7D3e"
            title="Join Falcon Discord"
            className="bg-black hover:bg-gray-900 border border-gray-800"
          />
          <DiscordButton
            href="https://discord.gg/4CuKnsaXPc"
            title="Join Astralis Discord"
            className="bg-black hover:bg-gray-900 border border-gray-800"
          />
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl bg-black hover:bg-gray-900 
            transition-colors duration-200 border border-gray-800"
        >
          {isMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full right-0 left-0 mt-4">
            <div className="bg-black rounded-xl p-4 mx-4 border border-gray-800 shadow-md">
              <div className="space-y-3">
                <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/"} icon={Home}>Home</MobileNavLink>
                <MobileNavLink to="/falcon" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/falcon"} icon={Terminal}>Falcon</MobileNavLink>
                <MobileNavLink to="/astralis" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/astralis"} icon={Code2}>Astralis</MobileNavLink>
                <MobileNavLink to="/developers" onClick={() => setIsMenuOpen(false)} current={location.pathname === "/developers"} icon={Users}>Developers</MobileNavLink>
                <div className="flex justify-center gap-4 pt-4 border-t border-gray-800">
                  <MobileDiscordButton
                    href="https://discord.gg/pJVdNJ7D3e"
                    title="Join Falcon Discord"
                    className="bg-black hover:bg-gray-900 border border-gray-800"
                  />
                  <MobileDiscordButton
                    href="https://discord.gg/4CuKnsaXPc"
                    title="Join Astralis Discord"
                    className="bg-black hover:bg-gray-900 border border-gray-800"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
