import Head from 'next/head';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- PROFESSIONAL NAVIGATION ---
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-center">
      <div className="w-full max-w-5xl bg-[#0b0f1a]/80 backdrop-blur-md border border-white/10 rounded-xl px-6 py-2 flex justify-between items-center shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
          </div>
          <span className="text-white font-bold text-sm tracking-widest uppercase font-mono">Rakesh G</span>
        </div>
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-white transition-all">About</a>
          <a href="#skills" className="hover:text-white transition-all">Skills</a>
          <a href="#education" className="hover:text-white transition-all">Education</a>
          <a href="#experience" className="hover:text-white transition-all">Experience</a>
          <a href="#projects" className="hover:text-white transition-all text-violet-500">Projects</a>
          <a href="#contact" className="hover:text-white transition-all">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- ALL 5 PROJECTS RESTORED ---
  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "TensorFlow"], desc: "Architected a deep LSTM network to capture temporal dependencies in financial cycles. Processed historical data to forecast closing prices.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Deep RL", "Pymunk", "Python"], desc: "Designed an autonomous agent using PPO. Masters physical vehicle control through reward-shaping in a 2D physics environment.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "Menu vs Delivery NLP", tech: ["NLP", "VADER", "Python"], desc: "Mining project distinguishing product quality from service efficiency using lemmatization and sentiment scoring for food tech apps.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" },
    { title: "Personal Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Full-stack dashboard with custom ETL pipelines to transform transaction logs into dynamic spend visualizations.", link: "https://github.com/Rakesh-developer28/finance_tracker" },
    { title: "Fake Product Review Detection", tech: ["ML", "NLP", "Scikit"], desc: "Engineered a classification model to detect fraudulent reviews using TF-IDF vectorization and text preprocessing." }
  ];

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Professional</title>
      </Head>

      <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-violet-500/30 overflow-x-hidden">
        <Navbar />

        {/* HERO - BALANCED NAME SCALE */}
        <section className="pt-48 pb-24 px-6 flex flex-col items-center text-center">
          <motion.h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white uppercase leading-none">
            Rakesh <span className="text-violet-600 italic">G</span>
          </motion.h1>
          <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-light mb-10 italic leading-relaxed">
            "Transforming complex data into <span className="text-white border-b border-violet-600">intelligent solutions</span> that drive impact."
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-violet-600 hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold">Explore Work</a>
            <a href="/resume.pdf" download className="px-8 py-3 border border-white/10 rounded-lg font-bold hover:bg-white/5 transition-all text-white text-[10px] uppercase tracking-widest font-bold">Download CV</a>
          </div>
        </section>

        {/* PROFESSIONAL SUMMARY - ALIGNED & DETAILED */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white uppercase mb-8 border-l-4 border-violet-600 pl-4 tracking-widest">Professional Summary</h2>
          <div className="space-y-6 text-slate-400 text-base leading-relaxed text-justify font-medium">
            <p>I am a specialized **Data Science Student (M.Sc.) at PMIST** specializing in high-performance predictive modeling. My expertise focuses on **Time-Series Analysis (LSTM)** and **Natural Language Processing (NLP)**, with a proven ability to translate raw data into strategic business value.</p>
            <p>I maintained a **CGPA of 7.51 / 10.0** throughout my B.Sc. while building scalable AI solutions and managing technical leadership roles within the university.</p>
          </div>
        </section>

        {/* SKILLS - 3 COLUMN GRID */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20 bg-[#030712]/50">
          <h2 className="text-3xl font-black text-white tracking-tight mb-12 text-center uppercase italic">Core Competency</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Languages", skills: ["Python", "R", "SQL", "JavaScript"] },
              { title: "AI / ML / DL", skills: ["LSTM", "NLP", "Deep RL", "TensorFlow"] },
              { title: "Architecture", skills: ["Neo4j", "ETL/ELT", "Power BI", "SQLite"] }
            ].map((cat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0b0f1a] border border-white/5 text-center">
                <h3 className="text-[10px] font-black text-violet-500 mb-6 uppercase tracking-widest">{cat.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {cat.skills.map(s => <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold text-slate-300 uppercase font-bold">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & LEADERSHIP - ALL DETAILS RESTORED */}
        <section id="education" className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold text-white uppercase mb-12 tracking-widest italic">Academic Journey</h2>
          <div className="space-y-12 mb-20">
            <div className="relative pl-8 border-l-2 border-violet-600/30">
              <div className="absolute w-4 h-4 bg-violet-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#8b5cf6]"></div>
              <h3 className="text-lg font-black text-white uppercase">M.Sc. Data Science</h3>
              <p className="text-violet-400 font-bold text-xs mb-4 uppercase font-bold">PMIST | 07/2025 – Present</p>
              <p className="text-sm text-slate-500 font-bold italic uppercase tracking-wider">Focusing on Deep Learning and Transformer architectures.</p>
            </div>
            <div className="relative pl-8 border-l-2 border-violet-600/30">
              <div className="absolute w-4 h-4 bg-violet-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#8b5cf6]"></div>
              <h3 className="text-lg font-black text-white uppercase">B.Sc. Data Science</h3>
              <p className="text-violet-400 font-bold text-xs mb-1 uppercase font-bold">PMIST | 08/2022 – 05/2025</p>
              <p className="text-white font-black text-lg mb-3 italic tracking-widest">CGPA: 7.51 / 10.0</p>
              <p className="text-sm text-slate-500 font-bold italic uppercase tracking-wider">Foundation in Statistics, ETL, and Data Structures.</p>
            </div>
          </div>

          {/* LEADERSHIP SECTION RESTORED */}
          <div className="p-10 rounded-3xl bg-[#0b0f1a] border border-white/5 shadow-2xl">
            <h3 className="text-xl font-bold text-violet-400 uppercase mb-6 flex items-center gap-4 font-bold">📢 Class Representative</h3>
            <ul className="space-y-3 text-slate-500 text-sm font-bold uppercase tracking-widest">
              <li className="flex gap-3">▹ Organized technical workshops and university seminars.</li>
              <li className="flex gap-3">▹ Collaborated with the university technical team for systems improvement.</li>
            </ul>
          </div>
        </section>

        {/* EXPERIENCE - RESTORED FULL DATA */}
        <section id="experience" className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold text-white uppercase mb-12 tracking-widest">Professional Experience</h2>
          <div className="p-8 rounded-3xl bg-[#0b0f1a] border border-white/5 mb-8">
            <h3 className="text-xl font-bold text-violet-400 uppercase font-bold">Data Analyst Intern</h3>
            <p className="text-slate-200 text-[10px] font-black uppercase mb-6 tracking-widest">Tech Vaseegrah | 07/2024 – 08/2024</p>
            <ul className="text-slate-500 text-sm space-y-2 font-bold uppercase tracking-wider">
              <li>▹ Analyzed business data using Python, Excel, and SQL to generate KPIs.</li>
              <li>▹ Built a dynamic billing dashboard web application using Flask.</li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-[#0b0f1a] border border-white/5">
            <h3 className="text-xl font-bold text-violet-400 uppercase font-bold">AI & ML Trainee</h3>
            <p className="text-slate-200 text-[10px] font-black uppercase mb-6 tracking-widest">Rexroth Bosch Group | Dec 2024 – Jan 2025</p>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">▹ Industrial AI training focused on sensor datasets and predictive failure modeling.</p>
          </div>
        </section>

        {/* CERTIFICATIONS - 2 SLOTS */}
        <section id="certs" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold text-white uppercase mb-12 text-center italic">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0b0f1a] p-4 text-center">
              <img src="/cert1.png" alt="Google/MongoDB Cert" className="w-full h-auto rounded-lg mb-4 opacity-70" />
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Analytics & Architecture Training</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0b0f1a] p-4 text-center">
              <img src="/cert2.png" alt="Deep Learning Workshop" className="w-full h-auto rounded-lg mb-4 opacity-70" />
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Neurons to Networks Workshop</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div key={i} onClick={() => setSelectedProject(proj)} className="p-8 bg-[#0b0f1a] border border-white/5 rounded-3xl cursor-pointer hover:border-violet-600 transition-all shadow-xl group">
                <div className="flex gap-2 mb-6">
                  {proj.tech.map(t => <span key={t} className="text-[8px] px-2 py-1 rounded bg-violet-600/10 text-violet-400 border border-violet-600/20 font-black uppercase">{t}</span>)}
                </div>
                <h4 className="text-xl font-black group-hover:text-violet-400 transition-colors uppercase leading-tight mb-4">{proj.title}</h4>
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-violet-600 self-end font-bold">↗</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONNECT - COMPACT & SYNCED */}
        <footer id="contact" className="py-24 text-center border-t border-white/5 bg-black/40">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter">Get In <span className="text-violet-600">Touch</span></h2>
          <div className="flex flex-wrap justify-center gap-6 px-6 font-bold uppercase text-[9px]">
            <a href="mailto:rakesh28.dev@gmail.com" className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl text-black hover:bg-violet-600 hover:text-white transition-all shadow-xl font-black">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg> Email
            </a>
            <a href="https://github.com/Rakesh-developer28" target="_blank" className="flex items-center gap-3 bg-[#0b0f1a] px-6 py-4 rounded-xl border border-white/10 text-white hover:border-violet-600 transition-all font-black">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> GitHub
            </a>
            <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="flex items-center gap-3 bg-[#0077b5] px-6 py-4 rounded-xl text-white hover:bg-violet-600 transition-all font-black">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn
            </a>
          </div>
          <p className="mt-12 text-slate-700 text-[8px] tracking-[0.6em] font-mono font-bold uppercase">© 2026 RAKESH G | PMIST</p>
        </footer>

        {/* MODAL SYSTEM */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-10 rounded-[32px] max-w-xl w-full text-white shadow-2xl text-center">
                <h3 className="text-2xl font-black text-violet-500 mb-6 uppercase tracking-tight">{selectedProject.title}</h3>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed font-bold uppercase tracking-widest font-bold">{selectedProject.desc}</p>
                <div className="flex gap-4">
                  {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-4 bg-white text-black text-center font-black rounded-xl hover:bg-violet-600 hover:text-white transition-all uppercase text-[10px] tracking-widest font-bold">Source</a>}
                  <button onClick={() => setSelectedProject(null)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-xl font-black hover:bg-white/10 transition-all uppercase text-[10px] tracking-widest font-bold">Close</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}