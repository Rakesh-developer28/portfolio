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
            <span className="text-[9px] uppercase text-violet-500 border-l border-white/20 pl-2 tracking-widest font-bold font-mono">Rakesh G</span>
          </div>
        </div>

        <div className="hidden md:flex gap-5 text-[9px] uppercase text-slate-500 font-bold">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-violet-500 transition-colors">Projects</a>
          <a href="#certs" className="hover:text-white transition-colors">Certs</a>
          <div className="w-px h-3 bg-white/10 mx-1" />
          <a href="#contact" className="text-violet-500 hover:text-violet-400">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "TensorFlow"], desc: "Architected a deep LSTM network to capture temporal dependencies in financial cycles. Processed historical data to forecast closing prices using multi-step windowing.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "Deep RL", "Pymunk"], desc: "Developed an autonomous agent using PPO. The agent masters physical vehicle control through reward-shaping in a 2D physics environment.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "NLP Menu vs Delivery Analysis", tech: ["NLP", "Python", "Sentiment"], desc: "Distinguished product quality from service efficiency in food apps using lemmatization and VADER sentiment scoring.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" },
    { title: "Personal Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Full-stack dashboard with custom ETL pipelines for category-based spending visualization.", link: "https://github.com/Rakesh-developer28/finance_tracker" },
    { title: "Fake Review Detection", tech: ["NLP", "Python", "Scikit"], desc: "Classification model to identify fraudulent e-commerce reviews using TF-IDF and text preprocessing." }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "PMIST", date: "07/2025 – Present", grade: "Current", points: ["Focusing on Advanced Deep Learning and LLM fine-tuning.", "Researching Transformer architectures for predictive modeling."] },
    { degree: "Bachelor of Science in Data Science", school: "PMIST", date: "08/2022 – 05/2025", grade: "CGPA: 7.51 / 10.0", points: ["Developed expertise in Statistics, Python, R, and Data Structures.", "Specialized in Business Intelligence and Data Architecture."] }
  ];

  const experience = [
    { role: "Data Analyst Intern", company: "Tech Vaseegrah", date: "07/2024 – 08/2024", points: ["Analyzed business data to generate actionable KPIs.", "Built a billing and dashboard web application using Flask and SQL."] },
    { role: "AI & ML Trainee", company: "Rexroth Bosch Group", date: "Dec 2024 – Jan 2025", points: ["Worked on predictive maintenance models using sensor datasets.", "Applied Deep Learning concepts to industrial manufacturing scenarios."] }
  ];

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Professional</title>
      </Head>

      <div className="min-h-screen bg-[#030712] text-slate-300 font-sans overflow-x-hidden selection:bg-violet-500/30">
        <Navbar />

        {/* HERO */}
        <section className="pt-48 pb-24 px-6 flex flex-col items-center text-center">
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-white uppercase leading-tight">
            Rakesh <span className="text-violet-500 italic font-black">G</span>
          </motion.h1>
          <p className="max-w-2xl text-slate-400 text-base md:text-lg font-light mb-10 italic leading-relaxed">
            "Transforming raw data into <span className="text-white border-b border-violet-500/50">intelligent systems</span> that drive real-world impact."
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-violet-500 hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold">Explore Projects</a>
            <a href="/resume.pdf" download className="px-8 py-3 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all text-white text-[10px] uppercase tracking-widest font-bold">Download CV</a>
          </div>
        </section>

        {/* SUMMARY */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white uppercase mb-6 tracking-tight border-l-4 border-violet-500 pl-4">Professional Summary</h2>
          <div className="space-y-4 text-slate-400 text-base leading-relaxed text-justify">
            <p>I am a detail-oriented **Data Science Student (M.Sc.) at PMIST** specializing in high-performance predictive modeling. My domain focus includes **FinTech (Stock Prediction)** and **Industrial AI (Sensor-based Maintenance)**.</p>
            <p>I specialize in architecting deep neural networks—specifically **LSTM** and **Deep Reinforcement Learning** models—ensuring they are scalable, efficient, and drive strategic business value.</p>
          </div>
        </section>

        {/* SKILLS - GRID UI */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20 bg-[#050a18]/30">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-12 text-center uppercase">Core Competency</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Languages", skills: ["Python", "R", "SQL", "JavaScript", "HTML5"] },
              { title: "AI/ML", skills: ["LSTM", "NLP", "Deep RL", "TensorFlow", "Scikit"] },
              { title: "Architecture", skills: ["Neo4j", "ETL/ELT", "Power BI", "Excel", "SQLite"] }
            ].map((cat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0b0f1a] border border-white/5 shadow-lg group hover:border-violet-500/30 transition-all text-center">
                <h3 className="text-[10px] font-black text-violet-500 mb-6 uppercase tracking-[0.2em]">{cat.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {cat.skills.map(s => <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold text-slate-300 uppercase tracking-widest font-bold">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION - OLD UI TIMELINE */}
        <section id="education" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-12 uppercase italic underline decoration-violet-500 underline-offset-8">Education Journey</h2>
          <div className="space-y-16">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-violet-500/20">
                <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_#8b5cf6]"></div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">{edu.degree}</h3>
                <p className="text-violet-400 font-bold text-[10px] mb-4 uppercase tracking-widest font-bold">{edu.school} | {edu.date}</p>
                {edu.grade && <p className="text-white text-sm font-black mb-3 italic">{edu.grade}</p>}
                <ul className="space-y-2 text-xs text-slate-500 font-bold uppercase tracking-wider leading-relaxed">
                  {edu.points.map((p, j) => <li key={j} className="flex gap-2"><span>▹</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE - NEW UI CARDS */}
        <section id="experience" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-12 uppercase">Professional Experience</h2>
          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className="p-8 rounded-[40px] bg-[#0b0f1a] border border-white/5 shadow-xl group hover:border-violet-500/30 transition-all">
                <h3 className="text-xl font-bold text-violet-400 uppercase tracking-tight mb-1 font-bold">{exp.role}</h3>
                <p className="text-slate-200 text-sm font-bold mb-6 italic uppercase tracking-widest font-bold">{exp.company} | {exp.date}</p>
                <ul className="space-y-3">
                  {exp.points.map((p, j) => <li key={j} className="text-slate-500 text-sm flex gap-3 font-bold uppercase tracking-wider"><span className="text-violet-500">▹</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 shadow-xl text-white">
            <h3 className="text-2xl font-bold text-violet-400 flex items-center gap-4 mb-6 uppercase tracking-tight font-bold">📢 Class Representative</h3>
            <p className="text-slate-400 text-sm font-medium mb-8 italic tracking-widest font-bold uppercase">PMIST | 07/2025 – Present</p>
            <ul className="space-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
              <li className="flex gap-3"><span className="text-violet-500 font-bold text-sm">▹</span> Organized workshops, seminars, and technical events.</li>
              <li className="flex gap-3"><span className="text-violet-500 font-bold text-sm">▹</span> Collaborated with university technical team for systems improvement.</li>
            </ul>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certs" className="max-w-6xl mx-auto px-6 py-20 bg-[#0b0f1a]/50 border-t border-white/5">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-12 text-center uppercase italic">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#0b0f1a] border border-white/10 rounded-[40px] shadow-2xl relative">
              <h3 className="text-xl font-bold text-white uppercase mb-1">Neurons to Networks</h3>
              <p className="text-violet-500 text-[10px] font-black uppercase tracking-widest mb-4 font-bold">Technical Workshop • Dec 2025</p>
              <p className="text-slate-500 text-sm font-bold uppercase italic">Intensive workshop on Neural Network architectures and implementation.</p>
            </div>
            <div className="p-8 bg-[#0b0f1a] border border-white/10 rounded-[40px] shadow-2xl relative">
              <h3 className="text-xl font-bold text-white uppercase mb-1">BI & Data Architecture</h3>
              <p className="text-violet-500 text-[10px] font-black uppercase tracking-widest mb-4 font-bold">Technical Series • Feb 2026</p>
              <p className="text-slate-500 text-sm font-bold uppercase italic tracking-wider">Training on ETL pipelines, Star/Snowflake schemas, and Galaxy schemas.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <h2 className="text-4xl font-black mb-12 text-white tracking-tighter uppercase text-center">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div key={i} onClick={() => setSelectedProject(proj)} className="p-10 bg-[#0b0f1a] border border-white/5 rounded-[56px] cursor-pointer hover:border-violet-500/50 transition-all shadow-xl group">
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map(t => <span key={t} className="text-[9px] px-2 py-1 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 font-bold uppercase font-bold">{t}</span>)}
                </div>
                <h4 className="text-2xl font-black group-hover:text-violet-400 transition-colors uppercase leading-tight mb-6 text-white">{proj.title}</h4>
                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-violet-500 self-end transition-all transform group-hover:rotate-45 font-bold">↗</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONNECT */}
        <footer id="contact" className="py-24 text-center border-t border-white/5 bg-black/40 relative">
          <h2 className="text-5xl font-black text-white mb-16 uppercase tracking-tighter">Get In <span className="text-violet-500 italic">Touch</span></h2>
          <div className="flex flex-wrap justify-center gap-6 px-6 font-bold uppercase text-[10px] tracking-[0.2em]">
            <a href="mailto:rakesh28.dev@gmail.com" className="flex items-center gap-4 bg-[#0b0f1a] px-8 py-6 rounded-2xl border border-white/5 hover:border-violet-500 transition-all text-white shadow-lg font-bold tracking-widest">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /></svg> Email
            </a>
            <a href="https://github.com/Rakesh-developer28" target="_blank" className="flex items-center gap-4 bg-[#0b0f1a] px-8 py-6 rounded-2xl border border-white/5 hover:border-violet-500 transition-all text-white shadow-lg font-bold tracking-widest">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> GitHub
            </a>
          </div>
          <p className="mt-20 text-slate-700 text-[8px] tracking-[0.6em] font-mono border-t border-gray-900 pt-10 uppercase">© 2026 RAKESH G | PMIST</p>
        </footer>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-10 rounded-[40px] max-w-2xl w-full text-white shadow-2xl text-center">
                <h3 className="text-2xl font-black text-violet-400 mb-6 uppercase tracking-tight font-bold">{selectedProject.title}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed italic font-bold tracking-wide">{selectedProject.desc}</p>
                <div className="flex gap-4">
                  {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-violet-500 transition-all text-[10px] uppercase tracking-widest font-bold">View Source</a>}
                  <button onClick={() => setSelectedProject(null)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all text-[10px] uppercase tracking-widest font-bold">Close</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}