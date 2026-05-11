import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Tentang', path: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-500 rounded-2xl border ${
        scrolled 
          ? 'bg-brand-surface/40 backdrop-blur-2xl border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-neon p-2 rounded-xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(217,255,0,0.3)]">
              <GraduationCap className="w-6 h-6 text-brand-black" />
            </div>
            <span className="text-xl font-display font-black tracking-tighter text-white">
              STUDY<span className="text-brand-neon">TRACK</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-brand-neon ${
                  location.pathname === link.path ? 'text-brand-neon underline decoration-2 underline-offset-8' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="bg-white text-brand-black px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-brand-neon transition-all hover:scale-105 active:scale-95"
            >
              Mulai
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-brand-neon transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 mx-0 bg-brand-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-display font-bold uppercase tracking-tight transition-colors ${
                    location.pathname === link.path
                      ? 'text-brand-neon'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full bg-brand-neon text-brand-black px-5 py-4 rounded-xl font-black uppercase tracking-wider">
                  Mulai Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
