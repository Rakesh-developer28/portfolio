import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- GLOBAL STYLES (Add to globals.css for best results) ---
// .glass { background: rgba(17, 24, 39, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); }

export default function Portfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "TensorFlow"], desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data. Implemented data preprocessing and feature engineering.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Fake Product Review Detection", tech: ["NLP", "Python", "ML"], desc: "Developed a machine learning model to classify product reviews as real or fake using NLP techniques for text preprocessing and feature extraction." },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "Deep RL", "Pygame"], desc: "Developed a DRL agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Personal finance tracker built using Flask and SQLite with dynamic data visualization.", link: "https://github.com/Rakesh-developer28/finance_tracker" },
    { title: "Menu vs Delivery NLP", tech: ["Python", "NLP", "NLTK"], desc: "Analyzed food app reviews to compare menu quality vs delivery impact via sentiment analysis.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "PMIST", date: "07/2025 – Present", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "PMIST", date: "08/2022 – 05/2025", grade: "CGPA: 7.51", status: "Completed" }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* MOBILE SIDEBAR NAV */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsNavOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed right-0 top-0 h-full w-72 bg-[#0b0f1a] border-l border-white/10 z-[110] p-8 shadow-2xl">
              <button onClick={() => setIsNavOpen(false)} className="absolute top-6 right-6 text-2xl">✕</button>
              <div className="mt-12 flex flex-col gap-8 text-lg font-medium">
                {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsNavOpen(false)} className="hover:text-violet-400 transition-colors uppercase tracking-widest text-sm">{item}</a>
                ))}
              </div>
              <div className="absolute bottom-10 left-8 flex gap-6 text-xl text-slate-400">
                <a href="https://github.com/Rakesh-developer28" target="_blank">📁</a>
                <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank">🔗</a>
                <a href="mailto:rakesh28.dev@gmail.com">📧</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
        <h1 className="font-bold text-xl tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">RAKESH G</h1>
        <button onClick={() => setIsNavOpen(true)} className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-4 h-0.5 bg-white"></div>
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="pt-44 pb-32 px-6 flex flex-col items-center text-center relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] -z-10" />
        
        {/* Terminal Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-xs font-mono text-violet-400">
          <span className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500/50"></div><div className="w-2 h-2 rounded-full bg-yellow-500/50"></div><div className="w-2 h-2 rounded-full bg-green-500/50"></div></span>
          $ Hello, World!
        </motion.div>

        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm uppercase tracking-[0.4em] font-bold text-slate-500 mb-4">I'm</motion.h2>
        <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter">
          <span className="text-white">Rakesh</span> <span className="text-violet-500">G</span>
        </motion.h3>
        <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-2xl md:text-3xl font-bold text-slate-300 mb-8">Data Science Professional</motion.h4>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-xl text-slate-400 leading-relaxed mb-12 text-lg">
          Transforming complex datasets into <span className="text-violet-400">intelligent systems</span> and actionable insights through high-performance Deep Learning and NLP architectures.
        </motion.p>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-violet-500 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-xl shadow-violet-500/10">View Projects ↗</a>
          <a href="resume.pdf" download className="px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">Get CV</a>
        </motion.div>
      </section>

      {/* SUMMARY / ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">About <span className="h-px flex-1 bg-violet-500/30"></span></h2>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              I specialize in bridging the gap between <span className="text-white">Software Engineering</span> and <span className="text-white">Advanced Analytics</span>. My work centers on building predictive models and full-stack data applications that solve real-world problems.
            </p>
            <div className="flex gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex-1">
                <div className="text-2xl font-bold text-violet-500">M.Sc.</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Candidate</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex-1">
                <div className="text-2xl font-bold text-violet-500">7.51</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">B.Sc. CGPA</div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-violet-600/5 border border-violet-500/20 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl group-hover:bg-violet-500/40 transition-all duration-700" />
            <h4 className="text-violet-400 font-bold mb-6 text-sm uppercase tracking-widest">Focus Areas</h4>
            <ul className="space-y-4 font-medium text-slate-300">
              {['Predictive Modeling (LSTM)', 'Natural Language Processing', 'Deep Reinforcement Learning', 'Full-Stack Data Apps'].map((area) => (
                <li key={area} className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div> {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24 bg-[#050a18]/50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-5xl font-extrabold tracking-tighter">Featured <br /><span className="text-violet-500">Projects</span></h2>
          <p className="text-slate-500 text-sm max-w-xs font-mono tracking-tighter">04+ Successful Deployments. Scaling my knowledge horizontally.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(proj)}
              className="p-10 bg-[#0b0f1a] border border-white/5 rounded-[40px] cursor-pointer hover:border-violet-500/50 transition-all duration-300 group flex flex-col justify-between h-[420px] shadow-lg"
            >
              <div>
                <div className="flex gap-2 mb-8">
                  {proj.tech.map(t => <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">{t}</span>)}
                </div>
                <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-violet-400 transition-colors">{proj.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">Click to explore the detailed project architecture and results.</p>
              </div>
              <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest font-bold text-violet-500">Case Study</span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-violet-500 group-hover:text-white transition-all">↗</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION SPLIT */}
      <section className="max-w-5xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-24">
        {/* Education */}
        <div id="education">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-violet-500">Education <div className="h-0.5 flex-1 bg-violet-500/20"></div></h2>
          <div className="space-y-10">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-8 border-l border-white/10">
                <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full border-2 border-[#030712] ${edu.status === 'Current' ? 'bg-violet-500 animate-pulse shadow-[0_0_10px_#8b5cf6]' : 'bg-slate-700'}`}></div>
                <h4 className="font-bold text-xl mb-1">{edu.degree}</h4>
                <p className="text-slate-400 text-sm mb-2">{edu.school}</p>
                <div className="flex gap-3 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-slate-500">{edu.date}</span>
                  {edu.grade && <span className="text-violet-400">{edu.grade}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div id="experience">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-violet-500">Experience <div className="h-0.5 flex-1 bg-violet-500/20"></div></h2>
          <div className="space-y-12">
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-violet-500/20 transition-colors">
              <h4 className="font-bold text-xl text-white">Data Analyst Intern</h4>
              <p className="text-violet-400 text-sm font-medium mb-4">Tech Vaseegrah | 07/2024 – 08/2024</p>
              <ul className="text-slate-500 text-sm space-y-3 leading-relaxed">
                <li>• Optimized business decision speed via custom SQL and Python dashboards.</li>
                <li>• Built Flask-based production billing applications with SQLite integration.</li>
              </ul>
            </div>
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-violet-500/20 transition-colors">
              <h4 className="font-bold text-xl text-white">AI & ML Trainee</h4>
              <p className="text-violet-400 text-sm font-medium mb-4">Rexroth Bosch | 2024 – 2025</p>
              <p className="text-slate-500 text-sm leading-relaxed">Industrial training on predictive maintenance using sensor datasets and deep learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH SECTION */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-40 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <h2 className="text-7xl font-extrabold mb-8 tracking-tighter text-white relative z-10">Get In <span className="text-violet-500">Touch</span></h2>
        <p className="text-slate-400 mb-12 max-w-lg mx-auto italic">Open to Data Science internships and ML research collaborations.</p>
        
        <div className="flex flex-col items-center gap-6 relative z-10">
          <a href="mailto:rakesh28.dev@gmail.com" className="group flex items-center gap-4 bg-[#0b0f1a] px-8 py-6 rounded-[32px] border border-white/5 hover:border-violet-500 transition-all w-full max-w-md shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500 text-xl">📧</div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-slate-500">Email Me</div>
              <div className="text-slate-200 font-medium">rakesh28.dev@gmail.com</div>
            </div>
          </a>
          
          <div className="flex gap-4 w-full max-w-md">
            <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="flex-1 bg-white/5 p-6 rounded-[32px] border border-white/5 hover:bg-white text-black transition-all flex items-center justify-center gap-2 font-bold group">
              <span className="text-black group-hover:text-black">LinkedIn</span>
            </a>
            <a href="https://github.com/Rakesh-developer28" target="_blank" className="flex-1 bg-white/5 p-6 rounded-[32px] border border-white/5 hover:border-violet-500 transition-all flex items-center justify-center gap-2 font-bold">
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-600 text-xs tracking-widest font-mono border-t border-white/5 uppercase">
        © 2026 Rakesh G • Built with Next.js & Framer Motion
      </footer>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-[#0b0f1a] border border-white/10 p-10 rounded-[48px] max-w-2xl w-full shadow-2xl">
              <div className="flex gap-2 mb-6">
                {selectedProject.tech.map(t => <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-violet-500 text-white">{t}</span>)}
              </div>
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">{selectedProject.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">{selectedProject.desc}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all">View Repository</a>}
                <button onClick={() => setSelectedProject(null)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">Close Details</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}