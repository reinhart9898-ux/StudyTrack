import { GraduationCap, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-500 pt-32 pb-16 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-brand-primary/5 blur-[120px] rounded-full translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-10">
              <div className="bg-brand-primary p-2 rounded-2xl shadow-lg shadow-brand-primary/20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-black tracking-tight text-slate-900 uppercase">
                STUDY<span className="luxe-gradient-text">TRACK</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-loose mb-10 font-medium">
              Merevolusi manajemen pendidikan melalui transparansi dan wawasan cerdas untuk institusi di abad ke-21.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-brand-primary transition-all hover:-translate-y-1"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-300 hover:text-brand-primary transition-all hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-300 hover:text-brand-primary transition-all hover:-translate-y-1"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-300 hover:text-brand-primary transition-all hover:-translate-y-1"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm uppercase tracking-widest mb-10">Platform</h3>
            <ul className="space-y-5 text-sm font-semibold">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Absensi Digital</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Sistem Penilaian</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Manajemen Tugas</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Analitik</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm uppercase tracking-widest mb-10">Perusahaan</h3>
            <ul className="space-y-5 text-sm font-semibold">
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">Tentang Kami</Link></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Internal</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Keamanan</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Syarat Layanan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm uppercase tracking-widest mb-10">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-8 font-medium">Ikuti kabar terbaru dan fitur inovasi kami.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email institusi Anda" 
                className="bg-slate-50 border border-slate-100 text-slate-900 rounded-[1.5rem] px-6 py-5 text-sm w-full focus:outline-none focus:border-brand-primary focus:bg-white transition-all font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-primary text-white px-5 rounded-2xl text-xs font-bold hover:shadow-lg hover:shadow-brand-primary/20 transition-all">
                DAFTAR
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-400">
          <p>© {new Date().getFullYear()} STUDYTRACK. All rights reserved.</p>
          <div className="flex space-x-10 mt-8 md:mt-0 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900 transition-colors">Security</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Compliance</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
