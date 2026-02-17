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
      if (scrollHeight) setScrollProgress((currentProgress / scrollHeight) * 100);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-[#0b0f1a]/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl relative overflow-hidden">
        <div className="absolute bottom-0 left-0 h-[2px] bg-violet-500 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
        
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-white uppercase text-md">Portfolio</span>
            <span className="text-[10px] uppercase text-violet-500 font-bold border-l border-white/20 pl-2">Rakesh G</span>
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase text-slate-500">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-violet-500 transition-colors">Projects</a>
        </div>

        <button onClick={() => setIsNavOpen(true)} className="md:hidden text-white text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // --- FULL DATA RESTORATION ---
  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "TensorFlow"], desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data. Focused on windowing techniques and hyperparameter tuning to minimize mean squared error." },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "Deep RL", "TensorFlow"], desc: "Developed a Deep Reinforcement Learning agent for a physics-based vehicle control problem using TensorFlow, Pygame, and Pymunk. Focused on reward shaping and policy optimization." },
    { title: "NLP Menu vs Delivery Analysis", tech: ["Python", "NLP", "Analytics"], desc: "Analyzed food app reviews to correlate menu quality and delivery efficiency using sentiment analysis. Utilized keyword extraction for actionable business insights." },
    { title: "Fake Product Review Detection", tech: ["NLP", "Python", "ML"], desc: "Engineered a classification model to detect fraudulent reviews. Applied text preprocessing (tokenization, lemmatization) and feature extraction to identify suspicious user patterns." },
    { title: "Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Full-stack personal finance application with secure authentication. Features categorized expense logging and interactive visualization of spending habits." }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "PMIST", date: "07/2025 – Present", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "PMIST", date: "08/2022 – 05/2025", grade: "CGPA: 7.51 / 10.0", status: "Completed" }
  ];

  const experience = [
    { role: "Data Analyst Intern", company: "Tech Vaseegrah", date: "07/2024 – 08/2024", points: ["Analyzed and visualized business data using Python, Excel, and SQL.", "Built a real-world billing and dashboard web application using Flask to streamline internal reporting."] },
    { role: "AI & ML Trainee", company: "Rexroth Bosch Group", date: "Dec 2024 – Jan 2025", points: ["Applied Deep Learning concepts to industrial manufacturing use cases.", "Worked with real-world sensor datasets to build predictive ML models."] }
  ];

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-violet-500/30 overflow-x-hidden">
        <Navbar setIsNavOpen={setIsNavOpen} />

        {/* HERO SECTION */}
        <section className="pt-64 pb-32 px-6 flex flex-col items-center text-center relative">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] -z-10" />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 text-[10px] font-mono text-violet-400 uppercase tracking-widest font-bold">
            $ Initializing_Personal_Expertise_v3.0
          </motion.div>
          <motion.h1 className="text-7xl md:text-[10rem] font-extrabold mb-8 tracking-tighter text-white uppercase leading-none">
            Rakesh <span className="text-violet-500">G</span>
          </motion.h1>
          <p className="max-w-2xl text-slate-400 text-xl font-light mb-12 italic leading-relaxed">
            "Bridging the gap between mathematical theory and intelligent systems."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projects" className="px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all shadow-xl uppercase text-xs tracking-widest">Explore Work</a>
            <a href="/resume.pdf" download="Rakesh_G_Resume.pdf" className="px-12 py-5 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all text-white uppercase text-xs tracking-widest">Download CV</a>
          </div>
        </section>

        {/* EXPANDED PROFESSIONAL SUMMARY */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="grid lg:grid-cols-3 gap-16">
            <h2 className="text-4xl font-extrabold text-white tracking-tighter uppercase">Professional <br/><span className="text-violet-500 italic">Summary</span></h2>
            <div className="lg:col-span-2 space-y-8 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a detail-oriented Data Science professional currently pursuing an <span className="text-white font-semibold">M.Sc. at PMIST</span>. I specialize in building intelligent systems through <span className="text-violet-400 font-bold">Deep Learning (LSTM)</span> and <span className="text-violet-400 font-bold">NLP</span>.
              </p>
              <p>
                My background sits at the intersection of mathematical theory and practical software engineering. I have a proven track record of delivering real-world projects by developing solutions and analyzing complex datasets to create actionable insights, demonstrated through my internship at <span className="text-white">Tech Vaseegrah</span>.
              </p>
              <div className="p-8 rounded-[32px] bg-violet-500/5 border border-violet-500/10 italic text-slate-300">
                "Whether I am optimizing ETL pipelines or training neural architectures, my objective is to engineer data solutions that are both scalable and impactful."
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-32 bg-[#050a18]/30">
          <h2 className="text-6xl font-extrabold text-white tracking-tighter mb-20 text-center uppercase">Core <span className="text-violet-500">Competency</span></h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div className="p-12 rounded-[48px] bg-[#0b0f1a] border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-bold mb-10 underline decoration-violet-500/30 underline-offset-8 uppercase tracking-widest">💻 Programming</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'SQL', 'JavaScript', 'HTML5', 'R', 'Neo4j'].map(s => <span key={s} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-slate-400 uppercase tracking-widest">{s}</span>)}
              </div>
            </div>
            <div className="p-12 rounded-[48px] bg-[#0b0f1a] border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-bold mb-10 underline decoration-violet-500/30 underline-offset-8 uppercase tracking-widest">🤖 AI & ML</h3>
              <div className="flex flex-wrap gap-3">
                {['LSTM', 'NLP', 'Deep RL', 'TensorFlow', 'Scikit-learn', 'Neural Networks'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[11px] font-bold text-slate-400 uppercase tracking-widest font-bold">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="experience" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-4xl font-extrabold text-white mb-16 uppercase tracking-tighter">Experience & <span className="text-violet-500 italic">Education</span></h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12 border-l border-white/10 pl-8">
              <h3 className="text-xl font-bold text-violet-400 uppercase tracking-widest underline decoration-violet-500/20 underline-offset-8">Experience</h3>
              {experience.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[40px] top-2 shadow-[0_0_10px_#8b5cf6]"></div>
                  <h4 className="font-bold text-xl text-white tracking-tight uppercase">{exp.role}</h4>
                  <p className="text-slate-400 font-medium mb-4 italic">{exp.company} | {exp.date}</p>
                  <ul className="space-y-3 text-sm text-slate-500 leading-relaxed uppercase tracking-wider font-bold">
                    {exp.points.map((p, j) => <li key={j} className="flex gap-3"><span className="text-violet-500">▹</span> {p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-12 border-l border-white/10 pl-8">
              <h3 className="text-xl font-bold text-violet-400 uppercase tracking-widest underline decoration-violet-500/20 underline-offset-8">Education</h3>
              {education.map((edu, i) => (
                <div key={i} className="relative">
                  <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[40px] top-2 shadow-[0_0_10px_#8b5cf6]"></div>
                  <h4 className="font-bold text-xl text-white tracking-tight uppercase">{edu.degree}</h4>
                  <p className="text-slate-400 font-medium italic">{edu.school}</p>
                  <p className="text-xs text-slate-600 mb-2 uppercase font-bold tracking-widest">{edu.date}</p>
                  {edu.grade && <p className="text-violet-300 font-bold text-lg">{edu.grade}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="p-16 rounded-[56px] bg-gradient-to-br from-[#0b0f1a] to-transparent border border-white/5 shadow-2xl text-white">
            <h3 className="text-4xl font-extrabold text-violet-400 flex items-center gap-6 mb-10 uppercase tracking-tighter underline decoration-white decoration-1 underline-offset-8 font-mono"><span>📢</span> Class Representative</h3>
            <p className="text-slate-400 text-xl font-medium mb-12 italic">PMIST | 07/2025 – Present</p>
            <ul className="space-y-4 text-slate-500 text-sm leading-relaxed font-bold uppercase tracking-wider">
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Organized technical workshops, seminars, and technical events to enhance student skills.</li>
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Collaborated with the university technical team to improve software systems.</li>
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Promoted departmental synergy through strategic coordination of academic activities.</li>
            </ul>
          </div>
        </section>

        <footer className="py-12 text-center text-slate-600 text-[10px] tracking-[0.8em] font-mono border-t border-gray-900 uppercase">
          © 2026 RAKESH G | PMIST
        </footer>

        {/* MODAL SYSTEM */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-16 rounded-[64px] max-w-3xl w-full text-white shadow-2xl text-center">
                <h3 className="text-5xl font-black text-violet-400 mb-10 tracking-tighter uppercase leading-none">{selectedProject.title}</h3>
                <p className="text-slate-400 leading-relaxed text-xl mb-12 italic font-light">{selectedProject.desc}</p>
                <button onClick={() => setSelectedProject(null)} className="py-6 px-12 bg-white/5 border border-white/10 rounded-3xl font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-[0.3em] font-bold font-mono">Exit View</button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}