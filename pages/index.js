import Head from 'next/head';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- PROFESSIONAL SEARCH-BAR NAVIGATION ---
const Navbar = ({ setIsNavOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-[#0b0f1a]/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl relative overflow-hidden">
        {/* Progress Bar Underlay */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-violet-500 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
        
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
          </div>
          <div className="flex items-baseline gap-2 text-white">
            <span className="font-bold text-md uppercase">Portfolio</span>
            <span className="text-[10px] uppercase tracking-widest text-violet-500 font-bold border-l border-white/20 pl-2">Rakesh G</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {['About', 'Skills', 'Experience', 'Projects'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
          ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <a href="#contact" className="text-violet-500 hover:text-violet-400">Connect</a>
        </div>
        
        <button onClick={() => setIsNavOpen(true)} className="md:hidden p-2 text-white">
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white opacity-50" />
        </button>
      </div>
    </nav>
  );
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "TensorFlow"], desc: "Built a robust time-series forecasting model using Long Short-Term Memory (LSTM) networks to predict stock price movements based on historical technical indicators." },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "Deep RL", "TensorFlow"], desc: "Developed a physics-based autonomous agent using Deep Reinforcement Learning (DRL) to master vehicle control in simulated terrains." },
    { title: "Fake Product Review Detection", tech: ["NLP", "Python", "ML"], desc: "Engineered an NLP pipeline to classify authenticity in e-commerce reviews using sentiment analysis and feature extraction." },
    { title: "Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Full-stack personal finance application with dynamic data visualization for real-time expenditure tracking." }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "PMIST", date: "07/2025 – Present", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "PMIST", date: "08/2022 – 05/2025", grade: "CGPA: 7.51 / 10.0", status: "Completed" }
  ];

  const experience = [
    { role: "Data Analyst Intern", company: "Tech Vaseegrah", date: "07/2024 – 08/2024", points: ["Engineered billing dashboards using Flask and SQL.", "Visualized complex business metrics to drive decision-making."] },
    { role: "AI & ML Trainee", company: "Rexroth Bosch Group", date: "Dec 2024 – Jan 2025", points: ["Worked on industrial predictive maintenance models.", "Analyzed real-world sensor datasets for ML applications."] }
  ];

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-violet-500/30 overflow-x-hidden">
        <Navbar setIsNavOpen={setIsNavOpen} />

        {/* FLOATING SOCIAL SIDEBAR (Left) */}
        <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50">
          <a href="https://github.com/Rakesh-developer28" target="_blank" className="text-slate-500 hover:text-violet-500 transition-all hover:-translate-y-1">📁</a>
          <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="text-slate-500 hover:text-violet-500 transition-all hover:-translate-y-1">🔗</a>
          <div className="w-px h-32 bg-gradient-to-t from-violet-500 to-transparent" />
        </div>

        {/* HERO */}
        <section className="pt-64 pb-32 px-6 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="px-5 py-2 rounded-full bg-violet-500/5 border border-violet-500/20 mb-10 text-[10px] font-mono text-violet-400 uppercase tracking-widest">
            $ Initializing Personal_PortFolio_v2.0
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-7xl md:text-[10rem] font-extrabold mb-8 tracking-tighter text-white leading-none uppercase">
            Rakesh <span className="text-violet-500">G</span>
          </motion.h1>
          <p className="max-w-2xl text-slate-400 text-xl font-light mb-12 italic leading-relaxed">
            "Turning massive data points into <span className="text-white border-b border-violet-500/50">intelligent systems</span> that drive real-world impact."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projects" className="px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all shadow-2xl shadow-violet-500/10 uppercase text-xs tracking-widest">Explore Projects</a>
            <a href="/resume.pdf" download="Rakesh_G_Resume.pdf" className="px-12 py-5 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all text-white uppercase text-xs tracking-widest">Download CV</a>
          </div>
        </section>

        {/* ENHANCED SUMMARY / ABOUT */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <h2 className="text-4xl font-extrabold text-white tracking-tighter sticky top-40">Creative <br/><span className="text-violet-500">Summary</span></h2>
            <div className="lg:col-span-2 space-y-8">
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                As an aspiring Data Scientist currently advancing through an <span className="text-white font-semibold">M.Sc. in Data Science at PMIST</span>, I sit at the intersection of mathematical theory and practical software engineering.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                My professional toolkit is centered on <span className="text-violet-400">Deep Learning</span> and <span className="text-violet-400">Natural Language Processing</span>. I have a verified history of translating complex business requirements into high-performance models, from <span className="text-white">LSTM-based financial forecasting</span> to <span className="text-white">Deep Reinforcement Learning</span> agents for automated control.
              </p>
              <div className="p-8 rounded-[32px] bg-gradient-to-br from-[#0b0f1a] to-black border border-white/5 italic text-slate-400 text-sm">
                "Whether it's optimizing ETL pipelines or training neural architectures, my goal is to extract maximum utility from every byte of data."
              </div>
            </div>
          </div>
        </section>

        {/* CORE COMPETENCY GRID */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-32 bg-[#050a18]/30">
          <div className="flex flex-col items-center mb-24">
            <h2 className="text-6xl font-extrabold text-white tracking-tighter mb-4 text-center">Core <span className="text-violet-500">Competency</span></h2>
            <div className="w-24 h-1 bg-violet-500 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[48px] bg-[#0b0f1a] border border-white/5 shadow-2xl group hover:border-violet-500/30 transition-all">
              <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4"><span>💻</span> Programming</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'SQL', 'JavaScript', 'HTML5', 'Tailwind', 'R'].map(s => <span key={s} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">{s}</span>)}
              </div>
            </div>
            <div className="p-12 rounded-[48px] bg-[#0b0f1a] border border-white/5 shadow-2xl group hover:border-violet-500/30 transition-all">
              <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4"><span>🤖</span> AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                {['LSTM', 'NLP', 'Deep RL', 'TensorFlow', 'Scikit-learn', 'PyTorch'].map(s => <span key={s} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-6xl font-extrabold mb-20 text-white tracking-tighter">Featured <br/><span className="text-violet-500 italic">Work</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <div key={i} onClick={() => setSelectedProject(proj)} className="p-12 bg-[#0b0f1a] border border-white/5 rounded-[56px] cursor-pointer hover:border-violet-500/50 transition-all h-[500px] flex flex-col justify-between group shadow-3xl">
                <div>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {proj.tech.map(t => <span key={t} className="text-[9px] font-black px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 uppercase tracking-[0.2em]">{t}</span>)}
                  </div>
                  <h4 className="text-4xl font-extrabold text-white group-hover:text-violet-400 transition-colors leading-tight mb-6 uppercase">{proj.title}</h4>
                  <p className="text-slate-500 text-lg italic leading-relaxed">Click to explore full case study & source →</p>
                </div>
                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-violet-500 self-end group-hover:bg-violet-500 group-hover:text-white transition-all transform group-hover:rotate-45">↗</div>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="p-16 rounded-[56px] bg-gradient-to-br from-[#0b0f1a] to-transparent border border-white/5 shadow-2xl">
            <h3 className="text-4xl font-extrabold text-violet-400 flex items-center gap-6 mb-10 uppercase tracking-tighter"><span>📢</span> Class Representative</h3>
            <p className="text-slate-400 text-xl font-medium mb-12 italic">Periyar Maniammai Institute of Science & Technology | 07/2025 – Present</p>
            <ul className="grid md:grid-cols-2 gap-8">
              <li className="p-6 bg-white/5 rounded-3xl border border-white/5 text-slate-500 text-sm leading-relaxed tracking-wide">
                <span className="text-violet-500 font-black block mb-2 font-mono">#01 Coordination</span>
                Orchestrated high-impact technical workshops and seminars to bridge the gap between academic theory and industry reality.
              </li>
              <li className="p-6 bg-white/5 rounded-3xl border border-white/5 text-slate-500 text-sm leading-relaxed tracking-wide">
                <span className="text-violet-500 font-black block mb-2 font-mono">#02 Technical Lead</span>
                Actively collaborated with the university’s internal dev-teams to streamline digital systems and enhance campus tech-infra.
              </li>
            </ul>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="py-24 text-center relative border-t border-white/5 bg-black/40">
          <h2 className="text-8xl md:text-[14rem] font-black mb-16 tracking-tighter text-white/5 absolute -top-12 left-1/2 -translate-x-1/2 uppercase select-none">Contact</h2>
          <div className="flex flex-wrap justify-center gap-12 relative z-10 px-6">
            <a href="mailto:rakesh28.dev@gmail.com" className="bg-[#0b0f1a] p-10 rounded-[40px] border border-white/5 hover:border-violet-500 transition-all text-white shadow-2xl group">
              <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2 group-hover:text-violet-500 transition-colors">Direct Email</span>
              rakesh28.dev@gmail.com
            </a>
          </div>
          <p className="mt-24 text-slate-700 text-[10px] tracking-[0.8em] font-mono uppercase">
            © 2026 RAKESH G | DATA SCIENCE | PMIST
          </p>
        </footer>

        {/* MODAL SYSTEM */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-16 rounded-[64px] max-w-3xl w-full text-white shadow-2xl">
                <h3 className="text-6xl font-black text-violet-400 mb-10 tracking-tighter uppercase leading-none">{selectedProject.title}</h3>
                <p className="text-slate-400 leading-relaxed text-xl mb-12 italic font-light">{selectedProject.desc}</p>
                <div className="flex flex-col sm:flex-row gap-6">
                  {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-6 bg-white text-black text-center font-bold rounded-3xl hover:bg-violet-500 hover:text-white transition-all uppercase text-xs tracking-[0.3em]">Source Code</a>}
                  <button onClick={() => setSelectedProject(null)} className="flex-1 py-6 bg-white/5 border border-white/10 rounded-3xl font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-[0.3em]">Exit View</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}