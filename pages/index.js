import Head from 'next/head';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- PROFESSIONAL SEARCH-BAR NAVIGATION ---
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex justify-center">
      <div className="w-full max-w-6xl bg-[#0b0f1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-3 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-lg tracking-tighter uppercase">Portfolio</span>
            <span className="text-[10px] text-violet-400 font-bold uppercase tracking-[0.2em]">Rakesh G</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
          <a href="#about" className="hover:text-white transition-all">About</a>
          <a href="#skills" className="hover:text-white transition-all">Skills</a>
          <a href="#education" className="hover:text-white transition-all">Education</a>
          <a href="#experience" className="hover:text-white transition-all">Experience</a>
          <a href="#projects" className="hover:text-white transition-all">Projects</a>
          <a href="#certs" className="hover:text-white transition-all">Certs</a>
          <div className="w-px h-4 bg-white/10" />
          <a href="#contact" className="text-violet-500 hover:scale-105 transition-all">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- ALL 5 PROJECTS RESTORED ---
  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "FinTech"], desc: "Architected a deep-layered LSTM network to capture non-linear temporal dependencies in financial data. Processed 5+ years of market cycles to forecast prices.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "Deep RL", "Pymunk"], desc: "Designed an autonomous agent using PPO (Proximal Policy Optimization). The agent masters vehicle control through reward-shaping in a 2D physics environment.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "Menu vs Delivery NLP", tech: ["NLP", "VADER", "Analytics"], desc: "Analyzed food application reviews to correlate menu quality and delivery efficiency. Utilized lemmatization and sentiment scoring for business insights.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" },
    { title: "Personal Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Full-stack dashboard featuring custom ETL pipelines to transform raw transaction logs into dynamic visualizations for categorized spend-tracking.", link: "https://github.com/Rakesh-developer28/finance_tracker" },
    { title: "Fake Review Detection", tech: ["NLP", "Python", "ML"], desc: "Developed a machine learning model to classify product reviews as real or fake using text preprocessing and TF-IDF vectorization." }
  ];

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Professional</title>
      </Head>

      <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-violet-500/30 overflow-x-hidden">
        <Navbar />

        {/* SECTION 1: HERO - MASSIVE NAME */}
        <section className="pt-64 pb-32 px-6 flex flex-col items-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white uppercase leading-tight">
            Rakesh <span className="text-violet-600 italic">G</span>
          </motion.h1>
          <p className="max-w-3xl text-slate-400 text-xl md:text-2xl font-light mb-12 italic leading-relaxed">
            "Transforming complex data into <span className="text-white border-b-2 border-violet-600">intelligent solutions</span> that drive real-world impact."
          </p>
          <div className="flex gap-6">
            <a href="#projects" className="px-10 py-4 bg-white text-black font-black rounded-xl hover:bg-violet-600 hover:text-white transition-all text-xs uppercase tracking-widest font-bold">Explore Projects</a>
            <a href="/resume.pdf" download className="px-10 py-4 border-2 border-white/10 rounded-xl font-black hover:bg-white/5 transition-all text-white text-xs uppercase tracking-widest font-bold">Download CV</a>
          </div>
        </section>

        {/* SECTION 2: PROFESSIONAL SUMMARY - ALIGNED */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 border-l-8 border-violet-600 pl-8">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">Professional <br/>Summary</h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-slate-400 text-lg leading-relaxed text-left font-medium">
              <p>
                I am a detail-oriented <span className="text-white font-bold underline decoration-violet-500/50">Data Science Student (M.Sc.) at PMIST</span> specializing in high-performance predictive modeling. My expertise lies in the intersection of mathematical theory and practical software engineering, specifically within <span className="text-violet-400 font-bold uppercase">Time-Series Analysis</span> and <span className="text-violet-400 font-bold uppercase">NLP</span>.
              </p>
              <p>
                During my internships at **Tech Vaseegrah** and **Rexroth Bosch**, I translated complex industrial data into actionable insights. I maintained a <span className="text-white font-black">CGPA of 7.51 / 10.0</span> throughout my academic journey while building scalable AI agents.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: SKILLS - ALIGNED GRID */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-32 bg-[#030712]/50">
          <h2 className="text-5xl font-black text-white tracking-tight mb-20 text-center uppercase italic">Core Competency</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Languages", skills: ["Python", "R", "SQL", "JavaScript", "HTML5"], icon: "💻" },
              { title: "AI / ML / DL", skills: ["LSTM", "NLP", "Deep RL", "TensorFlow", "Scikit"], icon: "🤖" },
              { title: "Architecture", skills: ["Neo4j", "ETL/ELT", "Power BI", "Excel", "SQLite"], icon: "🏗️" }
            ].map((cat, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 shadow-2xl group hover:border-violet-600 transition-all text-center">
                <div className="text-4xl mb-6">{cat.icon}</div>
                <h3 className="text-xs font-black text-violet-500 mb-8 uppercase tracking-[0.3em] font-bold">{cat.title}</h3>
                <div className="flex flex-wrap justify-center gap-3 font-bold">
                  {cat.skills.map(s => <span key={s} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] text-slate-300 uppercase tracking-widest">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: EDUCATION - ACADEMIC JOURNEY */}
        <section id="education" className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
          <h2 className="text-5xl font-black text-white tracking-tight mb-20 uppercase text-center underline decoration-violet-600 underline-offset-[12px]">Academic Journey</h2>
          <div className="space-y-20">
            <div className="relative pl-12 border-l-4 border-violet-600/30">
              <div className="absolute w-6 h-6 bg-violet-600 rounded-full -left-[15px] top-1 shadow-[0_0_20px_#8b5cf6]"></div>
              <h3 className="text-2xl font-black text-white uppercase">Master of Science in Data Science</h3>
              <p className="text-violet-400 font-bold text-sm mb-6 uppercase tracking-[0.2em]">PMIST | 07/2025 – Present</p>
              <ul className="text-slate-500 space-y-3 font-bold italic text-sm">
                <li>▹ Specializing in Advanced NLP and Deep Learning architectures (Transformers/LLMs).</li>
                <li>▹ Developing research-driven models for predictive analytics.</li>
              </ul>
            </div>
            <div className="relative pl-12 border-l-4 border-violet-600/30">
              <div className="absolute w-6 h-6 bg-violet-600 rounded-full -left-[15px] top-1 shadow-[0_0_20px_#8b5cf6]"></div>
              <h3 className="text-2xl font-black text-white uppercase">Bachelor of Science in Data Science</h3>
              <p className="text-violet-400 font-bold text-sm mb-2 uppercase tracking-[0.2em]">PMIST | 08/2022 – 05/2025</p>
              <p className="text-white font-black text-2xl mb-4 italic tracking-widest">CGPA: 7.51 / 10.0</p>
              <ul className="text-slate-500 space-y-3 font-bold italic text-sm">
                <li>▹ Core foundation in Statistics, Data Structures, and Python Engineering.</li>
                <li>▹ Specialized in Data Warehouse schemas (Star/Snowflake).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: EXPERIENCE - RESTORED FULL DETAILS */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
          <h2 className="text-5xl font-black text-white tracking-tight mb-20 uppercase">Professional Experience</h2>
          <div className="space-y-12">
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-violet-400 uppercase mb-1">Data Analyst Intern</h3>
              <p className="text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Tech Vaseegrah | 07/2024 – 08/2024</p>
              <ul className="space-y-4 text-slate-500 text-sm font-black uppercase tracking-wider">
                <li className="flex gap-3"><span className="text-violet-500 font-bold">▹</span> Analyzed business data using Python, Excel, and SQL to generate KPIs.</li>
                <li className="flex gap-3"><span className="text-violet-500 font-bold">▹</span> Built a dynamic billing and internal dashboard application using Flask.</li>
              </ul>
            </div>
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-violet-400 uppercase mb-1">AI & ML Trainee</h3>
              <p className="text-slate-200 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Rexroth Bosch Group | Dec 2024 – Jan 2025</p>
              <ul className="space-y-4 text-slate-500 text-sm font-black uppercase tracking-wider">
                <li className="flex gap-3"><span className="text-violet-500 font-bold">▹</span> Applied Deep Learning to industrial sensor datasets for predictive modeling.</li>
                <li className="flex gap-3"><span className="text-violet-500 font-bold">▹</span> Focused on predictive maintenance using regression and classification.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: LEADERSHIP & CERTS */}
        <section id="certs" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[56px] bg-[#0b0f1a] border border-white/5 shadow-3xl">
              <h3 className="text-3xl font-black text-violet-400 mb-6 uppercase tracking-tighter">📢 Leadership</h3>
              <p className="text-slate-200 font-black mb-6 italic uppercase tracking-widest text-[10px]">Class Representative | PMIST</p>
              <ul className="space-y-4 text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed">
                <li>▹ Organized technical workshops and university seminars.</li>
                <li>▹ Collaborated with the university technical team for systems optimization.</li>
              </ul>
            </div>
            <div className="p-12 rounded-[56px] bg-violet-600/10 border border-violet-600/20 shadow-3xl">
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">🎓 Certifications</h3>
              <ul className="space-y-4 text-slate-400 text-sm font-black uppercase tracking-widest leading-relaxed">
                <li>▹ Neurons to Networks Workshop (Dec 2025)</li>
                <li>▹ BI & Data Architecture Technical Series</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 7: PROJECTS - NAME SMALLER SIGNATURE */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="flex justify-between items-end mb-20">
             <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Featured <br/><span className="text-violet-600">Projects</span></h2>
             <span className="text-[10px] text-slate-700 font-mono uppercase tracking-[0.5em] italic font-bold">Rakesh G - 2026</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-white font-bold">
            {projects.map((proj, i) => (
              <div key={i} onClick={() => setSelectedProject(proj)} className="p-12 bg-[#0b0f1a] border border-white/5 rounded-[60px] cursor-pointer hover:border-violet-600 transition-all shadow-3xl group">
                <div className="flex flex-wrap gap-3 mb-10">
                  {proj.tech.map(t => <span key={t} className="text-[10px] px-4 py-1.5 rounded-full bg-violet-600/10 text-violet-400 border border-violet-600/20 font-black uppercase tracking-widest">{t}</span>)}
                </div>
                <h4 className="text-4xl font-black group-hover:text-violet-500 transition-colors uppercase leading-none mb-8">{proj.title}</h4>
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-violet-600 self-end transition-all transform group-hover:rotate-45 font-bold text-2xl font-bold">↗</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: CONNECT - FULL SOCIALS */}
        <footer id="contact" className="py-40 text-center border-t border-white/5 bg-black/40 relative">
          <h2 className="text-6xl md:text-[10rem] font-black text-white mb-20 uppercase tracking-tighter leading-none">Get In <span className="text-violet-600">Touch</span></h2>
          <div className="flex flex-wrap justify-center gap-8 px-6 font-black uppercase text-xs tracking-[0.2em]">
            <a href="mailto:rakesh28.dev@gmail.com" className="flex items-center gap-5 bg-white px-10 py-6 rounded-3xl text-black hover:bg-violet-600 hover:text-white transition-all shadow-2xl">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg> Email
            </a>
            <a href="https://github.com/Rakesh-developer28" target="_blank" className="flex items-center gap-5 bg-[#0b0f1a] px-10 py-6 rounded-3xl border border-white/10 text-white hover:border-violet-600 transition-all shadow-2xl">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> Github
            </a>
            <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="flex items-center gap-5 bg-[#0077b5] px-10 py-6 rounded-3xl text-white hover:bg-violet-600 transition-all shadow-2xl">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn
            </a>
          </div>
          <p className="mt-24 text-slate-700 text-[10px] tracking-[0.8em] font-mono border-t border-gray-900 pt-10 uppercase">© 2026 RAKESH G | PMIST</p>
        </footer>

        {/* MODAL SYSTEM */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-16 rounded-[64px] max-w-3xl w-full text-white shadow-2xl text-center">
                <h3 className="text-5xl font-black text-violet-500 mb-10 tracking-tighter uppercase leading-none font-bold">{selectedProject.title}</h3>
                <p className="text-slate-400 leading-relaxed text-xl mb-12 italic font-bold">{selectedProject.desc}</p>
                <div className="flex gap-6">
                  {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-6 bg-white text-black text-center font-black rounded-[32px] hover:bg-violet-600 hover:text-white transition-all uppercase text-xs tracking-widest font-bold">Source Code</a>}
                  <button onClick={() => setSelectedProject(null)} className="flex-1 py-6 bg-white/5 border border-white/10 rounded-[32px] font-black hover:bg-white/10 transition-all uppercase text-xs tracking-widest font-bold">Close</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}