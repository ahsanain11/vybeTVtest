import { Link, useLocation } from 'react-router-dom';
import { PlayCircle, MessageSquare, Menu, Search, Bot } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Sports', path: '/sports' },
    { name: 'Channels', path: '/channels' },
    { name: 'Devices', path: '/devices' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-md">
      <div className="flex justify-between items-center h-20 px-6 md:px-16 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight text-on-surface flex items-center gap-2">
          <PlayCircle className="text-primary w-8 h-8 fill-primary/20" />
          VybeTV
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-sans text-sm font-semibold transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-white/5 ${
                location.pathname === link.path 
                  ? 'text-secondary bg-secondary/10' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/support-bot"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 border ${
              location.pathname === '/support-bot' 
                ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/20' 
                : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-on-primary'
            }`}
          >
            <Bot className="w-4 h-4" />
            Ask AI
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-on-surface p-2 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a 
            href="https://wa.me/923223224111"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-primary-container to-secondary-container text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg border border-white/10 hover:shadow-primary/20 transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            24/7 Support
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-surface-container border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 ${
                  location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/923223224111"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-primary text-on-primary font-semibold py-3 rounded-xl"
            >
              <MessageSquare className="w-5 h-5" />
              24/7 Support
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
