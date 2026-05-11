import { motion } from 'motion/react';
import { Target, Eye, Shield, Zap, Heart, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Institusi', value: '500+', color: 'text-brand-neon' },
    { label: 'Siswa Aktif', value: '1.2jt', color: 'text-brand-violet' },
    { label: 'Efisiensi', value: '88%', color: 'text-brand-teal' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-brand-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-brand-secondary/5 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:flex items-center gap-24 mb-32">
          <div className="lg:w-1/2">
            <h1 className="text-6xl md:text-8xl font-display font-black text-slate-900 tracking-tighter mb-10 leading-none">
              MISI <br />
              <span className="luxe-gradient-text">KAMI.</span>
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed mb-8">
              Di StudyTrack, kami tidak sekadar membuat perangkat lunak. Kami membangun sistem saraf digital untuk pendidikan masa depan.
            </p>
            <p className="text-slate-400 leading-loose font-medium max-w-lg">
              Lahir di pusat inovasi, kami memahami tantangan pendidik di era digital. Misi kami adalah memberdayakan institusi dengan data yang akurat untuk menciptakan masa depan yang lebih cerah bagi setiap siswa.
            </p>
          </div>
          
          <div className="lg:w-1/2 mt-20 lg:mt-0 relative">
            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 premium-card mt-12 bg-white/40 soft-glass">
                 <div className="text-4xl font-display font-black text-brand-primary mb-2">99%</div>
                 <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Uptime Stability</p>
              </div>
              <div className="p-10 bg-brand-primary text-white rounded-[2.5rem] rotate-3 shadow-xl shadow-brand-primary/20">
                 <div className="text-4xl font-display font-black mb-2">24/7</div>
                 <p className="text-[10px] font-bold uppercase opacity-80 tracking-widest">AI Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 premium-card text-center group"
            >
              <div className={`text-6xl font-display font-black mb-6 transition-transform group-hover:scale-110 duration-500 luxe-gradient-text`}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-black">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
