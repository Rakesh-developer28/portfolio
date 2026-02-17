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
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-[#0b0f1a]/80 backdrop-blur-md border border-white/10 rounded-xl px-6 py-2 flex justify-between items-center shadow-xl relative overflow-hidden font-bold">
        <div className="absolute bottom-0 left-0 h-[2px] bg-violet-500 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
        
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
          </div>
          <div className="flex items-baseline gap-2 text-white">
            <span className="uppercase text-sm tracking-tight font-bold">Portfolio</span>
            <span className="text-[9px] uppercase text-violet-500 border-l border-white/20 pl-2 tracking-widest font-bold">Rakesh G</span>
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-[9px] uppercase text-slate-500 font-bold">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors text-violet-500 font-bold">Projects</a>
          <div className="w-px h-3 bg-white/10 mx-1" />
          <a href="#contact" className="text-violet-500 hover:text-violet-400">Connect</a>
        </div>

        <button onClick={() => setIsNavOpen(true)} className="md:hidden text-white text-xl">☰</button>
      </div>
    </nav>
  );
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "Deep Learning"], desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "TensorFlow", "Deep RL"], desc: "Developed a Deep Reinforcement Learning agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "Menu vs Delivery NLP", tech: ["Python", "NLP", "Analytics"], desc: "Analyzed food app reviews to compare menu quality vs delivery impact via sentiment analysis.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" },
    { title: "Fake Product Review Detection", tech: ["NLP", "Python", "ML"], desc: "Developed a machine learning model to classify product reviews as real or fake using NLP techniques." },
    { title: "Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Personal finance tracker built using Flask, SQLite, and Chart.js.", link: "https://github.com/Rakesh-developer28/finance_tracker" }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "07/2025 – Present", points: ["Specializing in Advanced NLP and Deep Learning architectures.", "Developing research-driven models for predictive analytics."] },
    { degree: "Bachelor of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "08/2022 – 05/2025", points: ["Completed with a CGPA of 7.51 / 10.0.", "Studied Python, Statistics, ETL/ELT, and Data Warehousing schemas."] }
  ];

  const experience = [
    { role: "Data Analyst Intern", company: "Tech Vaseegrah", date: "07/2024 – 08/2024", points: ["Analyzed business data using Python, Excel, and SQL.", "Built a billing and dashboard web application using Flask."] },
    { role: "AI & ML Trainee", company: "Rexroth Bosch Group", date: "Dec 2024 – Jan 2025", points: ["Industrial AI training focused on sensor datasets and predictive maintenance models."] }
  ];

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-[#030712] text-slate-300 font-sans overflow-x-hidden selection:bg-violet-500/30">
        <Navbar setIsNavOpen={setIsNavOpen} />

        {/* HERO */}
        <section className="pt-48 pb-24 px-6 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 text-[9px] font-mono text-violet-400 uppercase tracking-widest font-bold font-mono">
            $ Hello, World!
          </motion.div>
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-white uppercase leading-tight">
            Rakesh <span className="text-violet-500">G</span>
          </motion.h1>
          <p className="max-w-xl text-slate-400 text-base md:text-lg font-light mb-10 italic leading-relaxed">
            "Transforming complex data into intelligent solutions that drive real-world impact."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-violet-500 hover:text-white transition-all shadow-lg text-xs uppercase tracking-widest font-bold">Explore Projects</a>
            <a href="/resume.pdf" download className="px-8 py-3 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all text-white text-xs uppercase tracking-widest font-bold">Download CV</a>
          </div>
        </section>

        {/* SUMMARY */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5 text-justify">
          <h2 className="text-2xl font-bold text-white uppercase mb-6 tracking-tight">Professional Summary</h2>
          <div className="space-y-4 text-slate-400 text-base leading-relaxed">
            <p>
              I am a dedicated Data Science student currently pursuing an M.Sc. at PMIST. I specialize in building intelligent systems through Deep Learning (LSTM) and Natural Language Processing (NLP). 
            </p>
            <p>
              My professional background sits at the intersection of mathematical theory and software engineering, with a proven track record of delivering real-world projects during my internship at Tech Vaseegrah and training at Rexroth Bosch.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20 bg-[#050a18]/30">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-12 text-center uppercase">Core Competency</h2>
          <div className="grid md:grid-cols-2 gap-6 text-white font-bold">
            <div className="p-8 rounded-3xl bg-[#0b0f1a] border border-white/5 shadow-lg">
              <h3 className="text-lg font-bold mb-6 underline decoration-violet-500/30 underline-offset-4 uppercase tracking-wider font-bold">💻 Programming & Data</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'SQL', 'JavaScript', 'HTML5', 'Neo4j', 'SQLite'].map(s => <span key={s} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s}</span>)}
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-[#0b0f1a] border border-white/5 shadow-lg">
              <h3 className="text-lg font-bold mb-6 underline decoration-violet-500/30 underline-offset-4 uppercase tracking-wider font-bold">🤖 AI & Analytics</h3>
              <div className="flex flex-wrap gap-2">
                {['LSTM', 'NLP', 'Deep RL', 'TensorFlow', 'Scikit-learn', 'ETL/ELT', 'BI'].map(s => <span key={s} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest font-bold">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION - OLD UI */}
        <section id="education" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-12 uppercase">Education</h2>
          <div className="space-y-12">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-8 border-l border-violet-500/30">
                <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_#8b5cf6]"></div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight font-bold">{edu.degree}</h3>
                <p className="text-violet-400 font-bold text-sm mb-4 uppercase tracking-widest">{edu.school} | {edu.date}</p>
                <ul className="space-y-2">
                  {edu.points.map((p, j) => (
                    <li key={j} className="text-slate-500 text-sm flex gap-3 font-medium"><span className="text-violet-500 font-bold">▹</span> {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-12 uppercase">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0b0f1a] border border-white/5 shadow-xl text-white">
                <h3 className="text-xl font-bold text-violet-400 uppercase tracking-tight font-bold">{exp.role}</h3>
                <p className="text-slate-400 text-base font-medium mb-6 italic">{exp.company} | {exp.date}</p>
                <ul className="space-y-3 text-slate-500 text-sm font-bold uppercase tracking-wider">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-3"><span className="text-violet-500">▹</span> {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP SECTION - RESTORED DETAIL */}
        <section id="leadership" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-12 uppercase">Leadership</h2>
          <div className="p-10 rounded-3xl bg-[#0b0f1a] border border-white/5 shadow-xl text-white">
            <h3 className="text-2xl font-bold text-violet-400 flex items-center gap-4 mb-6 uppercase tracking-tight font-bold">📢 Class Representative</h3>
            <p className="text-slate-400 text-base font-medium mb-8 italic tracking-widest font-bold">PMIST | 07/2025 – Present</p>
            <ul className="space-y-3 text-slate-500 text-sm font-bold uppercase tracking-wider leading-relaxed">
              <li className="flex gap-3"><span className="text-violet-500 font-bold">▹</span> Organized technical workshops, seminars, and industrial visits.</li>
              <li className="flex gap-3"><span className="text-violet-500 font-bold">▹</span> Collaborated with the university technical team to streamline digital systems.</li>
              <li className="flex gap-3"><span className="text-violet-500 font-bold">▹</span> Acted as a primary bridge between faculty and students for academic growth.</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-4xl font-extrabold mb-12 text-white tracking-tight uppercase">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white font-bold">
            {projects.map((proj, i) => (
              <div key={i} onClick={() => setSelectedProject(proj)} className="p-8 bg-[#0b0f1a] border border-white/5 rounded-3xl cursor-pointer hover:border-violet-500/50 transition-all min-h-[320px] flex flex-col justify-between shadow-xl group">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6 uppercase tracking-widest font-bold">
                    {proj.tech.map(t => <span key={t} className="text-[9px] px-2 py-1 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">{t}</span>)}
                  </div>
                  <h4 className="text-xl font-extrabold group-hover:text-violet-400 transition-colors leading-tight uppercase">{proj.title}</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-violet-500 self-end font-bold">↗</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER / CONNECT */}
        <footer id="contact" className="py-20 text-center border-t border-white/5 bg-black/20">
          <h2 className="text-4xl font-bold text-white mb-10 uppercase tracking-tight">Connect</h2>
          <div className="flex flex-wrap justify-center gap-6 px-6 font-bold uppercase text-[10px] tracking-widest">
            <a href="mailto:rakesh28.dev@gmail.com" className="bg-[#0b0f1a] px-8 py-6 rounded-2xl border border-white/5 hover:border-violet-500 transition-all text-white shadow-lg font-bold">Email</a>
            <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="bg-[#0b0f1a] px-8 py-6 rounded-2xl border border-white/5 hover:border-violet-500 transition-all text-white shadow-lg font-bold">LinkedIn</a>
          </div>
          <p className="mt-16 text-slate-700 text-[9px] tracking-[0.6em] font-mono border-t border-gray-900 pt-8 uppercase">
            © 2026 RAKESH G | PMIST
          </p>
        </footer>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-10 rounded-[40px] max-w-2xl w-full text-white shadow-2xl text-center">
                <h3 className="text-3xl font-black text-violet-400 mb-6 uppercase tracking-tight">{selectedProject.title}</h3>
                <p className="text-slate-400 leading-relaxed text-base mb-8 italic font-light">{selectedProject.desc}</p>
                <div className="flex gap-4">
                  {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all uppercase text-[10px] tracking-widest font-bold">View Code</a>}
                  <button onClick={() => setSelectedProject(null)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all uppercase text-[10px] tracking-widest font-bold">Close</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}