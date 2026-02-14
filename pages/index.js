import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- PROFESSIONAL HEADER COMPONENT ---
const Navbar = ({ setIsNavOpen }) => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-[100] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO & PORTFOLIO NAME */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 text-xl group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tighter text-lg leading-none uppercase">Portfolio</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-violet-500 font-bold">Rakesh G</span>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#about" className="hover:text-violet-400 transition-colors">About</a>
          <a href="#education" className="hover:text-violet-400 transition-colors">Education</a>
          <a href="#skills" className="hover:text-violet-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-violet-400 transition-colors text-violet-500">Connect</a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setIsNavOpen(true)} className="md:hidden p-2 text-white">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-4 h-0.5 bg-white ml-2"></div>
        </button>
      </div>
    </nav>
  );
};

// --- MAIN PORTFOLIO PAGE ---
export default function Portfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "TensorFlow"], desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data. Implemented data preprocessing and feature engineering.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Fake Product Review Detection", tech: ["NLP", "Python", "ML"], desc: "Developed a machine learning model to classify product reviews as real or fake using NLP techniques for text preprocessing." },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "Deep RL", "TensorFlow"], desc: "Built a Deep Reinforcement Learning agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "Menu vs Delivery NLP", tech: ["Python", "NLP", "Analytics"], desc: "Analyzed food app reviews to compare menu quality vs delivery impact via sentiment analysis.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" },
    { title: "Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Personal finance tracker built using Flask and SQLite with dynamic data visualization.", link: "https://github.com/Rakesh-developer28/finance_tracker" }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "07/2025 – Present", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "08/2022 – 05/2025", grade: "CGPA: 7.51 / 10.0", status: "Completed" }
  ];

  const experience = [
    { role: "Data Analyst Intern", company: "Tech Vaseegrah", date: "07/2024 – 08/2024", points: ["Analyzed business data using Python and SQL.", "Built a real-world billing application using Flask."] },
    { role: "AI & ML Trainee", company: "Rexroth Bosch Group", date: "Dec 2024 – Jan 2025", points: ["Training on industrial AI applications using sensor datasets."] }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      <Navbar setIsNavOpen={setIsNavOpen} />

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsNavOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 h-full w-72 bg-[#0b0f1a] border-l border-white/10 z-[120] p-8 shadow-2xl">
              <button onClick={() => setIsNavOpen(false)} className="absolute top-6 right-6 text-2xl text-white">✕</button>
              <div className="mt-12 flex flex-col gap-8 text-lg font-medium text-gray-300">
                {['About', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsNavOpen(false)} className="hover:text-violet-400 transition-colors uppercase tracking-widest text-sm">{item}</a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-xs font-mono text-violet-400">
          $ Hello, World!
        </motion.div>
        <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter">
          Rakesh <span className="text-violet-500">G</span>
        </motion.h3>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto italic mb-10">"Transforming complex data into intelligent solutions."</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-violet-500 hover:text-white transition-all">View Projects ↗</a>
          <a href="resume.pdf" download className="px-10 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all">Download CV</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-violet-500 pl-4">Professional Summary</h2>
        <div className="grid lg:grid-cols-3 gap-12 text-gray-400 text-lg leading-relaxed">
          <div className="lg:col-span-2">
            <p className="mb-6">Aspiring Data Scientist and M.Sc. candidate at <span className="text-white font-semibold">Periyar Maniammai Institute of Science & Technology</span>. I specialize in building intelligent systems through <span className="text-violet-400 font-bold">Deep Learning</span> and <span className="text-violet-400 font-bold">NLP</span>.</p>
            <p>I have experience aligning technical expertise with business needs during my internship at <span className="text-white font-semibold">Tech Vaseegrah</span>.</p>
          </div>
          <div className="bg-violet-500/5 border border-violet-500/20 p-8 rounded-3xl h-fit">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Focus Areas</h4>
            <ul className="space-y-3 text-sm italic">
              <li>• Predictive Modeling (LSTM)</li>
              <li>• Natural Language Processing</li>
              <li>• Reinforcement Learning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CORE COMPETENCY GRID */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-32 bg-[#050a18]/30">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">Core <span className="text-violet-500">Competency</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
            <h3 className="text-xl font-bold text-white mb-8 underline decoration-violet-500/50 underline-offset-8">Programming & Scripting</h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'SQL', 'JavaScript', 'HTML5', 'Tailwind'].map(s => <span key={s} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-sm">{s}</span>)}
            </div>
          </div>
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
            <h3 className="text-xl font-bold text-white mb-8 underline decoration-violet-500/50 underline-offset-8">AI & Machine Learning</h3>
            <div className="flex flex-wrap gap-3">
              {['TensorFlow', 'Scikit-learn', 'LSTM', 'NLP', 'DRL'].map(s => <span key={s} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-sm">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-12 border-b border-gray-800 pb-4">Featured <span className="text-violet-500">Projects</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div key={i} onClick={() => setSelectedProject(proj)} whileHover={{ y: -10 }} className="p-8 bg-[#0b0f1a] border border-white/5 rounded-[40px] cursor-pointer hover:border-violet-500/50 transition-all h-[420px] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map(t => <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">{t}</span>)}
                </div>
                <h4 className="text-3xl font-bold text-white group-hover:text-violet-400 mb-4 leading-tight">{proj.title}</h4>
                <p className="text-slate-500 text-sm italic">Click to view Case Study →</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-violet-500 self-end">↗</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION JOURNEY */}
      <section id="education" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-violet-500 pl-4">Education Journey</h2>
        <div className="relative border-l-2 border-indigo-800 ml-4 space-y-16">
          {education.map((edu, i) => (
            <div key={i} className="relative pl-10">
              <div className={`absolute w-6 h-6 rounded-full -left-[13px] top-0 border-4 border-[#030712] ${edu.status === 'Current' ? 'bg-violet-500 animate-pulse' : 'bg-indigo-900'}`}></div>
              <div className="p-8 bg-[#0b0f1a] border border-white/5 rounded-3xl shadow-xl">
                <span className="text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-violet-500/20 text-violet-400">{edu.status}</span>
                <h3 className="text-2xl font-bold text-violet-400 mt-4">{edu.degree}</h3>
                <p className="text-gray-300 font-medium">{edu.school}</p>
                <p className="text-sm text-gray-500 italic mt-1">{edu.date}</p>
                {edu.grade && <p className="mt-4 text-violet-300 font-bold">{edu.grade}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-violet-500 pl-4">Leadership</h2>
        <div className="p-8 rounded-[40px] bg-[#0b0f1a] border border-white/5 max-w-3xl">
          <h3 className="text-2xl font-bold text-violet-400">Class Representative</h3>
          <p className="text-slate-400 text-sm font-medium mb-4">PMIST | 07/2025 – Present</p>
          <ul className="space-y-3 text-slate-500 text-sm leading-relaxed">
            <li>• Organized workshops, seminars, and technical events to enhance student skills.</li>
            <li>• Collaborated with the university technical team to improve internal software systems.</li>
            <li>• Promoted department growth through strategic planning and technical coordination.</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 text-center relative border-t border-white/5">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-12 tracking-tighter text-white">Get In <span className="text-violet-500">Touch</span></h2>
        <div className="flex flex-wrap justify-center gap-10">
          <a href="mailto:rakesh28.dev@gmail.com" className="bg-[#0b0f1a] p-6 rounded-[32px] border border-white/5 hover:border-violet-500 transition-all flex items-center gap-4 text-white">
            <span className="p-3 bg-violet-500/10 rounded-full text-violet-500">📧</span> rakesh28.dev@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="bg-white/5 px-8 py-6 rounded-[32px] border border-white/5 hover:text-violet-400 transition-all font-bold text-white">LinkedIn 🔗</a>
          <a href="https://github.com/Rakesh-developer28" target="_blank" className="bg-white/5 px-8 py-6 rounded-[32px] border border-white/5 hover:text-violet-400 transition-all font-bold text-white">GitHub 📁</a>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 text-[10px] tracking-[0.4em] font-mono border-t border-gray-900 uppercase">
        © 2026 RAKESH G | Periyar Maniammai Institute of Science & Technology
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-10 rounded-[48px] max-w-2xl w-full text-white">
              <h3 className="text-4xl font-bold text-violet-400 mb-6 tracking-tighter uppercase">{selectedProject.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg mb-8 italic">{selectedProject.desc}</p>
              <div className="flex gap-4">
                {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all uppercase text-xs">View Code</a>}
                <button onClick={() => setSelectedProject(null)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all uppercase text-xs">Close</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}