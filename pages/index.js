import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "Stock Market Prediction (LSTM)", 
      tech: ["Python", "LSTM", "TensorFlow"], 
      desc: "Designed and trained LSTM models for time series forecasting of stock prices using historical market data. Implemented data preprocessing, feature engineering, and model tuning to improve prediction accuracy. Created interactive visualizations to showcase trends and future price forecasts.", 
      link: "https://github.com/Rakesh-developer28/stock_prediction" 
    },
    { 
      title: "Fake Product Review Detection", 
      tech: ["NLP", "Python", "ML"], 
      desc: "Developed a machine learning model to classify product reviews as real or fake using review text, sentiment, rating, and verification status. Applied Natural Language Processing (NLP) techniques for text preprocessing and feature extraction." 
    },
    { 
      title: "Neural Pilot – Hill Climb AI", 
      tech: ["Python", "TensorFlow", "Deep RL"], 
      desc: "Developed a Deep Reinforcement Learning agent for a physics-based control problem using TensorFlow, Pygame, and Pymunk. Focused on reward shaping and policy optimization.", 
      link: "https://github.com/Rakesh-developer28/Neural-Pilot-Hill-Climb-AI" 
    },
    { 
      title: "Menu vs Delivery NLP Analysis", 
      tech: ["Python", "NLP", "Analytics"], 
      desc: "NLP analysis of food app reviews to compare menu quality vs delivery impact. Utilized sentiment analysis and keyword extraction to drive actionable business insights.", 
      link: "https://github.com/Rakesh-developer28/menu-delivery-nlp-analysis" 
    },
    { 
      title: "Finance Tracker", 
      tech: ["Flask", "SQLite", "Chart.js"], 
      desc: "Full-stack personal finance tracker built using Flask and SQLite with real-time data visualization using Chart.js.", 
      link: "https://github.com/Rakesh-developer28/finance_tracker" 
    }
  ];

  const education = [
    { degree: "Master of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "07/2025 – Present", location: "Thanjavur, India", status: "Current" },
    { degree: "Bachelor of Science in Data Science", school: "Periyar Maniammai Institute of Science & Technology", date: "08/2022 – 05/2025", location: "Thanjavur, India", grade: "CGPA: 7.51 / 10.0", status: "Completed" }
  ];

  const experience = [
    { role: "Data Analyst Intern", company: "Tech Vaseegrah", date: "07/2024 – 08/2024", points: ["Analyzed and visualized business data using Python, Excel, and SQL.", "Built a real-world billing and dashboard web application using Flask.", "Integrated user authentication, data visualization, and billing modules."] },
    { role: "AI & ML Trainee", company: "Rexroth Bosch Group", date: "Dec 2024 – Jan 2025", points: ["Intensive training on industrial AI applications.", "Worked with real-world sensor datasets to build predictive ML models.", "Applied deep learning concepts to industrial manufacturing use cases."] }
  ];

  const certifications = [
    "Data Analysis with Python (Pandas, NumPy, Matplotlib)",
    "Google Analytics for Advanced (Tracking & Segmentation)",
    "Hands-on Big Data Analysis & Data Science",
    "Technical Workshop: Neural Networks (Neurons to Networks)"
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "SQL & Databases (Neo4j)", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Deep Learning (LSTM)", level: 80 },
    { name: "Full-Stack (Flask/Next.js)", level: 85 }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* SIDEBAR NAV */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsNavOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed right-0 top-0 h-full w-72 bg-[#0b0f1a] border-l border-white/10 z-[110] p-8 shadow-2xl">
              <button onClick={() => setIsNavOpen(false)} className="absolute top-6 right-6 text-2xl text-white">✕</button>
              <div className="mt-12 flex flex-col gap-8 text-lg font-medium text-gray-300">
                {['About', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsNavOpen(false)} className="hover:text-violet-400 transition-colors uppercase tracking-widest text-sm">{item}</a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <header className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
        <h1 className="font-bold text-xl tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">RAKESH G</h1>
        <button onClick={() => setIsNavOpen(true)} className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-4 h-0.5 bg-white"></div>
        </button>
      </header>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-xs font-mono text-violet-400">
          $ Hello, World!
        </motion.div>
        <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter">
          Rakesh <span className="text-violet-500">G</span>
        </motion.h3>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Turning complex datasets into <span className="text-violet-400">intelligent systems</span> and actionable insights.
        </p>
        <p className="mt-4 text-gray-300 font-medium tracking-widest uppercase text-sm">M.Sc. Data Science Student</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-violet-500 hover:text-white transition-all">View Projects</a>
          <a href="resume.pdf" download className="px-10 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all">Download CV</a>
        </div>
      </section>

      {/* SUMMARY */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-violet-500 pl-4">Professional Summary</h2>
        <div className="grid lg:grid-cols-3 gap-12 text-gray-400 text-lg leading-relaxed">
          <div className="lg:col-span-2">
            <p className="mb-6">Skilled and detail-oriented <span className="text-white font-semibold">Data Science fresher</span> currently pursuing an M.Sc. at Periyar Maniammai Institute of Science & Technology. I specialize in building intelligent systems through <span className="text-violet-400">Deep Learning (LSTM)</span>, <span className="text-violet-400">NLP</span>, and <span className="text-violet-400">Reinforcement Learning</span>.</p>
            <p>I have a proven track record of transforming complex datasets into actionable insights, demonstrated through successful projects and my internship at <span className="text-white">Tech Vaseegrah</span>.</p>
          </div>
          <div className="bg-violet-500/5 border border-violet-500/20 p-8 rounded-3xl h-fit">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Core Focus</h4>
            <ul className="space-y-3 text-sm">
              <li>• Predictive Modeling (LSTM)</li>
              <li>• Natural Language Processing</li>
              <li>• Deep Reinforcement Learning</li>
              <li>• Full-Stack Data Apps (Flask)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION JOURNEY */}
      <section id="education" className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-violet-500 pl-4">Education Journey</h2>
          <div className="relative border-l-2 border-indigo-800 ml-4 space-y-16">
            {education.map((edu, i) => (
              <motion.div key={i} className="relative pl-10" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className={`absolute w-6 h-6 rounded-full -left-[13px] top-0 border-4 border-[#030712] ${edu.status === 'Current' ? 'bg-violet-500 animate-pulse shadow-[0_0_10px_#8b5cf6]' : 'bg-indigo-900'}`}></div>
                <div className="p-8 bg-black/40 border border-gray-800 rounded-3xl shadow-xl hover:border-violet-500 transition-colors group">
                  <span className="text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-violet-500/20 text-violet-400">{edu.status}</span>
                  <h3 className="text-2xl font-bold text-violet-400 mt-4 group-hover:text-violet-300">{edu.degree}</h3>
                  <p className="text-gray-300 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.date} | {edu.location}</p>
                  {edu.grade && <p className="mt-4 text-violet-300 font-bold text-lg">{edu.grade}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-violet-500 pl-4 text-white">Technical Proficiency</h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-medium"><span>{skill.name}</span><span className="text-violet-400">{skill.level}%</span></div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-violet-600 to-indigo-500" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="p-6 bg-black/40 border border-gray-800 rounded-3xl"><h4 className="text-violet-400 font-bold mb-3">Programming</h4><p className="text-sm text-gray-400">Python, SQL, JavaScript, HTML, CSS (Tailwind)</p></div>
             <div className="p-6 bg-black/40 border border-gray-800 rounded-3xl"><h4 className="text-violet-400 font-bold mb-3">Data & AI</h4><p className="text-sm text-gray-400">ML, NLP, LSTM, Neo4j, PowerBI, Excel</p></div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-violet-500 pl-4">Experience</h2>
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div key={i} className="relative border-l-2 border-violet-500 pl-8" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#8b5cf6]"></div>
                <h3 className="text-2xl font-bold text-violet-400 uppercase tracking-widest">{exp.role}</h3>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                <ul className="space-y-2 text-gray-400">{exp.points.map((p, j) => <li key={j}>• {p}</li>)}</ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-12 border-b border-gray-800 pb-4">Featured <span className="text-violet-500">Projects</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div key={i} onClick={() => setSelectedProject(proj)} whileHover={{ y: -10 }} className="p-8 bg-[#0b0f1a] border border-white/5 rounded-[40px] cursor-pointer hover:border-violet-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between h-[400px]">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-widest bg-violet-500/10 px-2 py-1 rounded text-violet-300 font-bold border border-violet-500/20">{t}</span>)}
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-violet-400 mb-4">{proj.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 italic">Click to view architecture & GitHub details →</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-violet-500 group-hover:text-white transition-all self-end">↗</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP & CERTIFICATIONS */}
      <section className="bg-gray-900/40 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-violet-500 pl-4">Certifications</h2>
            <ul className="space-y-4">
              {certifications.map((c, i) => <li key={i} className="text-gray-400 bg-black/40 p-4 border border-gray-800 rounded-2xl hover:border-violet-500 transition-colors">• {c}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-violet-500 pl-4">Volunteering</h2>
            <div className="bg-black/40 p-8 border border-gray-800 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold text-violet-400">Class Representative</h3>
              <p className="text-gray-500 text-sm mb-4 italic">Periyar Maniammai Institute of Science & Technology | 07/2025 – Present</p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>• Organized workshops, seminars, and technical events.</li>
                <li>• Collaborated with university technical team for systems improvement.</li>
                <li>• Promoted department growth through strategic coordination.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-12 tracking-tighter text-white relative z-10">Get In <span className="text-violet-500">Touch</span></h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 relative z-10">
          <a href="mailto:rakesh28.dev@gmail.com" className="group flex items-center gap-4 bg-[#0b0f1a] p-6 rounded-[32px] border border-white/5 hover:border-violet-500 transition-all w-full md:w-auto shadow-lg">
            <span className="p-3 bg-violet-500/10 rounded-full text-violet-500 text-xl">📧</span>
            <div className="text-left"><div className="text-[10px] uppercase font-bold text-slate-500">Email</div><div className="text-slate-200">rakesh28.dev@gmail.com</div></div>
          </a>
          <a href="https://www.linkedin.com/in/rakeshgdev" target="_blank" className="flex items-center gap-4 text-lg font-bold hover:text-violet-400 transition bg-white/5 px-8 py-6 rounded-[32px] border border-white/5">LinkedIn Profile 🔗</a>
          <a href="https://github.com/Rakesh-developer28" target="_blank" className="flex items-center gap-4 text-lg font-bold hover:text-violet-400 transition bg-white/5 px-8 py-6 rounded-[32px] border border-white/5">GitHub Account 📁</a>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 text-xs tracking-widest font-mono border-t border-gray-900 uppercase">
        © 2026 RAKESH G | Periyar Maniammai Institute of Science & Technology
      </footer>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-[#0b0f1a] border border-white/10 p-10 rounded-[48px] max-w-2xl w-full shadow-2xl text-white">
              <h3 className="text-4xl font-bold text-violet-400 mb-6">{selectedProject.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">{selectedProject.desc}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.link && <a href={selectedProject.link} target="_blank" className="flex-1 py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all">View Repository</a>}
                <button onClick={() => setSelectedProject(null)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">Close Details</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}