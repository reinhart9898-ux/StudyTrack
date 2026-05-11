import { motion } from 'motion/react';
import { Camera, Image as ImageIcon, Video, Heart } from 'lucide-react';

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', title: 'Perpustakaan Modern', category: 'Lingkungan' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', title: 'Sesi Belajar Kelompok', category: 'Belajar' },
  { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998', title: 'Laboratorium Sains', category: 'Aktivitas' },
  { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', title: 'Pembelajaran Digital', category: 'Teknologi' },
  { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644', title: 'Kehidupan Kampus', category: 'Sosial' },
  { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7', title: 'Hari Kelulusan', category: 'Pencapaian' },
  { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952', title: 'Workshop Kreatif', category: 'Aktivitas' },
  { url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8', title: 'Bootcamp Coding', category: 'Teknologi' },
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b', title: 'Yoga Pagi', category: 'Olahraga' },
];

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      title: 'Kolaborasi Digital',
      category: 'Infrastruktur',
      size: 'lg'
    },
    {
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      title: 'Sesi Diskusi Aktif',
      category: 'Akademik',
      size: 'sm'
    },
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      title: 'Laboratorium Inovasi',
      category: 'Fasilitas',
      size: 'sm'
    },
    {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      title: 'Sistem Terintegrasi',
      category: 'Teknologi',
      size: 'lg'
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
      title: 'Pembelajaran Masa Depan',
      category: 'Visi',
      size: 'sm'
    },
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
      title: 'Prestasi Global',
      category: 'Outcome',
      size: 'sm'
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-display font-black text-white italic tracking-tighter mb-8 leading-none">
            CURATED <br />
            <span className="text-brand-neon">MOMENTS.</span>
          </h1>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em] max-w-sm leading-loose">
            Intip bagaimana teknologi masa depan mengubah pengalaman belajar hari ini.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[10px] font-mono text-brand-neon mb-2 uppercase tracking-widest">{image.category}</span>
                <h3 className="text-2xl font-display font-black text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
