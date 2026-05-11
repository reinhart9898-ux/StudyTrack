import { motion } from 'motion/react';
import { Target, Eye, Shield, Zap, Heart, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Institusi', value: '500+', color: 'text-brand-neon' },
    { label: 'Siswa Aktif', value: '1.2jt', color: 'text-brand-violet' },
    { label: 'Efisiensi', value: '88%', color: 'text-brand-teal' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-brand-violet/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:flex items-center gap-20 mb-32">
          <div className="lg:w-1/2">
            <h1 className="text-6xl md:text-8xl font-display font-black text-white italic tracking-tighter mb-10 leading-none">
              OUR <br />
              <span className="text-brand-violet">MISSION.</span>
            </h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed mb-8">
              Di StudyTrack, kami tidak sekadar membuat perangkat lunak. Kami membangun sistem saraf digital untuk pendidikan masa depan.
            </p>
            <p className="text-slate-500 leading-loose">
              Lahir di pusat inovasi, kami memahami tantangan pendidik di era digital. Misi kami adalah memberdayakan institusi dengan data yang akurat untuk menciptakan masa depan yang lebih cerah bagi setiap siswa.
            </p>
          </div>
          
          <div className="lg:w-1/2 mt-20 lg:mt-0 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 glass-card rounded-[2.5rem] mt-10">
                 <div className="text-4xl font-display font-black text-brand-violet mb-2">99%</div>
                 <p className="text-[10px] font-mono uppercase text-slate-500">Uptime Stability</p>
              </div>
              <div className="p-8 bg-brand-neon rounded-[2.5rem] text-brand-black rotate-3">
                 <div className="text-4xl font-display font-black mb-2">24/7</div>
                 <p className="text-[10px] font-mono uppercase opacity-70">AI Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 glass-card rounded-[3rem] text-center group hover:border-white/20 transition-all border-white/5"
            >
              <div className={`text-6xl font-display font-black mb-4 transition-transform group-hover:scale-110 duration-500 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
