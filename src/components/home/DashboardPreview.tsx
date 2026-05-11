import { motion } from 'motion/react';
import { TrendingUp, UserCheck, BookOpen, Clock } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Powerful analytics, <br />
              <span className="text-indigo-600">Simplified Dashboard.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              No more manual spreadsheets. StudyTrack provides a centralized command center where every student's achievement is visible at a glance.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, text: "Automated GPA calculation & trend analysis", color: "bg-emerald-100 text-emerald-600" },
                { icon: <UserCheck className="w-5 h-5" />, text: "Engagement tracking per subject & activity", color: "bg-blue-100 text-blue-600" },
                { icon: <BookOpen className="w-5 h-5" />, text: "Detailed assignment completion heatmaps", color: "bg-indigo-100 text-indigo-600" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-2xl p-8 border border-slate-200 relative z-10"
            >
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Dr. Sarah Johnson</h4>
                    <p className="text-xs text-slate-500">Mathematics Dept.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                  <span className="text-xs font-bold text-indigo-600">LIVE SYNC</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Class Attendance</p>
                  <p className="text-2xl font-black text-slate-900">94.2%</p>
                  <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full">
                    <div className="bg-indigo-500 h-full w-[94.2%] rounded-full" />
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Average Grade</p>
                  <p className="text-2xl font-black text-slate-900">A-</p>
                  <p className="text-[10px] text-emerald-600 font-bold mt-1">↑ 2% from last month</p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Assignments</h5>
                {[
                  { name: "Algebra II - Quiz 3", status: "Completed", score: "88/100" },
                  { name: "Calculus - Group Project", status: "Pending", score: "--" },
                ].map((task, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 text-sm">
                    <span className="font-semibold text-slate-700">{task.name}</span>
                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${task.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-200 rounded-full blur-[100px] opacity-60 z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-200 rounded-full blur-[80px] opacity-60 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
