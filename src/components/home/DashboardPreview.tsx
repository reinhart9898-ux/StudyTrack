import { motion } from 'motion/react';
import { TrendingUp, UserCheck, BookOpen, GraduationCap } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:flex items-center gap-24">
          <div className="lg:w-1/2 mb-20 lg:mb-0">
            <div className="inline-block px-5 py-2 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 mb-8 font-display text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">
              SISTEM CERDAS v2.5
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-10 leading-[1.05] tracking-tighter">
              INTERFACE <br />
              <span className="luxe-gradient-text">PRESISI.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">
              Pantau setiap indikator keberhasilan secara real-time melalui dashboard yang dirancang untuk kesederhanaan maksimal tanpa mengorbankan kedalaman data.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, text: "Kalkulasi IPK otomatis & analisis tren cerdas", color: "text-brand-primary", bg: "bg-brand-primary/10" },
                { icon: <UserCheck className="w-5 h-5" />, text: "Pelacakan keterlibatan tingkat mikroskopis", color: "text-brand-accent", bg: "bg-brand-accent/10" },
                { icon: <BookOpen className="w-5 h-5" />, text: "Visualisasi heatmap distribusi tugas kelas", color: "text-brand-secondary", bg: "bg-brand-secondary/10" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 group">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 duration-300 ${item.bg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-base font-bold tracking-tight text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ rotateY: 15, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="soft-glass rounded-[3.5rem] p-10 relative z-10 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] bg-white/40"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20">
                      <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xs text-slate-900 tracking-wider">STUDYTRACK OS</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active System</p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  <span className="text-[10px] font-black text-brand-primary tracking-widest uppercase">Live Sync</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50">
                  <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Success rate</p>
                  <p className="text-4xl font-display font-black luxe-gradient-text">94.2%</p>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50">
                  <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Avg Grade</p>
                  <p className="text-4xl font-display font-black text-slate-900 tracking-tighter">A-</p>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Latest Operations</h5>
                {[
                  { name: "Aljabar II - Kuis 3", status: "Verified", val: "A", color: "bg-brand-primary/10 text-brand-primary" },
                  { name: "Kalkulus - Final", status: "Process", val: "..", color: "bg-slate-100 text-slate-500" },
                ].map((task, i) => (
                  <div key={i} className="flex justify-between items-center p-5 rounded-[2rem] bg-white border border-slate-50 hover:border-brand-primary/20 transition-all group">
                    <span className="text-sm font-bold text-slate-700">{task.name}</span>
                    <div className="flex items-center gap-4">
                       <span className="text-[10px] font-bold text-slate-400">{task.val}</span>
                       <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase ${task.color}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Orbs */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-primary/10 blur-[100px] z-0" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-brand-secondary/5 blur-[120px] z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
