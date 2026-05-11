import { motion } from 'motion/react';
import { ArrowRight, Play, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1920"
          alt="People capturing a moment together"
          className="w-full h-full object-cover brightness-[0.35]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 px-3 py-1 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-indigo-300 text-xs font-bold uppercase tracking-widest">Era Edukasi Digital</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Pantau Progres.<br />
              <span className="text-indigo-500">Wujudkan Prestasi.</span>
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Platform SaaS all-in-one bagi institusi untuk memantau kesuksesan siswa melalui analitik real-time, penilaian digital, dan komunikasi yang terintegrasi.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 shadow-xl shadow-indigo-600/30 flex items-center justify-center">
                Mulai Memantau Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button className="w-full sm:w-auto flex items-center justify-center text-white font-semibold group hover:text-indigo-400 transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mr-3 group-hover:border-indigo-400 transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Lihat Cara Kerjanya
              </button>
            </div>
            
            <div className="mt-16 flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-slate-900 object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-slate-400 text-sm">
                <span className="text-white font-bold">500+</span> institusi telah bergabung
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating UI Elements for Hero - User requested "people take a picture with camera" 
          I'll interpret this as a decorative "Capture Success" feature card */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:block absolute right-[-5%] top-[25%] z-20"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl w-80 rotate-[-4deg]">
          <div className="relative mb-4 rounded-xl overflow-hidden h-40">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" 
              alt="Camera concept" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 right-3 bg-indigo-600 p-2 rounded-lg">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </div>
          <h3 className="text-white font-bold text-lg mb-1">Abadikan Momen</h3>
          <p className="text-slate-400 text-sm">Tiap pencapaian didokumentasikan dalam definisi tinggi untuk portofolio siswa.</p>
        </div>
      </motion.div>

      {/* Another floating card */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute right-[10%] bottom-[15%] z-20"
      >
        <div className="bg-indigo-600 p-6 rounded-3xl shadow-2xl w-64 rotate-[6deg]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-indigo-200 text-xs font-bold uppercase">Performa Langsung</span>
            <div className="flex space-x-1">
              {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-white/40 rounded-full" />)}
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">+24%</div>
          <p className="text-indigo-100 text-sm">Rata-rata peningkatan keterlibatan siswa semester ini.</p>
        </div>
      </motion.div>
    </section>
  );
}
