import { GraduationCap, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Study<span className="text-indigo-500">Track</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Merevolusi pendidikan melalui pelacakan real-time, komunikasi transparan, dan wawasan berbasis data untuk institusi di seluruh dunia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-500 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-500 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Produk</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Absensi Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sistem Penilaian</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manajemen Tugas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analitik Akademik</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Perusahaan</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4">Tetap terinformasi dengan fitur terbaru dan wawasan pendidikan kami.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                Gabung
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} StudyTrack. Hak cipta dilindungi.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Keamanan</a>
            <a href="#" className="hover:text-slate-300">Kepatuhan</a>
            <a href="#" className="hover:text-slate-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
