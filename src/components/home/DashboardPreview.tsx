import { motion } from 'motion/react';
import { TrendingUp, UserCheck, BookOpen, GraduationCap } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-violet/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:flex items-center gap-20">
          <div className="lg:w-1/2 mb-20 lg:mb-0">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/30 mb-6 font-mono text-[10px] font-bold text-brand-violet uppercase tracking-widest">
              Live OS v2.0
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-[1.1]">
              PRECISION <br />
              <span className="text-brand-teal italic">INTERFACE.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
              Ucapkan selamat tinggal pada kerumitan manual. StudyTrack menghadirkan pusat komando digital yang intuitif, dirancang untuk performa tanpa kompromi.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, text: "Kalkulasi IPK otomatis & analisis tren cerdas", color: "text-brand-neon" },
                { icon: <UserCheck className="w-5 h-5" />, text: "Pelacakan keterlibatan tingkat mikroskopis", color: "text-brand-teal" },
                { icon: <BookOpen className="w-5 h-5" />, text: "Visualisasi heatmap distribusi tugas kelas", color: "text-brand-violet" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-5 group">
                  <div className={`transition-transform group-hover:scale-125 duration-300 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ rotateY: 20, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="glass-card rounded-[3.5rem] p-10 relative z-10 border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-violet to-brand-teal p-[1px]">
                    <div className="w-full h-full bg-brand-surface rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-brand-neon blur-[8px] absolute opacity-50" />
                      <GraduationCap className="w-6 h-6 text-white relative z-10" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xs text-white">STUDYTRACK OS</h4>
                    <p className="text-[10px] font-mono text-slate-500 uppercase">System Status: Stable</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                  <span className="text-[10px] font-black text-brand-neon tracking-tighter">SINKRONISASI LANGSUNG</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-white/[0.03] p-6 rounded-[2.5rem] border border-white/5">
                  <p className="text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-widest italic">Success Rate</p>
                  <p className="text-4xl font-display font-black text-brand-teal">94.2%</p>
                  <div className="mt-4 w-full bg-white/10 h-[2px] rounded-full">
                    <div className="bg-brand-teal h-full w-[94.2%] rounded-full shadow-[0_0_10px_#2DD4BF]" />
                  </div>
                </div>
                <div className="bg-white/[0.03] p-6 rounded-[2.5rem] border border-white/5">
                  <p className="text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-widest italic">Avg Grade</p>
                  <p className="text-4xl font-display font-black text-brand-violet">A-</p>
                  <p className="text-[10px] text-brand-neon font-black mt-2 uppercase">↑ 2.4% Momentum</p>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Latest Operations</h5>
                {[
                  { name: "Aljabar II - Kuis 3", status: "Verified", val: "A" },
                  { name: "Kalkulus - Final", status: "Building", val: ".." },
                ].map((task, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <span className="text-xs font-bold text-slate-300">{task.name}</span>
                    <div className="flex items-center gap-3">
                       <span className="text-[10px] font-mono text-slate-500">{task.val}</span>
                       <span className={`px-2 py-1 rounded-lg text-[10px] font-black tracking-tighter uppercase ${task.status === 'Verified' ? 'bg-brand-teal/20 text-brand-teal' : 'bg-brand-violet/20 text-brand-violet'}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floaties */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-violet opacity-20 blur-[100px] z-0" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-teal opacity-10 blur-[100px] z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
