import { motion } from 'motion/react';
import { Camera, Image as ImageIcon, Video, Heart } from 'lucide-react';

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', title: 'Modern Library', category: 'Environment' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', title: 'Group Study Session', category: 'Study' },
  { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998', title: 'Science Lab', category: 'Activities' },
  { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', title: 'Digital Learning', category: 'Technology' },
  { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644', title: 'Campus Life', category: 'Social' },
  { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7', title: 'Graduation Day', category: 'Milestones' },
  { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952', title: 'Creative Workshop', category: 'Activities' },
  { url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8', title: 'Coding Bootcamp', category: 'Technology' },
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b', title: 'Morning Yoga', category: 'Sports' },
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Institutional <span className="text-indigo-600">Moments</span></h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A vibrant look at institutions using StudyTrack to monitor and celebrate every step of the educational journey.
          </p>
        </div>

        {/* Filter categories placeholder */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Activities', 'Study', 'Milestones', 'Technology'].map((cat) => (
            <button 
              key={cat}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                cat === 'All' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] sm:aspect-square bg-slate-100"
            >
              <img 
                src={`${item.url}?auto=format&fit=crop&q=80&w=800`}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex justify-between items-center text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-1 block">{item.category}</span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <Camera className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-indigo-50 p-12 rounded-[3.5rem] border border-indigo-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">Capture Your Institution's Story</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Start documenting success today. StudyTrack helps you not just track numbers, but meaningful milestones.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all">
              Upload New Achievement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
