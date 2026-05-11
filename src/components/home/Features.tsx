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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Kapabilitas Utama</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Dirancang untuk Pendidikan Modern
          </p>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk mengelola kelas digital dan memantau pertumbuhan institusi dalam satu platform canggih.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
