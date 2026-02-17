import Head from 'next/head';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- PROFESSIONAL NAVIGATION WITH DS ICON ---
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-center">
      <div className="w-full max-w-5xl bg-[#0b0f1a]/80 backdrop-blur-md border border-white/10 rounded-xl px-6 py-2 flex justify-between items-center shadow-xl font-bold">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.4)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/><path d="M12 8v6M9 11h6"/>
            </svg>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-white font-black text-sm tracking-tighter uppercase">Rakesh G</span>
            <span className="text-[8px] text-violet-400 font-bold uppercase tracking-[0.2em]">Data Scientist</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-white transition-all">About</a>
          <a href="#skills" className="hover:text-white transition-all">Skills</a>
          <a href="#experience" className="hover:text-white transition-all">Journey</a>
          <a href="#projects" className="hover:text-white transition-all text-violet-500 font-black">Projects</a>
          <a href="#contact" className="hover:text-white transition-all">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "TensorFlow"], desc: "Architected a deep LSTM network to capture temporal dependencies in financial cycles. Processed 5+ years of historical market data to forecast closing prices.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Deep RL", "Pymunk", "Python"], desc: "Designed an autonomous agent using PPO. masters physical vehicle control through reward-shaping in a 2D physics environment.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
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

        {/* HERO SECTION - REDUCED SIZE FOR BALANCE */}
        <section className="pt-48 pb-24 px-6 flex flex-col items-center text-center">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white uppercase leading-none">
            Rakesh <span className="text-violet-600 italic font-black">G</span>
          </motion.h1>
          <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-light mb-10 italic leading-relaxed">
            "Transforming complex data into <span className="text-white border-b border-violet-600 font-medium">intelligent solutions</span> that drive real-world impact."
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-violet-600 hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold">Explore Projects</a>
            <a href="/resume.pdf" download className="px-8 py-3 border border-white/10 rounded-lg font-bold hover:bg-white/5 transition-all text-white text-[10px] uppercase tracking-widest font-bold">Download CV</a>
          </div>
        </section>

        {/* PROFESSIONAL SUMMARY */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white uppercase mb-8 border-l-4 border-violet-600 pl-4 tracking-widest font-bold">Professional Summary</h2>
          <div className="space-y-6 text-slate-400 text-base leading-relaxed text-justify font-medium">
            <p>I am a detail-oriented **Data Science Student (M.Sc.) at PMIST** specializing in high-performance predictive modeling. My domain focus includes **FinTech (Stock Prediction)** and **Industrial AI (Sensor-based Maintenance)**.</p>
            <p>I specialize in architecting deep neural networks—specifically **LSTM** and **Deep Reinforcement Learning** models—ensuring they are scalable, efficient, and drive strategic business value.</p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20 bg-[#030712]/50">
          <h2 className="text-3xl font-black text-white tracking-tight mb-12 text-center uppercase italic">Core Competency</h2>
          <div className="grid md:grid-cols-3 gap-6 font-bold">
            {[
              { title: "Languages", skills: ["Python", "R", "SQL", "JavaScript", "HTML5"] },
              { title: "AI/ML", skills: ["LSTM", "NLP", "Deep RL", "TensorFlow", "Scikit"] },
              { title: "Architecture", skills: ["Neo4j", "ETL/ELT", "Power BI", "Excel", "SQLite"] }
            ].map((cat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0b0f1a] border border-white/5 text-center hover:border-violet-600/40 transition-all">
                <h3 className="text-[10px] font-black text-violet-500 mb-6 uppercase tracking-widest">{cat.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {cat.skills.map(s => <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold text-slate-300 uppercase">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY - ACADEMIC JOURNEY RESTORED */}
        <section id="experience" className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold text-white uppercase mb-12 tracking-widest italic underline decoration-violet-600 decoration-4 underline-offset-8">Academic & Professional Journey</h2>
          <div className="space-y-12 mb-20">
            <div className="relative pl-8 border-l-2 border-violet-600/30">
              <div className="absolute w-4 h-4 bg-violet-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#8b5cf6]"></div>
              <h3 className="text-lg font-black text-white uppercase">M.Sc. Data Science | 2025 – Present</h3>
              <p className="text-violet-400 font-bold text-[10px] mb-4 uppercase tracking-widest font-bold font-mono">PMIST | Periyar Maniammai Institute</p>
              <p className="text-sm text-slate-500 font-bold italic uppercase tracking-wider">Focusing on Deep Learning and Transformer architectures.</p>
            </div>
            <div className="relative pl-8 border-l-2 border-violet-600/30">
              <div className="absolute w-4 h-4 bg-violet-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#8b5cf6]"></div>
              <h3 className="text-lg font-black text-white uppercase">B.Sc. Data Science | Graduated</h3>
              <p className="text-violet-400 font-bold text-[10px] mb-1 uppercase tracking-widest font-bold font-mono">PMIST | CGPA: 7.51 / 10.0</p>
              <p className="text-sm text-slate-500 font-bold italic uppercase tracking-wider">Foundation in Statistics, ETL processes, and Python engineering.</p>
            </div>
          </div>

          {/* LEADERSHIP */}
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 shadow-xl mb-12 relative overflow-hidden group">
            <h3 className="text-xl font-bold text-violet-400 uppercase mb-6 flex items-center gap-4 font-black"><span>📢</span> Class Representative</h3>
            <p className="text-slate-200 text-[10px] font-black uppercase mb-4 tracking-widest">PMIST | 07/2025 – Present</p>
            <ul className="space-y-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <li className="flex gap-3">▹ Organized technical workshops, seminars, and technical events.</li>
              <li className="flex gap-3">▹ Collaborated with the university technical team for systems improvement.</li>
            </ul>
          </div>
        </section>

        {/* CERTIFICATIONS WITH DUAL IMAGES */}
        <section id="certs" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5 text-center">
          <h2 className="text-3xl font-bold text-white uppercase mb-12 italic tracking-widest font-bold">Certifications & Licenses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0f1a] p-4 group">
               <img src="/cert_snapshot_1.png" alt="Analytics and Python" className="w-full h-auto rounded-lg mb-4 opacity-70 hover:opacity-100 transition-all grayscale hover:grayscale-0" />
               <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em]">Google Analytics & Data Analysis</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0f1a] p-4 group">
               <img src="/cert_snapshot_2.png" alt="MongoDB and Analytics" className="w-full h-auto rounded-lg mb-4 opacity-70 hover:opacity-100 transition-all grayscale hover:grayscale-0" />
               <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em]">MongoDB & Data Science Basics</p>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS WITH DETAILS */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-12 font-bold italic">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-bold">
            {projects.map((proj, i) => (
              <div key={i} onClick={() => setSelectedProject(proj)} className="p-8 bg-[#0b0f1a] border border-white/5 rounded-3xl cursor-pointer hover:border-violet-600 transition-all shadow-xl group">
                <div className="flex gap-2 mb-6">
                  {proj.tech.map(t => <span key={t} className="text-[8px] px-2 py-1 rounded bg-violet-600/10 text-violet-400 border border-violet-600/20 font-black uppercase">{t}</span>)}
                </div>
                <h4 className="text-xl font-black group-hover:text-violet-400 transition-colors uppercase leading-tight mb-4">{proj.title}</h4>
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-violet-600 self-end font-bold transition-all transform group-hover:rotate-45">↗</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONNECT - COMPACT UI */}
        <footer id="contact" className="py-24 text-center border-t border-white/5 bg-black/40">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-12 uppercase tracking-tighter">Get In <span className="text-violet-600 italic font-black">Touch</span></h2>
          <div className="flex flex-wrap justify-center gap-6 px-6 font-bold uppercase text-[9px] tracking-widest">
            <a href="mailto:rakesh28.dev@gmail.com" className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl text-black hover:bg-violet-600 hover:text-white transition-all shadow-xl font-black">Email</a>
            <a href="https://github.com/Rakesh-developer28" target="_blank" className="flex items-center gap-3 bg-[#0b0f1a] px-6 py-4 rounded-xl border border-white/10 text-white font-black">GitHub</a>
            <a href="https://linkedin.com/in/rakeshgdev" target="_blank" className="flex items-center gap-3 bg-[#0077b5] px-6 py-4 rounded-xl text-white font-black hover:bg-white transition-colors">LinkedIn</a>
          </div>
          <p className="mt-16 text-slate-700 text-[8px] tracking-[0.6em] font-mono font-bold uppercase">© 2026 RAKESH G | PMIST</p>
        </footer>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-10 rounded-[32px] max-w-xl w-full text-white shadow-2xl text-center">
                <h3 className="text-2xl font-black text-violet-500 mb-6 uppercase tracking-tight font-bold">{selectedProject.title}</h3>
                <p className="text-slate-400 text-sm mb-10 italic uppercase font-bold tracking-widest leading-relaxed">{selectedProject.desc}</p>
                <div className="flex gap-4">
                  <a href={selectedProject.link} target="_blank" className="flex-1 py-4 bg-white text-black text-center font-black rounded-xl hover:bg-violet-600 hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold">View Source</a>
                  <button onClick={() => setSelectedProject(null)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-xl font-black hover:bg-white/10 transition-all text-[10px] uppercase tracking-widest font-bold">Close</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}