import { GraduationCap, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-slate-400 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-brand-teal/5 blur-[120px] rounded-full translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="bg-brand-neon p-2 rounded-xl">
                <GraduationCap className="w-6 h-6 text-brand-black" />
              </div>
              <span className="text-xl font-display font-black tracking-tighter text-white">
                STUDY<span className="text-brand-neon">TRACK</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-loose mb-8 font-light uppercase tracking-wider">
              Merevolusi pendidikan melalui sistem saraf digital yang transparan dan efisien.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-brand-neon transition-all hover:scale-110"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-neon transition-all hover:scale-110"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-neon transition-all hover:scale-110"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-neon transition-all hover:scale-110"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-display font-black text-xs uppercase tracking-[0.3em] mb-10 italic">Engine</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-neon transition-colors">Absensi Digital</a></li>
              <li><a href="#" className="hover:text-brand-neon transition-colors">Sistem Penilaian</a></li>
              <li><a href="#" className="hover:text-brand-neon transition-colors">Manajemen Tugas</a></li>
              <li><a href="#" className="hover:text-brand-neon transition-colors">Analitik</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-black text-xs uppercase tracking-[0.3em] mb-10 italic">Company</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-brand-neon transition-colors">Misi Kami</Link></li>
              <li><a href="#" className="hover:text-brand-neon transition-colors">Internal</a></li>
              <li><a href="#" className="hover:text-brand-neon transition-colors">Privasi</a></li>
              <li><a href="#" className="hover:text-brand-neon transition-colors">Syarat</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-black text-xs uppercase tracking-[0.3em] mb-10 italic">Pulse</h3>
            <p className="text-xs text-slate-500 mb-6 font-light">Tetap mengikuti detak jantung inovasi pendidikan.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-4 text-xs w-full focus:outline-none focus:border-brand-neon transition-all italic font-black"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-neon text-brand-black px-4 rounded-xl text-[10px] font-black uppercase tracking-widest">
                SIGN
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-slate-600">
          <p>© {new Date().getFullYear()} STUDYTRACK OS. v2.0.26</p>
          <div className="flex space-x-8 mt-6 md:mt-0 font-bold">
            <a href="#" className="hover:text-brand-violet transition-colors">Security</a>
            <a href="#" className="hover:text-brand-violet transition-colors">Nodes</a>
            <a href="#" className="hover:text-brand-violet transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
