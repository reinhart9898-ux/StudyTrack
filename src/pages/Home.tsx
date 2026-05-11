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
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Siap mendigitalisasi institusi Anda?
          </h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan sekolah progresif yang menjadikan pendidikan lebih transparan dan efisien bersama StudyTrack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/20">
              Mulai Uji Coba Gratis
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Jadwalkan Demo
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
