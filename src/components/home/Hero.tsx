import { motion } from 'motion/react';
import { Play, Camera, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[5%] left-[-5%] w-[35%] h-[35%] bg-brand-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-brand-accent/10 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full lg:flex items-center gap-20">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-3 bg-white/80 border border-slate-100 px-5 py-2.5 rounded-2xl mb-12 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-ping" />
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.25em]">Masa Depan Edukasi</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.95] text-slate-900 mb-10 tracking-tighter">
              Bimbing <br />
              <span className="luxe-gradient-text">Potensi.</span> <br />
              Raih Prestasi.
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium">
              Platform manajemen pendidikan terintegrasi yang menghadirkan transparansi dan efisiensi untuk institusi modern.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:-translate-y-1 transition-all active:scale-95">
                Mulai Gratis
              </button>
              
              <button className="w-full sm:w-auto flex items-center justify-center text-slate-600 font-bold group px-8 py-5 rounded-[2rem] hover:bg-slate-50 transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mr-4 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                Tonton Demo
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 mt-24 lg:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Premium App Mockup */}
            <div className="relative premium-card p-4 aspect-[4/3] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                alt="Gen Z Learning"
                className="w-full h-full object-cover rounded-[2rem]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="soft-glass p-6 rounded-3xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-1">PROGRES SISWA</p>
                    <p className="text-2xl font-display font-black text-slate-900">+15.4%</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -top-12 -left-12 p-6 soft-glass rounded-[2rem] -rotate-12 animate-float">
               <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <Camera className="w-6 h-6" />
               </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 p-8 soft-glass rounded-[2.5rem] rotate-12 shadow-xl border-white/80">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-center">TRUSTED BY</p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+40}`} className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-brand-primary/10" alt="user" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
