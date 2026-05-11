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
      <section className="py-40 bg-white relative overflow-hidden border-t border-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 mb-8 tracking-tighter leading-none">
            SIAP UNTUK <br />
            <span className="luxe-gradient-text">BEREVOLUSI?</span>
          </h2>
          <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto font-medium">
            Bergabunglah dengan ratusan sekolah progresif yang telah mendigitalisasi ekosistem pendidikan mereka bersama StudyTrack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto bg-brand-primary text-white px-12 py-5 rounded-[2rem] font-bold text-lg hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:-translate-y-1 transition-all active:scale-95">
              Mulai Sekarang
            </button>
            <button className="w-full sm:w-auto border border-slate-200 text-slate-600 px-12 py-5 rounded-[2rem] font-bold text-lg hover:bg-slate-50 transition-all">
              Jadwalkan Demo
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
