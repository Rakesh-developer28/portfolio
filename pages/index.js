import Head from 'next/head';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- PROFESSIONAL SEARCH-BAR NAVIGATION ---
const Navbar = ({ setIsNavOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex justify-center">
      <div className="w-full max-w-5xl bg-[#0b0f1a]/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl">
        
        {/* BRANDING INSIDE SEARCH BAR */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
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
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <div className="w-px h-4 bg-white/10 mx-2"></div>
          <a href="#contact" className="text-violet-500 hover:text-violet-400 font-bold">Connect</a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setIsNavOpen(true)} className="md:hidden p-2 text-white">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-4 h-0.5 bg-white ml-2"></div>
        </button>
      </div>
    </nav>
  );
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // --- COMPREHENSIVE DATA RESTORATION ---
  const projects = [
    { title: "Stock Market Prediction (LSTM)", tech: ["Python", "LSTM", "TensorFlow"], desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data. Implemented data preprocessing and model tuning to improve accuracy.", link: "https://github.com/Rakesh-developer28/stock_prediction" },
    { title: "Neural Pilot – Hill Climb AI", tech: ["Python", "Deep RL", "TensorFlow"], desc: "Developed a Deep Reinforcement Learning agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk. Focused on reward shaping and policy optimization.", link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" },
    { title: "Fake Product Review Detection", tech: ["NLP", "Python", "ML"], desc: "Developed a machine learning model to classify product reviews as real or fake using NLP techniques for text preprocessing and feature extraction." },
    { title: "Menu vs Delivery NLP", tech: ["Python", "NLP", "Analytics"], desc: "Analyzed food app reviews to compare menu quality vs delivery impact via sentiment analysis and keyword extraction.", link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" },
    { title: "Finance Tracker", tech: ["Flask", "SQLite", "Chart.js"], desc: "Full-stack personal finance tracker mini-project built using Flask and SQLite with real-time data visualization.", link: "https://github.com/Rakesh-developer28/finance_tracker" }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "07/2025 – Present", location: "Thanjavur, India", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "08/2022 – 05/2025", location: "Thanjavur, India", grade: "CGPA: 7.51 / 10.0", status: "Completed" }
  ];

  const experience = [
    { role: "Data Analyst Intern", company: "Tech Vaseegrah", date: "07/2024 – 08/2024", points: ["Analyzed and visualized business data using Python, Excel, and SQL.", "Built a real-world billing and dashboard web application using Flask."] },
    { role: "AI & ML Trainee", company: "Rexroth Bosch Group", date: "Dec 2024 – Jan 2025", points: ["Intensive training on industrial AI applications using sensor datasets.", "Worked with real-world datasets to build predictive machine learning models."] }
  ];

  return (
    <>
      <Head>
        <title>Rakesh G | Data Science Portfolio</title>
        <meta name="description" content="Portfolio of Rakesh G - Data Science Student and Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-violet-500/30 overflow-x-hidden">
        
        <Navbar setIsNavOpen={setIsNavOpen} />

        {/* HERO SECTION */}
        <section className="pt-56 pb-32 px-6 flex flex-col items-center text-center relative">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] -z-10" />
          
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 text-xs font-mono text-violet-400">
            <span className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500/50"></div><div className="w-2 h-2 rounded-full bg-yellow-500/50"></div><div className="w-2 h-2 rounded-full bg-green-500/50"></div></span>
            $ Hello, World!
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-7xl md:text-9xl font-extrabold mb-6 tracking-tighter text-white uppercase">
            Rakesh <span className="text-violet-500">G</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-xl text-slate-400 leading-relaxed mb-12 text-lg italic">
            "Transforming complex data into <span className="text-violet-400 font-bold">intelligent solutions</span>."
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-violet-500 hover:text-white transition-all shadow-xl shadow-violet-500/10">View Projects ↗</a>
            <a href="resume.pdf" download className="px-10 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all text-white">Download CV</a>
          </div>
        </section>

        {/* ABOUT / SUMMARY SECTION */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-violet-500 pl-4">Professional Summary</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a skilled and detail-oriented <span className="text-white font-semibold">Data Science student</span> currently pursuing an M.Sc. at <span className="text-white">Periyar Maniammai Institute of Science & Technology</span>. I specialize in building intelligent systems through <span className="text-violet-400 font-bold">Deep Learning</span> and <span className="text-violet-400 font-bold">NLP</span>. I have a proven track record of delivering real-world projects by analyzing complex datasets to create actionable insights.
          </p>
        </section>

        {/* CORE COMPETENCY GRID (Restored Icon Set) */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-32 bg-[#050a18]/30">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">Core <span className="text-violet-500">Competency</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-4 underline decoration-violet-500/30 underline-offset-8"><span>💻</span> Programming & Scripting</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'SQL', 'JavaScript', 'HTML', 'R', 'CSS (Tailwind)'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300 font-bold">{s}</span>)}
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-4 underline decoration-violet-500/30 underline-offset-8"><span>🤖</span> AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'Scikit-learn', 'LSTM', 'NLP', 'DRL', 'Neural Networks'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300 font-bold">{s}</span>)}
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-4 underline decoration-violet-500/30 underline-offset-8"><span>📊</span> Data & Analytics</h3>
              <div className="flex flex-wrap gap-3">
                {['Neo4j', 'SQLite', 'Pandas', 'NumPy', 'Power BI', 'Excel', 'ETL/ELT'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300 font-bold">{s}</span>)}
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 hover:border-violet-500/30 transition-all shadow-xl">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-4 underline decoration-violet-500/30 underline-offset-8"><span>🛠️</span> Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {['Flask', 'Next.js', 'Vercel', 'Git / GitHub', 'Postman', 'Figma'].map(s => <span key={s} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300 font-bold">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-6 text-white uppercase tracking-tighter">Academic & Professional <span className="text-violet-500 italic">Journey</span></h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12 border-l border-white/10 pl-8">
              <h3 className="text-xl font-bold text-violet-400 uppercase tracking-widest">Experience</h3>
              {experience.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[40px] top-2 shadow-[0_0_10px_#8b5cf6]"></div>
                  <h4 className="font-bold text-xl text-white uppercase tracking-tight">{exp.role}</h4>
                  <p className="text-slate-400 font-medium mb-4 italic">{exp.company} | {exp.date}</p>
                  <ul className="space-y-3 text-sm text-slate-500 leading-relaxed">
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
                  <p className="text-xs text-slate-600 mb-2 uppercase font-bold tracking-widest">{edu.date} | {edu.location}</p>
                  {edu.grade && <p className="text-violet-300 font-bold text-lg">{edu.grade}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-5xl font-extrabold mb-16 tracking-tighter text-white">Featured <span className="text-violet-500">Projects</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <motion.div key={i} onClick={() => setSelectedProject(proj)} whileHover={{ y: -10 }} className="p-10 bg-[#0b0f1a] border border-white/5 rounded-[40px] cursor-pointer hover:border-violet-500/50 transition-all h-[440px] flex flex-col justify-between shadow-2xl group text-white">
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tech.map(t => <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">{t}</span>)}
                  </div>
                  <h4 className="text-3xl font-bold mb-4 leading-tight group-hover:text-violet-400 transition-colors uppercase">{proj.title}</h4>
                  <p className="text-slate-500 text-sm italic line-clamp-3">Click for Case Study and Documentation →</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-violet-500 self-end hover:bg-violet-500 hover:text-white transition-all">↗</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP SECTION (Restored Detail) */}
        <section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-6 text-white uppercase tracking-tighter">Leadership</h2>
          <div className="p-10 rounded-[40px] bg-[#0b0f1a] border border-white/5 shadow-2xl text-white">
            <h3 className="text-2xl font-bold text-violet-400 tracking-tight flex items-center gap-4"><span>📢</span> Class Representative</h3>
            <p className="text-slate-400 font-medium mb-6 italic">PMIST | 07/2025 – Present</p>
            <ul className="space-y-4 text-slate-500 text-sm leading-relaxed font-medium">
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Organized technical workshops, seminars, and university events.</li>
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Collaborated with the university technical team for systems improvement.</li>
              <li className="flex gap-3"><span className="text-violet-500">▹</span> Promoted department growth through strategic planning and coordination.</li>
            </ul>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-40 text-center relative border-t border-white/5">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-12 tracking-tighter text-white">Get In <span className="text-violet-500">Touch</span></h2>
          <div className="flex flex-wrap justify-center gap-8 px-6 text-white">
            <a href="mailto:rakesh28.dev@gmail.com" className="bg-[#0b0f1a] p-8 rounded-[32px] border border-white/5 hover:border-violet-500 transition-all flex items-center gap-4 text-white shadow-xl">
              <span className="p-4 bg-violet-500/10 rounded-2xl text-violet-500 text-2xl">📧</span> rakesh28.dev@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="bg-white/5 px-10 py-8 rounded-[32px] border border-white/5 hover:text-violet-400 transition-all font-bold text-lg text-white">LinkedIn Profile 🔗</a>
            <a href="https://github.com/Rakesh-developer28" target="_blank" className="bg-white/5 px-10 py-8 rounded-[32px] border border-white/5 hover:text-violet-400 transition-all font-bold text-lg text-white">GitHub Account 📁</a>
          </div>
        </section>

        <footer className="py-12 text-center text-slate-600 text-[10px] tracking-[0.5em] font-mono border-t border-gray-900 uppercase">
          © 2026 RAKESH G | Periyar Maniammai Institute of Science & Technology
        </footer>

        {/* MODAL SYSTEM */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0b0f1a] border border-white/10 p-12 rounded-[48px] max-w-2xl w-full text-white shadow-2xl">
                <h3 className="text-4xl font-bold text-violet-400 mb-6 tracking-tight uppercase">{selectedProject.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg mb-10 italic">{selectedProject.desc}</p>
                <div className="flex gap-4">
                  {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-5 bg-white text-black text-center font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all uppercase text-xs tracking-widest font-bold font-mono">View Source Code</a>}
                  <button onClick={() => setSelectedProject(null)} className="flex-1 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-widest font-bold font-mono">Close</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}