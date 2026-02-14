import Head from 'next/head';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- SEARCH-BAR STYLE NAVIGATION ---
const Navbar = ({ setIsNavOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex justify-center">
      <div className="w-full max-w-5xl bg-[#0b0f1a]/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl">
        
        {/* BRANDING / SEARCH BAR LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all">
            {/* CPU Chip Logo Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-white tracking-tighter text-md uppercase">Portfolio</span>
            <span className="text-[10px] uppercase tracking-widest text-violet-500 font-bold border-l border-white/20 pl-2">Rakesh G</span>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <div className="w-px h-4 bg-white/10 mx-2"></div>
          <a href="#contact" className="text-violet-500 hover:text-violet-400">Connect</a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setIsNavOpen(true)} className="md:hidden p-2 text-white">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-4 h-0.5 bg-white ml-2"></div>
        </button>
      </div>
    </nav>
  );
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "Deep Learning"], desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Fake Product Review Detection", tech: ["NLP", "Python", "ML"], desc: "Developed a machine learning model to classify product reviews as real or fake using NLP techniques." },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "TensorFlow", "Deep RL"], desc: "Developed a DRL agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "Menu vs Delivery NLP", tech: ["Python", "NLP", "Analytics"], desc: "Analyzed food app reviews to compare menu quality vs delivery impact.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" },
    { title: "Finance Tracker", tech: ["Python", "Flask", "SQLite"], desc: "Personal finance tracker built using Flask, SQLite, and Chart.js.", link: "https://github.com/Rakesh-developer28/finance_tracker" }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "PMIST", date: "07/2025 – Present", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "PMIST", date: "08/2022 – 05/2025", grade: "CGPA: 7.51 / 10.0", status: "Completed" }
  ];

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Portfolio</title>
        <meta name="description" content="Rakesh G - Data Science Student and Software Developer Portfolio" />
      </Head>

      <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-violet-500/30 overflow-x-hidden">
        
        <Navbar setIsNavOpen={setIsNavOpen} />

        {/* MOBILE SIDEBAR WITH ICONS */}
        <AnimatePresence>
          {isNavOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsNavOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]" />
              <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 h-full w-72 bg-[#0b0f1a] border-l border-white/10 z-[120] p-8 shadow-2xl flex flex-col justify-between">
                <div>
                  <button onClick={() => setIsNavOpen(false)} className="absolute top-6 right-6 text-2xl text-white">✕</button>
                  <div className="mt-12 flex flex-col gap-6 text-lg font-medium">
                    <a href="#about" onClick={() => setIsNavOpen(false)} className="flex items-center gap-4 hover:text-violet-400 transition-all uppercase tracking-widest text-xs"><span>👤</span> About</a>
                    <a href="#skills" onClick={() => setIsNavOpen(false)} className="flex items-center gap-4 hover:text-violet-400 transition-all uppercase tracking-widest text-xs"><span>🛠️</span> Skills</a>
                    <a href="#education" onClick={() => setIsNavOpen(false)} className="flex items-center gap-4 hover:text-violet-400 transition-all uppercase tracking-widest text-xs"><span>🎓</span> Education</a>
                    <a href="#projects" onClick={() => setIsNavOpen(false)} className="flex items-center gap-4 hover:text-violet-400 transition-all uppercase tracking-widest text-xs"><span>📁</span> Projects</a>
                    <a href="#contact" onClick={() => setIsNavOpen(false)} className="flex items-center gap-4 hover:text-violet-400 transition-all uppercase tracking-widest text-xs"><span>📧</span> Contact</a>
                  </div>
                </div>
                {/* BOTTOM SOCIAL ICONS IN SIDEBAR */}
                <div className="flex justify-around border-t border-white/10 pt-8 pb-4">
                  <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="text-xl hover:text-violet-500 transition-all">🔗</a>
                  <a href="https://github.com/Rakesh-developer28" target="_blank" className="text-xl hover:text-violet-500 transition-all">📁</a>
                  <a href="mailto:rakesh28.dev@gmail.com" className="text-xl hover:text-violet-500 transition-all">📧</a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* HERO SECTION */}
        <section className="pt-56 pb-32 px-6 flex flex-col items-center text-center relative">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] -z-10" />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 text-xs font-mono text-violet-400">
            <span className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500/50"></div><div className="w-2 h-2 rounded-full bg-yellow-500/50"></div><div className="w-2 h-2 rounded-full bg-green-500/50"></div></span>
            $ Hello, World!
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-7xl md:text-9xl font-extrabold mb-6 tracking-tighter">
            Rakesh <span className="text-violet-500">G</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-xl text-slate-400 leading-relaxed mb-12 text-lg italic">
            "Transforming complex data into intelligent solutions."
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-violet-500 hover:text-white transition-all shadow-xl">View Projects ↗</a>
            <a href="resume.pdf" download className="px-10 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all text-white">Download CV</a>
          </div>
        </section>

        {/* CORE COMPETENCY GRID WITH SECTION ICONS */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-32 bg-[#050a18]/30">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">Core <span className="text-violet-500">Competency</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl text-violet-500">💻</span>
                <h3 className="text-xl font-bold text-white underline decoration-violet-500/30 underline-offset-8">Programming & Scripting</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Python', 'SQL', 'JavaScript', 'HTML5', 'Tailwind'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300">{s}</span>)}
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl text-violet-500">🤖</span>
                <h3 className="text-xl font-bold text-white underline decoration-violet-500/30 underline-offset-8">AI & Machine Learning</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'Scikit-learn', 'LSTM', 'NLP', 'DRL', 'Deep Learning'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300">{s}</span>)}
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl text-violet-500">📊</span>
                <h3 className="text-xl font-bold text-white underline decoration-violet-500/30 underline-offset-8">Data & Analytics</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Neo4j', 'SQLite', 'Pandas', 'NumPy', 'Power BI', 'Excel'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300">{s}</span>)}
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl text-violet-500">🛠️</span>
                <h3 className="text-xl font-bold text-white underline decoration-violet-500/30 underline-offset-8">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Flask', 'Next.js', 'Vercel', 'Git / GitHub', 'Figma', 'Postman'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP SECTION WITH ICON */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-6">Leadership <div className="h-0.5 flex-1 bg-violet-500/20"></div></h2>
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl text-violet-500">📢</span>
              <h3 className="text-2xl font-bold text-violet-400 tracking-tight">Class Representative</h3>
            </div>
            <p className="text-slate-400 font-medium mb-6 italic">PMIST | 07/2025 – Present</p>
            <ul className="space-y-4 text-slate-500 text-sm leading-relaxed">
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Organized workshops, seminars, and technical events to enhance student skills.</li>
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Collaborated with the university technical team to improve internal software systems.</li>
            </ul>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 text-center text-slate-600 text-[10px] tracking-[0.5em] font-mono border-t border-gray-900 uppercase">
          © 2026 RAKESH G | Periyar Maniammai Institute of Science & Technology
        </footer>
      </div>
    </>
  );
}