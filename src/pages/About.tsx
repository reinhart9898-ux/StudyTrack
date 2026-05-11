import { motion } from 'motion/react';
import { Target, Eye, Shield, Zap, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.5),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Meresapi Ulang <span className="text-indigo-500">Manajemen</span> Pendidikan
            </motion.h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              StudyTrack lahir dari pengamatan sederhana: institusi pendidikan menghabiskan terlalu banyak waktu untuk administrasi dan terlalu sedikit untuk memahami pertumbuhan siswa.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 text-indigo-600 font-bold mb-4">
              <Target className="w-5 h-5" />
              <span className="uppercase tracking-widest text-sm">Misi Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Memberdayakan setiap institusi dengan wawasan data real-time.</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Kami percaya bahwa transparansi antara guru, siswa, dan orang tua adalah kunci kesuksesan akademik. Dengan mendigitalisasi proses pemantauan, kami menghilangkan hambatan dan memungkinkan pendidik fokus pada hal terpenting: mengajar.
            </p>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 italic text-slate-500">
              "Teknologi harus menjadi jembatan, bukan penghalang, dalam hubungan antara siswa dan mentor."
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-indigo-50 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-white pointer-events-none" />
            </div>
            {/* Decal */}
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-8 rounded-3xl text-white shadow-xl max-w-[200px]">
              <span className="text-4xl font-black mb-1 block">10+</span>
              <p className="text-sm font-bold text-indigo-200">Tahun Pengalaman di EdTech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Nilai Utama yang Menggerakkan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Kepercayaan & Keamanan", desc: "Perlindungan data kelas enterprise untuk informasi siswa yang sensitif." },
              { icon: <Zap className="w-8 h-8" />, title: "Efisiensi Utama", desc: "Mengotomatiskan tugas rutin agar pendidik dapat fokus sepenuhnya." },
              { icon: <Award className="w-8 h-8" />, title: "Keunggulan", desc: "Komitmen membangun alat pendidikan yang paling halus dan efektif." },
            ].map((value, i) => (
              <div key={i} className="group">
                <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform text-indigo-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[240px] mx-auto">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Credits */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Membangun Masa Depan Berasama</h2>
          <p className="text-slate-500">Berbasis di Jakarta, melayani institusi secara global.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-slate-200 mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img src={`https://i.pravatar.cc/150?img=${i+20}`} alt="Tim Kami" referrerPolicy="no-referrer" />
              </div>
              <p className="font-bold text-slate-900">Anggota {i}</p>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Co-Founder</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
