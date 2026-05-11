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
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-500 rounded-3xl border ${
        scrolled 
          ? 'soft-glass py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]' 
          : 'bg-white/10 border-transparent py-5'
      }`}
    >
      <div className="px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-primary p-2 rounded-2xl group-hover:scale-110 transition-transform shadow-[0_10px_20px_rgba(99,102,241,0.2)]">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-display font-black tracking-tight text-slate-900 uppercase">
              STUDY<span className="luxe-gradient-text">TRACK</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] tracking-wide font-bold transition-all hover:text-brand-primary ${
                  location.pathname === link.path ? 'text-brand-primary underline decoration-2 underline-offset-8' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="bg-brand-primary text-white px-7 py-3 rounded-2xl text-[13px] font-black uppercase tracking-wider hover:shadow-[0_15px_30px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 transition-all active:scale-95"
            >
              MULAI
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-2xl text-slate-600 hover:bg-slate-100 transition-colors"
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
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 mx-0 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-display font-bold tracking-tight transition-colors ${
                    location.pathname === link.path
                      ? 'text-brand-primary'
                      : 'text-slate-500 hover:text-brand-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold uppercase tracking-wider">
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
