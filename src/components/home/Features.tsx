import { 
  Users, 
  BarChart3, 
  Calendar, 
  Bell, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
    title: "Analitik Real-time",
    description: "Visualisasi instan performa siswa, mengidentifikasi tantangan sebelum menjadi masalah."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-indigo-600" />,
    title: "Penilaian Digital",
    description: "Alat evaluasi efisien yang mempercepat pemberian nilai dan umpan balik konstruktif."
  },
  {
    icon: <Calendar className="w-8 h-8 text-indigo-600" />,
    title: "Pelacakan Kehadiran",
    description: "Sistem absensi digital otomatis yang tersinkronisasi langsung dengan notifikasi orang tua."
  },
  {
    icon: <Bell className="w-8 h-8 text-indigo-600" />,
    title: "Notifikasi Pintar",
    description: "Tetap terdepan dengan peringatan otomatis untuk tugas, perubahan jadwal, dan momen penting."
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Portal Orang Tua",
    description: "Berikan akses kepada orang tua melalui dashboard khusus perjalanan akademik anak mereka."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    title: "Penyimpanan Cloud Aman",
    description: "Semua data akademik dienkripsi dan dicadangkan harian pada infrastruktur kelas enterprise."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-neon font-mono font-bold uppercase tracking-[0.3em] text-xs mb-4">Core Engine</h2>
            <p className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-none">
              FUTURE-TECH <br /> FOR CLASSROOMS.
            </p>
          </div>
          <p className="text-slate-500 max-w-sm text-sm font-light uppercase tracking-widest leading-loose">
            Digitally Native infrastructure designed for institutions that prioritize speed, accuracy, and student growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-8 rounded-[2.5rem] glass-card group transition-all duration-500 hover:bg-white/10 ${
                index === 0 ? "md:col-span-2 lg:col-span-3 lg:row-span-2" : 
                index === 1 ? "md:col-span-2 lg:col-span-3" : 
                "md:col-span-2 lg:col-span-2"
              }`}
            >
              <div className="bg-brand-neon/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-neon group-hover:rotate-[360deg] transition-all duration-700">
                <div className="text-brand-neon group-hover:text-brand-black transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-black text-white mb-4 italic">{feature.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-10 h-1 bg-white/5 w-full rounded-full overflow-hidden">
                <div className="h-full bg-brand-neon w-0 group-hover:w-full transition-all duration-700 delay-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
