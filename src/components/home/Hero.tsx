import { motion } from 'motion/react';
import { ArrowRight, Play, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background with Ambient Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-violet/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-teal/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full lg:flex items-center gap-12">
        <div className="lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10">
              <span className="flex h-2 w-2 rounded-full bg-brand-neon animate-ping" />
              <span className="text-[10px] text-brand-neon font-mono uppercase tracking-[0.2em] font-bold">2026 Future Education</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] text-white flex flex-col mb-10">
              <span>TRACK</span>
              <span className="text-transparent outline-text text-brand-neon">PROGRESS.</span>
              <span className="bg-gradient-to-r from-brand-violet to-brand-teal bg-clip-text text-transparent">GENIUS</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-light">
              Pelajari kesuksesan dengan presisi tinggi. Platform SaaS untuk institusi modern yang mendambakan transparansi dan efisiensi tanpa batas.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto bg-brand-neon text-brand-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(217,255,0,0.2)] active:scale-95">
                Gabung Sekarang
              </button>
              
              <button className="w-full sm:w-auto flex items-center justify-center text-white font-bold group px-6 py-5 rounded-2xl hover:bg-white/5 transition-all">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-brand-neon group-hover:text-brand-black transition-all">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Demo Produk
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-2/5 mt-20 lg:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200"
                alt="Gen Z Learning"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-4 glass-card rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono font-bold text-brand-neon">STUDENT PERFORMANCE</span>
                    <TrendingUp className="w-4 h-4 text-brand-teal" />
                  </div>
                  <div className="text-2xl font-display font-black">+42%</div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -top-10 -left-10 p-5 glass-card rounded-3xl -rotate-6 animate-float">
              <Camera className="w-6 h-6 text-brand-neon" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-6 bg-brand-violet rounded-3xl shadow-xl text-white max-w-[140px] rotate-3">
              <span className="text-3xl font-black block mb-1">PRO</span>
              <p className="text-[10px] font-bold uppercase opacity-70">SaaS Trusted</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
