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
    title: "Real-time Analytics",
    description: "Instant visualization of student performance, identifying gaps before they become problems."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-indigo-600" />,
    title: "Digital Grading",
    description: "Streamlined assessment tools that make grading faster and feedback more constructive."
  },
  {
    icon: <Calendar className="w-8 h-8 text-indigo-600" />,
    title: "Presence Tracking",
    description: "Automated digital attendance systems that sync directly with parent notifications."
  },
  {
    icon: <Bell className="w-8 h-8 text-indigo-600" />,
    title: "Smart Notifications",
    description: "Stay ahead with automated alerts for assignments, schedule changes, and milestones."
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Parent Portal",
    description: "Keep parents informed with a dedicated dashboard showing their child's academic journey."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    title: "Secure Cloud Storage",
    description: "All academic data is encrypted and backed up daily on enterprise-grade infrastructure."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Core Capabilities</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Designed for Modern Education
          </p>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to manage a digital classroom and monitor institutional growth in one powerful platform.
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
