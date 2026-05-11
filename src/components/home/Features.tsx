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
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-6">INTI TEKNOLOGI</h2>
            <p className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[0.95]">
              INFRASTRUKTUR <br />
              <span className="luxe-gradient-text">MASA DEPAN.</span>
            </p>
          </div>
          <p className="text-slate-400 max-w-sm text-base font-medium leading-relaxed">
            Satu platform untuk semua kebutuhan manajemen pendidikan Anda, dirancang dengan fokus pada pengalaman pengguna dan kecepatan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-10 premium-card group"
            >
              <div className="bg-brand-primary/10 w-16 h-16 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <div className="text-brand-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-black text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-12 h-1 bg-slate-50 w-full rounded-full overflow-hidden">
                <div className="h-full bg-brand-primary/30 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
