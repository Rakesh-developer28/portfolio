import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "Stock Market Prediction (LSTM)", 
      tech: ["Python", "LSTM", "TensorFlow"], 
      desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data. Implemented data preprocessing, feature engineering, and model tuning to improve prediction accuracy.", 
      link: "https://github.com/Rakesh-developer28/stock_prediction" 
    },
    { 
      title: "Fake Product Review Detection", 
      tech: ["NLP", "Python", "ML"], 
      desc: "Developed a machine learning model to classify product reviews as real or fake using NLP techniques for text preprocessing and feature extraction. Built to improve consumer trust in e-commerce." 
    },
    { 
      title: "Neural Pilot – Hill Climb AI", 
      tech: ["Python", "TensorFlow", "Deep RL"], 
      desc: "Built a Deep Reinforcement Learning agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk. Focused on reward shaping and policy optimization.", 
      link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" 
    },
    { 
      title: "Menu vs Delivery NLP Analysis", 
      tech: ["Python", "NLP", "Analytics"], 
      desc: "Analyzed food app reviews to compare menu quality vs delivery impact via sentiment analysis and keyword extraction to drive business insights.", 
      link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" 
    },
    { 
      title: "Finance Tracker", 
      tech: ["Flask", "SQLite", "Chart.js"], 
      desc: "Full-stack personal finance tracker built using Flask and SQLite with dynamic data visualization using Chart.js.", 
      link: "https://github.com/Rakesh-developer28/finance_tracker" 
    }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "07/2025 – Present", location: "Thanjavur, India", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "08/2022 – 05/2025", location: "Thanjavur, India", grade: "CGPA: 7.51 / 10.0", status: "Completed" }
  ];

  const experience = [
    { 
      role: "Data Analyst Intern", 
      company: "Tech Vaseegrah", 
      date: "07/2024 – 08/2024", 
      points: [
        "Analyzed and visualized business data using Python, Excel, and SQL.",
        "Built a real-world billing and dashboard web application using Flask.",
        "Integrated user authentication and billing modules."
      ] 
    },
    { 
      role: "AI & ML Trainee", 
      company: "Rexroth Bosch Group", 
      date: "Dec 2024 – Jan 2025", 
      points: [
        "Intensive training on industrial AI applications.",
        "Worked with real-world sensor datasets to build predictive ML models."
      ] 
    }
  ];

  const volunteering = { 
    role: "Class Representative", 
    org: "Periyar Maniammai Institute of Science & Technology", 
    date: "07/2025 – Present", 
    points: [
      "Organized workshops, seminars, and technical events to enhance student skills.", 
      "Collaborated with the university technical team to improve internal software systems.", 
      "Promoted department growth through strategic planning."
    ] 
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* SIDEBAR NAV */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsNavOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 h-full w-72 bg-[#0b0f1a] border-l border-white/10 z-[110] p-8 shadow-2xl">
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

      <header className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
        <h1 className="font-bold text-xl tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">RAKESH G</h1>
        <button onClick={() => setIsNavOpen(true)} className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-4 h-0.5 bg-white"></div>
        </button>
      </header>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-xs font-mono text-violet-400">
          $ Hello, World!
        </motion.div>
        <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter">
          Rakesh <span className="text-violet-500">G</span>
        </motion.h3>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Transforming complex datasets into <span className="text-violet-400">intelligent systems</span> and actionable insights.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-violet-500 hover:text-white transition-all shadow-lg shadow-violet-500/10">View Projects</a>
          <a href="resume.pdf" download className="px-10 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all text-white">Download CV</a>
        </div>
      </section>

      {/* CORE COMPETENCY GRID */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-32 bg-[#050a18]/30">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-4">
            Core <span className="text-violet-500">Competency</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
            <h3 className="text-xl font-bold text-white mb-8">Programming & Scripting</h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'SQL', 'JavaScript', 'HTML5', 'Tailwind CSS'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300">{s}</span>)}
            </div>
          </div>
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
            <h3 className="text-xl font-bold text-white mb-8">AI & Machine Learning</h3>
            <div className="flex flex-wrap gap-3">
              {['TensorFlow', 'Scikit-learn', 'LSTM', 'NLP', 'Reinforcement Learning'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300">{s}</span>)}
            </div>
          </div>
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
            <h3 className="text-xl font-bold text-white mb-8">Data & Databases</h3>
            <div className="flex flex-wrap gap-3">
              {['Neo4j', 'SQLite', 'Pandas', 'NumPy', 'Power BI', 'Excel'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300">{s}</span>)}
            </div>
          </div>
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
            <h3 className="text-xl font-bold text-white mb-8">Tools & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {['Flask', 'Next.js', 'Vercel', 'Git / GitHub', 'Figma'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-extrabold mb-12 border-b border-gray-800 pb-4">Featured <span className="text-violet-500">Projects</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div key={i} onClick={() => setSelectedProject(proj)} whileHover={{ y: -10 }} className="p-8 bg-[#0b0f1a] border border-white/5 rounded-[40px] cursor-pointer hover:border-violet-500/50 transition-all flex flex-col justify-between h-[420px] shadow-2xl group">
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map(t => <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">{t}</span>)}
                </div>
                <h4 className="text-3xl font-bold text-white group-hover:text-violet-400 transition-colors mb-4">{proj.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">Click to view Case Study & GitHub →</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all self-end">↗</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VOLUNTEERING (Class Rep) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-violet-500 pl-4 text-white">Leadership</h2>
        <div className="p-8 rounded-[40px] bg-[#0b0f1a] border border-white/5 shadow-xl max-w-3xl">
          <h3 className="text-2xl font-bold text-violet-400">{volunteering.role}</h3>
          <p className="text-slate-400 font-medium mb-4">{volunteering.org} | {volunteering.date}</p>
          <ul className="space-y-3 text-slate-500 text-sm">
            {volunteering.points.map((p, j) => <li key={j}>• {p}</li>)}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-12 tracking-tighter text-white relative z-10">Get In <span className="text-violet-500">Touch</span></h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 relative z-10">
          <a href="mailto:rakesh28.dev@gmail.com" className="flex items-center gap-4 bg-[#0b0f1a] px-8 py-6 rounded-[32px] border border-white/5 hover:border-violet-500 transition-all text-white">
             rakesh28.dev@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="bg-white/5 px-8 py-6 rounded-[32px] border border-white/5 hover:text-violet-400 transition-all text-white">LinkedIn</a>
          <a href="https://github.com/Rakesh-developer28" target="_blank" className="bg-white/5 px-8 py-6 rounded-[32px] border border-white/5 hover:text-violet-400 transition-all text-white">GitHub</a>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-10 rounded-[48px] max-w-2xl w-full text-white">
              <h3 className="text-4xl font-bold text-violet-400 mb-6">{selectedProject.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">{selectedProject.desc}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all">View Repository</a>}
                <button onClick={() => setSelectedProject(null)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">Close</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-slate-600 text-xs tracking-widest font-mono border-t border-gray-900 uppercase">
        © 2026 RAKESH G | Periyar Maniammai Institute of Science & Technology
      </footer>
    </div>
  );
}