import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import DashboardPreview from '../components/home/DashboardPreview';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <DashboardPreview />
      
      {/* Call to Action Section */}
      <section className="py-32 bg-brand-surface relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-violet/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-none">
            READY TO <br />
            <span className="text-brand-neon">EVOLVE?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-light">
            Bergabunglah dengan ratusan sekolah progresif yang menjadikan pendidikan lebih transparan dan efisien bersama StudyTrack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto bg-brand-neon text-brand-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-110 transition-all shadow-[0_0_50px_rgba(217,255,0,0.3)]">
              Mulai Sekarang
            </button>
            <button className="w-full sm:w-auto border border-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/5 transition-all">
              Jadwalkan Demo
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
