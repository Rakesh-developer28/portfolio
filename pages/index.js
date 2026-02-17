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
          <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-white uppercase text-md">Portfolio</span>
            <span className="text-[10px] uppercase text-violet-500 font-bold border-l border-white/20 pl-2 tracking-widest">Rakesh G</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase text-slate-500">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <div className="w-px h-4 bg-white/10 mx-2" />
          <a href="#contact" className="text-violet-500 hover:text-violet-400 font-bold">Connect</a>
        </div>
        <button onClick={() => setIsNavOpen(true)} className="md:hidden text-white text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // --- COMPREHENSIVE DATA RESTORATION ---
  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "TensorFlow"], desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "Deep RL", "Pymunk"], desc: "Developed a Deep Reinforcement Learning agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "Menu vs Delivery NLP", tech: ["Python", "NLP", "Analytics"], desc: "Analyzed food app reviews to compare menu quality vs delivery impact via sentiment analysis.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" },
    { title: "Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Personal finance tracker mini-project built using Flask, SQLite, and Chart.js.", link: "https://github.com/Rakesh-developer28/finance_tracker" },
    { title: "Fake Product Review Detection", tech: ["NLP", "Python", "ML"], desc: "Developed a machine learning model to classify product reviews as real or fake using NLP techniques." }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "07/2025 – Present", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "08/2022 – 05/2025", grade: "CGPA: 7.51 / 10.0", status: "Completed" }
  ];

  const experience = [
    { role: "Data Analyst Intern", company: "Tech Vaseegrah", date: "07/2024 – 08/2024", points: ["Analyzed and visualized business data using Python, Excel, and SQL.", "Built a real-world billing and dashboard web application using Flask."] },
    { role: "AI & ML Trainee", company: "Rexroth Bosch Group", date: "Dec 2024 – Jan 2025", points: ["Intensive training on industrial AI applications using sensor datasets.", "Worked with real-world datasets to build predictive models."] }
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
            $ Initializing_Data_Science_Portfolio_v4.0
          </motion.div>
          <motion.h1 className="text-7xl md:text-[10rem] font-extrabold mb-8 tracking-tighter text-white uppercase leading-none">
            Rakesh <span className="text-violet-500">G</span>
          </motion.h1>
          <p className="max-w-2xl text-slate-400 text-xl font-light mb-12 italic leading-relaxed">
            "Transforming complex data into <span className="text-white border-b border-violet-500/50">intelligent solutions</span> that drive real-world impact."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projects" className="px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all shadow-xl uppercase text-xs tracking-widest">Explore Projects</a>
            <a href="/resume.pdf" download="Rakesh_G_Resume.pdf" className="px-12 py-5 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all text-white uppercase text-xs tracking-widest">Download CV</a>
          </div>
        </section>

        {/* UPDATED PROFESSIONAL SUMMARY */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="grid lg:grid-cols-3 gap-16">
            <h2 className="text-4xl font-extrabold text-white tracking-tighter uppercase">Professional <br/><span className="text-violet-500 italic">Summary</span></h2>
            <div className="lg:col-span-2 space-y-8 text-slate-400 text-lg leading-relaxed text-justify">
              <p>
                I am a detail-oriented **Data Science student** currently pursuing an **M.Sc. at PMIST**. Having completed my **B.Sc. in Data Science** with a CGPA of 7.51, I specialize in building intelligent systems through **Deep Learning (LSTM)** and **Natural Language Processing (NLP)**.
              </p>
              <p>
                My professional toolkit sits at the intersection of mathematical theory and practical software engineering. I have a proven track record of delivering real-world projects—from **LSTM-based stock forecasting** to **Deep Reinforcement Learning agents**—and analyzing complex datasets to create actionable insights.
              </p>
            </div>
          </div>
        </section>

        {/* CORE COMPETENCY GRID - ALL SKILLS RESTORED */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-32 bg-[#050a18]/30">
          <h2 className="text-6xl font-extrabold text-white tracking-tighter mb-20 text-center uppercase">Core <span className="text-violet-500">Competency</span></h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div className="p-12 rounded-[48px] bg-[#0b0f1a] border border-white/5 shadow-2xl hover:border-violet-500/30 transition-all">
              <h3 className="text-2xl font-bold mb-10 underline decoration-violet-500/30 underline-offset-8 uppercase tracking-widest">💻 Programming & Data</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'R', 'SQL', 'JavaScript', 'HTML5', 'Neo4j', 'SQLite'].map(s => <span key={s} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">{s}</span>)}
              </div>
            </div>
            <div className="p-12 rounded-[48px] bg-[#0b0f1a] border border-white/5 shadow-2xl hover:border-violet-500/30 transition-all">
              <h3 className="text-2xl font-bold mb-10 underline decoration-violet-500/30 underline-offset-8 uppercase tracking-widest">🤖 AI & BI</h3>
              <div className="flex flex-wrap gap-3">
                {['LSTM', 'NLP', 'Deep RL', 'TensorFlow', 'Scikit-learn', 'ETL/ELT', 'Business Intelligence'].map(s => <span key={s} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[11px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-bold">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-4xl font-extrabold text-white mb-16 uppercase tracking-tighter">Academic & Professional <span className="text-violet-500 italic">Journey</span></h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12 border-l border-white/10 pl-8">
              <h3 className="text-xl font-bold text-violet-400 uppercase tracking-widest">Experience</h3>
              {experience.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[40px] top-2 shadow-[0_0_10px_#8b5cf6]"></div>
                  <h4 className="font-bold text-xl text-white uppercase">{exp.role}</h4>
                  <p className="text-slate-400 font-medium mb-4 italic">{exp.company} | {exp.date}</p>
                  <ul className="space-y-3 text-sm text-slate-500 leading-relaxed font-bold uppercase tracking-wider">
                    {exp.points.map((p, j) => <li key={j} className="flex gap-3"><span className="text-violet-500">▹</span> {p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-12 border-l border-white/10 pl-8">
              <h3 className="text-xl font-bold text-violet-400 uppercase tracking-widest">Education</h3>
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

        {/* LEADERSHIP SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="p-16 rounded-[56px] bg-gradient-to-br from-[#0b0f1a] to-transparent border border-white/5 shadow-2xl text-white">
            <h3 className="text-4xl font-extrabold text-violet-400 flex items-center gap-6 mb-10 uppercase tracking-tighter underline decoration-white decoration-1 underline-offset-8 font-mono"><span>📢</span> Class Representative</h3>
            <p className="text-slate-400 text-xl font-medium mb-12 italic">PMIST | 07/2025 – Present</p>
            <ul className="space-y-4 text-slate-500 text-sm leading-relaxed font-bold uppercase tracking-wider">
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Organized technical workshops, seminars, and technical events.</li>
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Collaborated with the university technical team to improve software systems.</li>
            </ul>
          </div>
        </section>

        {/* CONNECT SECTION */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5 text-center">
          <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter text-white uppercase leading-none">Connect</h2>
          <div className="flex flex-wrap justify-center gap-8 relative z-10 px-6">
            <a href="mailto:rakesh28.dev@gmail.com" className="bg-[#0b0f1a] p-10 rounded-[40px] border border-white/5 hover:border-violet-500 transition-all text-white shadow-2xl group uppercase font-bold text-xs tracking-widest">rakesh28.dev@gmail.com</a>
            <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="bg-[#0b0f1a] p-10 rounded-[40px] border border-white/5 hover:border-violet-500 transition-all text-white shadow-2xl group uppercase font-bold text-xs tracking-widest">LinkedIn</a>
          </div>
        </section>

        <footer className="py-12 text-center text-slate-600 text-[10px] tracking-[0.8em] font-mono border-t border-gray-900 uppercase">
          © 2026 RAKESH G | PMIST
        </footer>

        {/* MODAL SYSTEM FOR PROJECT LINKS */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-16 rounded-[64px] max-w-3xl w-full text-white shadow-2xl text-center">
                <h3 className="text-5xl font-black text-violet-400 mb-10 tracking-tighter uppercase leading-none">{selectedProject.title}</h3>
                <p className="text-slate-400 leading-relaxed text-xl mb-12 italic font-light">{selectedProject.desc}</p>
                <div className="flex gap-4">
                  {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-6 bg-white text-black text-center font-bold rounded-3xl hover:bg-violet-500 hover:text-white transition-all uppercase text-xs tracking-widest font-bold">View Source Code</a>}
                  <button onClick={() => setSelectedProject(null)} className="flex-1 py-6 bg-white/5 border border-white/10 rounded-3xl font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-widest font-bold font-mono">Close</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}