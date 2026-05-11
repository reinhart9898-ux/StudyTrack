import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

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
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-brand-secondary/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <h1 className="text-6xl md:text-8xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-none">
            EKSPLORASI <br />
            <span className="luxe-gradient-text">VISUAL.</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-sm leading-relaxed">
            Intip bagaimana teknologi masa depan mengubah pengalaman belajar hari ini melalui platform kami.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl bg-white p-4"
            >
              <div className="overflow-hidden rounded-[2rem] relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full transition-all duration-700 scale-100 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[10px] font-bold text-brand-primary mb-2 uppercase tracking-[0.2em]">{image.category}</span>
                  <h3 className="text-2xl font-display font-black text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
